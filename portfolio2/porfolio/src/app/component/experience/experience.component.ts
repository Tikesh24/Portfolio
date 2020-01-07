import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  workExperience:any=[];

  constructor( private workData: AppComponent ) { 
    let work = workData.workData;
    this.workExperience = work;
  }

  ngOnInit() {}

}
