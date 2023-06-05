import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from '../account/account/account.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
