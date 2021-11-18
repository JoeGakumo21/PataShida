
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string|any;
  email:string|any;
  first_name:string|any;
  last_name:string|any;
  password:string|any;
  user:any;
  constructor(private api:ApiService) {

  }
  ngOnInit() {
    this.registerUser();
  }
  registerUser = () =>{
    return this.api.registerUser(this.username,this.email,this.first_name,this.last_name,this.password).subscribe(data => {
      this.user=data;
      console.log(data)
      console.log(this.username)
      console.log(this.email)
      console.log(this.first_name)
      console.log(this.last_name)
      console.log(this.password)
      alert("New user created successfully"+ " " + this.username);
    },
    error => {
      console.log(error);
      console.log(this.username)
      console.log(this.email)
      console.log(this.first_name)
      console.log(this.last_name)
      console.log(this.password)

    });
  }
}
