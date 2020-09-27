import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(public messageService: MessageService) { }
  ngOnInit(): void {
  }
  sendMessage(msj: string): void {
    if (msj) {
      const message: MessageModel = { from: this.messageService.from, to: this.messageService.to, message: msj };
      message.own = true;
      message.date = new Date();
      this.messageService.messages.push(message);
      this.messageService.sendMessage(message);
    }
  }

}
