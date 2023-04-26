import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../modelos/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  //url= "http://localhost:8080/banner/"
  url= "https://portfolio-backend-final2.onrender.com/banner/"
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.url + `ver/${id}`);
  }

  public create(banner : Banner): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', banner);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }

  public edit(id: number, banner : Banner): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, banner);
  }
  

}
