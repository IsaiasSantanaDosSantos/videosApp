import { IListaGenero } from './../models/Generos.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

lingua = 'pt-BR';

private apiURL = 'https://api.themoviedb.org/3/';
private key = '?api_key=66f5d46a006414a091ae85493e1b0a83';


  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro())
    );
  }

  async exibirErro() {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
