
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username:string|any;
  password:string|any;
  loginData:any

  constructor(private api:ApiService, private router:Router) {
  }
  ngOnInit(){

    this.loginUser();

  }
  loginUser = () =>{
    return this.api.loginUser(this.username,this.password).subscribe(data => {
      this.loginData=data
      console.log(data)
      console.log(this.username)
      console.log(this.password)
      // alert("Logged in successfully, welcome")
      this.router.navigate(['/prediction'])

    },
    error => {
      console.log(error);
      console.log(this.username)
      console.log(this.password)
      // alert("No such details, not authorized")
    });
  }
}


