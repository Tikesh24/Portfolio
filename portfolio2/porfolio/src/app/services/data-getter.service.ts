import { Injectable , OnInit } from '@angular/core';
import * as SampleJson from './../../assets/data-source/page-data.json';
@Injectable({
  providedIn: 'root'
})
export class DataGetterService implements OnInit {

  data:any;
  constructor() { 
    this.data = SampleJson;
  }
  getData(){
    return this.data;
  }
  ngOnInit() {
  }
}
