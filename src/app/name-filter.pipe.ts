import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(values: any[], name: any): any {
    if(!name) {
      return false;
    } else {
      console.log(name);
      return values.filter(
        value => {
          return value.toLowerCase().indexOf(name.toLowerCase()) !== -1
        }
      )
    }
  }

}
