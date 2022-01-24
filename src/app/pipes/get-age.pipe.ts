import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: string): string {
    
    
    return `${value.toString().slice(1,3)} - ${value.toString().slice(3,5)} - ${value.toString().slice(5,7)}`;
  }

}
