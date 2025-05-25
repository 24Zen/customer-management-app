import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' }
  ];

  private nextId = 2;

  getCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customers.find(c => c.id === id);
  }

  addCustomer(customer: Omit<Customer, 'id'>): void {
    const newCustomer = { ...customer, id: this.nextId++ };
    this.customers.push(newCustomer);
  }

  updateCustomer(updatedCustomer: Customer): void {
    const index = this.customers.findIndex(c => c.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
    }
  }
}
