import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {
  baseUrl: string = "https://localhost:44301/api/students/test/";
  constructor(private _http:HttpClient) { }
  getLevelOne(data){
    return this._http.post(this.baseUrl+"easy",data);
  }
  storeLevelOne(data){
    return this._http.post(this.baseUrl+"insert",data);
  }

  getLevelTwo(data){
    return this._http.post(this.baseUrl+"medium",data);
  }
  storeLevelTwo(data){
    return this._http.post(this.baseUrl+"update",data);
  }

  getLevelThree(data){
    return this._http.post(this.baseUrl+"hard",data);
  }
  storeLevelThree(data){
    return this._http.post(this.baseUrl+"update",data);
  }
  
}
