import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Entidades/Country';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private apiURL : string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  buscarPais(termino : string) : Observable<Country[]>{
    
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url); //otra forma de atrapar el error
      // .pipe(
      //   catchError(err => of(['Hola Error']))
      // );
  }

  getPaisesPorContinent (region: string) : Observable< Country[]>{
    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
