
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartList } from '../model/Cart.DataSource';
import { OrderList } from '../model/Order.DataSource';
import { Product } from '../model/Product';
import { User } from '../model/User';
import { authUser } from '../model/UserAuth';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  @Input() user: User | undefined;
  index: any;
  constructor(
    private route: ActivatedRoute) {

  }

  getOrders() {
    return OrderList.filter(x => x.User == authUser[0])
  }
  cancelOrder(id: any) {
    this.index = OrderList.findIndex(x => x.Id == id);
    OrderList[this.index].CartList.forEach((item) => {
      item.Product.Stock -= -Number(item.Quantity);
    })
    OrderList.splice(this.index, 1);
  }

}
