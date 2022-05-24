import { IListaFilmes } from './../models/IFilmeAPI.model';
import {  Router } from '@angular/router';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DadosService } from './../services/dados.service';
import { FilmeService } from './../services/filme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo =  'Filmes';
  listaVideos: IFilme[] = [
{
  nome: 'Doutor Estranho no Multiverso da Loucura (2022)',
  lancamento: '05/05/2022',
   duracao: '2h 6m',
   classificacao: 76,
   cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
   generos: ['Fantasia', 'Ação', 'Aventura'],
   pagina: '/dr-estranho-mt-vs-lk',
},
{
  nome: 'Batman (2022)',
  lancamento: '03/03/2022',
  duracao: '3h 5m',
  classificacao: 78,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg',
  generos: ['Crime', 'Mistério', 'Thriller'],
  pagina: '/batman',
},


  ];

  listaFilmes: IListaFilmes;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosServices: DadosService,
    public filmeService: FilmeService,
    public route: Router) {}

    buscarFilmes(evento){
      //console.log(evento.target.value);
      const busca = evento.target.value;
      if(busca && busca.trim() !== '') {
        this.filmeService.buscarFilmes(busca).subscribe(dados =>{
           console.log(dados);
            this.listaFilmes = dados;
        });
      }
    }

    exibirFilme(filme: IFilme){
      this.dadosServices.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async showAlertFavorite() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente <strong>favoritar</strong> o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          id: 'confirm-button',
          handler: () => {

            this.showToastMsg();
          }
        }
      ]
    });

    await alert.present();
  }

  async showToastMsg() {
    const toast = await this.toastController.create({
      message: 'Adicionado aos favoritos com sucesso!.',
      duration: 2000,
      color: `success`
    });
    toast.present();
  }

}
