import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from '../../model/prodotto.model';
@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent implements OnInit {

  @Input() prodotto : Prodotto;

  constructor() { }

  ngOnInit(): void {
    if(!this.prodotto || Object.keys(this.prodotto).length === 0){
      this.prodotto = new Prodotto();
    }
  }

}
