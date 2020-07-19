import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as SampleJson from './../../assets/data-source/page-data.json';
import * as feedbackjson from './../../assets/data-source/feedback.json';
@Injectable({
  providedIn: 'root'
})
export class DataGetterService implements OnInit {

  data: any;
  feedback:any;
  constructor(private http: HttpClient) {
    // this.data = SampleJson;
    this.feedback = feedbackjson;
    
  }

  envDetails = "http://localhost:4300";

  getData() {
    return this.data;
  }

  updateFeedback(data) {
    return this.http.post('/server-api/updateFeedback', data);
  }

  async getPageData() {
    const result =  await this.http.get('/server-api/getPageData').toPromise();
    return result;
  }

  async getFeedBackData() {
    const result =  await this.http.get('/server-api/getFeedBackData').toPromise();
    return result;
  }

  updateUserData(data){
    return this.http.post('/server-api/updateUserData', data);
  }
  
  ngOnInit() {
  }

}
