import { Injectable, ɵConsole } from '@angular/core';
import { MessageModel } from '../../../models/message.model';
import { UserProvider } from '../../../providers/user.provider';
// Declare SockJS and Stomp
declare var SockJS: any;
declare var Stomp: any;
@Injectable()
export class MessageService {
  constructor(private userProvider: UserProvider) {
    this.initializeWebSocketConnection();
  }

  public stompClient: any;
  public messages: MessageModel[] = [];
  initializeWebSocketConnection(): void {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe('/message', (message: any) => {
        console.log(message)
        if (message.body) {
          const msg: MessageModel = JSON.parse(message.body);
          if (this.userProvider.user.name === msg.to) {
            msg.own = false;
            that.messages.unshift(msg);
          }
        }
      });
    });

  }

  sendMessage(message: MessageModel): void {
    this.stompClient.send('/app/send/message', {}, JSON.stringify(message));
  }

}
