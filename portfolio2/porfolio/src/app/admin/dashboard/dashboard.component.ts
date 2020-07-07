import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() userData;

  showPanel:boolean = true;
  editPanel:boolean = false;
  feedbackPanel:boolean = false;

  constructor() {}

  ngOnInit() {
    //console.log(this.userData)
  }

  togglePanel(show,panel){
    show == true? this.showPanel = false : this.showPanel = true;
    panel == 'editPanel'?this.editPanel = true : this.editPanel = false;
    panel == 'feedbackPanel'? this.feedbackPanel = true : this.feedbackPanel = false;
  }


}
