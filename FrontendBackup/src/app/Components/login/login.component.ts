import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitCheck:boolean=false;
  userData;
  ls: any;

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _loginService:LoginService,private _toastr:ToastrService) {
    this.loginForm=this._formBuilder.group({
      loginAs:['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
			password: ['', [Validators.required,Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
  }
  get formAccess(){return this.loginForm.controls};
  //This method is used to check whether the User trying to Login is Authorized or not.
  login(){
    console.log(this.loginForm.value['loginAs']);
    this.ls=this.loginForm.value['loginAs'];
    this.submitCheck=true;
    if(this.loginForm.invalid){
      this._toastr.error('Failed', 'Invalid Credentials or Missing Inputs');
      return;
    }
    else if(this.loginForm.value['loginAs']=="student")
    {
      let data={
        "email_id":this.loginForm.value['email'],
        "password":this.loginForm.value['password']
      }
      console.log(data);
      this._loginService.validateStudent(data).subscribe(
        result => {
          // console.log(result);
          

          if(result[0]!=undefined){
            this.userData=result;
            console.log(this.userData[0].user_id);
            sessionStorage.setItem('studentData', this.userData);
            sessionStorage.setItem('studentId',this.userData[0].user_id)
            sessionStorage.setItem('studentName',this.userData[0].full_name)
            this._toastr.success('Success', 'Logged In Successfully');
            this._router.navigate(['studentDashboard']);
          }
          else{
            this._toastr.error('Failed', 'Invalid Credentials');
          }
          
        }, (error) => {
          console.log(error);
          this._toastr.error('Failed', 'Invalid Credentials');
        });
    }
    else if(this.loginForm.value['loginAs']=="admin"){
      let data={ 
        "email_id":this.loginForm.value['email'],
        "password":this.loginForm.value['password']
      }
      this._loginService.validateAdmin(data).subscribe(
        result => {
          console.log(result[0]);
          sessionStorage.setItem('adminData', JSON.stringify(result));
          if(result[0]!=undefined){
            this._toastr.success('Success', 'Logged In Successfully');
            this._router.navigate(['adminDashboard']);
          }
          else{
            this._toastr.error('Failed', 'Invalid Credentials');
          }          
        }, (error) => {
          console.log(error);
          this._toastr.error('Failed', 'Invalid Credentials');
        });
    }
    else{
      console.log(this.ls);
      this._toastr.error('Failed', 'Role Not Selected')
    }
  } 
}
