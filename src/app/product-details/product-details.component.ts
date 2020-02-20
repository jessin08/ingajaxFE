import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../models/loginResponse';
import { AuthenticationServeService } from '../services/authentication-serve.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  userProductsDetails:ProductDetails;
  subscription:Subscription;
  isProductSelected
  constructor(private authenticationService:AuthenticationServeService) { }

  ngOnInit(): void {
    this.subscription=this.authenticationService.currentUser.subscribe((userProductDetails)=>{
      //@ts-ignore
      if(userProductDetails && userProductDetails.productDetails.length){
        //@ts-ignore
        this.userProductsDetails = userProductDetails.productDetails;
      } 
    });
  }

  selectedProduct(product){

  }

}
