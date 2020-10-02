import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminReportService } from 'src/app/Services/admin-report.service';

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css']
})
export class StudentReportComponent implements OnInit {
  candidateName;
  candidateId;
  details;
  detailsRendered: boolean=false;
  dataDonutChart=[];
  data=[];
  dataPieChart=[];
  page:number=1;
  constructor(private _adminReportService:AdminReportService,private _router:Router,private _toastr:ToastrService) { }

  ngOnInit(): void {
    this.candidateName=sessionStorage.getItem('studentName');
    this.candidateId=sessionStorage.getItem('studentId');
    console.log(this.candidateName);
    console.log(this.candidateId);
    this.getReports();
  }
  getReports(){
    let uID={
      "user_id":this.candidateId
    }
    let avg=0;
    this._adminReportService.userReport(uID).subscribe(result=>{
      console.log(result);
      this.details=result;
      if(this.details.length==0){
        this.detailsRendered=false;
      }
      else{
        this.detailsRendered=true;
        for(let i = 0; i<this.details.length;i++){
          this.data.push([this.details[i]["exam_name"],this.details[i]["level1_score"],this.details[i]["level2_score"],this.details[i]["level3_score"]])
          this.dataPieChart.push([this.details[i]["exam_name"],this.details[i]["level1_score"]+this.details[i]["level2_score"]+this.details[i]["level3_score"]])
          avg = avg + this.details[i]["level1_score"]+this.details[i]["level2_score"]+this.details[i]["level3_score"];
        }
        avg = avg/this.details.length;
        this.dataDonutChart.push(['Average',avg]);
        this.dataDonutChart.push(['Remaining',100 - avg]);
        console.log(this.dataDonutChart)
        console.log(this.data)
        console.log(this.dataPieChart)
      }
    });
  }
  print(){
    window.print()
  }
  gotoDashboard(){
    this._router.navigate(["studentDashboard"])
  }
  logout(){
    this._router.navigate([""]);
    sessionStorage.clear();
    this._toastr.success('Success', 'Logged Out Successfully');
  }
  gotoAboutUs(){
    this._router.navigate(["aboutUs"])
  }
  giveTest(){
    console.log("All the Best");
    this._router.navigate(["selectTest"]);
  }
}
