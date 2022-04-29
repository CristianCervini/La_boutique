import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import LoginFormComponent from './login-form/login-form.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
  { path: '', redirectTo: '/boutique', pathMatch: 'full'},
  { path: 'boutique', component: BoutiqueComponent, children:[
    { path: 'catalogo', loadChildren: () => import(`./modules/applicazione/applicazione.module`).then(m => m.ApplicazioneModule) },
    { path: '', redirectTo: '/catalogo', pathMatch: 'full'},
  ]},
  { path: 'boutique/login', component: LoginFormComponent },
  { path: 'boutique/registrazione', component: RegistrazioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }