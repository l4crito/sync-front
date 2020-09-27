import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/user.model';
import { UserProvider } from '../../../../providers/user.provider';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})
export class UserChatComponent implements OnInit {
  @Input() user: UserModel;
  constructor(public userProvider: UserProvider) { }

  ngOnInit(): void {
  }

}
