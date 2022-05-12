import { Component, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/Entidades/Actor';
import { Pelicula } from 'src/app/Entidades/Pelicula';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  pelicula : Pelicula | undefined ;

  @Input() actor : Actor | undefined;

  actores!: Actor[];

  pais!: string;

  //@Input() actores : Actor[] | undefined;

  entidad : string = "none";
  constructor(actorService : ActorService) { 
    this.actores = actorService.listadoActores;
   }

  ngOnInit(): void {
  }

  Seleccion(e: Pelicula){
    this.pelicula = e;
  }

  CambiarEntidad(entidad: string){
    this.entidad= entidad;
  }

  GetActorNuevo(e : any){
    this.actores.push(e);
    console.log(e);
    
  }

  SetPais(p : any){
    this.pais=p;
  }
}
