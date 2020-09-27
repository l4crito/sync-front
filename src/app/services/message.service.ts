import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable, ɵConsole } from '@angular/core';
import { MessageModel } from '../models/message.model';
// Declare SockJS and Stomp
declare var SockJS: any;
declare var Stomp: any;
@Injectable()
export class MessageService {
  constructor() {
    this.initializeWebSocketConnection();
  }
  from = '0';
  to = '122';

  public stompClient: any;
  public msg = [];
  initializeWebSocketConnection(): void {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/message', (message: any) => {
        if (message.body) {
          const msg: MessageModel = JSON.parse(message.body);
          if (this.from === msg.to) {
            that.msg.push(msg.message);
          }
        }
      });
    });

  }

  sendMessage(message: MessageModel): void {
    this.stompClient.send('/app/send/message', {}, JSON.stringify(message));
  }

}
