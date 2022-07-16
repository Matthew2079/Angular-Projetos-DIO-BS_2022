import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false // indica que o Pipe se tornou impuro, o qual irá monitorar as mudanças diretas
})
export class PrintListPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {

    let returnStr = '';

    if(value.length) {
      value.forEach(val => {
        returnStr = returnStr + ' ' + val;
      });
    }

    return returnStr;

  }

}
