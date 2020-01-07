import { Component } from '@angular/core';
import { DataGetterService } from './services/data-getter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'porfolio';
  blog:boolean = false;

  pageData:any;
  homeData:any;
  aboutData:any;
  workData:any;
  skills:any;
  contactData:any=[];
  constructor(private data : DataGetterService){
    this.pageData = data.getData();
    this.homeData = this.pageData.default["home-page"];
    this.aboutData = this.pageData.default["about-page"];
    this.workData = this.pageData.default["work-experience"];
    this.skills = this.pageData.default["skill-page"];
    this.contactData[0] = this.pageData.default["about-page"]["basic-info"];
    this.contactData[1] = this.pageData.default["about-page"]["social-info"];
  }


}
