//Este es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
//Este es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http:HttpClient) { }
//Metodo observable que devuelve los datos
getDatos():Observable<any> {
//Se llama al Json con su path -ruta-, o bien, en su lugar se pude poner una URL para traer datos de un JSON online
  return this.http.get('./assets/json/principal.json')
}

}
