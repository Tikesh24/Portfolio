import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  firstName:string;
  secondName:string;
  designation:any = [];

  constructor(private homeData: AppComponent) {
    
    let homePage = homeData.homeData;
    this.firstName = homePage["first-name"];
    this.secondName = homePage["second-name"];
    this.designation = homePage["designation"];
   }

  ngOnInit() {
  }

}
