import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'htmlToPlanText'
})
export class HtmlToPlanTextPipe implements PipeTransform {
    
    transform(value: string) {
        return value.replace(/(\<(\/?[^>]+)>)/g, '');
    }
}