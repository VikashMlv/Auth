import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //gettting token from local storage
    const getToken = localStorage.getItem('token')

    //clonning request
    const cloneRequest = request.clone({
    //setting headers token 
      setHeaders: {
        Authorization: `bearer ${getToken}`
      }
    })                 //instead of original request we are sending clone request with headers 
    return next.handle(cloneRequest);
  }
}
