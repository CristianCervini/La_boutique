import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicazioneRoutingModule } from './applicazione-routing.module';
import { ListaProdottiComponent } from 'src/app/lista-prodotti/lista-prodotti.component';
import { FiltriProdottiComponent } from 'src/app/filtri-prodotti/filtri-prodotti.component';
import { CustomCardsComponent } from 'src/app/utils/custom-cards/custom-cards.component';
import { MyFilterPipe } from 'src/app/utils/my-filter-pipe';
import { LimitTo } from 'src/app/utils/limit-page-pipe';
import { FilterPage } from 'src/app/utils/filter-page-table';
import { CarrelloComponent } from 'src/app/carrello/carrello.component';


@NgModule({
  declarations: [
    ListaProdottiComponent,
    FiltriProdottiComponent,
    CustomCardsComponent,
    MyFilterPipe,
    LimitTo,
    FilterPage,
    CarrelloComponent
  ],
  imports: [
    CommonModule,
    ApplicazioneRoutingModule
  ]
})
export class ApplicazioneModule { }
