import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, max: number): string {
    if (value.length <= max) {
      return value;
    }
    return value.substring(0, max - 3) + '...';
  }
}
