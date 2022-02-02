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
  jsonButton : Object = {
    label : 'Aggiungi al carrello',
    clickGeneric : this.aggiungiAlCarrello
  }
 
  constructor(private http : HttpClient, private service : CallApiService) { }

  ngOnInit(): void {
    this.filtri = new Array<object>();
    this.service.getListaProdotti().subscribe((response : Prodotto[]) => {
      if(response && response.length > 0){
        this.listaProdotti = response;
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

  aggiungiAlCarrello(obj : any){
    console.log("obj", obj);
  }
}
