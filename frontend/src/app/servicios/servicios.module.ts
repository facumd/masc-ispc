import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/servicios/productos/productos.component';

@NgModule({
  declarations: [ServiciosComponent, ProductosComponent],
  imports: [CommonModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
