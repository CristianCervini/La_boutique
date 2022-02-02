import { Component, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    if(!this.prodotto || Object.keys(this.prodotto).length === 0){
      this.prodotto = new Prodotto();
    }
  }

}
