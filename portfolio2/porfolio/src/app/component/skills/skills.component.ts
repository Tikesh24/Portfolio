import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills:any=[];
  constructor( private skillData: AppComponent ) {
    let skill = skillData.skills;
    this.skills = skill;
   }

  ngOnInit() {
  }

}
