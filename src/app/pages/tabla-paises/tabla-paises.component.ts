import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/Entidades/Country';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html'
})
export class TablaPaisesComponent implements OnInit {



  continentes : string []= [ 'africa', 'america', 'asia', 'europe', 'oceania' ];
  regionActiva: string = "";
  paises: Country[] =[];

  @Output() paisFromActor : EventEmitter<any>= new EventEmitter<any>();

  constructor(private service : PaisesService) { }

  ngOnInit(): void {

  }

 ActivarRegion(region : string){
   if( region === this.regionActiva){return; }
   this.regionActiva = region;
   this.service.getPaisesPorContinent(region).subscribe( 
     (resp) => { this.paises = resp }, 
     (err)=>{

  });
 }

 getClaseCSS(region : string): string {
  return (region === this.regionActiva) ? 'btn btn-primary ': 'btn btn-outline-primary';
 }

 GetPais(p : string){
console.log(p);

  this.paisFromActor.emit(p);

}
}
