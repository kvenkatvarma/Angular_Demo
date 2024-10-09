import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;
  genders=["Male","Female"];
  countries:Country[] =[];
  constructor(private countriesService:CountriesService){
    this.signUpForm = new FormGroup({
      firstName:new FormControl(null),
      lastName:new FormControl(null),
      email:new FormControl(null),
      mobile:new FormControl(null),
      dateOfBirt:new FormControl(null),
      gender:new FormControl(null),
      countryID:new FormControl(null),
      receiveNewsLetters:new FormControl(null)
     });
  }
  ngOnInit(): void {

    this.countries = this.countriesService.getCountries();
    this.signUpForm = new FormGroup({
     firstName:new FormControl(null),
     lastName:new FormControl(null),
     email:new FormControl(null),
     mobile:new FormControl(null),
     dateOfBirt:new FormControl(null),
     gender:new FormControl(null),
     countryID:new FormControl(null),
     receiveNewsLetters:new FormControl(null)
    });
    this.signUpForm.valueChanges.subscribe((value:any)=>{

    });
  }
}
