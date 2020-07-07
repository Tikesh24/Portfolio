import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  @Input() data:any; 

  home:any;
  constructor() { }

  ngOnInit() {
    
    this.home = this.data["home-page"];
    console.log(this.home)
  }

}
