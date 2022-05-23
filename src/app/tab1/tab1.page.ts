import { IFilme } from '../models/iFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo =  'Video app';
  listaVideos: IFilme[] = [
{
  nome: 'Doutor Estranho no Multiverso da Loucura (2022)',
  lancamento: '05/05/2022',
   duracao: '2h 6m',
   classificacao: 76,
   cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg',
   generos: ['Fantasia', 'Ação', 'Aventura'],
},
{
  nome: 'Batman (2022)',
  lancamento: '03/03/2022',
  duracao: '3h 5m',
  classificacao: 78,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg',
  generos: ['Crime', 'Mistério', 'Thriller']
},
{
  nome: 'Sonic 2: O Filme (2022)',
  lancamento: '07/04/2022',
  duracao: '2h 2m',
  classificacao: 77,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg',
  generos: ['Ação', 'Ficção científica', 'Comédia', 'Família', 'Aventura']
},
{
  nome: 'Uncharted: Fora do Mapa (2022)',
  lancamento: '17/02/2022',
  duracao: '1h 56m',
  classificacao: 72,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg',
  generos: ['Ação', 'Aventura']
},
{
  nome: 'Homem-Aranha: Sem Volta Para Casa (2021)',
  lancamento: '16/12/2021',
  duracao: '2h 28m',
  classificacao: 81,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
  generos: ['Ação', 'Aventura', 'Ficção científica']
},
{
  nome: 'O Projeto Adam (2022)',
  lancamento: '11/03/2022',
  duracao: '1h 46m',
  classificacao: 70,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg',
  generos: ['Ação', 'Aventura', 'Comédia',  'Ficção científica']
},
{
  nome: 'Ambulância: Um Dia de Crime (2022)',
  lancamento: '24/03/2022',
  duracao: '2h 16m',
  classificacao: 70,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k62v5oVhQ0e1sJWJ9nFpiTfcNoD.jpg',
  generos: ['Ação', 'Thriller', 'Crime']
},
{
  nome: 'Heartstopper (2022)',
  lancamento: '22/04/2022',
  duracao: '30m',
  classificacao: 70,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2SvBpm9Y913XJsd9b8urb9aZWIC.jpg',
  generos: ['Drama']
},
{
  nome: 'Morbius (2022)',
  lancamento: '31/03/2022',
  duracao: '1h 44m',
  classificacao: 70,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
  generos: ['Ação', 'Ficção científica', 'Fantasia']
},
{
  nome: 'O Som da Magia (2022)',
  lancamento: '06/05/2022',
  duracao: '1h 9m',
  classificacao: 75,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fZUHoANJaXgB82pVqgHm44jeYXT.jpg',
  generos: ['Drama', 'Sci-Fi & Fantasy']
},
{
  nome: 'Os Simpsons (1989)',
  lancamento: '17/12/1989',
  duracao: '22m',
  classificacao: 80,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ARIEA8fMTk8HLy8AyLbKyUjsqC.jpg',
  generos: ['Família', 'Animação', 'Comédia']
},
{
  nome: 'Stranger Things (2016)',
  lancamento: '15/06/2016',
  duracao: '50m',
  classificacao: 86,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
  generos: ['Drama', 'Mistério', 'Sci-Fi & Fantasy']
},
{
  nome: 'Paixões Ardentes (2003)',
  lancamento: '21/10/2003',
  duracao: '42m',
  classificacao: 76,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lWlsZIsrGVWHtBeoOeLxIKDd9uy.jpg',
  generos: ['Drama']
},
{
  nome: 'De Volta ao Baile (2022)',
  lancamento: '13/05/2022',
  duracao: '1h 51m',
  classificacao: 60,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xrP0WLCpfUprD0PHobzxK1VBUCL.jpg',
  generos: ['Comédia', 'Drama']
},
{
  nome: 'Halo (2022)',
  lancamento: '13/05/2022',
  duracao: '1h',
  classificacao: 86,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg',
  generos: ['Action & Adventure', 'Sci-Fi & Fantasy']
},
{
  nome: 'Red: Crescer é Uma Fera (2022)',
  lancamento: '10/03/2022',
  duracao: '1h 40m',
  classificacao: 75,
  cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg',
  generos: ['Animação', 'Família', 'Comédia', 'Fantasia']
}

  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

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
