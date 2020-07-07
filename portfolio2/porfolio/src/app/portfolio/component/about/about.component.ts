import { Component, OnInit, Input } from '@angular/core';
import { PortfolioComponent } from '../../portfolio.component'
import { } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() aboutData;
  aboutText: string;
  basicInfo: any = [];
  socialInfo: any = [];

  constructor() { }

  ngOnInit() {
    let about = this.aboutData;
    this.aboutText = about["about-text"];
    this.basicInfo = about["basic-info"];
    this.socialInfo = about["social-info"];
    console.log(about);
  }

}
