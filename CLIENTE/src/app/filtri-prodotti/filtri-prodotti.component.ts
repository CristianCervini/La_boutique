import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtri-prodotti',
  templateUrl: './filtri-prodotti.component.html',
  styleUrls: ['../app.component.css','../login-form/login-form.component.css','./filtri-prodotti.component.css']
})
export class FiltriProdottiComponent implements OnInit {

  @Input() listaFiltri : [];
  @Output() valoreFiltri : EventEmitter<string> = new EventEmitter();

  filtroObjectTmp: Object = {};
  filtriList: [] = [];
 
  constructor() { } 

  ngOnInit(): void {}

  changeFiltri(value: string, name: string) {
    this.filtroObjectTmp[name] = value;
    let filtroTmp: string = '';
    for(let key in this.filtroObjectTmp){
      if(typeof this.filtroObjectTmp[key] === 'boolean' && this.filtroObjectTmp[key]){
        if(filtroTmp === ''){
          filtroTmp += key;
        }else{
          filtroTmp += ';' + key ;
        }
      }else if(typeof this.filtroObjectTmp[key] === 'string' && this.filtroObjectTmp[key] !== ''){
        if(filtroTmp === ''){
          filtroTmp += this.filtroObjectTmp[key];
        }else{
          filtroTmp += ';' + this.filtroObjectTmp[key];
        }
      }
    }
    this.valoreFiltri.emit(filtroTmp);
  }

}
