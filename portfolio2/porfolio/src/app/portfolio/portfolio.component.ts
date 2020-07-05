import { Component, OnInit } from '@angular/core';
import { DataGetterService } from '../services/data-getter.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title = 'porfolio';
  blog: boolean = false;

  isPageData:boolean = false;
  pageData: any;
  homeData: any;
  aboutData: any;
  workData: any;
  skills: any;
  contactData:any=[];

  constructor(private pageDataObj: DataGetterService) {
    //this.getPageData();
    //this.setPageData(pageDataObj.data)
    //console.log(data.updateFeedback())
  }

  getPageData() {
    this.pageDataObj.getPageData().then(result => {
      this.setPageData(result);
    }, error => {
      console.error(error);
    })
  }

  setPageData(pageObj: any) {
    if(pageObj!=undefined){
      this.isPageData = true;
    }
    this.pageData = pageObj;
    this.homeData = this.pageData["home-page"];
    this.aboutData = this.pageData["about-page"];
    this.workData = this.pageData["work-experience"];
    this.skills = this.pageData["skill-page"];
    this.contactData[0] = this.pageData["about-page"]["basic-info"];
    this.contactData[1] = this.pageData["about-page"]["social-info"];
  }
  
  ngOnInit() {
    this.getPageData();
  }

}
