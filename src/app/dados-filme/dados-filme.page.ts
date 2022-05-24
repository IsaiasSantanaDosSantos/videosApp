import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilme } from './../models/IFilme.model';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilme;

  constructor(public dadosServices: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosServices.pegarDados('filme');
    console.log('filme enviado!', this.filme);
  }

}
