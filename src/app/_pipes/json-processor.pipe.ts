import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonProcessor'
})
export class JsonProcessorPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
  /*
  // Usage: 
  //*ngFor='let data of homeResponseData | jsonProcessor :"key":true'> 

  transform(value: any, args?: any[]): Object[] {

    // create instance vars to store keys and final output

    let keyArr: any[] = Object.keys(value),
      dataArr = [],
      keyName = args[0];

    // loop through the object,
    // pushing values to the return array

    keyArr.forEach((key: any) => {
      value[key][keyName] = key;
      dataArr.push(value[key])
    });

    if (args[1]) {
      dataArr.sort((a: Object, b: Object): number => {
        return a[keyName] > b[keyName] ? 1 : -1;
      });
    }

    // return the resulting array
    return dataArr;
  }
*/
}
