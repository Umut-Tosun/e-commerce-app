import { Component } from '@angular/core';
import { Product } from '../model/Product';
import {ProductsService} from '../products.service'
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  productList:Product[]=[];
  constructor(private productService:ProductsService){}

  ngOnInit():void{
    this.getProductsFromService();
  }

   getProductsFromService():void{
     this.productService.getProductList()
     .subscribe(product=>{
        this.productList=product;
     });
   }

}
