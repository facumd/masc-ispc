import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent {
  slug: string = '';
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteProduct(slug: string): void {
    this.productService.deleteProduct(slug).subscribe(
      () => {
        alert('Producto eliminado con éxito.');
        this.fetchProducts();
      },
      (error: any) => {
        console.log('Error deleting product:', error);
      }
    );
  }
}
