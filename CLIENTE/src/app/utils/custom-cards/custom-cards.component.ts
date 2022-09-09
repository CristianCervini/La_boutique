import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { CallApiService } from 'src/app/service/call-api.service';
import { Prodotto } from '../../model/prodotto.model';
@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent implements OnInit {

  @Input() prodotto : Prodotto;
  // @Input() aggiungiAlCarrello : (arg : any) => Prodotto;
  @Input() jsonButton : Object = {
    label : String,
    clickGeneric : (arg : any) => Prodotto
  }; 

  constructor(private http: HttpClient, private service: CallApiService) { }

  ngOnInit(): void {
    if(!this.prodotto || Object.keys(this.prodotto).length === 0){
      this.prodotto = new Prodotto();
    }
  }

  cambiaValore(event : any, prodotto : Object){
    const value = event.target.value;
    prodotto['qnt'] = parseInt(value); 
  }

  functionGeneric(item: Object, prodotto: Prodotto){
    item['clickGeneric'](prodotto, this.service)
  }

}
