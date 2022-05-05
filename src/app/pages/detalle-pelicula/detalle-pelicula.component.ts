import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/Pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  Clear(){
    this.pelicula = undefined;
  }
}
