import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryList } from '../model/Category.DataSource';
import { Product } from '../model/Product';
import { ProductList } from '../model/Product.DataSource';
import { RoleList } from '../model/Role.DataSource';
import { authUser } from '../model/UserAuth';
import { ProductsService } from '../products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product?: Product;
  index:any;
  Swal = Swal;
  
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    if (authUser.length < 1) this.router.navigate(['/login'])
    else if (authUser[0].Role != RoleList[1]) this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getCategories(){
    return CategoryList;
  }
  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id))
      .subscribe(product => this.product = product)
  }
  editProduct(name:any,desc:any,uPrice:any,stock:any,iPath:any,cId:any){
   this.index=ProductList.findIndex((product)=>product.Id==this.product?.Id);

   ProductList[this.index].Name=name;
   ProductList[this.index].Description=desc;
   ProductList[this.index].UnitPrice=uPrice;
   ProductList[this.index].Stock=stock;
   ProductList[this.index].ImagePath=iPath;

   Swal.fire("Bilgiler Başarıyla Değiştirildi.", "Güncelleme Başarılı!", "success");

   this.router.navigate(['/admin-products'])
  }
}
