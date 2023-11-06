import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login';
import { Observable } from 'rxjs';
import { JwtTokenModel } from '../models/jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // Login Api Url
  private UserloginApi = "https://freeapi.miniprojectideas.com/api/User/Login";

  // Add User Api  Url
  private addUser = "http://122.170.12.63:90/api/Organization/add/Organization";

  //getAllUser Api Url

  private getAllusers = "https://freeapi.miniprojectideas.com/api/User/GetAllUsers";

  //get User by Id
  private getUserbyId = "https://freeapi.miniprojectideas.com/api/User/GetUserByUserId?userId=2";

  constructor(private http: HttpClient) { }



  //login api calling with Model interface Login Interface and Responce Interface 
  loginClick(obj: any): Observable<JwtTokenModel> {
    return this.http.post<JwtTokenModel>(this.UserloginApi, obj)

  }


  //logging out clearing token from local storage 
  logOut() {
    localStorage.clear();
  }


  //Get Api for All Users 

  getAlluserData(): Observable<any> {
    return this.http.get(this.getAllusers);
  }


  //checking weather user logged in or not 

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }


}
