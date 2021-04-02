import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  //constructor
  constructor(private gifservice: GifService) {}
  //decorador viewchild para seleccionar la referecia local #txtbuscar
  @ViewChild('txtbuscar') txtbuscar!: ElementRef<HTMLInputElement>;
  buscar(termino: string) {
    //enviar valor de la busqueda
    const valor = this.txtbuscar.nativeElement.value;
    //no buscar vacios
    if (valor.trim().length == 0) {
      return;
    }
    //agregar valor al historial
    this.gifservice.buscargifs(valor);
    //borrar busqueda
    this.txtbuscar.nativeElement.value = '';
  }
}
