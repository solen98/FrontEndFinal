import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hardskill } from '../modelos/hardskill';

@Injectable({
  providedIn: 'root'
})
export class HardskillService {
  editarSkill(id: any, skills: any) {
    throw new Error('Method not implemented.');
  }
  //url= "http://localhost:8080/hardskill/"
  url= "https://portfolio-backend-final2.onrender.com/hardskill/"

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Hardskill[]>{
    return this.httpClient.get<Hardskill[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Hardskill[]>{
    return this.httpClient.get<Hardskill[]>(this.url + `ver/${id}`);
  }

  public create(hardskill : Hardskill): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', hardskill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, hardskill : Hardskill): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, hardskill);
  }


}
