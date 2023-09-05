import { Injectable, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  router: Router = inject(Router);
  socket: SocketService = inject(SocketService);

  username: string = '';
  chatroom: string = '';

  activeListener: boolean = false;

  join() {
    if (this.username == '') return;
    if (this.chatroom == '') return;

    console.log(this.username + ' ' + this.chatroom);

    this.socket.connect(this.username, this.chatroom);
    !this.activeListener ? this.socket.listenForMessages() : null;
    this.activeListener = true;

    setTimeout(() => {
      this.router.navigate(['/chat']);
    }, 400);
  }

  constructor() { }
}
