import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/Entidades/Actor';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {

  actor : Actor | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
