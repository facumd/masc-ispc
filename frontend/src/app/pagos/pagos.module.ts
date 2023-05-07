import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { CarritoComponent } from './pages/carrito/carrito.component';


@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule
  ]
})
export class PagosModule { }
