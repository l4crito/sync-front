import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../chat/services/user.service';
import { UserModel } from '../../models/user.model';
import { UserProvider } from '../../providers/user.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userProvider: UserProvider,
    private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      photo: ['https://i.pinimg.com/originals/b0/42/3a/b0423a16c86bfe01c059005ff002914f.jpg'
        , [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  join(): void {
    if (this.form.valid) {
      this.error = '';
      this.userService.join(this.form.value).subscribe((res: UserModel[]) => {
        this.userProvider.user = this.form.value;
        this.userService.setUsers(res);
        this.router.navigate(['/chat']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error.message;
      });
    }
  }


}
