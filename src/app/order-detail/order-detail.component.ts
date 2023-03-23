import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../model/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  @Input() order?: Order;
  name:any
  date:any
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getOrder();
    this.name=this.order?.CartList[0].user.FirstName+' '+this.order?.CartList[0].user.LastName;
    this.date=this.order?.OrderDate;

  }

  getOrder() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(Number(id))
      .subscribe(order => this.order = order)
  }
  getCartList(){
    return this.order?.CartList;
  }
}
