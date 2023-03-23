import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  constructor(private http: HttpClient) { }
  isLoggedIn(){
   return localStorage.getItem('userInfo')
  }

  login(username: string, password: string) {
    return this.http.post(`${environment.loginApi}/account/login`, {
      email: username,
      password: password
    })
  }
}
