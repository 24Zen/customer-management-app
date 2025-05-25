import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Customer Management App</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule],  // ถ้าใช้ router ต้องใส่
})
export class AppComponent {}
