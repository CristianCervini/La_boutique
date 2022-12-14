import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../model/alert';
import { Prodotto } from '../model/prodotto.model';
import { Paths } from '../utils/Paths';
@Injectable({
  providedIn: 'root'
})
export class CallApiService{

  popolaAlertArray: Subject<Array<Alert>> = new Subject<Array<Alert>>();

  constructor(private http: HttpClient) { }

  toggleAlertList(list: Array<Alert>){
    this.popolaAlertArray.next(Array.from(list));
  }

  getCountCarrello() : any{
    return this.http.post(Paths.GET_COUNT_CARRELLO, null);
  }

  getListaProdotti() : any{
    return this.http.post<Prodotto[]>(Paths.GET_LISTA_PRODOTTO, null);
  }

  aggiungiAlCarrello(data: any) : any{ 
    return this.http.post<any>(Paths.ADD_CARRELLO, data);
  }

  registraProdotto(data: any): any{
    return this.http.post<any>(Paths.REGISTRA_PRODOTTO, data);
  }

  deleteProdotto(data: any): any{
    return this.http.post<any>(Paths.DELETE_PRODOTTO, data);
  }

  modificaProdotto(data: any): any{
    return this.http.post<any>(Paths.MODIFICA_PRODOTTO, data);
  }

  registraUtente(data: any): any{
    return this.http.post<any>(Paths.REGISTRA_UTENTE, data);
  }

}
