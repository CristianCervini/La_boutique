import { Component, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { Page } from '../model/page';
import { Prodotto } from '../model/prodotto.model';
import { CallApiService } from '../service/call-api.service';

@Component({
  selector: 'app-insert-prodotti',
  templateUrl: './insert-prodotti.component.html',
  styleUrls: ['./insert-prodotti.component.css']
})
export class InsertProdottiComponent implements OnInit {

  listaProdotti: Prodotto[] =[];
  page = 1;
	pageSize = 5;

  constructor(private service: CallApiService) { }

  ngOnInit(): void {
    this.getListaProdotti();
  }

  inserisciProdotto(value: any){
    this.service.registraProdotto(value).subscribe((result: string) =>{
      const response = result["response"];
      let alert: Alert = {
        type: '',
        msg: ''
      };
      if(response === 'OK'){
        alert = {
          type: 'success',
          msg: 'Operazione eseguita con successo'
        }
        this.getListaProdotti();
      }else if(response !== 'OK' && response !== ''){
        alert = {
          type: 'danger',
          msg: response
        }
      }else{
        alert = {
          type: 'danger',
          msg: 'Errore durante la registrazione del prodotto'
        }
      }
      this.service.toggleAlertList([alert]);
    });
  }

  getListaProdotti(){
    this.service.getListaProdotti().subscribe((data: Prodotto[])=>{
      data.forEach((item, index) => {
        item["numero"] = index+1;
        this.listaProdotti.push(item);
      });
    })
  }

}
