import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-product-data',
  templateUrl: './selected-product-data.component.html',
  styleUrls: ['./selected-product-data.component.css']
})
export class SelectedProductDataComponent implements OnInit {
  subscription:Subscription;
  selectedProduct={};
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.subscription = this.productService.selectedProduct.subscribe(selectedProduct=>{
      if(selectedProduct.group){
        this.selectedProduct = selectedProduct;
        console.log(selectedProduct)
      }
    })
  }

}
