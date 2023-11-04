import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


//   id: "email": hiren@prishusoft.com
// password: Hiren@123$

  // Login Api Url
  public UserloginApi = "http://122.170.12.63:90/api/auth/login";

  // Add organization Api  Url
  public addorgApi = "http://122.170.12.63:90/api/Organization/add/Organization";
  
  //getAllOrganization Api Url

  public getAllOrgApi = "http://122.170.12.63:90/api/Organization/getAllOrganization";

  constructor() { }
}
