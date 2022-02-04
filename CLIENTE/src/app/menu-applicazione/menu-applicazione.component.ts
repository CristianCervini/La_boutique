import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-menu-applicazione',
  templateUrl: './menu-applicazione.component.html',
  styleUrls: [
    './menu-applicazione.component.css',
    '../app.component.css'
  ]
})
export class MenuApplicazioneComponent implements OnInit {

  isActive : any = 1;
  currentPath : string = window.location.pathname;
  listaPath : Object[] = [{
    idTab : 1,
    url : '/boutique/catalogo/listaProdotti'
  }]

  constructor(private router: Router) { 
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

  ngOnInit(): void {
  }

}
