import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/Entidades/Country';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input()  paises: Country[] = [];
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  paisClicked!: string;

  constructor() { }

  ngOnInit(): void {
  }

  SetPais(pais: Country){

    this.paisClicked= pais.name.common;
    console.log(this.paisClicked);

    
    this.paisSeleccionado.emit(this.paisClicked);
    
  }
}
