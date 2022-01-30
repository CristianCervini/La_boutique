import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css','../app.component.css']
})
export class ListaProdottiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lista : Array<object> = [
    {
      id : 1,
      prodotto : 'mandarino',
    },{
      id : 2,
      prodotto : 'mele',
    },{
      id : 3,
      prodotto : 'pere',
    },{
      id : 4,
      prodotto : 'arancie',
    },
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
