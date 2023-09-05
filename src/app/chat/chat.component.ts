import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../socket.service';
import { FormsModule } from '@angular/forms';


interface Message {
  username: string;
  connectionSignature: string;
  message: string;
};

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  newMessage: string = '';
  // messages: Message[] = [];

  constructor() {}

  socketService: SocketService = inject(SocketService);

  sendMessage() {
    if (this.newMessage) {
      this.socketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }

  leaveChatroom() {
    this.socketService.leaveChatroom();
  }

}
