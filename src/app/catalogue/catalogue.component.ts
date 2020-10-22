import {Component, OnInit} from '@angular/core';
import { ArticlesService } from "../modules/articles.service";
import {Articles} from "../modules/articles-interface";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  filtreRecherche = new FormControl();

  categorie_entre_vide: string = "Tout afficher";
  categorie_entre: string = this.categorie_entre_vide;

  categories: string[] = ["musique", "construction", "figurines", "peluche", this.categorie_entre_vide];

  articles : Observable<Articles[]>

  constructor(private articles_service : ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.articles_service.getArticles();
    console.log("load articles");
  }

  getArticles(): void{
    this.articles = this.articles
      .pipe(map(articles => articles
          .filter(article => article.categorie === this.categorie_entre || this.categorie_entre_vide === this.categorie_entre)
          .filter(article => !this.filtreRecherche.value || article.nom.toLowerCase().includes(this.filtreRecherche.value.toLowerCase()))
      ));
    console.log("recherche:" +  this.filtreRecherche.value + " categorie:" + this.categorie_entre)
  }



  ChangeSortOrder(categorie_entre: string) {
    this.categorie_entre = categorie_entre;
    this.getArticles();
  }

}
