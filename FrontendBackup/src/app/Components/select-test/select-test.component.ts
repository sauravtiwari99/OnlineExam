import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.component.html',
  styleUrls: ['./select-test.component.css']
})
export class SelectTestComponent implements OnInit {

  javaSelected:boolean=false;
  cSharpSelected:boolean=false;
  cPlusSelected:boolean=false;
  pythonSelected:boolean=false;
  sqlSelected:boolean=false;
  phpSelected:boolean=false;
  constructor(private _router:Router,private _toastr:ToastrService) { }
  ngOnInit(): void {
  }
  // routeJava(){
  //   //this.router.navigate(['/testL1',{test:'Java',si:true}])
  //   window.open("http://localhost:4200/testL1;test=Java;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  // }
  // routeCsharp(){
  //   //this.router.navigate(['/testL1',{test:'Csharp',si:true}])
  //   window.open("http://localhost:4200/testL1;test=Csharp;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  // }
  // routeCplus(){
  //   // this.router.navigate(['/testL1',{test:'Cplus',si:true}])
  //   window.open("http://localhost:4200/testL1;test=Cplus;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  // }
  // routePython(){
  //   // this.router.navigate(['/testL1',{test:'Python',si:true}])
  //   window.open("http://localhost:4200/testL1;test=Python;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  // }
  // routeSql(){
  //   // this.router.navigate(['/testL1',{test:'Sql',si:true}])
  //   window.open("http://localhost:4200/testL1;test=Sql;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  // }
  // routePhp(){
  //   // this.router.navigate(['/testL1',{test:'Php',si:true}])
  //   window.open("http://localhost:4200/testL1;test=Php;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
  // }
  selectedTestJava(){
    this.javaSelected=true;
    this.cPlusSelected=false;
    this.cSharpSelected=false;
    this.phpSelected=false;
    this.pythonSelected=false;
    this.sqlSelected=false;
  }
  selectedTestcSharp(){
    this.cSharpSelected=true;
    this.phpSelected=false;
    this.pythonSelected=false;
    this.sqlSelected=false;
    this.javaSelected=false;
    this.cPlusSelected=false;
  }
  selectedTestcPlus(){
    this.javaSelected=false;
    this.cPlusSelected=true;
    this.cSharpSelected=false;
    this.phpSelected=false;
    this.pythonSelected=false;
    this.sqlSelected=false;
  }
  selectedTestPython(){
    this.pythonSelected=true;
    this.javaSelected=false;
    this.cPlusSelected=false;
    this.cSharpSelected=false;
    this.phpSelected=false;
    this.sqlSelected=false;
  }
  selectedTestsSql(){
    this.sqlSelected=true;
    this.pythonSelected=false;
    this.javaSelected=false;
    this.cPlusSelected=false;
    this.cSharpSelected=false;
    this.phpSelected=false;
  }
  selectedTestsPhp(){
    this.sqlSelected=true;
    this.pythonSelected=false;
    this.javaSelected=false;
    this.cPlusSelected=false;
    this.cSharpSelected=false;
    this.phpSelected=false;
  }
  routeTest(){
    if(this.javaSelected==true){
      window.open("http://localhost:4200/testL1;test=Java;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
    }
    else if(this.cSharpSelected==true){
      window.open("http://localhost:4200/testL1;test=Csharp;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
    }
    else if(this.cPlusSelected==true){
      window.open("http://localhost:4200/testL1;test=Cplus;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
    }
    else if(this.pythonSelected==true){
      window.open("http://localhost:4200/testL1;test=Python;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
    }
    else if(this.sqlSelected==true){
      window.open("http://localhost:4200/testL1;test=Sql;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
    }
    else if(this.phpSelected==true){
      window.open("http://localhost:4200/testL1;test=Php;si=true","window", 'toolbar=0,location=0,scrollbars=1,statusbar=1,menubar=0,resizable=1,width=800,height=800,left=100,top=50');
    }
  }
  gotoDashboard(){
    this._router.navigate(["studentDashboard"]);
  }
  gotoAboutUs(){
    this._router.navigate(["aboutUs"])
  }
   logout(){
    this._router.navigate([""]);
    sessionStorage.clear();
    this._toastr.success('Success', 'Logged Out Successfully');
  }
}
