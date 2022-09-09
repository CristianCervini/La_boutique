import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';
import { CallApiService } from '../service/call-api.service';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css','../app.component.css']
})
export class ListaProdottiComponent implements OnInit {

  valoreFiltri : string;  
  listaProdotti : Prodotto[] = []; 
  filtri : Array<object> = [];
  limitPage : number = 9;  
  page : number = 1;
  jsonButton : Object[] = [[{
    type : 'numberInput',
    label : 'Al kg.',
    nome : 'qnt',
    colSize : 'col-5'
  },{
    type : 'button',
    label : 'Aggiungi al carrello',
    clickGeneric : this.aggiungiAlCarrello, 
    colSize : 'col-7'
  }]]
 
  constructor(private http : HttpClient, private service : CallApiService) { }

  ngOnInit(): void {
    this.filtri = new Array<object>();
    this.service.getListaProdotti().subscribe((response : Prodotto[]) => {
      if(response && response.length > 0){
        this.listaProdotti = response;
        this.listaProdotti.map(item => {
          item['qnt'] = 1;
          return item;
        })
        this.filtri = [
          [
            {
              nome : 'prodotto',
              label : 'Filtro prodotto',
              type : 'input'
            }
          ],
          [
            {
              nome : 'filtri',
              label : 'Filtri',
              type : 'checkbox',
              lista :  response
            }
          ]
        ]
      }
    })
  }

  aggiungiAlCarrello(obj : any, service: CallApiService){
    if(obj && obj.qnt && obj.qnt > 0){
      service.aggiungiAlCarrello(obj).subscribe((response : any) => {
        if(response === 'OK'){
          console.log('Ok');
        }
      })
    }else{
      //TODO: inserire il messaggio
    }
    
  }
}
