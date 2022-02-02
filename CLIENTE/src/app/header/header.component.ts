import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { select ,Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateApp } from '../app.state';
// import { AppProperties } from '../models/appProperties';
// import { State } from '../../app/app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../login-form/login-form.component.css'
  ]
})
export class HeaderComponent implements OnInit {

  // myState : Observable<State>;
  titleApp: Observable<string>;
  @Input() countCarrello : number;

  constructor(private router: Router, private store : Store<StateApp>, ) {
    this.titleApp = this.store.select((state) => state.appProperties.titleApp);
  }

  utenteLoggato : any;

  title = "La boutique della frutta s.r.l. 2015"
  faUser = faUserCircle;
  shoppingCartIcon = faShoppingCart;

  ngOnInit(): void {
    // console.warn("qui")
  }

  vaiAllaLogin(){
    this.router.navigate(['boutique/login'])
  }

  vaiAlCarrello(){
    console.log("qui");
    this.router.navigate(['boutique/carrello'])
  }

  
}