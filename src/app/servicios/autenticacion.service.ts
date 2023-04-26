import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  //url= "http://localhost:8080/sobremi/autenticacion/login"
  url= "https://portfolio-backend-final2.onrender.com/sobremi/autenticacion/login"
  currentUserSubject:BehaviorSubject<any>;
  sessionStorage: any; 

  constructor(private httpClient:HttpClient) { 
    this.currentUserSubject=new
    BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
  }

loginPersona(credenciales:any):Observable<any>{
  console.log(credenciales);
  var httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),}
  return this.httpClient.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
    console.log("Aquí" + JSON.stringify(data));
    sessionStorage.setItem('currentUser',JSON.stringify(data));
    this.currentUserSubject.next(data);
    console.log("Autenticacion esta corriendo" + JSON.stringify(data));
    return data
  }));
  }

  get usuarioAutenticado(){  
    return this.currentUserSubject.value;
  }
}


