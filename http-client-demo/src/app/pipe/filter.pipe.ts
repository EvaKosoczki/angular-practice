import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(baseArray: any, phrase: string = ''): any {
    return baseArray.filter(item => {
      let jsonString = JSON.stringify(item).replace(/\"[^\"]*\"\:/g, '').replace(/[",\{\}]/g, '');
      //kiszedjük a kulcsokat és a {} a json stringből
      return jsonString.toLowerCase().indexOf(phrase.toLowerCase()) > -1
    })
  }
  //az egész itemet stringify-al stringgé alakítja és így keres benne, az egész item string, így tud minden mezőben keresni
}
//transform metódus a pipe
//phrase: keresőkifejezés
//baseArray: ezt szűrjük, alaptömb
