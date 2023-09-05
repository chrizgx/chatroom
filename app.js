const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ` + PORT)
});

const io = socketIo(server, {
    cors: {
        origin: '*'
    }
});

let chatrooms = {
    'chatname': 'chatDictionary'
};
let chatroom = {
    sockets: [],
    active: [],
    messages: [],
}

let message = {
    username: 'username',
    connectionSignature: 'XYZ',
    message: ''
}

const generateSignature = (len) => {
    let signature = '';
    let chars = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    for (let i = 0; i < len; i++) {
        signature += chars[Math.round(Math.random() * (chars.length-1))];
    }

    return signature
}

app.use(cors({
    origin: '*'
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/chat/index.html');
})
app.use('/public', express.static(__dirname + '/dist/chat/'));

io.on('connection', (socket) => {

    console.log('A user connected');

    socket.on('join', (username, chatroom) => {

        if (username == null || chatroom == null || socket.chatroom != null) {
            socket.emit('leave');
            return;
        }

        console.log(username, chatroom + ' JOINED');
        socket.username = username;
        socket.CHATROOM = chatroom;
        socket.signature = generateSignature(8);

        if (chatrooms[chatroom] == null) {
            chatrooms[chatroom] = {
                sockets: [],
                active: [],
                messages: []
            }
        }

        socket.chatroom = chatrooms[chatroom];
        socket.chatroom.sockets.push(socket);
        socket.chatroom.active.push(username);
        // Not finished: I should add self to sockets and active

        socket.chatroom.sockets.forEach(element => {
            element.emit('participants', socket.chatroom.active);
        })

        socket.emit('signature', socket.signature);
    });

    socket.on('message', (message) => {
        finalMessage = {
            username: socket.username,
            connectionSignature: socket.signature,
            message: message
        }
        
        socket.chatroom.sockets.forEach(element => {
            element.emit('message', finalMessage)
        });
        // io.emit('message', message);
    });

    socket.on('leave', () => {
        if (socket.chatroom == null) return;

        let index;
        index = socket.chatroom.sockets.indexOf(socket);
        if (index == -1) return;
        
        socket.chatroom.sockets.splice(index, 1);
        index = socket.chatroom.active.indexOf(socket.username);
        socket.chatroom.active.splice(index, 1);

        socket.chatroom.sockets.forEach(element => {
            element.emit('participants', socket.chatroom.active);
        })

        socket.chatroom = null;

        console.log(socket.username + ' ' + socket);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');

        if (socket.username == null || socket.chatroom == null) {
            return;
        }

        let index;
        index = socket.chatroom.sockets.indexOf(socket);
        socket.chatroom.sockets.splice(index, 1);
        index = socket.chatroom.active.indexOf(socket.username);
        socket.chatroom.active.splice(index, 1);

        socket.chatroom.sockets.forEach(element => {
            element.emit('participants', socket.chatroom.active);
        })

        socket.chatroom = null;

        console.log(socket.username + ' ' + socket);

    })
})