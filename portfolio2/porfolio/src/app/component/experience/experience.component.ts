import { Component, OnInit, Input } from '@angular/core';
import { PortfolioComponent } from '../../portfolio/portfolio.component'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() workData:any;
  workExperience:any=[];

  constructor() { }

  ngOnInit() {
    let work = this.workData;
    this.workExperience = work;
  }

}
