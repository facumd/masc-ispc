import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './pages/store/store.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



@NgModule({
  declarations: [
    StoreComponent,
    CartComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
