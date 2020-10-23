import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgxsModule } from '@ngxs/store';
import {ArticlesState} from './modules/states/articles-state';
import {AppRouterModule} from './modules/rooter/app-router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import {FormulaireClientComponent} from './formulaire-client/formulaire-client.component';
import {EqualValidator} from './modules/equal-validator.directive';
import {PipeTelephone} from './modules/telephone.pipe';
import {RecapComponent} from './recap/recap.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    CatalogueComponent,
    HomeComponent,
    CartComponent,
    DetailsComponent,
    FormulaireClientComponent,
    RecapComponent,
    EqualValidator,
    PipeTelephone
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    NgxsModule.forRoot ([ArticlesState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
