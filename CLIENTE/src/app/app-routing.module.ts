import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import LoginFormComponent from './login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/boutique', pathMatch: 'full'},
  { path: 'boutique', component: ListaProdottiComponent },
  { path: 'boutique/login', component: LoginFormComponent },
  { path: 'boutique/listaprodotti', component: ListaProdottiComponent },
  { path: 'boutique/carrello', component: CarrelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }