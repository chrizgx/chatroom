import { Injectable, inject, isDevMode } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  router: Router = inject(Router);
  connected: boolean = false;

  self: any = '';
  signature: string = '';
  chatroom: string = '';
  messages: any = [];
  participants: any = [];

  constructor() {
    if (isDevMode()) {
      this.socket = io('192.168.2.15:3001/');
    } else {
      this.socket = io('/');
    }
  }

  connect(username: string, chatroom: string) {
    if (this.connected) {
      console.log('ALREADY CONNECTED');
      this.leaveChatroom();
      return;
    }

    this.socket.emit('join', username, chatroom);
    this.connected = true;
    this.self = username;
    this.chatroom = chatroom;
  }

  sendMessage(message: string) {
    if ( !this.connected ) {console.log('NOT CONNECTED TO SEND MESSAGE'); return;}

    this.socket.emit('message', message);
  }

  leaveChatroom() {
    this.socket.emit('leave');
    this.connected = false;
    this.messages = [];
    this.self = '';
    this.signature = '';
    this.chatroom = '';
    setTimeout(() => {
      this.router.navigate(['/menu']);
    }, 400);
  }

  listenForMessages() {
    this.socket.on('message', (message: any) => {
      console.log(message);
      this.messages.unshift(message);
      $("html, body").animate({ scrollTop: $(document).height() }, 400);
    });
    this.socket.on('participants', (message: any) => {
      this.participants = message;
    });
    this.socket.on('signature', (message: string) => {
      this.signature = message;
    })
    this.socket.on('leave', () => {
      this.leaveChatroom();
    })
  }

  // getMessage(): Observable<string> {
  //   return new Observable<string>(observer => {
  //     this.socket.on('message', (message: any) => {
  //       observer.next(message);
  //       console.log(message);
  //     })
  //   })
  // }
}
