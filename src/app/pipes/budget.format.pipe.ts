import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetFormat',
})
export class BudgetFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString();
  }
}
