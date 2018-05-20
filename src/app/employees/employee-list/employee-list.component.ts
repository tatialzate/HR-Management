import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: Employee[];
  employeeForm: FormGroup;
  url = 'api/employees';
  subscriptions = [];

  constructor(private resourceService: ResourceService, private fb: FormBuilder) {
    const getSubscription = this.resourceService.getResources<Employee>(this.url)
      .subscribe((data) => {
        this.employees = data;
      });
    this.createForm();
    this.subscriptions.push(getSubscription);
  }

  createForm() {
    this.employeeForm = this.fb.group({
      id: uuid(),
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      company: ['', [Validators.required, Validators.maxLength(20)]],
      age: ['', [Validators.min(18), Validators.maxLength(2)]],
      birthday: ['', Validators.required],
      favoriteColor: '',
    });
  }

  deleteEmployee(id: string) {
    const deleteSubscription = this.resourceService.deleteRecord(this.url, id)
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
    this.subscriptions.push(deleteSubscription);
  }

  editEmployee(id: string) {
    let employee: Employee = this.employees.find((data) => data.id === id);
    console.log(employee);
    this.employeeForm.reset({
      id: employee.id,
      name: employee.name,
      company: employee.company,
      age: employee.age,
      birthday: employee.birthday,
      favoriteColor: employee.favoriteColor,
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      const addSubscription = this.resourceService.addRecord(this.url, this.employeeForm.value)
        .subscribe((data: Employee[]) => {
          console.log(data);
          this.employees = data;
        });

      this.createForm();
      this.subscriptions.push(addSubscription);
    }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
