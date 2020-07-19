import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { DataGetterService } from '../../../services/data-getter.service';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  @Input() data: any;

  isEdit: boolean = false;
  isChecked: boolean = false;
  home: any;
  about: any;
  skills: any;
  experience: any;
  htmlElement:HTMLElement;

  skillControl = new FormArray([]);
  skillValueControl = new FormArray([]);

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
    skillControl:this.skillControl,
    skillValueControl:this.skillValueControl
  });

  experienceFormGroup = new FormGroup({
    workPlace: new FormArray([]),
    workType: new FormArray([]),
    workDuration: new FormArray([]),
    workDesc: new FormArray([])
  });

  constructor(private dataSetter: DataGetterService) { }

  ngOnInit() {
    this.setPageData(this.data);
  }

  setPageData(dataObj){
    this.home = dataObj["home-page"];
    this.about = dataObj["about-page"];
    this.skills = dataObj["skill-page"];
    this.experience = dataObj["work-experience"];
    this.setHomeData();
    this.setAboutData();
    this.setSkillData();
    this.setExperienceData()
    console.log(dataObj)
  }
  
  doEdit(isOpt) {
    isOpt == true ? this.isEdit = false : this.isEdit = true;
  }

  //######################################### Home Data #################################
  setHomeData() {
    this.homeFormGroup.reset();
    this.homeFormGroup.controls['firstname'].setValue(this.home['first-name']);
    this.homeFormGroup.controls['lastname'].setValue(this.home['second-name']);
    this.homeFormGroup.controls['designation'].setValue(this.home['designation'].join());
  }

  onSubmitHome(formData) {
    let homePageObj = {};
    let homeObj = {};
    homeObj['first-name'] = formData['firstname'];
    homeObj['second-name'] = formData['lastname'];
    homeObj['designation'] = formData['designation'].split(',');
    homePageObj['home-page'] = homeObj;
    homePageObj['key'] = 'home-page';
    this.dataSetter.updateUserData(homePageObj).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
    this.data['home-page'] = homeObj;
    this.setPageData(this.data)
    this.isEdit = false;
  }
  //######################################### Home Data #################################

  //######################################### About Data #################################
  setAboutData() {
    this.aboutFormGroup.reset();
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

  onSubmitAbout(formData) {
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
    aboutObj['social-info'] = socialInfo;
    
    let aboutDataObj ={};
    aboutDataObj['key'] = 'about-page';
    aboutDataObj['about-page'] = aboutObj;
    //this.dataSetter.updateUserData(aboutObj);
    this.dataSetter.updateUserData(aboutDataObj).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
    this.data["about-page"] = aboutObj;
    this.setPageData(this.data);
    this.isEdit = false;
  }
  //######################################### About Data #################################

  //######################################### Skill Data #################################
  setSkillData() {
    this.skillFormGroup.reset();
    (this.skillFormGroup.controls.skillControl as FormArray).clear();
    (this.skillFormGroup.controls.skillValueControl as FormArray).clear();
    this.skills.forEach((o, i) => {
      const control = new FormControl(i);
      control.setValue(o['key']);
      (this.skillFormGroup.controls.skillControl as FormArray).push(control);

      const controlValue = new FormControl(i);
      controlValue.setValue(o['value']);
      (this.skillFormGroup.controls.skillValueControl as FormArray).push(controlValue);
    });
  }

  onSubmitskill(formData) {
    let skillObj = {};
    let skillArray = [];
    formData['skillControl'].forEach((o, i) => {
      let skill = {};
      skill['key'] = o;
      skill['value'] = formData['skillValueControl'][i] + ""
      skillArray.push(skill)
    })
    skillObj['skill-page'] = skillArray;
    skillObj['key'] = 'skill-page';
    //this.dataSetter.updateUserData(skillObj);
    this.dataSetter.updateUserData(skillObj).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
    this.data['skill-page'] = skillArray;
    this.setPageData(this.data);
    this.isEdit = false;
  }

  removeSkil(event){
    var target = event.target || event.srcElement || event.currentTarget;
    target.className = 'fa fa-minus-square fa-lg text-danger';
    var index = (target.attributes.id.nodeValue).slice(5);
    console.log("To delete index:"+index);
    (this.skillFormGroup.controls.skillControl as FormArray).removeAt(index);
    (this.skillFormGroup.get("skillValueControl") as FormArray).removeAt(index);
    
  }

  addSkill(index){
    console.log(index)
    const control = new FormControl(index+1);
    control.setValue('New skill');
    (this.skillFormGroup.get("skillControl") as FormArray).push(control);
   // (this.skillFormGroup.controls.skillControl as FormArray).push(control);

    const controlValue = new FormControl(index+1);
    controlValue.setValue('Skill value');
    (this.skillFormGroup.get("skillValueControl") as FormArray).push(controlValue);

    let skillObj =  this.data['skill-page'];
    // let skillArray = [];
    let skill = {};
    skill['key'] = "New Skill";
    skill['value'] = "0";
    skillObj.push(skill)
    // skillObj['skill-page'] = skillArray;
     this.data['skill-page'] = skillObj;
    // this.setPageData(this.data);
  }

  //######################################### Skill Data #################################

  //######################################### Experience Data #################################
  setExperienceData() {
    this.experienceFormGroup.reset();
    (this.experienceFormGroup.controls.workPlace as FormArray).clear();
    (this.experienceFormGroup.controls.workType as FormArray).clear();
    (this.experienceFormGroup.controls.workDuration as FormArray).clear();
    (this.experienceFormGroup.controls.workDesc as FormArray).clear();

    this.experience.forEach((o, i) => {
      const place = new FormControl(i);
      place.setValue(o['work-place']);
      (this.experienceFormGroup.controls.workPlace as FormArray).push(place);

      const type = new FormControl(i);
      type.setValue(o['work-type']);
      (this.experienceFormGroup.controls.workType as FormArray).push(type);

      const duration = new FormControl(i);
      duration.setValue(o['work-duration']);
      (this.experienceFormGroup.controls.workDuration as FormArray).push(duration);

      const descrp = new FormControl(i);
      descrp.setValue(o['work-desc']);
      (this.experienceFormGroup.controls.workDesc as FormArray).push(descrp);
    });
  }

  onSubmitExperience(formData) {
    let experienceObj = {};
    let expArray = [];
    formData['workPlace'].forEach((o, i) => {
      let workExp = {};
      workExp['work-place'] = o;
      workExp['work-type'] = formData['workType'][i];
      workExp['work-duration'] = formData['workDuration'][i];
      workExp['work-desc'] = formData['workDesc'][i];
      expArray.push(workExp)
    })
    experienceObj['work-experience'] = expArray;
    experienceObj['key'] = 'work-experience';
    //this.dataSetter.updateUserData(experienceObj);
    this.dataSetter.updateUserData(experienceObj).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
    this.data['work-experience'] = expArray;
    this.setPageData(this.data)
    this.isEdit = false;
  }

  removeExperience(event){
    var target = event.target || event.srcElement || event.currentTarget;
    target.className = 'fa fa-minus-square fa-lg text-danger';
    var index = (target.attributes.id.nodeValue).slice(5);
    console.log("To delete index:"+index);
    (this.experienceFormGroup.controls.workPlace as FormArray).removeAt(index);
    (this.experienceFormGroup.controls.workType as FormArray).removeAt(index);
    (this.experienceFormGroup.controls.workDuration as FormArray).removeAt(index);
    (this.experienceFormGroup.controls.workDesc as FormArray).removeAt(index);
  }

  addExperience(index){

    const place = new FormControl(index);
    place.setValue("Place");
    (this.experienceFormGroup.controls.workPlace as FormArray).push(place);

    const type = new FormControl(index);
    type.setValue("Type");
    (this.experienceFormGroup.controls.workType as FormArray).push(type);

    const duration = new FormControl(index);
    duration.setValue("Duration");
    (this.experienceFormGroup.controls.workDuration as FormArray).push(duration);

    const descrp = new FormControl(index);
    descrp.setValue("Description");
    (this.experienceFormGroup.controls.workDesc as FormArray).push(descrp);

    let expArray = this.data['work-experience'];
    let workExp = {};
    workExp['work-place'] = "Place";
    workExp['work-type'] = "Type";
    workExp['work-duration'] = "Duration";
    workExp['work-desc'] = "Designation";
    expArray.push(workExp);
    this.data['work-experience'] = expArray;
    
  }
  //######################################### Experience Data #################################
}
