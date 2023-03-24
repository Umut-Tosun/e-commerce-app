import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Order } from '../model/Order';
import { RoleList } from '../model/Role.DataSource';
import { authUser } from '../model/UserAuth';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order?: Order;
  name: any
  date: any
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) {
    if (authUser.length < 1) { this.router.navigate(['/login']); }
    else if (authUser[0].Role!=RoleList[0])this.router.navigate(['']);

  }
  ngOnInit(): void {
    this.getOrder();
    this.name = this.order?.CartList[0].user.FirstName + ' ' + this.order?.CartList[0].user.LastName;
    this.date = this.order?.OrderDate;

  }

  getOrder() {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(Number(id))
      .subscribe(order => this.order = order)
  }
  getCartList() {
    return this.order?.CartList;
  }
}
