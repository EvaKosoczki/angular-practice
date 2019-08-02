import { Component, OnInit } from '@angular/core';
import { MockData } from '../../model/mock-data';
import { Employee } from '../../model/employee'
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data: MockData = new MockData();
  employees: Employee[] = this.data.employee;
  title: string = 'Employees'
  keyz: string[];
  tableHeadKeys(): void {
    this.keyz = Object.keys(this.employees[0]);
    this.keyz = this.keyz.slice(1)
    console.log(this.keyz);
  };
  constructor() { }

  ngOnInit() {
  }

}
