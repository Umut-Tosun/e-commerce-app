import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CardComponent } from './card/card.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:ProductsComponent},
  {path:"productDetail/:id",component:ProductDetailComponent},
  {path:"orderHistory",component:OrderHistoryComponent},
  {path:"card",component:CardComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profile/order-history",component:OrderHistoryComponent},
  {path:"profile/order-history/order-detail/:id",component:OrderDetailComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"add-category",component:AddCategoryComponent},
  {path:"admin-products",component:AdminProductsComponent},
  {path:"admin-categories",component:AdminCategoriesComponent},
  {path:"edit-product/:id",component:EditProductComponent},
  {path:"edit-category/:id",component:EditCategoryComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }
