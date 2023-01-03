import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  webAPI = "AIzaSyBufWacNzH1ehde0ELJBiy47pmZxziHBVs";
  signUp = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  signIn = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

  constructor(
    private http: HttpClient,
  ) { }

  setToken(token: string){
    sessionStorage.setItem('token', token);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  checkAuth(){
    let token = sessionStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  } 

  register(user: { username: string, useremail: string, password: string }){
    return this.http.post(
      this.signUp+this.webAPI,
      { 
        displayName: user.username, 
        email: user.useremail, 
        password: user.password 
      }
    )
  }

  login(user: { useremail: string, password: string }){
    return this.http.post<{idToken: string}>(
      this.signIn+this.webAPI,
      { 
        email: user.useremail, 
        password: user.password 
      }
    )
  }

  logout(){
    sessionStorage.removeItem('token');
  }

}
