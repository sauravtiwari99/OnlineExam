import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailVerificationForm: FormGroup;
  userEmail:string='';
  passwordUpdateForm:FormGroup;
  otp:string='';
  passwordUpdateCheck:boolean=false;
  emailCheck:boolean=false;
  otpCheck:string='';
  otpConfirm:boolean=false;
  constructor(private _fpService:LoginService,private _formBuilder:FormBuilder) { 
    this.emailVerificationForm=this._formBuilder.group({
      email_id: ['', [Validators.required]],
    })
    this.passwordUpdateForm=this._formBuilder.group({
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  sendOtp(){
    this._fpService.sendEmailVerification(this.emailVerificationForm.value).subscribe(
      result => {
        this.userEmail=this.emailVerificationForm.value;
        this.otp=result.toString();
        console.log(this.otp.length);

        if(this.otp.length==4){
          console.log("OTP Sent Sucessfully "+this.otp);
          this.emailCheck=true;
        }
        else{
          console.log(result)
        }
      });
  }
  checkOtp(){
    if(this.otp==this.otpCheck){
      this.otpConfirm=true;
    }
  }
  updatePassword(){
    let data={
      "email_id":this.userEmail['email_id'],
      "password":this.passwordUpdateForm.value['password']
    }
    console.log(data);
    this._fpService.confirmPasswordUpdation(data).subscribe(
      result=>{
        console.log(result);
      });    
  }
}
