import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';

@NgModule({
  declarations: [CategoriasComponent, ProductosComponent],
  imports: [CommonModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
