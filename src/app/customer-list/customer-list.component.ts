// src/app/customer-list/customer-list.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Customer {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent {
  customers: Customer[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  constructor(private router: Router) {}

  addCustomer() {
    this.router.navigate(['/add']);
  }

  editCustomer(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
