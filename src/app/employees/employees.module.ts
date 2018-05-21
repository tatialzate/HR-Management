import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeesModule { }
