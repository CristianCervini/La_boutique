import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Property from './property.json';
import { Store } from '@ngrx/store';
import * as AppAction from './actions/app.action';
import { CallApiService } from './service/call-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  count : number = 0;

  constructor(private http: HttpClient, private store: Store<any>, private service : CallApiService){
  }

  login = false
  countCarrello : number = 0;

  ngOnInit(){
    this.store.dispatch(new AppAction.addProperty({titleApp : Property.title}));
    this.service.getCountCarrello().subscribe((rest : number) => {
      this.countCarrello = rest;
    })
  } 

  returnLogin(value : boolean){
    console.warn("return",value);
  }
 
}
