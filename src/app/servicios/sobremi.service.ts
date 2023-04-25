import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sobremi } from '../modelos/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  url= "http://localhost:8080/sobremi/"
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Sobremi[]>{
    return this.httpClient.get<Sobremi[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Sobremi[]>{
    return this.httpClient.get<Sobremi[]>(this.url + `ver/${id}`);
  }

  public create(sobremi : Sobremi): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', sobremi);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, sobremi : Sobremi): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, sobremi);
  }


}
