import { Component, OnInit } from '@angular/core';

import { Bill } from '../../model/bill';
import { MockData } from '../../model/mock-data';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  title: string = `Bills`;
  billData: Bill[] = new MockData().bills;
  billKeys: string[] = Object.keys(this.billData[0]);
  index: number = -1;
  longID: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleID(): void {
    this.longID = !this.longID;
  }

}
