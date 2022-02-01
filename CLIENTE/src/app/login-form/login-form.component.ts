import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Utente } from '../model/utente.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    './login-form.component.css',
    '../app.component.css'
  ]
})
export default class LoginFormComponent implements OnInit {

  constructor() {
    
  }

  @Input() callbackFunction: (args: any) => void;
  @Output() login : EventEmitter<boolean> = new EventEmitter();

  utente = new Utente();

  ngOnInit(): void {
    console.warn("qui in login")
  }

  loginClick(values){
    console.warn(values)
    this.utente.setUsername = values.username;
    this.utente.setPassword = values.password;
    console.warn("utente", this.utente)
    this.login.emit(true)
  }
}