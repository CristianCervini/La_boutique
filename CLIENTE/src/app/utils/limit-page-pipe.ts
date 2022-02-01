import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'limitTo', 
})
export class LimitTo implements PipeTransform {
    transform(items: any[], page: number, pageSize : number): any {
        if(!items || page === null || page === undefined || !pageSize === null || pageSize === undefined){
            return items;
        }
        const startElem = (page-1) * pageSize;
        const limitPage = page * pageSize
        return items.filter((item,index) => index < limitPage && index >= startElem);
    }
}