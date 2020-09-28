import { Component, OnInit } from '@angular/core';
import { UserProvider } from '../../../../providers/user.provider';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit {

  constructor(public userProvider: UserProvider, public userService: UserService) { }

  ngOnInit(): void {
  }

}
