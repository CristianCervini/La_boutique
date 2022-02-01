import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myfilter', 
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        const listaFiltri = filter.split(';');
        if (!items || !filter || typeof filter === 'object' || listaFiltri.length === 0) {
            return items;
        }
        const listaTmp = []; 
        items.forEach(item => {
            let trovato = false;
            listaFiltri.forEach(filtro => {
                if(item['nome'].toLowerCase().indexOf(filtro.toLowerCase()) !== -1){
                    trovato = true;
                }
            })
            if(trovato){
                listaTmp.push(item);
            }
        })
        return listaTmp;
    }
}