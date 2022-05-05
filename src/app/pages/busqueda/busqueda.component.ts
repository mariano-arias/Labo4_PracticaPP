import { Component, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/Pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  //@Input() listadoPeliculas : Pelicula[] | undefined;
  //@Output() seleccionada: EventEmitter<any> = new EventEmitter<any>();
 // @Output() pelicula : Pelicula | undefined ;

  @Output() pelicula : Pelicula | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

  Seleccion(e: Pelicula){
    this.pelicula = e;
  }
}
