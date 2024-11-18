import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../product.service';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../page-title/page-title.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, PageTitleComponent, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  
  cart: Product[] = [];
  totalPrice = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartObservable.subscribe(cart => {
      this.cart = cart;
      this.updateTotalPrice();
    });
    this.productService.loadCart();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);
  }

  updateCart(): void {
    this.cart.forEach(product => {
      const quantityInput = document.querySelector(`input[data-product-id="${product.id}"]`) as HTMLInputElement;
      if (quantityInput) {
        product.quantity = parseInt(quantityInput.value);
      }
    });
    this.productService.updateCart();
  }

  removeCartItem(productId: number): void {
    this.productService.removeFromCart(productId);
    this.updateTotalPrice();
  }
        
}
