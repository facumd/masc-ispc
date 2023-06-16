import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

import { CartService } from 'src/app/services/cart.service';
import { ProductDetail } from 'src/app/models/productDetail.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItems: ProductDetail[] = [];
  totalAmount: number = 0;
  public stripePublicKey: string = environment.stripePublicKey;

  constructor(private cartService: CartService, private http: HttpClient) {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalAmount();
  }

  removeFromCart(product: ProductDetail) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalAmount();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.calculateTotalAmount();
  }

  private calculateTotalAmount() {
    this.totalAmount = this.cartItems.reduce(
      (total, item) => total + Number(item.price),
      0
    );
  }

  onCheckout(): void {
    this.http
      .post('http://localhost:8000/api/v1/payment/checkout', {
        items: this.cartItems,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(this.stripePublicKey);
        stripe?.redirectToCheckout({ sessionId: res.id });
      });
  }
}
