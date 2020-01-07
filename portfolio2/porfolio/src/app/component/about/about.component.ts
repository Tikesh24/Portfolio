import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutText:string;
  basicInfo:any=[];
  socialInfo:any=[];

  constructor( private aboutData: AppComponent ) {
    
    let about = aboutData.aboutData;
    this.aboutText = about["about-text"];
    this.basicInfo = about["basic-info"];
    this.socialInfo = about["social-info"];
    console.log(about);
   }
  
  ngOnInit() {
  
  }

}
