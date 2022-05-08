import { Injectable } from '@angular/core';
import { Actor } from '../Entidades/Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  listadoActores!: Actor[];
  constructor() { 
    
  this.listadoActores = [
    {
      id: (Math.random()*10).toString(), firstName: "Bruce", lastName: "Willis",  country:"", pathPhoto: ""
    },
    {id: (Math.random()*10).toString(), firstName: "Juan", lastName: "Peres",  country:"", pathPhoto: ""
    }
  ]
  }
}
