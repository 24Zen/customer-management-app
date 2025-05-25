import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService, Customer } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent {
  customer: Customer = { id: 0, name: '', email: '' };
  isEditMode = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const custId = +id;
      const existingCustomer = this.customerService.getCustomerById(custId);
      if (existingCustomer) {
        this.customer = { ...existingCustomer };
      }
    }
  }

  save() {
    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer);
    } else {
      this.customerService.addCustomer(this.customer);
    }
    alert('Customer saved!');
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
