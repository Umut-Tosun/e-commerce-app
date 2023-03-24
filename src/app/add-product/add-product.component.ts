import { Component } from '@angular/core';
import { CategoryList } from '../model/Category.DataSource';
import { Product } from '../model/Product';
import { ProductList } from '../model/Product.DataSource';
import { Router } from '@angular/router';
import { authUser } from '../model/UserAuth';
import { Role } from '../model/Role';
import { RoleList } from '../model/Role.DataSource';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  selectedCategory:any;
  Swal = Swal;

  constructor(private router: Router) {
    if(authUser.length<1)this.router.navigate(['/login'])
    else if(authUser[0].Role!=RoleList[1])this.router.navigate(['/login'])
   }

getCategories(){
  return CategoryList.filter(x=>x.Status==true);
}
addProduct(name:any,desc:any,uPrice:any,stock:any,iPath:any,cId:any){
  this.selectedCategory=CategoryList.find((c)=>c.Id==cId);
  ProductList.push(new Product(ProductList.length+1,this.selectedCategory,name,desc,iPath,uPrice,stock,true))
  Swal.fire("Ürün Ekleme Başarılı", "Ürün Eklendi!", "success");
  this.router.navigate(['admin-products']);
}
}
