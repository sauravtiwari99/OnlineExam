import { Component, OnInit } from '@angular/core';
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
  constructor(private _adminReportService:AdminReportService) { }
  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(){
    this._adminReportService.allUserDetails(this.data).subscribe(result=>{
      console.log(result);
      this.allUserData=result;
    });
  }
  getParticularReport(id){
    this.selectedUserCheck=true;
    let uID={
      "user_id":id
    }
    this._adminReportService.userReport(uID).subscribe(result=>{
      console.log(result);
      this.selectedUser=result;
    });
  }
}
