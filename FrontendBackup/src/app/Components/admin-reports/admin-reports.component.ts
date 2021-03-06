import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminReportService } from 'src/app/Services/admin-report.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {
  data;
  allUserData;
  selectedUser;
  selectedUserCheck:boolean=false;
  userDataReceived:boolean=false;
  searchForm:FormGroup;
  allCityList;
  allStateList;
  subjectList=['Java','SQL','PHP','C/C++','Python','C#/.Net']
  selectedTech;
  level=['L1','L2','L3','L1,L2','L2,L3','L1,L3','L1,L2,L3']
  selectedCity;
  selectedState;
  selectedLevel;
  searchBasedList;
  marksEntered;
  L12Level:boolean=false;
  L3Level:boolean=false;
  L1L2Level:boolean=false;
  L2L3Level:boolean=false;
  L1L3Level:boolean=false;
  L123Level:boolean=false;
  L1Selected:boolean=false;
  L2Selected:boolean=false;
  L3Selected: boolean=false;
  max;
  filterBasedTable: boolean;
  page:number=1;
  showNull = false
  showNullAll = false
  graph=[];
  subjectGraph=[];
  totalUserCount;
  userWithExamCount;
  showGraph =false;

  constructor(private _adminReportService:AdminReportService,private _router:Router,private _toastr:ToastrService,private _formBuilder:FormBuilder) { 
  }
  ngOnInit(): void {
    this.getAllUser();
    this.getCity();
    this.getStates();
    
  }
  //For Getting All User Details from Backend
  getAllUser(){
    this._adminReportService.allUserDetails(this.data).subscribe(result=>{
      this.allUserData=result;
      if(this.allUserData.length == 0){
        this.showNullAll = true
      }
      else{  
        this.showNullAll = false
        this.getCount();
      }
    });
    this.userDataReceived=true;
  }
  //For Getting Count of Users Registered and Count of Users who have appeared for exams.
  getCount(){
    this._adminReportService.getAllUserCount(this.data).subscribe(result=>{
      this.totalUserCount=result;
      this.graph.push(["Registered Users",this.totalUserCount]);
    });
    this._adminReportService.getUserWithExams(this.data).subscribe(result=>{
      this.userWithExamCount=result;
      this.graph.push(["Users With Exam",this.userWithExamCount]);
      this.getSubjectWiseCount();
    }); 
  }

  //For Getting Count of Students appeared for a certain Subject.
  getSubjectWiseCount(){
    this._adminReportService.getJavaExams(this.data).subscribe(result=>{
      this.subjectGraph.push(["Java",result]);
    });
    this._adminReportService.getSqlExams(this.data).subscribe(result=>{
      this.subjectGraph.push(["SQL",result]);
    });
    this._adminReportService.getCplusExams(this.data).subscribe(result=>{
      this.subjectGraph.push(["C/C++",result]);
    });
    this._adminReportService.getCsharpExams(this.data).subscribe(result=>{
      this.subjectGraph.push(["C#/.Net",result]);
    });
    this._adminReportService.getPythonExams(this.data).subscribe(result=>{
      this.subjectGraph.push(["Python",result]);
    });
    this._adminReportService.getPhpExams(this.data).subscribe(result=>{
      this.subjectGraph.push(["PHP",result]);
      this.showGraph = true;
    });
  }

  //Search Filter based on Different Input Paramaters Given by User.
  filterSearch(){
    let levelsData;
    if(this.selectedLevel=="L1"){
      levelsData=["1"];
    }
    else if(this.selectedLevel=="L2"){
      levelsData=["2"];
    }
    else if(this.selectedLevel=="L3"){
      levelsData=["3"];
    }
    else if(this.selectedLevel=="L1,L2"){
      levelsData=["1","2"];
    }
    else if(this.selectedLevel=="L1,L3"){
      levelsData=["1","3"];
    }
    else if(this.selectedLevel=="L2,L3"){
      levelsData=["2","3"];
    }
    else if(this.selectedLevel=="L1,L2,L3"){
      levelsData=["1","2","3"];
    }

    if((this.selectedLevel=="L1"||this.selectedLevel=="L2")&&(this.marksEntered>=0 && this.marksEntered<=40)){
      let data={
        "tech":this.selectedTech,
        "city":this.selectedCity,
        "state":this.selectedState,
        "level":levelsData,
        "marks":this.marksEntered
      }
      this._adminReportService.userFilteredReport(data).subscribe(result=>{
        console.log(result)
        this.searchBasedList=result
        if(this.searchBasedList.length == 0){
          this.showNull = true
          }
          else{
            this.showNull = false
          }
      });
      if(this.selectedLevel=="L1"){
        this.L1Selected=true;
        this.L2Selected=false;
        this.L3Selected=false
      }
      else if(this.selectedLevel=="L2"){
        this.L2Selected=true;
        this.L1Selected=false;
        this.L3Selected=false;
      }
      this.displaySearchTable();
    }
    else if((this.selectedLevel=="L3")&&(this.marksEntered>=0 && this.marksEntered<=20)){
      let data={
        "tech":this.selectedTech,
        "city":this.selectedCity,
        "state":this.selectedState,
        "level":levelsData,
        "marks":this.marksEntered
      }
      this._adminReportService.userFilteredReport(data).subscribe(result=>{
        console.log(result);
        this.searchBasedList=result
        if(this.searchBasedList.length == 0){
          this.showNull = true
          }
          else{
            this.showNull = false
          }
      });
      this.displaySearchTable();
        this.L2Selected=false ;
        this.L1Selected=false;
        this.L3Selected=true;
    }
    else if((this.selectedLevel=="L2,L3"||this.selectedLevel=="L1,L3")&&(this.marksEntered>=0 && this.marksEntered<=60)){
      let data={
        "tech":this.selectedTech,
        "city":this.selectedCity,
        "state":this.selectedState,
        "level":levelsData,
        "marks":this.marksEntered
      }
      this._adminReportService.userFilteredReport(data).subscribe(result=>{
        console.log(result);
        this.searchBasedList=result
        if(this.searchBasedList.length == 0){
          this.showNull = true
          }
          else{
            this.showNull = false
          }
      });
      if(this.selectedLevel=="L2,L3"){
        this.L2Selected=true;
        this.L1Selected=false;
        this.L3Selected=true;
      }
      else if(this.selectedLevel=="L1,L3"){
        this.L2Selected=false;
        this.L1Selected=true;
        this.L3Selected=true;
      }
      this.displaySearchTable();
    }
    else if((this.selectedLevel=="L1,L2")&&(this.marksEntered>=0 && this.marksEntered<=80)){
      let data={
        "tech":this.selectedTech,
        "city":this.selectedCity,
        "state":this.selectedState,
        "level":levelsData,
        "marks":this.marksEntered
      }
      this._adminReportService.userFilteredReport(data).subscribe(result=>{
        console.log(result);
        this.searchBasedList=result
        if(this.searchBasedList.length == 0){
          this.showNull = true
          }
          else{
            this.showNull = false
          }
      });
        this.L2Selected=true;
        this.L1Selected=true;
        this.L3Selected=false;
      this.displaySearchTable();
    }
    else if((this.selectedLevel=="L1,L2,L3")&&(this.marksEntered>=0 && this.marksEntered<=100)){
      let data={
        "tech":this.selectedTech,
        "city":this.selectedCity,
        "state":this.selectedState,
        "level":levelsData,
        "marks":this.marksEntered
      }
      this._adminReportService.userFilteredReport(data).subscribe(result=>{
        console.log(result);
        this.searchBasedList=result
        if(this.searchBasedList.length == 0){
          this.showNull = true
          }
          else{
            this.showNull = false
          }
      });
        this.L2Selected=true;
        this.L1Selected=true;
        this.L3Selected=true;
      this.displaySearchTable();
    }
    else{
      this._toastr.error("Failed","Invalid Input");
    }
    
  }
  levelSelected(){
    if(this.selectedLevel=="L1"||this.selectedLevel=="L2"){
      this.L12Level=true;
      this.L3Level=false;
      this.L1L2Level=false;
      this.L2L3Level=false;
      this.L1L3Level=false;
      this.L123Level=false;
    }
    else if(this.selectedLevel=="L3"){
      this.L12Level=false;
      this.L3Level=true;
      this.L1L2Level=false;
      this.L2L3Level=false;
      this.L1L3Level=false;
      this.L123Level=false;
    }
    else if(this.selectedLevel=="L1,L2"){
      this.L12Level=false;
      this.L3Level=false;
      this.L1L2Level=true;
      this.L2L3Level=false;
      this.L1L3Level=false;
      this.L123Level=false;
    }
    else if(this.selectedLevel=="L2,L3"){
      this.L12Level=false;
      this.L3Level=false;
      this.L1L2Level=false;
      this.L2L3Level=true;
      this.L1L3Level=false;
      this.L123Level=false;
    }
    else if(this.selectedLevel=="L1,L3"){
      this.L12Level=false;
      this.L3Level=false;
      this.L1L2Level=false;
      this.L2L3Level=false;
      this.L1L3Level=true;
      this.L123Level=false;
    }
    else if(this.selectedLevel=="L1,L2,L3"){
      this.L12Level=false;
      this.L3Level=false;
      this.L1L2Level=false;
      this.L2L3Level=false;
      this.L1L3Level=false;
      this.L123Level=true;
    }
  }
  getParticularReport(id,uname){
    sessionStorage.setItem('userData',uname);
    this._router.navigate(['detailReport',id]);
  }
  getStates(){
    this._adminReportService.allState(this.data).subscribe(result=>{
      console.log(result);
      this.allStateList=result;
    });
  }
  getCity(){
    console.log("In")
    this._adminReportService.allCity(this.data).subscribe(result=>{
      console.log(result);
      this.allCityList=result;
    });
  }
  displaySearchTable(){
    this.userDataReceived=false;
    this.filterBasedTable=true;
  }
  displayAllReports(){
    this.userDataReceived=true;
    this.filterBasedTable=false;
  }
  gotoDashboard(){
    this._router.navigate(["adminDashboard"])
  }
  gotoAboutUs(){
    this._router.navigate(["aboutUsAdmin"])
  }
  logout(){
    this._router.navigate([""]);
    sessionStorage.clear();
    this._toastr.success('Success', 'Logged Out Successfully');
  }
}
