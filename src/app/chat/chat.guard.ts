import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { SocketService } from '../socket.service';

export const chatGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const socket: SocketService = inject(SocketService);

  if (socket.connected) {
    return true;
  } else {
    router.navigate(['/menu']).then(() => false);
  }

  return false;
  
};
