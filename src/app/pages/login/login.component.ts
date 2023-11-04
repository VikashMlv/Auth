import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLoginForm = FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }
  // User credentials for user login form 
  credentials = {
    email: '',
    password: "",
    organizationUrl: ''

    // Reactive Form code 






  }




}



