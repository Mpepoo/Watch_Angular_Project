import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-orderdetails',
  standalone: true,
  imports: [RouterLink, PageTitleComponent],
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.css'
})
export class OrderdetailsComponent {
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
