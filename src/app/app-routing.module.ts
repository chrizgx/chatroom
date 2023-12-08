import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { ChatComponent } from './chat/chat.component';

import { joinGuard } from './join/join.guard';
import { chatGuard } from './chat/chat.guard';

const routes: Routes = [
  { path: '', component: JoinComponent },
  { path: 'menu', component: JoinComponent, canActivate: [joinGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [chatGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
