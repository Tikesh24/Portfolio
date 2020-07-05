import { Component, OnInit, Input } from '@angular/core';
import { PortfolioComponent } from '../../portfolio/portfolio.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skillData:any;

  skills:any=[];
  constructor() { }

  ngOnInit() {
    let skill = this.skillData;
    this.skills = skill;
  }

}
