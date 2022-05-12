import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/Entidades/Actor';
import { Country } from 'src/app/Entidades/Country';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

 @Output() actorNuevo : EventEmitter<any>= new EventEmitter<any>();

  @Input() pais: string | undefined;

 actor: Actor | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  Nuevo(){
   // this.actor = new Actor ((Math.random()*10).toString(),  "Bruce", "Willis", "hardtodie", "sarasa@bruce.com",  "avenida de mayo 123", "",  "" )
  this.actor = new Actor( "Don", "Ramon");
  //console.log(this.actor);
  }

  Crear(){
    this.actorNuevo.emit(this.actor);
    console.log("emito desde alta actor",this.actor);
    this.actor = undefined;
  }

}
