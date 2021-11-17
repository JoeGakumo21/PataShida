import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mybaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) {}
   login(data:any):Observable<any>{
     return this.http.post(`${mybaseUrl}`,data);
   }
   register(data:any):Observable<any>{
    return this.http.post(`${mybaseUrl}`,data);
  }

}
