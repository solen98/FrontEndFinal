import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  Educacion: any;

  constructor(
    //Inyectar el servicio para tener acceso en la clase a los métodos
  private principalService: PrincipalService
  ) { } 

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio
    this.principalService.getDatos().subscribe(principal => {
      //console.log(principal);
     //Definir informacion a mostrar
    this.Educacion=principal.Educacion
  });
  }
}

