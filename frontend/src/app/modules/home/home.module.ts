import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.moduke';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent, ContactComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
