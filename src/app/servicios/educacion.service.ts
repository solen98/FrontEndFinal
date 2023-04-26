import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../modelos/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //url= "http://localhost:8080/educacion/"
  url= "https://portfolio-backend-final2.onrender.com/educacion/"
  constructor(private httpClient:HttpClient) { }


  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + `ver/${id}`);
  }

  public create(educacion : Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, educacion : Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
  }
  

}
