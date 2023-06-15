import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductDetail } from '../models/productDetail.model';
import { Subcategories } from '../models/subcategories.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: String = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/api/v1/product/list`);
  }

  getProductBySlug(slug: string): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.url}/api/v1/product/${slug}`);
  }

  createProduct(product: ProductDetail): Observable<ProductDetail> {
    return this.http.post<ProductDetail>(
      `${this.url}/api/v1/product/list`,
      product
    );
  }

  deleteProduct(slug: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/api/v1/product/${slug}`);
  }

  getSubcategories(): Observable<Subcategories[]> {
    return this.http.get<Subcategories[]>(
      `${this.url}/api/v1/subcategory/list`
    );
  }
}
