import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormArray,FormBuilder} from '@angular/forms';
import { noSpace } from './validators/nospace.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactivevalidation';
  topic='Form Validation Reactive';
  emailRegex:string="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex:string='[789][0-9]{9}'
form1:any;

  constructor(fb:FormBuilder){

this.form1= fb.group({
  fullName:['',[
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(10),
    noSpace.noSpaceValidations
  ]],
  email:['',[
    Validators.required,
    Validators.pattern(this.emailRegex)
  ]],
  contactDetails:fb.group({
    address:['', Validators.required],
    shippingAddress:['',Validators.required],
    contactNumber:['',Validators.required,Validators.pattern(this.contactRegex)],

  }),
  skills:fb.array([])
})

}
  addSkills(skills:HTMLInputElement){
    this.Skills.push(new FormControl(skills.value))
    skills.value='';
    console.log(this.form1.value);
  }


get Skills(){
  return this.form1.get('skills') as FormArray;
}

removeskills(index:any){
  this.Skills.removeAt(index);
}

onSubmit(){
 console.log (this.form1.value);
}



}
