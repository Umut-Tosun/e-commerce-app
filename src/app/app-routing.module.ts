import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }
