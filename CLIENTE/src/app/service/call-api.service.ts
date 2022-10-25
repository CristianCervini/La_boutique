import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../model/alert';
import { Prodotto } from '../model/prodotto.model';
@Injectable({
  providedIn: 'root'
})
export class CallApiService{

  GET_COUNT_CARRELLO : string = "http://localhost:8080/prodotti/getCoutCarrello";
  GET_LISTA_PRODOTTO : string = "http://localhost:8080/prodotti/getListaProdotto";
  ADD_CARRELLO : string = "http://localhost:8080/prodotti/aggiungiAlCarrello";
  REGISTRA_PRODOTTO: string = "http://localhost:8080/prodotti/registraProdotto";
  DELETE_PRODOTTO: string = "http://localhost:8080/prodotti/cancellaProdotto";
  MODIFICA_PRODOTTO: string = "http://localhost:8080/prodotti/modificaProdotto";
  REGISTRA_UTENTE: string = "http://localhost:8080/signup/registraUtente";

  popolaAlertArray: Subject<Array<Alert>> = new Subject<Array<Alert>>();

  constructor(private http: HttpClient) { }

  toggleAlertList(list: Array<Alert>){
    this.popolaAlertArray.next(Array.from(list));
  }

  getCountCarrello() : any{
    return this.http.post(this.GET_COUNT_CARRELLO, null);
  }

  getListaProdotti() : any{
    return this.http.post<Prodotto[]>(this.GET_LISTA_PRODOTTO, null);
  }

  aggiungiAlCarrello(data: any) : any{ 
    return this.http.post<any>(this.ADD_CARRELLO, data);
  }

  registraProdotto(data: any): any{
    return this.http.post<any>(this.REGISTRA_PRODOTTO, data);
  }

  deleteProdotto(data: any): any{
    return this.http.post<any>(this.DELETE_PRODOTTO, data);
  }

  modificaProdotto(data: any): any{
    return this.http.post<any>(this.MODIFICA_PRODOTTO, data);
  }

  registraUtente(data: any): any{
    return this.http.post<any>(this.REGISTRA_UTENTE, data);
  }

}
