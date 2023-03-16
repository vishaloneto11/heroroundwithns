import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let currentdate = new Date().getFullYear();
    let birthDate = new Date(value).getFullYear();
    let age = currentdate - birthDate;



    return age;
  }

}
