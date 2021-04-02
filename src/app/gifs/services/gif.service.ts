import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gif, Searchgif } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  //constructor
  constructor(private http: HttpClient) {
    //mostrar datos del localstorage
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }
  //api key
  private api = '2hGsorZo7NzmGnzQ06aPC6LWO61qe5NA';
  private url = 'https://api.giphy.com/v1/gifs';
  //aca se almacenan las busquedas
  private _historial: string[] = [];
  //resultados
  resultados: gif[] = [];
  //aca se obtienen las busquedas
  get historial() {
    return [...this._historial];
  }

  buscargifs(query: string) {
    query = query.trim().toLowerCase();
    //no tener dos busquedas iguales
    if (!this._historial.includes(query)) {
      //agregar busqueda al historial
      this._historial.unshift(query);
      //limitar a 10 busquedas
      this._historial = this.historial.splice(0, 10);
      //guardar historial
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    //parametros de busqueda de la api
    const params = new HttpParams()
      .set('api_key', this.api)
      .set('limit', '10')
      .set('q', query);
    this.http
      .get<Searchgif>(`${this.url}/search`, { params })
      .subscribe((resp) => {
        console.log(resp.data);
        //guardar los resultados en el array
        this.resultados = resp.data;
        //guardar resultadoe en local storage
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
