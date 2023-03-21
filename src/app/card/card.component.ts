import { Component } from '@angular/core';
import { CartList } from '../model/Cart.DataSource';
import { UserList } from '../model/User.DataSource';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  getCartList() {
    return CartList.filter(x => x.Status == true);
  }

  getUserList() {
    return UserList;
  }

}
