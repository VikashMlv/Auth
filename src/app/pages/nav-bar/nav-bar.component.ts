import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private http: AuthService, private route: Router) { }


  ngOnInit() {
    this.checkUserStatus();
    console.log(this.checkUserStatus());

  }


  checkUserStatus(): boolean {
    return this.http.isLoggedIn();

  }

  logOut() {
    this.http.logOut();
    this.route.navigate(['/login'])
  }



}
