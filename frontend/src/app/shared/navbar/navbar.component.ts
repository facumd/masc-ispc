import { CartService } from 'src/app/services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductDetail } from 'src/app/models/productDetail.model';

import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  private userSub!: Subscription;
  isDarkMode = false;
  cartItems: ProductDetail[] = [];
  itemsInCart: number = 0;
  private cartItemsSub!: Subscription;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.themeService.initializeDarkMode();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
      this.isAdmin = user?.is_admin ? true : false;
    });

    this.cartItems = this.cartService.getCartItems();
    this.itemsInCart = this.cartItems.length;

    this.cartItemsSub = this.cartService
      .getCartItemsObservable()
      .subscribe((cartItems) => {
        this.cartItems = cartItems;
        this.itemsInCart = this.cartItems.length;
      });
  }

  toggleDarkMode() {
    setTimeout(() => {
      const currentMode = this.themeService.isDarkMode();
      this.isDarkMode = !currentMode;
      if (this.isDarkMode) {
        this.themeService.enableDarkMode();
      } else {
        this.themeService.enableLightMode();
      }
    }, 100);
  }

  goToCreateProduct() {
    this.router.navigate(['/admin/create-product']);
  }

  goToDeleteProduct() {
    this.router.navigate(['/admin/delete-product']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
