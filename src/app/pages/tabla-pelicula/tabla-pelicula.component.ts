import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/Pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas: Pelicula[];
  @Output() seleccionada: EventEmitter<any> = new EventEmitter<any>();

  visible: string = "hidden";
  verMas: string = "Ver Mas >>";


  /**
   *
   */
  constructor() {
    let data = localStorage.getItem("listadoPeliculas");

    this.listadoPeliculas = data != null ? JSON.parse(data) : null;

    //console.log(this.listadoPeliculas);

  }

  ngOnInit(): void {
  }

  VerTabla() {
    this.visible = this.visible == "hidden" ? "visible" : "hidden";
    if(this.visible != "hidden"){
      this.verMas = "Ocultar tabla";
    }else{
      this.verMas = "Ver Mas";
    }
  }

  Seleccion(pelicula: Pelicula) {
    this.seleccionada.emit(pelicula);
  }

}



