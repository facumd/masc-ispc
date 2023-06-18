import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './pages/store/store.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccessDeniedComponent } from 'src/app/shared/access-denied/access-denied.component';
import { SuccessfulCheckoutComponent } from 'src/app/shared/successful-checkout/successful-checkout.component';
import { CancelCheckoutComponent } from 'src/app/shared/cancel-checkout/cancel-checkout.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';

import { AuthGuard } from 'src/app/guards/user-auth.guard';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  {
    path: 'success',
    component: SuccessfulCheckoutComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'cancel',
    component: CancelCheckoutComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
