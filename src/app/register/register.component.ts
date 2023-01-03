import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onLoader = false;
  title = "Register";

  user = {
    username: "",
    useremail: "",
    password: "",
  }
  submit = false;

  constructor(
    private router: Router,
    private auth: UserauthService,
  ) { }

  ngOnInit(): void {
    if(this.auth.checkAuth()){
      this.router.navigate(['/dashboard']);
    }
  }

  onUserRegister(){
    console.log("register data: ", this.user);
    this.onLoader = true;
    this.auth.register(this.user)
    .subscribe({
      next: (data) => {
        console.log('res: ', data);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('error res: ', error);
      }
    })
    .add(() => {
      console.log('register completed...');
      this.onLoader = false;
    })
  }

}
