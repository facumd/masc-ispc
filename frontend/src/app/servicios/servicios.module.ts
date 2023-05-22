import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ProductosComponent } from './pages/servicios/productos/productos.component';

@NgModule({
  declarations: [ProductosComponent],
  imports: [CommonModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
