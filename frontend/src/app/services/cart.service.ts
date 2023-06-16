import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProductDetail } from '../models/productDetail.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: ProductDetail[] = [];
  private cartItemsSubject = new BehaviorSubject<ProductDetail[]>([]);

  constructor() {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  addToCart(product: ProductDetail) {
    this.cartItems.push(product);
    this.saveCartItemsToLocalStorage();
    this.cartItemsSubject.next(this.cartItems);
  }

  private saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeFromCart(product: ProductDetail) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartItemsToLocalStorage();
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartItems(): ProductDetail[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.saveCartItemsToLocalStorage();
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItemsObservable() {
    return this.cartItemsSubject.asObservable();
  }
}
