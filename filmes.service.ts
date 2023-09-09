import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum TipoDeBusca{
  all='',
  movie="movie",
  series='series',
  episode='episode'
}

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private url ='http://www.omdbapi.com';
  private apiKey ='83702ecf';
  constructor(private http:HttpClient) { 

  }

    buscarFilmes(titulo:string, type : TipoDeBusca):Observable<any>{
      return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apiKey=${this.apiKey}`)
    }

    buscarDetalhado(id : any ){
      return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`)
    }

}
