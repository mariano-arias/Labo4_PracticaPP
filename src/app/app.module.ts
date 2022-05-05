import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pelicula } from './Entidades/Pelicula';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './pages/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './pages/detalle-pelicula/detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  listadoPeliculas : Pelicula []= [
    {id: 1, nombre: "Matrix", tipo: "otros", fechaEstreno: new Date('2020-01-01'), cantidadPublico: 12356, foto: "/assets/imagenes/matrix.jpg" },
    
    {id: 2, nombre: "Indiana Jones", tipo: "accion", fechaEstreno:  new Date('1989-03-11'), cantidadPublico: 55443, foto: "pahFoto" },
    
    {id: 3, nombre: "Duro de matar", tipo: "comedia", fechaEstreno:  new Date('1995-12-25'), cantidadPublico: 654321, foto: "pahFoto" }
  ];
  
    constructor() {
      localStorage.setItem( "listadoPeliculas", JSON.stringify(this.listadoPeliculas));
      
    }
 }
