import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/Entidades/Pelicula';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  // listadoPeliculas: Observable<any[]>;
  listadoPeliculas: Pelicula[] | undefined;
  @Output() seleccionada: EventEmitter<any> = new EventEmitter<any>();

  visible: string = "hidden";
  verMas: string = "Ver Mas >>";

  constructor(peliculaService: PeliculaService) {
    //let data = localStorage.getItem("listadoPeliculas");

    //this.listadoPeliculas = data != null ? JSON.parse(data) : null;

    //console.log(this.listadoPeliculas);

    this.listadoPeliculas = peliculaService.listadoPeliculas;

  //  this.listadoPeliculas = firestore.collection('movies').valueChanges();
  //  console.log(this.listadoPeliculas);
   

  }

  ngOnInit(): void {
  }

  VerTabla() {
    this.visible = this.visible == "hidden" ? "visible" : "hidden";

    this.verMas = this.visible != "hidden" ? "Ocultar tabla" : "Ver más";
  }

  Seleccion(pelicula: Pelicula) {
    this.seleccionada.emit(pelicula);
  }

}



