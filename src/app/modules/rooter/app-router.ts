
import { Routes, RouterModule } from '@angular/router';
import {CatalogueComponent} from '../../catalogue/catalogue.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: '', component: CatalogueComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
