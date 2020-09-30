import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  studentReport(){
    console.log("Viewing Reports");
    this._router.navigate(["studentReport"]);
  }
  giveTest(){
    console.log("All the Best");
    this._router.navigate([""]);
  }
}
