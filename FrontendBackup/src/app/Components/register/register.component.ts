import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private _registerService:LoginService, private _formBuilder:FormBuilder, private _router:Router) { 
    this.registerForm=this._formBuilder.group({
      full_name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email_id: ['', [Validators.required]], 
      password: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      qualification: ['', [Validators.required]], 
      yoc: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  register(){
    this._registerService.registerStudent(this.registerForm.value).subscribe(
      result => {
        console.log(result);
      });
  }
}
