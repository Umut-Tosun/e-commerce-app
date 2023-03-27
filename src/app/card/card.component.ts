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
      return CartList.filter(x => x.Status == true && x.user == authUser[0] );
    else
      return CartList.filter(x => x.Status == true && x.user == UserList[1]); //guest
  }

  getUserList() {
    return UserList;
  }

  removeCart(id: any) {
    CartList[CartList.findIndex((cart) => cart.Id == id)].Status = false;
  }

  removeOrder() {
    if (authUser.length > 0) {
      if (CartList.filter(x => x.Status == true && x.user == authUser[0]).length > 0) {
        return CartList.filter(x => x.Status == true && x.user == authUser[0]).forEach((item) => {
          item.Status = false;
        }); //user
      }
      else {
        alert('sepette ürün yok')
      }
    }
    else {
      if (CartList.filter(x => x.Status == true && x.user == authUser[2]).length > 0) {
        return CartList.filter(x => x.Status == true && x.user == UserList[2]).forEach((item) => {
          item.Status = false;
        }); //guest
      }
      else {
        alert('sepette ürün yok')
      }

    }


  }

  getTotalPrice() {
    this.totalPrice = 0;
    CartList.filter((cart) => cart.Status == true && cart.user == authUser[0] || cart.user == UserList[1]).forEach((item: any) => {
      this.totalPrice -= -item.TotalPrice;
    })
    return this.totalPrice;
  }
  currentDate?: Date;
  confirmOrder() {
    if (this.totalPrice > 0) {
      this.currentDate = new Date();

      OrderList.push(new Order(OrderList.length + 1, this.currentDate, UserList[UserList.findIndex((user) => user == authUser[0])], CartList.filter(x => x.Status == true), this.totalPrice))

      CartList.filter(x => x.Status == true && x.user == authUser[0]).forEach((cart) => {
        cart.Status = false;
        cart.Product.Stock -= Number(cart.Quantity);
      })
    }
    else {
      alert('sepette ürün yok')
    }
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