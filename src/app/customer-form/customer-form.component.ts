import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent {
  @Input() customer = { id: 0, name: '', email: '' };
  isEditMode = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    // ตรวจสอบว่าถ้าเป็น edit mode (มี id ใน route)
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        // ตัวอย่าง: โหลดข้อมูลลูกค้าจาก id (สมมติใช้ static data หรือ service)
        this.loadCustomer(parseInt(id, 10));
      }
    });
  }

  loadCustomer(id: number) {
    // ตัวอย่างโหลดข้อมูลลูกค้า (คุณต้องเปลี่ยนเป็นเรียก API หรือ service จริง)
    // แค่ตั้งตัวอย่าง
    this.customer = {
      id,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  }

  saveCustomer() {
    if (this.isEditMode) {
      console.log('Updating customer:', this.customer);
      // เรียก API update ลูกค้า
    } else {
      console.log('Saving new customer:', this.customer);
      // เรียก API เพิ่มลูกค้าใหม่
    }
    this.router.navigate(['/']);
  }
}
