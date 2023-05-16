import { Component, Input } from '@angular/core';
import { Productos } from 'src/app/servicios/models/productos.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent {
  /* @Input() productos: Productos = {
    id: 0,
    title: '',
    price: 0,
    images: [],
  }; */

  @Input() productos!: Productos;
}
