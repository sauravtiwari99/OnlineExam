import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-test',
  templateUrl: './admin-test.component.html',
  styleUrls: ['./admin-test.component.css']
})
export class AdminTestComponent implements OnInit {

  constructor(private _adminService:AdminService, private _toastr:ToastrService) { }
  removeQuestions:boolean = false;
  addQuestions:boolean = false;
  selectedValue;
  selectedFile;
  deleteQuestions:boolean = false;
  allSets;
  selectedSet;
  splitString;
  ngOnInit(): void {
  }
  showSelected(){
    console.log(this.selectedValue)
    console.log(this.selectedFile)
    this.splitString=this.selectedFile.split("\\");
    console.log(this.splitString);

  }

  addExcelFile(){
    let filepath = {
      "csv_file_path" :("c://"+this.splitString[2])
    }
    console.log(filepath);

    if(this.selectedValue == 'Java'){
      this._adminService.addJava(filepath).subscribe(
        data=>{
          alert(data);
        }
      )
    }

    else if(this.selectedValue == 'Sql'){
      this._adminService.addSql(filepath).subscribe(
        data=>{
          alert(data);
        }
      )
    }

    else if(this.selectedValue == 'php'){
      this._adminService.addPhp(filepath).subscribe(
        data=>{
          alert(data);
        }
      )
    }

    else if(this.selectedValue == 'C/C++'){
      this._adminService.addCplus(filepath).subscribe(
        data=>{
          alert(data);
        }
      )
    }

    else if(this.selectedValue == 'Python'){
      this._adminService.addPython(filepath).subscribe(
        data=>{
          alert(data);
        }
      )
    }

    else if(this.selectedValue == 'C#/Dotenet'){
      this._adminService.addCSharp(filepath).subscribe(
        data=>{
          alert(data);
        }
      )
    }

  }

  getAllSets(){
    let jsonobj
    if(this.selectedValue == "Java"){
    jsonobj = {
      "subject" : "Java"
    }
  }
  else if(this.selectedValue == "Python"){
     jsonobj = {
      "subject" : "Python"
    }
  }
  else if(this.selectedValue == "Sql"){
     jsonobj = {
      "subject" : "Sql"
    }
  }
  else if(this.selectedValue == "php"){
     jsonobj = {
      "subject" : "Php"
    }
  }
  else if(this.selectedValue == "C/C++"){
    jsonobj = {
      "subject" : "Cplus"
    }
  }
  else if(this.selectedValue == "C#/Dotenet"){
     jsonobj = {
      "subject" : "Csharp"
    }
  }

    this._adminService.getAllSets(jsonobj).subscribe(
      data=>{
        console.log("all sets are here")
        this.allSets = data;
      }
    )
  }

  deleteExcelFile(){
    let jsonObj = {
      "set": this.selectedSet[this.selectedSet.length -1]
    }
    
    if(this.selectedValue == 'Java'){
      this._adminService.removeJava(jsonObj).subscribe(
        data=>{
          alert("Deleted Java Successfully");
        }
      )
    }

    else if(this.selectedValue == 'Sql'){
      this._adminService.removeSql(jsonObj).subscribe(
        data=>{
          alert("Deleted Sql Successfully");
        }
      )
    }

    else if(this.selectedValue == 'php'){
      this._adminService.removePhp(jsonObj).subscribe(
        data=>{
          alert("Deleted Php Successfully");
        }
      )
    }

    else if(this.selectedValue == 'C/C++'){
      this._adminService.removeCplus(jsonObj).subscribe(
        data=>{
          alert("Deletd C/C++ Successfully");
        }
      )
    }

    else if(this.selectedValue == 'Python'){
      this._adminService.removePython(jsonObj).subscribe(
        data=>{
          alert("Deleted Python Successfully");
        }
      )
    }

    else if(this.selectedValue == 'C#/Dotenet'){
      this._adminService.removeCSharp(jsonObj).subscribe(
        data=>{
          alert("Deleted Dotnet Successfully");
        }
      )
    }
    
  }
}
