import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idpipe'
})
export class IDPipe implements PipeTransform {
  transform(value: string): string {
    return `${value.slice(0, 4)}...${value.slice(value.length-4, value.length)}`;
  }
}
