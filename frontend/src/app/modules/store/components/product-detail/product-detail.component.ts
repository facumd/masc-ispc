import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ProductDetail } from 'src/app/models/productDetail.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [],
})
export class ProductDetailComponent {
  product?: ProductDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public sanitizer: DomSanitizer,
    public router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.getProductDetail(slug);
    });
  }

  getProductDetail(slug: string) {
    this.productService.getProductBySlug(slug).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        if (error.status === 404) {
          this.router.navigate(['/not-found']);
        } else {
          console.error('An error occurred:', error);
        }
      }
    );
  }

  addToCart(product: ProductDetail | undefined) {}
}
