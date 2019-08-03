import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixid'
})
export class FixID implements PipeTransform {
  transform(value: string): string {
    if(value === '_Id') return 'ID';
    else return value;
  }
}
