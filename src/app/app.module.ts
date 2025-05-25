import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./customer-list/customer-list.component').then(m => m.CustomerListComponent) },
  { path: 'add', loadComponent: () => import('./customer-form/customer-form.component').then(m => m.CustomerFormComponent) },
  { path: 'edit/:id', loadComponent: () => import('./customer-form/customer-form.component').then(m => m.CustomerFormComponent) }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
