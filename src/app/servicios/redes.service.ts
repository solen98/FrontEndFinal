import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Redes } from '../modelos/redes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  url= "http://localhost:8080/redes/"

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.url + `ver/${id}`);
  }

  public create(redes : Redes): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', redes);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, redes : Redes): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, redes);
  }



}
