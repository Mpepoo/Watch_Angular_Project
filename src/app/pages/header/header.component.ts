import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService, Product} from '../../product.service';


// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     quantity?: number;
//   }
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  // templateUrl: './header.component.html',
  // styleUrl: './header.component.css'
  template: `
  <section>
        <header>
            <nav id="nav-bar">
                <div class="menu-div" onclick="openNav()" id="side_bar_div">
                    <img src="/images/menu.svg" alt="Menu">
                </div>
                <div class="logo-div">
                    <a class="link sp-link" href="index.html">
                        <p class="Logo-p"><span>T</span>ime<span>l</span>ess</p>
                    </a>
                </div>

                <div class="nav-div">
                    <ul>
                        <li><a class="link" routerLink="home">Home</a></li>
                        <li><a class="link" routerLink="about">About</a></li>
                        <li><a class="link" routerLink="shop">Shop</a></li>
                        <li><a class="link" routerLink="contact">Contacts</a></li>
                    </ul>
                </div>
                <div class="sign-div">
                    <div class="login-div">
                        <img class="user-img" src="/images/user.svg" alt="User">
                        <a class="link" routerLink="login">Sign Up</a>
                    </div>
                    <div class="cart-header">
                        <div class="cart-div">
                            <a routerLink="cart"><span class="responsive-counter" id="counter2"> 0 </span></a>
                            <img class="cart-img" src="/images/shopping-bag-open.svg" alt="Cart">

                            <a class="link sp" routerLink="cart">Cart ( <span id="counter"> 0 </span> )</a>

                            <div class="cart-dropdown" id="cart-dropdown">
                                                                <ul id="cart-items">
                                    <li *ngFor="let item of cart">
                                      <img [src]="item.image" [alt]="item.name">
                                      {{ item.name }} - {{'$' +item.price }} x {{ item.quantity }}
                                      <button (click)="removeFromCart(item.id)">Remove</button>
                                    </li>
                                  </ul>
                                <div class="cart-dropdown-btns">
                                    <a routerLink="cart" class="cart-button">View cart</a>
                                    <a routerLink="checkout" class="checkout-button">Checkout</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </section>

    <!-- Side navigation -->
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <ul>
           <li><a class="link" routerLink="home">Home</a></li>
          <li><a class="link" routerLink="about">About</a></li>
          <li><a class="link" routerLink="shop">Shop</a></li>
          <li><a class="link" routerLink="contact">Contacts</a></li>
            <li><a class="link" routerLink="login">Sign Up</a></li>
        </ul>
    </div>
  `
})
export class HeaderComponent implements OnInit{
  // cartCount = 0;
  // // cart: Product[] = [];

  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.productService.cartObservable.subscribe(cart => {
  //     this.updateCartCount(cart);
  //   });
  //   this.productService.loadCart();
  // }

  // updateCartCount(cart: Product[]): void {
  //   this.cartCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);
  // }

  // removeFromCart(productId: number): void {
  //   this.productService.removeFromCart(productId);
  // }


  cartCount = 0;
  cart: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cart = this.productService.getCart(); // Load cart on init
    this.updateCartCount();
    this.productService.loadCartItems(); // Load cart items
  }

  updateCartCount(): void {
    this.cartCount = this.productService.getCart().length;
    const cartCounters = document.querySelectorAll('#counter, #counter2');
    cartCounters.forEach(counter => {
      counter.textContent = this.cartCount.toString();
    });
  }

  removeFromCart(productId: number): void {
    this.productService.removeFromCart(productId); // Call service method
    this.updateCartCount();
  }

}
