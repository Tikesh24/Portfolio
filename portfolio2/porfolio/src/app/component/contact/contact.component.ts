import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  basicInfo:any=[];
  socialInfo:any=[];

  constructor( private contactData: AppComponent ) { 
    let about = contactData.aboutData;
    this.basicInfo = about["basic-info"];
    this.socialInfo = about["social-info"];
  }

  ngOnInit() {
  }

}
