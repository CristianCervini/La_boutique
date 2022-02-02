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
  listaPath : string[] = ['/boutique','/boutique/listaprodotti','/boutique/login']

  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd || val instanceof NavigationStart){
        const url = val.url;
        const isCambiato = this.listaPath.indexOf(url) === -1;
        if(isCambiato){
          this.isActive = 0;
        }
      }
    })
  }

  ngOnInit(): void {
  }

  vaiAlTab(url: string, tabSel: number){
    this.router.navigate([url]);
    this.isActive = tabSel;
  }

}
