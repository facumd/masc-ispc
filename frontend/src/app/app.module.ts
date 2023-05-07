import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { PagosModule } from './pagos/pagos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { TerminosycondicionesComponent } from './home/pages/terminosycondiciones/terminosycondiciones.component';

@NgModule({
  declarations: [AppComponent, TerminosycondicionesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    ServiciosModule,
    AuthModule,
    PagosModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
