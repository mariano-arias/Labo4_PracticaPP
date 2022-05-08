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

import { ShowComponent } from './component/show/show.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { Actor } from './Entidades/Actor';
import { TablaActoresComponent } from './pages/tabla-actores/tabla-actores.component';
import { formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


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
    EditComponent,
    TablaActoresComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
    constructor() {

     // localStorage.setItem( "listadoActores", JSON.stringify(this.listadoActores));
    }
 }
