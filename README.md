# Real-Time Chatroom Application

Welcome to this exciting project, a real-time chatroom application built with Angular, Express.js and Socket.IO. This project showcases my ability to create interactive, real-time applications.

| Join | Chris' Screen | George's Screen |
|---------|---------|---------|
| <img src="https://github.com/chrizgx/chatroom/assets/102369753/14a01408-4770-46da-a707-a0d94241f3db" > | <img src="https://github.com/chrizgx/chatroom/assets/102369753/0b22c7ad-741a-4f51-a806-a17d3397325c" > | <img src="https://github.com/chrizgx/chatroom/assets/102369753/101c0c62-fbce-423d-a40f-94db91ee4eb7" > |

<!-- ![Screen Shot 2023-12-08 at 17 47 17](https://github.com/chrizgx/chatroom/assets/102369753/101c0c62-fbce-423d-a40f-94db91ee4eb7)
![Screen Shot 2023-12-08 at 17 46 57](https://github.com/chrizgx/chatroom/assets/102369753/0b22c7ad-741a-4f51-a806-a17d3397325c)
![Screen Shot 2023-12-08 at 17 41 50](https://github.com/chrizgx/chatroom/assets/102369753/14a01408-4770-46da-a707-a0d94241f3db) -->

### Key Features

1. Real-Time Interaction: Leveraging the power of Socket.IO, this application provides real-time, bidirectional communication between users.
2. Two-Page Layout: The application consists of a 'Join' page where users enter their username and chatroom ID, and a 'Chat' page where the conversation takes place
3. User Interface: The chat page displays the chatroom ID and the number of active users on the top bar. The bottom bar is used for composing and sending messages. The main area between the bars is where the conversation unfolds.
4. Fraud Prevention: To ensure user authenticity, a unique 4-character hashtag is appended to each user's username. This mechanism prevents identity fraud by distinguishing users with the same username.

### Tech Stack

This application is built with:

- Angular: A powerful framework for building user interfaces.
- Express.js: A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.
- Socket.IO: A JavaScript library for real-time web applications. It enables real-time, bidirectional communication between web clients and servers.

### Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository
2. Install the necessary dependencies
3. Start the application

#### Prerequisites
This project requires Node.js, npm, and Angular CLI installed on your machine

#### Installation
1. Clone the repo `git clone https://github.com/your_username_/Project-Name.git`
2. Install NPM packages: `npm install`
3. Build the app `ng build`
4. Start the server `node app.js`
