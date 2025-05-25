import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./customer-list/customer-list.component').then(m => m.CustomerListComponent)
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./customer-form/customer-form.component').then(m => m.CustomerFormComponent)
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./customer-form/customer-form.component').then(m => m.CustomerFormComponent)
  },
  // เพิ่มเติมเส้นทางอื่นๆ ตามต้องการ
];
