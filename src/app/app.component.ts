import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,FormArray} from '@angular/forms';
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

  constructor(){
    this.form1=new FormGroup({
      fullName:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),

      contactDetails:new FormGroup({
        address:new FormControl('',[Validators.required]),
        shippingAddress:new FormControl('',[Validators.required]),
        contactNumber:new FormControl('',[Validators.required,Validators.pattern(this.contactRegex)])

      }),

      skills:new FormArray([])
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
