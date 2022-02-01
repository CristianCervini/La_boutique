import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'limitTo', 
})
export class LimitTo implements PipeTransform {
    transform(items: any[], startElem: number, limitPage : number): any {
        if(!items || startElem === null || startElem === undefined || !limitPage === null || limitPage === undefined){
            return items;
        }
        return items.filter((item,index) => index < limitPage && index >= startElem);
    }
}