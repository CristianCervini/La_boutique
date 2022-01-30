import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtri-prodotti',
  templateUrl: './filtri-prodotti.component.html',
  styleUrls: ['../app.component.css','../login-form/login-form.component.css','./filtri-prodotti.component.css']
})
export class FiltriProdottiComponent implements OnInit {

  @Input() listaFiltri : [];
  @Output() valoreFiltri : EventEmitter<object> = new EventEmitter();

  valoreFiltro : string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(value) {
    this.valoreFiltri.emit(value);
  }

}
