import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Producto } from '../interface/productos.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  products: any[] = [];

  constructor(private datos: DatosService) {
    this.datos.getDatos().subscribe({
      next: (response) => {
        this.products = response;
        console.log(this.products);
      },
      error: (errorData) => {
        console.error(errorData);
      },
    });
  }

  ngOnInit(): void {}
}
