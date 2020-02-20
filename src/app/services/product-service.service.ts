import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private selectedProductSubject: BehaviorSubject<null>;
  public selectedProduct: Observable<null>;
  constructor(private http:HttpClient) { }
}
