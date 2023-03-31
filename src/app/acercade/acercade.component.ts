import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
//Crear/Inicializar variable de instancia para almacenar los datos con los que trata el Servicio 
Acercade: any;

  constructor(
    //Inyectar el servicio para tener acceso en la clase a los métodos
    private principalService: PrincipalService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio
    this.principalService.getDatos().subscribe(principal => {
      console.log(principal);
     //Definir informacion a mostrar
     this.Acercade=principal.Acercade
    });
    }
  }

