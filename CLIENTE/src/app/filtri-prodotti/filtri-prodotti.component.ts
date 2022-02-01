import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtri-prodotti',
  templateUrl: './filtri-prodotti.component.html',
  styleUrls: ['../app.component.css','../login-form/login-form.component.css','./filtri-prodotti.component.css']
})
export class FiltriProdottiComponent implements OnInit {

  @Input() listaFiltri : [];
  @Output() valoreFiltri : EventEmitter<string> = new EventEmitter();

  valoreFiltro : object = {};

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    let filtroString : string = '';
    for(let key in this.valoreFiltro){
      if(typeof this.valoreFiltro[key] === 'boolean' && this.valoreFiltro[key]){
        if(filtroString === ''){
          filtroString += key;
        }else{
          filtroString += ';' + key ;
        }
      }else if(typeof this.valoreFiltro[key] === 'string' && this.valoreFiltro[key] !== ''){
        if(filtroString === ''){
          filtroString += this.valoreFiltro[key];
        }else{
          filtroString += ';' + this.valoreFiltro[key];
        }
      }
    }
    this.valoreFiltri.emit(filtroString);
  }

}
