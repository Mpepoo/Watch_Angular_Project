import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { ProductService, Product } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductDetailComponent, PageTitleComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  cartCount = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.productService.getProducts().find(p => p.id === +productId);
    }
    this.productService.cartObservable.subscribe(cart => {
      this.cartCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    });
  }

  addToCart(productId: number): void {
    this.productService.addToCart(productId);
  
}
}
