import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilmeApi } from '../models/IFilmeAPI.model';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi;

  generos: string[] = [];

  constructor(public dadosServices: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosServices.pegarDados('filme');
    this.generos = this.dadosServices.pegarDados('generos');
    console.log('filme enviado!', this.filme);
  }

}
