import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: [],
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor(private router: Router) {}

  viewProductDetail(slug: string) {
    this.router.navigate(['/product', slug]);
  }
}
