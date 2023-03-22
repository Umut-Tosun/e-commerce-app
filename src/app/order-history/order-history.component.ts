import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderList } from '../model/Order.DataSource';
import { User } from '../model/User';
import { authUser } from '../model/UserAuth';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  @Input() user:User| undefined;

   constructor(
    private route:ActivatedRoute){
      
    }

    getOrders(){
      return OrderList.filter(x=>x.User==authUser[0])
    }
    getCarts(id:any){
      return OrderList.filter(x=>x.User==authUser[0])[id].CartList
    }
 

}
