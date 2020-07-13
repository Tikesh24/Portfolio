import { Component, OnInit } from '@angular/core';
import { DataGetterService } from '../../../services/data-getter.service';

@Component({
  selector: 'app-feedback-panel',
  templateUrl: './feedback-panel.component.html',
  styleUrls: ['./feedback-panel.component.scss']
})
export class FeedbackPanelComponent implements OnInit {

  feedBack:any;
  constructor(private dataGetterOBj:DataGetterService) { }

  ngOnInit() {
    this.dataGetterOBj.getFeedBackData().then(result => {
      this.feedBack = result;
    }, error => {
      console.error(error);
    })
  }

}
