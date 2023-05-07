import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CategoriasComponent,
  OtrosComponent,
  VisualesComponent,
} from './index.module';
import { EscenicasComponent } from './pages/index.component';
import { MusicaComponent } from './pages/categorias/subcategorias/musica/musica.component';

const routes: Routes = [
  { path: 'servicios/categorias', component: CategoriasComponent },
  { path: 'servicios/categorias/escenicas', component: EscenicasComponent },
  { path: 'servicios/categorias/musica', component: MusicaComponent },
  { path: 'servicios/categorias/visuales', component: VisualesComponent },
  { path: 'servicios/categorias/otros', component: OtrosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
