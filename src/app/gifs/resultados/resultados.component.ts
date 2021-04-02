import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  constructor(private gifservice: GifService) {}

  get resultados() {
    return this.gifservice.resultados;
  }
}
