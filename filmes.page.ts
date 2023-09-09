import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilmesService, TipoDeBusca } from 'src/app/service/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  resultados!: Observable<any>;
  termosBusca: string='';
  tipo!: TipoDeBusca.all;

  constructor(
    private filmesService : FilmesService
  ) { }

  ngOnInit() {

  }

  buscar(){
    this.resultados = this.filmesService.buscarFilmes(this.termosBusca, this.tipo)
    .pipe(map(results => results['Search']))
  }
}
