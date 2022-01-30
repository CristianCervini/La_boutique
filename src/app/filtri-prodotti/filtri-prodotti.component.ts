import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtri-prodotti',
  templateUrl: './filtri-prodotti.component.html',
  styleUrls: ['../app.component.css','../login-form/login-form.component.css','./filtri-prodotti.component.css']
})
export class FiltriProdottiComponent implements OnInit {

  @Input() listaFiltri : [];

  constructor() { }

  ngOnInit(): void {
    console.log("listaFiltri",this.listaFiltri)
  }

}
