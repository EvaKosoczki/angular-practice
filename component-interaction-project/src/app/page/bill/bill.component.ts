import { Component, OnInit } from '@angular/core';

import { Bill } from '../../model/bill';
import { MockData } from '../../model/mock-data';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  title: string = `Bills`;
  billData: Bill[] = new MockData().bills;
  billKeys: string[] = Object.keys(this.billData[0]);
  billSpecs: Bill;

  constructor() { }

  ngOnInit() {
  }

  // getBillSpecs(event): void {
  //   let i = 0;
  //   const parentElement = event.target.parentNode;
  //   while(i < parentElement.children.length) {
  //     if(event.target === parentElement.children[i]) {
  //       break;
  //     }
  //     i += 1;
  //   } 
  //   this.billSpecs = this.billData[i];
  // }

}
