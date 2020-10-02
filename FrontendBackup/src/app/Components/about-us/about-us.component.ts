import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private _router:Router, private _toastr:ToastrService) { }

  ngOnInit(): void {
  }
  goto(){
    window.history.back();
  }
  logout(){
    this._router.navigate([""]);
    sessionStorage.clear();
    this._toastr.success('Success', 'Logged Out Successfully');
  }
}
