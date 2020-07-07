import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as SampleJson from './../../assets/data-source/page-data.json';
@Injectable({
  providedIn: 'root'
})
export class DataGetterService implements OnInit {

  data: any;

  constructor(private http: HttpClient) {
    this.data = SampleJson;
    //this.getPageData();
  }

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

  ngOnInit() {
  }

}
