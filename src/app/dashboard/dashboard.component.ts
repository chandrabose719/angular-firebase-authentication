import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: UserauthService,
  ) { }

  ngOnInit(): void {
    if(!this.auth.checkAuth()){
      this.router.navigate(['/']);
    }
  }

  logout(){
    this.auth.logout();
    this.auth.checkAuth();
    this.router.navigate(['/']);
  }

}
