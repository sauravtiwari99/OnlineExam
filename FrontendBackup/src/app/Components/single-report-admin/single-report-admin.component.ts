import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminReportService } from 'src/app/Services/admin-report.service';

@Component({
  selector: 'app-single-report-admin',
  templateUrl: './single-report-admin.component.html',
  styleUrls: ['./single-report-admin.component.css']
})
export class SingleReportAdminComponent implements OnInit {

  constructor(private _adminReportService:AdminReportService,private _router:Router,private _route:ActivatedRoute) { }
  id: string;
  details;
  detailsRendered:boolean=false;
  ngOnInit(): void {
    this.getReports();
  }
  getReports(){
    this.id = this._route.snapshot.paramMap.get('id');
    let uID={
      "user_id":this.id
    }
    this._adminReportService.userReport(uID).subscribe(result=>{
      console.log(result);
      this.details=result;
    });
    this.detailsRendered=true;
  }
}
