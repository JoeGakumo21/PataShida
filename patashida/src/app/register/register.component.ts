import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // joe edittion
  formGroup!:FormGroup
  // ends
  username:string|any;
  email:string|any;
  password1:string|any;
  password2:string|any;
  user:any;
  constructor(private api:ApiService,  private AuthService:AuthServiceService) {

  }
  ngOnInit() {
    // joe
    this.initForm();
    // end
    this.registerUser();
  }
  registerUser = () =>{
    return this.api.registerUser(this.username,this.email,this.password1,this.password2).subscribe(data => {
      this.user=data;
      console.log(data)
      console.log(this.username)
      console.log(this.email)
      console.log(this.password1)
      console.log(this.password2)

    },
    error => {
      console.log(error);
      console.log(this.username)
      console.log(this.email)
      console.log(this.password1)
      console.log(this.password2)

    });
  }
  // initialize the form
  initForm(){
    this.formGroup =new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password1:new FormControl('',[Validators.required]),
      password2:new FormControl('',[Validators.required])
    })
  }
  // end
  // loginprocess method
  registerProcess(){
    if(this.formGroup.valid){
      this.AuthService.register(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }else{
          alert(result.message);
        }
      })
    }
  }
  // end
}

