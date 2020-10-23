
import { Routes, RouterModule } from '@angular/router';
import {CatalogueComponent} from '../../catalogue/catalogue.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from '../../home/home.component';
import {CartComponent} from '../../cart/cart.component';
import {DetailsComponent} from '../../details/details.component';
import {FormulaireClientComponent} from '../../formulaire-client/formulaire-client.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'cart', component: CartComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'client', component: FormulaireClientComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
