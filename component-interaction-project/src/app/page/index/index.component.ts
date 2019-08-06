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
    this.subscription = this.mock.employee$.subscribe(
      employees => this.employeeList = employees,
      err => console.error(err),
      () => console.log('complete')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showModal(): void {
    this.modalCounter++;
  }

}
