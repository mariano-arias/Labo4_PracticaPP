import { Injectable } from '@angular/core';
import { Pelicula } from '../Entidades/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public listadoPeliculas! : Pelicula [];
  
  constructor() {
    //localStorage.setItem( "listadoPeliculas", JSON.stringify(this.listadoPeliculas));
    this.listadoPeliculas= [
      {id: "1", nombre: "Matrix", tipo: "otros", fechaEstreno: new Date('2020-01-01'), cantidadPublico: 12356, foto: "/assets/imagenes/matrix.jpg" },
      
      {id: "2", nombre: "Indiana Jones", tipo: "accion", fechaEstreno:  new Date('1989-03-11'), cantidadPublico: 55443, foto: "/assets/imagenes/indiana-jones-y-la-ultima-cruzada.jpg" },
      
      {id: "3", nombre: "Duro de matar", tipo: "comedia", fechaEstreno:  new Date('1995-12-25'), cantidadPublico: 654321, foto: "/assets/imagenes/duro-de-matar.jpg" }
    ];
   }
}
