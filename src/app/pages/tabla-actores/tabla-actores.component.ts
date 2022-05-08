import { Component, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/Entidades/Actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {

 listadoActores : Actor[] | undefined;

//@Input() lista : Actor | undefined;

  constructor(actorService : ActorService) {
    this.listadoActores = actorService.listadoActores;
    // let data = localStorage.getItem("listadoActores");

    // this.listadoActores = data != null ? JSON.parse(data) : null;
  }

  ngOnInit(): void {
  }

  // GetActorNuevo(e :Actor){
  //   this.listadoActores?.push(e);
  // }
}
