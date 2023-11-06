import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  userLoginStatus:boolean = true;

 alluser:[] = [];

  constructor(private http:AuthService, private route:Router){}


  ngOnInit(){
    
    this.getData();
    this.isUserLoggedin();

  }

  getData(){
    this.http.getAlluserData().subscribe((res:any)=>{
      this.alluser = res;
      console.log(this.alluser);
    })
  }

//checking user logged in or not based on boolean values
  isUserLoggedin():any{
  
   if(this.http.isLoggedIn()==true){
    this.userLoginStatus  = true;
    }

    else{
      this.userLoginStatus = false;
      
    }
 
  }


}
