import { Component, OnInit, Input } from '@angular/core';
import { Prodotto } from '../model/prodotto.model';
import { CallApiService } from '../service/call-api.service';

@Component({
  selector: 'app-cards-prodotti',
  templateUrl: './cards-prodotti.component.html',
  styleUrls: ['./cards-prodotti.component.css']
})
export class CardsProdottiComponent implements OnInit {

  service: CallApiService;

  constructor(private callApiService: CallApiService) { 
    this.service = callApiService;
  }

  @Input() prodotto : Prodotto;
  @Input() aggiungiAlCarrello: (service: CallApiService, arg: any) => void;

  ngOnInit(): void { }

}
