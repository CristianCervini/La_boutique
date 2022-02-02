import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import LoginFormComponent from './login-form/login-form.component';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoutiqueComponent } from './boutique/boutique.component';
import { FooterComponent } from './footer/footer.component';
import { MenuApplicazioneComponent } from './menu-applicazione/menu-applicazione.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './reducer/app.reducer';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { FiltriProdottiComponent } from './filtri-prodotti/filtri-prodotti.component';
import { CustomCardsComponent } from './utils/custom-cards/custom-cards.component';
import { MyFilterPipe } from './utils/my-filter-pipe';
import { LimitTo } from './utils/limit-page-pipe';
import { FilterPage } from './utils/filter-page-table';
import { CarrelloComponent } from './carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    LoginFormComponent,
    BoutiqueComponent,
    FooterComponent,
    MenuApplicazioneComponent,
    ListaProdottiComponent,
    FiltriProdottiComponent,
    CustomCardsComponent,
    MyFilterPipe,
    LimitTo,
    FilterPage,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot( { appProperties : AppReducer } ) 
    // AngularFontAwesomeModule
  ],
  exports : [
    LoginFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
