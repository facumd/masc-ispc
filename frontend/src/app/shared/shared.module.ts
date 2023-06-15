import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { SuccessfulCheckoutComponent } from './successful-checkout/successful-checkout.component';
import { CancelCheckoutComponent } from './cancel-checkout/cancel-checkout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    SuccessfulCheckoutComponent,
    CancelCheckoutComponent,
  ],
  exports: [NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
