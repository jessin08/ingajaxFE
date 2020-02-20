import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationServeService} from '../services/authentication-serve.service'
import { ProductDetails } from '../models/loginResponse';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  isLoggedIn:boolean;
  subscription:Subscription
  constructor(private authenticationService:AuthenticationServeService,private router:Router) { }

  ngOnInit(): void {
    this.subscription=this.authenticationService.currentUser.subscribe((userProductDetails)=>{
      //@ts-ignore
      if(userProductDetails && userProductDetails.productDetails.length){
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
