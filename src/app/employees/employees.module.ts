import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeesModule { }
