import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product?: Product;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(Number(id))
      .subscribe(product => this.product = product)
  }
}
