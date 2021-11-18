import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { mybaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  mybaseUrl=`https://farmauth7.herokuapp.com/`;
  constructor(private http:HttpClient) {}
   login(data:any):Observable<any>{
    return this.http.post(this.mybaseUrl + 'app/api/users/login/', data);
   }
   register(username:any, email:any, first_name:any,last_name:any,password:any):Observable<any>{
    const data={username,email,first_name,last_name,password}
    return this.http.post(this.mybaseUrl + 'app/api/users/create/', data);
  }

}
