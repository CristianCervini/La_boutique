import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor() {}

  // @Input() callbackFunction: (args: any) => void;
  // @Output() login : EventEmitter<boolean> = new EventEmitter();

  credenzialiUtente = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  utente = new Utente();

  ngOnInit(): void {
    console.warn("qui in login")
  }

  loginClick(values){
    console.warn(values)
    // this.utente.username = values.username;
    // this.utente.password = values.password;
    console.warn("utente", this.utente)
    // this.login.emit(true)
  }
}