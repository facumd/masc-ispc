import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  carrito : any = [];
  constructor(private datos:DatosService) {
    this.datos.getDatos().subscribe({
        next: (carritoData) => {
            this.carrito= carritoData
        },
        error: (errorData) => {
            console.error(errorData);
        }
    });
   }

  ngOnInit(): void {
  }
}
