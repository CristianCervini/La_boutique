import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myfilter', 
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter || typeof filter == 'object') {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.nome.indexOf(filter) !== -1);
    }
}