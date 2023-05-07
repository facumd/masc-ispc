import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';

@NgModule({
  declarations: [CategoriasComponent],
  imports: [CommonModule, ServiciosRoutingModule],
})
export class ServiciosModule {}
