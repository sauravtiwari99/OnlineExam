import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminReportService {

  constructor(private _http:HttpClient) { }
  baseUrl: string = "https://localhost:44301/api/report/";
  baseURL:string="https://localhost:44301/api/traffic/";

  allUserDetails(data){
    return this._http.post(this.baseUrl+"getAllReport",data);
  }
  userReport(data){
    return this._http.post(this.baseUrl+"getReport",data);
  }
  userFilteredReport(data){
    return this._http.post(this.baseUrl+"searchReport",data);
  }
  allCity(data){
    return this._http.post(this.baseUrl+"getCity",data);
  }
  allState(data){
    return this._http.post(this.baseUrl+"getState",data);
  }
  getAllUserCount(data){
    return this._http.post(this.baseURL+"allTraffic",data);
  }
  getUserWithExams(data){
    return this._http.post(this.baseURL+"distinctTraffic",data);
  }
  getJavaExams(data){
    return this._http.post(this.baseURL+"javaTraffic",data);
  }
  getSqlExams(data){
    return this._http.post(this.baseURL+"sqlTraffic",data);
  }
  getPythonExams(data){
    return this._http.post(this.baseURL+"pythonTraffic",data);
  }
  getCsharpExams(data){
    return this._http.post(this.baseURL+"csharpTraffic",data);
  }
  getCplusExams(data){
    return this._http.post(this.baseURL+"cplusTraffic",data);
  }
  getPhpExams(data){
    return this._http.post(this.baseURL+"phpTraffic",data);
  }
}
