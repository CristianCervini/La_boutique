import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import LoginFormComponent from './login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/boutique', pathMatch: 'full'},
  { path: 'boutique', component: BoutiqueComponent, children:[
    { path: 'catalogo', loadChildren: () => import(`./modules/applicazione/applicazione.module`).then(m => m.ApplicazioneModule) },
    { path: '', redirectTo: '/catalogo', pathMatch: 'full'},
  ]},
  { path: 'boutique/login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }