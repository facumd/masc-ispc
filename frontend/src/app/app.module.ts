import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';

import { HomeRoutingModule } from './modules/home/home-routing.moduke';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    HomeRoutingModule,
    AuthModule,
    AuthRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
