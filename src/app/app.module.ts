import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pelicula } from './Entidades/Pelicula';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './pages/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './pages/detalle-pelicula/detalle-pelicula.component';
import { AltaActoresComponent } from './pages/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './pages/tabla-paises/tabla-paises.component';


import {environment} from 'src/environments/environment';
import { ShowComponent } from './component/show/show.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';




@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
    ShowComponent,
    CreateComponent,
    EditComponent
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
    {id: "1", nombre: "Matrix", tipo: "otros", fechaEstreno: new Date('2020-01-01'), cantidadPublico: 12356, foto: "/assets/imagenes/matrix.jpg" },
    
    {id: "2", nombre: "Indiana Jones", tipo: "accion", fechaEstreno:  new Date('1989-03-11'), cantidadPublico: 55443, foto: "/assets/imagenes/indiana-jones-y-la-ultima-cruzada.jpg" },
    
    {id: "3", nombre: "Duro de matar", tipo: "comedia", fechaEstreno:  new Date('1995-12-25'), cantidadPublico: 654321, foto: "/assets/imagenes/duro-de-matar.jpg" }
  ];
  
    constructor() {
      localStorage.setItem( "listadoPeliculas", JSON.stringify(this.listadoPeliculas));
    }
 }
