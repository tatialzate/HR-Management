import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private resourceService: ResourceService) {
    this.employees$ = this.resourceService.getResources<Employee>('api/employees');
  }

  ngOnInit() {
  }

}
