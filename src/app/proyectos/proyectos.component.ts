import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
Proyectos: any;


  constructor(
    //Inyectar el servicio para tener acceso en la clase a los métodos
  private principalService: PrincipalService) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio
    this.principalService.getDatos().subscribe(principal => {
      //console.log(principal);
     //Definir informacion a mostrar
    this.Proyectos=principal.Proyectos
  });
  }
}
