import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  public selectedProductSubject: BehaviorSubject<any>;
  public selectedProduct: Observable<any>;
  constructor(private http:HttpClient) { 
    this.selectedProductSubject = new BehaviorSubject<any>({group:{},name:{}});
    
    this.selectedProduct = this.selectedProductSubject.asObservable();
  }

  public setData(data){
    this.selectedProductSubject.next(data)
  }
}
