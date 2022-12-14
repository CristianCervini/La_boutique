import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Alert } from '../model/alert';
import { Page } from '../model/page';
import { Prodotto } from '../model/prodotto.model';
import { CallApiService } from '../service/call-api.service';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css','../app.component.css']
})
export class ListaProdottiComponent implements OnInit {

  messageNotFound: string = Constants.MESSAGE_NOT_FOUND_PRODOTTI;
  paginationProperty: Page = {
    limitPage: 9,
    page: 1
  }

  // limitPage: number = 9
  // page: number = 1

  valoreFiltri : string;  
  listaProdotti : Prodotto[] = []; 
  filtri : Array<object> = [];
  jsonButton : Object[] = [[{
    type : 'numberInput',
    label : 'Al kg.',
    nome : 'qnt',
    // colSize : 'col-5'
  },{
    type : 'button',
    label : 'Aggiungi al carrello', 
    clickGeneric : this.aggiungiAlCarrello, 
    // colSize : 'col-7'
  }]]
 
  constructor(private http : HttpClient, private service : CallApiService) { }

  ngOnInit(): void {
    this.filtri = new Array<object>();
    this.service.getListaProdotti().subscribe((response : Prodotto[]) => {
      if(response && response.length > 0){
        this.listaProdotti = response;
        // for(let i = 0; i < 100; i++){
        //   this.listaProdotti = this.listaProdotti.concat(response);
        // }
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
              lista :  this.listaProdotti
            }
          ]
        ]
      }
    })
  }

  aggiungiAlCarrello(service: CallApiService, obj : any,){
    if(obj && obj.qnt && obj.qnt > 0){
      service.aggiungiAlCarrello(obj).subscribe((response : any) => {
        if(response === 'OK'){
          console.log('Ok');
        }
      })
    }else{
      const alert: Alert = {
        type: 'danger',
        msg: 'Bisogna prima registrarsi'
      }
      service.toggleAlertList([alert]);
    }
    
  }
}
