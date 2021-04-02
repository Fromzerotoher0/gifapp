import { Component } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(private GifService: GifService) {}
  //obtener datos del historial
  get historial() {
    return this.GifService.historial;
  }
  buscar(termino: string) {
    this.GifService.buscargifs(termino);
  }
}
