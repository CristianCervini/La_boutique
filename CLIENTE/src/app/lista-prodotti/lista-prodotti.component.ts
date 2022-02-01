import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css','../app.component.css']
})
export class ListaProdottiComponent implements OnInit {

  valoreFiltri : string;  
  listaProdotti : Prodotto[] = []; 
  filtri : Array<object> = [];
  startLimit : number = 0;
  limitPage : number = 3;  
 
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.filtri = new Array<object>();
    this.http.post<Prodotto[]>("http://localhost:8080/prodotti/getListaProdotto", null)
    .subscribe(response => {
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
}
