import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [{ path: 'carrito', component: CarritoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosRoutingModule {}
