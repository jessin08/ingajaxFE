import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../models/loginResponse';
import { AuthenticationServeService } from '../services/authentication-serve.service';
import { Subscription } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  userProductsDetails:ProductDetails;
  subscription:Subscription;
  isSelected:boolean;
  constructor(private authenticationService:AuthenticationServeService , private productDetailsService:ProductServiceService) { }

  ngOnInit(): void {
    this.subscription=this.authenticationService.currentUser.subscribe((userProductDetails)=>{
      //@ts-ignore
      if(userProductDetails && userProductDetails.productDetails.length){
        //@ts-ignore
        this.userProductsDetails = userProductDetails.productDetails;
      } 
    });
  }

  selectedProduct(group,productName){
    this.isSelected=true;
    this.productDetailsService.selectedProductSubject.next({group:group,name:productName});
  }

}
