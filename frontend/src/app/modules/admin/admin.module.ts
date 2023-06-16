import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { CreateProductComponent } from './pages/create-product/create-product.component';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';

@NgModule({
  declarations: [CreateProductComponent, DeleteProductComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
