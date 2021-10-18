import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphen',
})
export class HyphenPipe implements PipeTransform {
  transform(value: string, addValue?: string): string {
    if (addValue === '') {
      return value;
    } else {
      return addValue + value + addValue;
    }
  }
}
