import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;
  genders=["Male","Female"];

  constructor(){
    this.signUpForm = new FormGroup({
      firstName:new FormControl(null),
      lastName:new FormControl(null),
      email:new FormControl(null),
      mobile:new FormControl(null),
      dateOfBirt:new FormControl(null),
      gender:new FormControl(null)
     });
  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
     firstName:new FormControl(null),
     lastName:new FormControl(null),
     email:new FormControl(null),
     mobile:new FormControl(null),
     dateOfBirt:new FormControl(null),
     gender:new FormControl(null)
    });
  }
}
