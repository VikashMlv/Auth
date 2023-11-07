import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/core/models/login';
import { JwtTokenModel } from 'src/app/core/models/jwt-token';
import { catchError } from 'rxjs/operators';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  constructor(private httpService: AuthService, private httpRouter: Router,private auth : AuthGuard) { }

  // Reactive Form code with validation 

  userLogin = new FormGroup({
    emailId: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })


  //onLogin Method 

  onLogin() {
    this.httpService.loginClick(this.userLogin.value).subscribe((res: JwtTokenModel) => {
      localStorage.setItem('token', res.data.token)
      console.log(res);
      this.httpRouter.navigate(['/dashboard'])
      
       //catching error 
    }, (error) => {            
      alert(error);
      console.error('error occured', error);

    })

  }

    //getting input refrence for applying validation 

  get emailId() {
    return this.userLogin.get('emailId')!;
  }

  get password() {
    return this.userLogin.get('password')!;
  }


}



