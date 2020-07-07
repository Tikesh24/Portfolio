import { Component, OnInit } from '@angular/core';
import { DataGetterService } from '../services/data-getter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  pageData:any;

  constructor(private pageDataObj: DataGetterService) { 
    this.pageData = pageDataObj.data.default;
  }

  ngOnInit() {
  }

}
