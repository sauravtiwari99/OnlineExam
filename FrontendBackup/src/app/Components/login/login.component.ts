import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _loginService:LoginService) {
    this.loginForm=this._formBuilder.group({
      loginAs:['', [Validators.required]],
      email: ['', [Validators.required]],
			password: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.value['loginAs']);
    if(this.loginForm.value['loginAs']=="student"){
      console.log("Logged In as Student");
      let data={
        "email_id":this.loginForm.value['email'],
        "password":this.loginForm.value['password']
      }
      console.log(data);
      this._loginService.validateStudent(data).subscribe(
        result => {
          console.log(result[0]);
          sessionStorage.setItem('studentData', JSON.stringify(result));
          if(result[0]!=undefined){
            alert('Success');
          }
          else{
            alert('Unsuccessfull');
          }
          
        }, (error) => {
          console.log(error);
          alert("Unsuccessfull")
        });
    }
    else{
      console.log("Logged In as Admin");
      let data={
        "email_id":this.loginForm.value['email'],
        "password":this.loginForm.value['password']
      }
      this._loginService.validateAdmin(data).subscribe(
        result => {
          console.log(result[0]);
          localStorage.setItem('adminData', JSON.stringify(result));
          if(result[0]!=undefined){
            alert('Success');
          }
          else{
            alert('Unsuccessfull');
          }
          
        }, (error) => {
          console.log(error);
          alert("Unsuccessfull")
        });
    }
  } 
}
