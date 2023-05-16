import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from 'src/app/servicios/models/productos.model';

@Component({
  selector: 'app-actores',
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent {
  http = inject(HttpClient);
  productos: Productos[] = [];

  ngOnInit() {
    this.http
      .get<Productos[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.productos = data;
      });
  }
}
