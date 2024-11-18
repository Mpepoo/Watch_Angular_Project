import { Component, OnInit } from '@angular/core';

import { PageTitleComponent } from '../page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { BestsellersComponent } from '../bestsellers/bestsellers.component';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, BestsellersComponent],
  // templateUrl: './shop.component.html',
  // styleUrl: './shop.component.css'
  template: `
  <app-page-title></app-page-title>
  <div id="sort-dropdown">
  <select id="sort-by" (change)="sortProducts($event)">
    <option value="low-to-high">Low to High</option>
    <option value="high-to-low">High to Low</option>
  </select>
</div>
  <app-bestsellers></app-bestsellers>
  `
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  sortProducts(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const sortBy = selectElement.value;
    this.products = this.productService.sortProducts(sortBy);
  }
}
