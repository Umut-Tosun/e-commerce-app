import { getLocaleDateTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { Cart } from '../model/Cart';
import { CartList } from '../model/Cart.DataSource';
import { Order } from '../model/Order';
import { OrderList } from '../model/Order.DataSource';
import { User } from '../model/User';
import { UserList } from '../model/User.DataSource';
import { authUser } from '../model/UserAuth';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../app.component.css']
})
export class CardComponent {
  totalPrice: number = 0;
  isAnyUserAuthentication: boolean = false;
  currentDate:any;

  checkAnyUserAuthentication() {
    if (authUser.length > 0) {
      this.isAnyUserAuthentication = true;
      return this.isAnyUserAuthentication;
    }
    else {
      this.isAnyUserAuthentication = false;
      return this.isAnyUserAuthentication;
    }
  }

  getCartList() {
    if (authUser.length > 0)
      return CartList.filter(x => x.Status == true && x.user == authUser[0]);
    else
      return CartList.filter(x => x.Status == true &&x.user==UserList[2]); //guest
  }

  getUserList() {
    return UserList;
  }

  removeCart(id: any) {
    CartList[CartList.findIndex((cart) => cart.Id == id)].Status = false;
  }

  removeOrder() {
    CartList.forEach((item) => {
      item.Status = false;
    })
  }

  getTotalPrice() {
    this.totalPrice = 0;
    CartList.filter((cart) => cart.Status == true).forEach((item: any) => {
      this.totalPrice -= -item.TotalPrice;
    })
    return this.totalPrice;
  }

  confirmOrder() {
    this.currentDate = new Date();

    OrderList.push(new Order(OrderList.length + 1,this.currentDate, UserList[UserList.findIndex((user) => user == authUser[0])], CartList.filter(x => x.Status == true), this.totalPrice))

    CartList.filter(x => x.Status == true).forEach((cart) => {
      cart.Status = false;
      cart.Product.Stock-=Number(cart.Quantity);
    })
  }

  plusBasket(id: any) {
    CartList.forEach((item) => {
      if (item.Product?.Id == id) {
        if (Number(item.Quantity) < Number(item.Product?.Stock)) {
          item.Quantity = Number(item.Quantity) + 1;
          item.TotalPrice = Number(item.Quantity) * Number(item.Product?.UnitPrice);
        }
      }
    })
  }
  minusBasket(id: any) {
    CartList.forEach((item) => {
      if (item.Product?.Id == id) {
        if (Number(item.Quantity) > 1) {
          item.Quantity = Number(item.Quantity) - 1;
          item.TotalPrice = Number(item.Quantity) * Number(item.Product?.UnitPrice);
        }
      }
    })
  }

}
