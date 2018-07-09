import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitCamelCase'
})
export class SplitCamelCasePipe implements PipeTransform {

    transform(value: string) {
        let str = new String(value);
        return str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    }
}