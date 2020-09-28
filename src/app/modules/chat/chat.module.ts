import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatHomeComponent } from './chat-home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MessageComponent } from './components/message/message.component';
import { SendComponent } from './components/send/send.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { MessageService } from './services/message.service';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { MatRippleModule } from '@angular/material/core';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    ChatHomeComponent,
    SendComponent,
    ChatComponent,
    MessageComponent,
    UserChatComponent,
    ChatHeaderComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule
  ],
  providers: [MessageService]
})
export class ChatModule { }
