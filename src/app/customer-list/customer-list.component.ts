import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomerService, Customer } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent {
  customers: Customer[] = [];

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();

    // ถ้าต้องการให้ update แบบ reactive จริง ๆ
    // this.customerService.customers$.subscribe(data => this.customers = data);
  }

  addCustomer() {
    this.router.navigate(['/add']);
  }

  editCustomer(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
