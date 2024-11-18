import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, image: '/images/product-3.png' },
    { id: 2, name: 'Product 2', price: 15, image: './images/product-8.png' },
    { id: 3, name: 'Product 3', price: 20, image: '/images/product-5.png' },
    { id: 4, name: 'Product 4', price: 50, image: '/images/product-6.png' },
    { id: 5, name: 'Product 5', price: 80, image: '/images/product-7.png' },
    { id: 6, name: 'Product 6', price: 100, image: '/images/product-8.png' },
    { id: 7, name: 'Product 7', price: 150, image: '/images/product-5.png' },
    { id: 8, name: 'Product 8', price: 200, image: '/images/product-6.png' }
  ];
  private cart: Product[] = [];
  private cartCount = 0;
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cartObservable = this.cartSubject.asObservable();
  
  getProducts(): Product[] {
    return this.products;
  }
  getCart(): Product[] {
    return this.cart;
  }
  sortProducts(sortBy: string): Product[] {
    if (sortBy === 'low-to-high') {
      return this.products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-to-low') {
      return this.products.sort((a, b) => b.price - a.price);
    }
    return this.products;
  }

 

loadCart(): void {
    const cartString = localStorage.getItem('cart');
    this.cart = cartString ? JSON.parse(cartString) : [];
    this.cartSubject.next(this.cart);
    this.updateCartCount();
  }

  updateCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
    this.updateCartCount();
  }

  updateCartCount(): void {
    this.cartCount = this.cart.reduce((total: number, item: Product) => total + (item.quantity || 0), 0);
    const cartCounters = document.querySelectorAll('#counter, #counter2');
    cartCounters.forEach(counter => {
      counter.textContent = this.cartCount.toString();
    });
    // this.cartUpdated.next();
  }

  addToCart(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = this.cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity = (cartItem.quantity || 0) + 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.updateCart();
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((item: Product) => item.id !== productId);
    this.updateCart();
  }

  renderProducts(productsToDisplay: Product[]): void {
    const productContainer = document.getElementById('products');
    if (productContainer) {
      productContainer.innerHTML = ''; // Clear existing products
      productsToDisplay.forEach((product: Product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <a href="single-product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          <p><a href="single-product.html?id=${product.id}">${product.name}</a></p>
          <p class="price">$${product.price}</p>
          <button class="add-to-cart" data-product-id="${product.id}">Add to cart</button>
        `;
        productContainer.appendChild(productElement);
      });
    } else {
      console.error("Product container element not found.");
    }
  }

  loadCartItems(): void {
    const cartString = localStorage.getItem('cart');
    const cart = cartString ? JSON.parse(cartString) : [];
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
      cartItems.innerHTML = '';
      cart.forEach((product: Product) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          ${product.name} - $${typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'} x ${product.quantity}
          <button class="remove-from-cart" data-product-id="${product.id}">Remove</button>
        `;
        cartItems.appendChild(li);
      });
    }
    document.querySelectorAll('.remove-from-cart').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        if (productId) {
          this.removeFromCart(Number(productId));
        }
      });
    });
  }

  
}
