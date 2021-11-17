import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // joe edittion
  formGroup!:FormGroup
  // ends
  username:string|any;
  password:string|any;
  loginData:any
  accessToken:any;
  foundUsers:any;
  constructor(private api:ApiService) { }
  ngOnInit(){
    this.loginUser();
    this.getUsers();
  }
  loginUser = () =>{
    return this.api.loginUser(this.username,this.password).subscribe(data => {
      this.loginData=data
      console.log(data)
      console.log(this.username)
      console.log(this.password)
    },
    error => {
      console.log(error);
      console.log(this.username)
      console.log(this.password)
    });
  }
  getUsers = () => {
    return this.api.getAllUsers(this.accessToken).subscribe(data => {
      this.foundUsers=data
      console.log(data)
    },
    err => {
      console.log(err)
    });
  }
  // initialize the form
  initForm(){
    this.formGroup =new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
}


