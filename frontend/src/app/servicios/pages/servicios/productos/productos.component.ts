import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit{
  productos : any = [];
  constructor(private datos:DatosService) {
    this.datos.getDatos().subscribe({
        next: (productosData) => {
            this.productos= productosData
        },
        error: (errorData) => {
            console.error(errorData);
        }
    });
   }

  ngOnInit(): void {
  }
}
