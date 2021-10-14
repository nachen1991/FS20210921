import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent, RegisterUserComponent } from '.';

const routes: Routes = [
 // { path: 'registro', component: RegisterUserComponent },
];

@NgModule({
  declarations: [ LoginComponent, RegisterUserComponent ],
  exports: [ LoginComponent, RegisterUserComponent ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes),
  ],
})
export class SecurityModule { }
