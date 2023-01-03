import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLoader = false;
  title = "Login";

  user = {
    useremail: "",
    password: "",
  }
  submit = false;

  constructor(
    private router: Router,
    private auth: UserauthService
  ) { }

  ngOnInit(): void {
    if(this.auth.checkAuth()){
      this.router.navigate(['/dashboard']);
    }
  }

  onUserLogin(){
    console.log('login: ', this.user);
    this.onLoader = true;
    this.auth.login(this.user)
    .subscribe({
      next: (data) => {
        console.log('res: ', data);
        this.auth.setToken(data.idToken);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log('res: ', error);
      }
    })
    .add(() => {
      console.log("login completed...");
      this.onLoader = false;
    })
  }

}
