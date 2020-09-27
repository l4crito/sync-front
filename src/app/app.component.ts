import { Component } from '@angular/core';
import { MessageService } from './services/message.service';
import { MessageModel } from './models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = '';
  constructor(public messageService: MessageService) { }
  sendMessage(): void {
    if (this.message) {
      const message: MessageModel = { from: this.messageService.from, to: this.messageService.to, message: this.message };
      this.message = '';
      this.messageService.sendMessage(message);
    }
  }
}
