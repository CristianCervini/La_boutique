import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myfilter', 
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        console.log(filter);    
        const listaFiltri = filter.split(';');
        console.log("listaFiltri",listaFiltri);
        if (!items || !filter || typeof filter === 'object' || listaFiltri.length === 0) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
       
        // const listaTmp = items.filter(item => item.nome.indexOf(filter) !== -1);
        // const listaTmp = items.filter(item => listaFiltri.indexOf(item.nome) !== -1);
        // const listaTmp = items.filter(item => {
        //     return listaFiltri.some(filtri => item.nome.indexOf(filtri) !== -1);
        // });
        const listaTmp = [];
        items.forEach(item => {
            let trovato = false;
            listaFiltri.forEach(filtro => {
                console.log("item.nome",item.nome);
                console.log("filtro",filtro);
                console.log(item.nome.indexOf(filtro) !== -1);
                if(item.nome.indexOf(filtro) !== -1){
                    trovato = true;
                }
            })
            if(trovato){
                listaTmp.push(item);
            }
        })
        console.log("listaTmp",listaTmp);
        return listaTmp;
    }
}