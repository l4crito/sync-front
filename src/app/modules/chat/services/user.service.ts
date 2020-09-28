import { Injectable } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserProvider } from '../../../providers/user.provider';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router, private provider: UserProvider) { }

  setUsers(users: UserModel[]): void {
    this.provider.users = users.filter(usr => usr.name !== this.provider.user.name);
    if (this.provider.users.length) {
      this.provider.currentChat = this.provider.users[0];
    }
  }

  join(user: UserModel): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/user/join', user);
  }
  getCurrentUSers(): void {
    this.httpClient.get(environment.apiUrl + '/user/current').subscribe((res: UserModel[]) => {
      this.setUsers(res);
    });
  }

  exit(): void {
    this.httpClient.post(environment.apiUrl + '/user/exit', JSON.parse(localStorage.getItem('user')))
      .subscribe(() => {
        this.provider.user = null;
        this.provider.users = [];
        this.router.navigate(['']);
      });
  }
}
