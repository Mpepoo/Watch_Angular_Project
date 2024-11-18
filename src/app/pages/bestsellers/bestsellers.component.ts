import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { RouterLink } from '@angular/router';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css'

  //  template:`
  
  


 
        
  
  //  `
})
export class BestsellersComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  
  cart: Product[] = [];
  cartCount = 0;

  ngOnInit(): void {
    this.loadCart();
    this.renderProducts();
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    this.updateCartCount();
  }

  renderProducts(): void {
    // Angular will handle DOM updates, no need for manual DOM manipulation
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.updateCartCount();
  }

  updateCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCount();
  }

  updateCartCount(): void {
    this.cartCount = this.cart.reduce((total, item) => total + (item.quantity || 0), 0);
    const cartCounters = document.querySelectorAll('#counter, #counter2');
    cartCounters.forEach(counter => {
      counter.textContent = this.cartCount.toString();
    });
  }

  // addToCart(productId: number): void {
  //   const product = this.products.find(p => p.id === productId);
  //   if (!product) return;

  //   const cartItem = this.cart.find(item => item.id === productId);
  //   if (cartItem) {
  //     cartItem.quantity = (cartItem.quantity || 0) + 1;
  //   } else {
  //     this.cart.push({ ...product, quantity: 1 });
  //   }

  //   this.updateCart();
  // }

  addToCart(productId: number): void {
    this.productService.addToCart(productId);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.updateCart();
  }

 

  
}
