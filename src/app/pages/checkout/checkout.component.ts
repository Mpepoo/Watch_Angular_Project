import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']  // Changed to styleUrls (plural)
})
export class CheckoutComponent implements OnInit {
  shippingCost: number = 0;
  paymentCost: number = 0;
  subtotal: number = 0;
  total: number = 0;

  ngOnInit(): void {
    this.calculateTotal();
  }

  onShippingChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.shippingCost = parseFloat(selectElement.value) || 0;
    this.calculateTotal();
  }

  onPaymentChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.paymentCost = parseFloat(selectElement.value) || 0;
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.subtotal + this.shippingCost + this.paymentCost;
  }
}
