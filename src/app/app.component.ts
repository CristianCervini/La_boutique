import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Property from './property.json';
import { Store } from '@ngrx/store';
import * as AppAction from './actions/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private store: Store<any>){}

  login = false

  ngOnInit(){
    this.store.dispatch(new AppAction.addProperty({titleApp : Property.title}));
  } 

  returnLogin(value : boolean){
    console.warn("return",value);
  }
}
