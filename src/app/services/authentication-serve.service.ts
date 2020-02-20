import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {LoginResponse, ProductDetails} from '../models/loginResponse'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServeService {
  private currentUserSubject: BehaviorSubject<ProductDetails>;
  public currentUser: Observable<ProductDetails>;

  constructor(private http:HttpClient) {
      this.currentUserSubject = new BehaviorSubject<ProductDetails>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): ProductDetails {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${environment.loginApiUrl}`, { username, password })
          .pipe(map((userDetails:LoginResponse) => {
              // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
              // userDetails.authdata = window.btoa(username + ':' + password);
              localStorage.setItem('token',userDetails.userToken);
              localStorage.setItem('currentUser', JSON.stringify(userDetails));
              this.currentUserSubject.next(userDetails.productDetails);
              return userDetails;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
