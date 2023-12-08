import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { SocketService } from '../socket.service';
import { Socket } from 'socket.io-client';

export const joinGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const socket: SocketService = inject(SocketService);

  // If user is connected to a socket, redirect to chat
  if (socket.connected) {
    return router.navigate(['/chat']).then(() => false);
  } else {
    return true;
  }
  
};
