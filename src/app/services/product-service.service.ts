import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  public selectedProductSubject: BehaviorSubject<{}>;
  public selectedProduct: Observable<{}>;
  constructor(private http:HttpClient) { }

  public setData(data){
    this.selectedProductSubject.next(data)
  }
}
