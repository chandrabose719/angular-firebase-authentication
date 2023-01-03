import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  brandName= "USER AUTH";

  links = [
    { name: "HOME", path: "/" },
    { name: "REGISTER", path: "/register" },
    { name: "LOGIN", path: "/login" },
  ]

  constructor(
    private router: Router,
    public auth: UserauthService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.auth.checkAuth();
    this.router.navigate(['/']);
  }

}
