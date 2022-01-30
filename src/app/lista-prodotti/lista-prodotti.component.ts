import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css','../app.component.css']
})
export class ListaProdottiComponent implements OnInit {

  constructor() { }

  prodotto : string;
  valoreFiltri : string;  

  ngOnInit(): void {
  }

  lista : Array<object> = [
    {
      id : 1,
      nome : 'mandarino',
    },{
      id : 2,
      nome : 'mele',
    },{
      id : 3,
      nome : 'pere',
    },{
      id : 4,
      nome : 'arancie', 
    }
  ]

  filtri : Array<object> = [
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
        lista : this.lista
      }
    ]
  ]

}
