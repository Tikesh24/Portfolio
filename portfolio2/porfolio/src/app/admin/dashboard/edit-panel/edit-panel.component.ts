import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  @Input() data:any; 

  isEdit:boolean = false;
  home:any;
  about:any;
  skills:any;
  experience:any;

  homeFormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    designation: new FormControl('')
  });

  aboutFormGroup = new FormGroup({
    aboutText: new FormControl(''),
    address: new FormControl(''),
    age: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
    residence: new FormControl(''),
    fb: new FormControl(''),
    insta: new FormControl(''),
    twiter: new FormControl(''),
    li: new FormControl(''),
  });

  skillFormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    designation: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    
    this.home = this.data["home-page"];
    this.about = this.data["about-page"];
    this.skills = this.data["skill-page"];
    this.experience = this.data["work-experience"];
    this.setHomeData();
    this.setAboutData()
    console.log(this.data)
  }

  doEdit(isOpt){
    isOpt == true?this.isEdit = false:this.isEdit = true;
  }

  //######################################### Home Data #################################
  setHomeData(){
    this.homeFormGroup.controls['firstname'].setValue(this.home['first-name']);
    this.homeFormGroup.controls['lastname'].setValue(this.home['second-name']);
    this.homeFormGroup.controls['designation'].setValue(this.home['designation'].join());
  }

  onSubmitHome(formData){
    let homeObj = [];
    homeObj['first-name'] = formData['firstname'];
    homeObj['second-name'] = formData['lastname'];
    homeObj['designation'] = formData['designation'].split(',');
    console.log(homeObj);
    this.isEdit = false;
  }
  //######################################### Home Data #################################

  //######################################### About Data #################################
  setAboutData(){
    this.aboutFormGroup.controls['aboutText'].setValue(this.about['about-text']);
    this.aboutFormGroup.controls['address'].setValue(this.about['basic-info']['address']);
    this.aboutFormGroup.controls['age'].setValue(this.about['basic-info']['age']);
    this.aboutFormGroup.controls['mail'].setValue(this.about['basic-info']['mail']);
    this.aboutFormGroup.controls['phone'].setValue(this.about['basic-info']['phone']);
    this.aboutFormGroup.controls['residence'].setValue(this.about['basic-info']['residence']);
    this.aboutFormGroup.controls['fb'].setValue(this.about['social-info']['fb']);
    this.aboutFormGroup.controls['insta'].setValue(this.about['social-info']['insta']);
    this.aboutFormGroup.controls['twiter'].setValue(this.about['social-info']['twiter']);
    this.aboutFormGroup.controls['li'].setValue(this.about['social-info']['li']);
  }

  onSubmitAbout(formData){
    let aboutObj = {};
    aboutObj['about-text'] = formData['aboutText'];
    let basiInfo = {};
    basiInfo['age'] = formData['age'];
    basiInfo['address'] = formData['address'];
    basiInfo['mail'] = formData['mail'];
    basiInfo['phone'] = formData['phone'];
    basiInfo['residence'] = formData['residence'];
    aboutObj['basic-info'] = basiInfo;
    let socialInfo = {};
    socialInfo['fb'] = formData['fb'];
    socialInfo['insta'] = formData['insta'];
    socialInfo['twiter'] = formData['twiter'];
    socialInfo['li'] = formData['li'];
    aboutObj['social-info'] = socialInfo

    console.log(aboutObj);
    this.isEdit = false;
  }
  //######################################### About Data #################################
}
