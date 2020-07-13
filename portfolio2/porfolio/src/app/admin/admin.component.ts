import { Component, OnInit } from '@angular/core';
import { DataGetterService } from '../services/data-getter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  pageData:any;
  isPageData:boolean = false;

  constructor(private pageDataObj: DataGetterService) { 

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
  }

  ngOnInit() {
    this.getPageData();
  }

}
