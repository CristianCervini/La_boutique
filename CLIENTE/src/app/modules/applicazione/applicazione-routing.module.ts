import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrelloComponent } from 'src/app/carrello/carrello.component';
import { InsertProdottiComponent } from 'src/app/insert-prodotti/insert-prodotti.component';
import { ListaProdottiComponent } from 'src/app/lista-prodotti/lista-prodotti.component';

const routes: Routes = [
  { path: '', children : [
    { path: 'listaProdotti', component: ListaProdottiComponent },
    { path: 'carrello', component: CarrelloComponent },
    { path: 'insert-prodotti', component: InsertProdottiComponent },
    { path: '', redirectTo: '/listaProdotti', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicazioneRoutingModule { }
