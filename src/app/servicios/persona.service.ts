import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= "http://localhost:8080/persona/"

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + `ver/${id}`);
  }

  public create(persona : Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, persona);
  }


}