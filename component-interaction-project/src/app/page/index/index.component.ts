import { Component, OnInit, Input } from '@angular/core';
import { MockData } from 'src/app/model/mock-data';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title: string = 'Dashboard';
  modalCounter: number = 0;
  mockData: MockData = new MockData();

  numberOfEmployees = this.mockData.employee.length;
  numberOfBills = this.mockData.bills.length;

 // constructor(): number {
// }

  ngOnInit() {
  }

  showModal(): void {
    this.modalCounter++;
  }

}
