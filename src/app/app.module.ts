// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- เพิ่มตรงนี้

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'add', component: CustomerFormComponent },
  { path: 'edit/:id', component: CustomerFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- เพิ่มตรงนี้เพื่อใช้ ngModel
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
