import { Component, OnInit } from '@angular/core';
import { MockData } from '../../model/mock-data';
import { Employee } from '../../model/employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data: MockData = new MockData();
  employees: Employee[] = this.data.employee;
  
  
  constructor() { }

  ngOnInit() {
  }

}
