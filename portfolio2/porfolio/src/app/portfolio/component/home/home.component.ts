import { Component, OnInit,Input } from '@angular/core';
import { PortfolioComponent } from '../../portfolio.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() homeData:any;
  firstName:string;
  secondName:string;
  designation:any = [];

  constructor() { }

  ngOnInit() {
    let homePage = this.homeData;
    this.firstName = homePage["first-name"];
    this.secondName = homePage["second-name"];
    this.designation = homePage["designation"];
  }

}
