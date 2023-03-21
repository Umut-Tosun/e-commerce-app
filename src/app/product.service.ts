import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Product } from './model/Product';
import { ProductList } from './model/Product.DataSource';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  getProductList():Observable<Product[]>{
    return of(ProductList.filter(x=>x.Stock>0));
  }

  getProductById(id:number):Observable<Product | undefined>{
    return of(ProductList.find(deger=>deger.Id===id));
  }
}
