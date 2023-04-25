import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Softskill } from '../modelos/softskill';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {
  url= "http://localhost:8080/softskill/"
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Softskill[]>{
    return this.httpClient.get<Softskill[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Softskill[]>{
    return this.httpClient.get<Softskill[]>(this.url + `ver/${id}`);
  }

  public create(softskill : Softskill): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', softskill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, softskill : Softskill): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, softskill);
  }

}
