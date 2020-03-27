import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  transform(value: Date | string | number, formatString: string = 'YYYY-MM-DD HH:mm'): string {
    value = typeof value === 'string' ? parseISO(value) : value;
    if (value) {
      if (formatString === 'fn') {
        return formatDistanceToNow(value, {
          locale: (window as any).__locale__,
        });
      }
      if (typeof value === 'string' && !isNaN(+value)) {
        value = +value;
      }
      return format(value, formatString);
    } else {
      return '';
    }
  }
}
