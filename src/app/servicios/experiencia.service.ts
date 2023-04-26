import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 //url= "http://localhost:8080/experiencia/"
 url= "https://portfolio-backend-final2.onrender.com/experiencia/"

  constructor(private httpClient:HttpClient) { }


  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + `ver/${id}`);
  }

  public create(experiencia : Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, experiencia : Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }
  
}
