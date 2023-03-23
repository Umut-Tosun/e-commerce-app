import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './model/Order';
import { OrderList } from './model/Order.DataSource';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  getOrderById(id:number):Observable<Order | undefined>{
    return of(OrderList.find(deger=>deger.Id===id));
  }
}
