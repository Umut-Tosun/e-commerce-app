import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

registerLocaleData(localeTr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductDetailComponent,
    CardComponent,
    LoginComponent,
    OrderHistoryComponent,
    RegisterComponent,
    FooterComponent,
    ProfileComponent,
    OrderDetailComponent,
    AddProductComponent,
    AddCategoryComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    EditProductComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'tr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
