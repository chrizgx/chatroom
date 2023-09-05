import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: JoinComponent },
  { path: 'menu', component: JoinComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
