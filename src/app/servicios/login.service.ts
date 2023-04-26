import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../modelos/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 // url= "http://localhost:8080/login/"
  url= "https://portfolio-backend-final2.onrender.com/login/"

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Login[]>{
    return this.httpClient.get<Login[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Login[]>{
    return this.httpClient.get<Login[]>(this.url + `ver/${id}`);
  }

  public create(login : Login): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', login);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, login: Login): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, login);
  }

}
