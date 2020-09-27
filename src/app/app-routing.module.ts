import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatGuard } from './guards/chat.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] },
  { path: 'chat', loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule), canActivate: [ChatGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
