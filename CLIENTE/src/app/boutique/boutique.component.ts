import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service : CallApiService, private router : Router) { }

  ngOnInit(): void {
    this.router.navigate(['boutique/catalogo/listaProdotti'])
    this.service.getCountCarrello().subscribe((rest : number) => {
      this.countCarrello = rest;
    })
  }

}
