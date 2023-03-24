import { Component } from '@angular/core';
import { CategoryList } from '../model/Category.DataSource';
import { Product } from '../model/Product';
import { ProductList } from '../model/Product.DataSource';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-homeproduct',
  templateUrl: './homeproduct.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeproductComponent {
  categoryId: any = -1;
  productList: Product[] = [];
  constructor(private productService: ProductsService) { }

  
  ngOnInit(): void {
    this.getProductsFromService();
  }

  //product list içini servisten dolduruyoruz.
  getProductsFromService(): void {
    this.productService.getProductList()
      .subscribe(product => {
        this.productList = product;
      });
  }

  categoryList() {
    return CategoryList.filter(x=>x.Status==true);
  }

  //bu method kategori filtrelemesi saglıyor
  filterProduct() {
    if (this.categoryId == -1) return ProductList;
    return ProductList.filter(x => x.Category.Id == this.categoryId && x.Status==true);
  }
   
  //kategori filtreleme için seçime id değiştiriyoruz
  changeId(id: any) {
    this.categoryId = id;

  }
}
