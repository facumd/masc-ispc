import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { HomeRoutingModule } from './home-routing.moduke';

@NgModule({
  declarations: [HomeComponent, ContactComponent, AboutUsComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
