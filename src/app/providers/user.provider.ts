import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {
  user$ = new BehaviorSubject<UserModel>(null);
  currentChat$ = new BehaviorSubject<UserModel>(null);
  users$ = new BehaviorSubject<UserModel[]>([]);
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
  }
  get user(): UserModel {
    return this.user$.value;
  }
  set user(us: UserModel) {
    this.user$.next(us);
    if (us) {
      localStorage.setItem('user', JSON.stringify(us));
    } else {
      localStorage.removeItem('user');

    }
  }
  get currentChat(): UserModel {
    return this.currentChat$.value;
  }
  set currentChat(us: UserModel) {
    this.currentChat$.next(us);
  }
  get users(): UserModel[] {
    return this.users$.value;
  }
  set users(us: UserModel[]) {
    this.users$.next(us);
  }

}
