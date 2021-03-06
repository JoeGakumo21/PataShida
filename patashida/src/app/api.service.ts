import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static isRegisterUser: any;
  static isregisterUser() {
    throw new Error('Method not implemented.');
  }
  baseurl='https://farmauth7.herokuapp.com/';
  Token= "9566d27e6501fafceacfadec896fa9d7cd75a79b"
  httpHeaders = new HttpHeaders({'Content-Type' : "application/json"});
  constructor(private http:HttpClient, private router:Router) { }
  registerUser(username:any,email:any,first_name:any ,last_name:any,password:any):Observable<any>{
    const body = {username,email,first_name,last_name,password}
    return this.http.post(this.baseurl + 'app/api/users/create/', body);
  }
  loginUser(username:any,password:any,):Observable<any>{
    const body = {username,password}
    return this.http.post(this.baseurl + '​/app/api/auth/login/', body);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutuser(){
    localStorage.removeItem('token')
    this.router.navigate((['/home']))
  }
  getAllUsers(accessToken:any):Observable<any>{
    return this.http.get(this.baseurl + 'api/users/',
    {
      headers:{
        Authorization:'Bearer ' + accessToken,
      },
    });
  }


}
