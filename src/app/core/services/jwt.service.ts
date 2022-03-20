import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export const USER_TOKEN = 'user_token'

@Injectable({
  providedIn: 'root'
})

export class JwtService {



  constructor(private http: HttpClient, private router: Router) { }

  login(data:any){
    return this.http.post(`${environment.baseURL}/login`,data)
  }

  home(){
    return this.http.get(`${environment.baseURL}/`)
  }
  setToken(token:any){
    localStorage.setItem(USER_TOKEN, token)
  }

  getToken(){
    return localStorage.getItem(USER_TOKEN);
  }

  isAuthenticated(){
    return this.getToken ? true : false
  }

  // isLogged() {
  //   return this.getToken ? true : false
  // }

  logout(){
    localStorage.removeItem(USER_TOKEN);
    this.router.navigate(['/login']);
  }

}
