import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/core/models/login';
import { JwtTokenModel } from 'src/app/core/models/jwt-token';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private httpService: AuthService, private httpRouter: Router) { }

  // Reactive Form code with validation 

  userLogin = new FormGroup({
    emailId: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })


  //onLogin Method 

  onLogin() {
    this.httpService.loginClick(this.userLogin.value).subscribe((res: JwtTokenModel) => {
      localStorage.setItem('getToken', res.data.token)
      console.log(res);
      this.httpRouter.navigate(['/dashboard'])

    }, (error) => {            //catching error 
      alert(error);
      console.error('error angular', error);

    })

  }


}



