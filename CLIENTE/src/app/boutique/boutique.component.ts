import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../service/call-api.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: [
    './boutique.component.css'
  ]
})
export class BoutiqueComponent implements OnInit {

  countCarrello : number = 0;

  constructor(private service : CallApiService) { }

  ngOnInit(): void {
    this.service.getCountCarrello().subscribe((rest : number) => {
      this.countCarrello = rest;
    })
  }

}
