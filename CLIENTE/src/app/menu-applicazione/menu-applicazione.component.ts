import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CallApiService } from '../service/call-api.service';
import { CustomAlertComponent } from '../utils/custom-alert/custom-alert.component';

const ALERTS: string[] = [
  'Prova1',
  'Prova2',
  'Prova3'
]

@Component({
  selector: 'app-menu-applicazione',
  templateUrl: './menu-applicazione.component.html',
  styleUrls: [
    './menu-applicazione.component.css',
    '../app.component.css'
  ]
})
export class MenuApplicazioneComponent implements OnInit {

  listAlert: string[] = [];

  isActive : any = 1;
  currentPath : string = window.location.pathname;
  listaPath : Object[] = [{
    idTab : 1,
    url : '/boutique/catalogo/listaProdotti'
  },{
    idTab : 2,
    url : '/boutique/catalogo/insert-prodotti'
  }]

  constructor(private router: Router, public service: CallApiService) { 
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd || val instanceof NavigationStart){
        const url = val.url;
        this.isActive = 0;
        const obj = this.listaPath.find(obj => obj['url'].indexOf(url) > -1);
        if(obj && Object.keys(obj).length > 0){
          this.isActive = obj['idTab'];
        }
      }
    })
  }

  ngOnInit(): void { }

}
