import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInterface } from '../models/user-interface';
import { AuthenticationService } from '../service/authService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(value: UserInterface) {
    let loginValue = {
      email: value.email + '@admin.com',
      password: value.password
    };
    this.authService.loginUser(loginValue);
  }
}
