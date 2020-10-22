import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ArticlesInterface } from "./articles-interface";


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles : ArticlesInterface;

  constructor(private http: HttpClient) {  }

  getData() {
    this.http.get(environment.articles_url).subscribe(res => {
      //this.articles = res;
      console.log("res");
    });
  }

}
