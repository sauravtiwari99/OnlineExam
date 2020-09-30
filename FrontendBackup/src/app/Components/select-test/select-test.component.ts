import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.css']
})
export class SelectTestComponent implements OnInit {

  constructor(private _router:Router,private _toastr:ToastrService) { }
  ngOnInit(): void {
  }
  routeJava(){
    //this.router.navigate(['/testL1',{test:'Java',si:true}])
    window.open("http://localhost:4200/testL1;test=Java;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  }
  routeCsharp(){
    //this.router.navigate(['/testL1',{test:'Csharp',si:true}])
    window.open("http://localhost:4200/testL1;test=Csharp;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  }
  routeCplus(){
    // this.router.navigate(['/testL1',{test:'Cplus',si:true}])
    window.open("http://localhost:4200/testL1;test=Cplus;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  }
  routePython(){
    // this.router.navigate(['/testL1',{test:'Python',si:true}])
    window.open("http://localhost:4200/testL1;test=Python;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  }
  routeSql(){
    // this.router.navigate(['/testL1',{test:'Sql',si:true}])
    window.open("http://localhost:4200/testL1;test=Sql;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  }
  routePhp(){
    // this.router.navigate(['/testL1',{test:'Php',si:true}])
    window.open("http://localhost:4200/testL1;test=Php;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  }
   logout(){
    this._router.navigate([""]);
    sessionStorage.clear();
    this._toastr.success('Success', 'Logged Out Successfully');
  }
}
