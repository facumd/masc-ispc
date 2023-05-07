import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SubcategoriasComponent } from './pages/subcategorias/subcategorias.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    ProductosComponent,
    SubcategoriasComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
