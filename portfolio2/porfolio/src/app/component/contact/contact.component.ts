import { Component, OnInit, Input } from '@angular/core';
import { PortfolioComponent } from '../../portfolio/portfolio.component'
import { FormGroup,FormControl } from '@angular/forms';
import { DataGetterService } from './../../services/data-getter.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  @Input() contactData:any;
  basicInfo:any=[];
  socialInfo:any=[];
  feedback:DataGetterService;
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(  public data : DataGetterService) { }

  onSubmit(customerData) {
    // Process feedback data here
    try{
      this.feedback.updateFeedback(customerData).subscribe(data => {
        console.log(data);
    },error=>{
      console.log(error);
    })
      console.log('Your feedback has been submitted', customerData);
      this.checkoutForm.reset();
    }catch (e){
      console.log(e);
    }
  }

  ngOnInit() {
    let about = this.contactData;
    this.basicInfo = about[0];
    this.socialInfo = about[1];
    this.feedback = this.data;
  }

}
