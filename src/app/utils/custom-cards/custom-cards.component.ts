import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent implements OnInit {

  constructor() { }

  @Input() prodotto : {
    id : number,
    nome : string,
    img : string
  };

  ngOnInit(): void {
  }

}
