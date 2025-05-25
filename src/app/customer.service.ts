// src/app/customer.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersSubject = new BehaviorSubject<Customer[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ]);

  customers$ = this.customersSubject.asObservable();

  getCustomers(): Customer[] {
    return this.customersSubject.getValue();
  }

  addCustomer(customer: Customer) {
    const current = this.customersSubject.getValue();
    customer.id = current.length > 0 ? Math.max(...current.map(c => c.id)) + 1 : 1;
    this.customersSubject.next([...current, customer]);
  }

  updateCustomer(updated: Customer) {
    const current = this.customersSubject.getValue();
    const index = current.findIndex(c => c.id === updated.id);
    if (index > -1) {
      current[index] = updated;
      this.customersSubject.next([...current]);
    }
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customersSubject.getValue().find(c => c.id === id);
  }
}
