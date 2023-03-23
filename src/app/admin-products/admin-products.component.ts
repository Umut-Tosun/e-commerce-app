import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from '../model/Product.DataSource';
import { RoleList } from '../model/Role.DataSource';
import { authUser } from '../model/UserAuth';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  constructor(private router: Router) {
    if (authUser.length < 1) this.router.navigate(['/login'])
    else if (authUser[0].Role != RoleList[1]) this.router.navigate(['/login'])
  }
  getProducts() {
    return ProductList.filter(x=>x.Status==true);
  }
  removeProduct(id: any) {
    if(confirm('Ürün Silinsin mi ?'))
    {
      ProductList[ProductList.findIndex((product)=>product.Id==id)].Status=false;
    }
   
  }
}
