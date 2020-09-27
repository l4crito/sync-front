import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../../../../models/message.model';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';
import { UserProvider } from '../../../../providers/user.provider';
import { UserModel } from '../../../../models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(
    public messageService: MessageService,
    private userService: UserService,
    public userProvider: UserProvider,
  ) { }
  ngOnInit(): void {
    this.userService.getCurrentUSers();
  }
  sendMessage(msj: string): void {
    if (msj) {
      const message: MessageModel = { from: this.userProvider.user.name, to: this.userProvider.currentChat?.name, message: msj };
      message.own = true;
      message.date = new Date();
      this.messageService.messages.unshift(message);
      this.messageService.sendMessage(message);
    }
  }

  setCurrentChat(user: UserModel): void {
    if (user.name === this.userProvider.currentChat?.name) {
      return;
    }
    this.userProvider.currentChat = user;
    this.messageService.messages = [];
  }

}
