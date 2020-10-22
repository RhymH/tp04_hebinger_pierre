import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Articles } from "./articles-interface";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {  }

  public getArticles () : Observable<Articles[]> {
    return this.http.get<Articles[]>(environment.articles_url);
  }

}
