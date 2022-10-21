import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CallApiService } from '../service/call-api.service';
import { Alert } from '../model/alert';
import { Utente } from '../model/utente.model';

export enum messageFeedback {
  OK_MESSAGE = "Il campo risulta valorizzato correttamente",
  ERROR_MESSAGE = "Il campo risulta non valorizzato correttamente",
  NOME = "Il campo nome non risulta valurizzato",
  COGNOME = "Il campo cognome non risulta valurizzato",
  INDIRIZZO = "Il campo indirizzo non risulta valurizzato",
  EMAIL = "Il campo email non risulta valurizzato",
  USERNAME = "Il campo username non risulta valurizzato",
  PASSWORD = "Il campo password non risulta valurizzato",
  PASSWORDCONFIRM = "Il campo password non risulta valurizzato",
  NO_MATCH_PASS_MESSAGE = "La password di conferma non risulta coincidere con la password inserita",
  EMAIL_NO_VALID = "L'email inserita non è valida"
}

export enum typeValid {
  OK = 'is-valid',
  KO = 'is-invalid'
}

export enum validFeedback {
  valid = 'valid-feedback',
  invalid = 'invalid-feedback'
}
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: [
    './registrazione.component.css',
    '../app.component.css',
    '../login-form/login-form.component.css'
  ]
})
export class RegistrazioneComponent implements OnInit {

  credenzialiReg= new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    indirizzo: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl('')
  })
  formValid: Utente = new Utente();
  messageValid: Utente = new Utente();

  constructor() { }

  ngOnInit(): void {
  }

  getClassRequired(value: any): any{
    if(value === typeValid.OK){
      return validFeedback.valid;
    }else{
      return validFeedback.invalid;
    }
  }

  registra(data: any){
    console.log(data);
    this.controlloDati(data);
    if(this.controlloNext()){
      //TODO salvare sul db i dati
    };
  }

   controlloNext(){
    let next = true;
    Object.entries(this.formValid).forEach(([key, value], index) => {
      if(next && value && value !== ''){
        next = false;
      }
    })
    return next;
  }

  controlloDati(data: any){
    this.controlloInserimentoDati(data);
    this.checkEmail(data['email']);
    this.confrontoPassword(data['password'], data['passwordConfirm']);
  }

  controlloInserimentoDati(data: any){
    Object.entries(data).forEach(([key, value], index) => {
      if((!value || value === '')){
        this.valorizzaFormValid(key, typeValid.KO);
        this.valorizzaMessageValid(key, messageFeedback[key.toUpperCase()]);
      }
    });
  }

  checkEmail(email: string){
    if(email && email !== ''){
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      const isOk = regex.test(email);
      if(!isOk){
        this.valorizzaFormValid('email', typeValid.KO);
        this.valorizzaMessageValid('email', messageFeedback.EMAIL_NO_VALID);
      }
    }
  }

  confrontoPassword(password: string, passwordConfirm: string){
    if(password !== passwordConfirm){
      this.valorizzaFormValid('passwordConfirm', typeValid.KO);
      this.valorizzaMessageValid('passwordConfirm', messageFeedback.NO_MATCH_PASS_MESSAGE);
    }
  }

  resetControl(value: any){
    this.valorizzaFormValid(value, null);
    this.valorizzaMessageValid(value, null);
  }

  primoControllo(nameInput: any, value: any){
    if(!value || value === ''){
      this.valorizzaFormValid(nameInput, typeValid.KO);
      this.valorizzaMessageValid(nameInput, messageFeedback[nameInput.toUpperCase()]);
    }
  }

  valorizzaFormValid(nome: string, value: any){
    this.formValid[nome] = value;
  }

  valorizzaMessageValid(nome: string, value: any){
    this.messageValid[nome] = value;
  }

}
