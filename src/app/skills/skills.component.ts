import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  HardSkills: any;
  SoftSkills: any;

  constructor(
     //Inyectar el servicio para tener acceso en la clase a los métodos
     private principalService: PrincipalService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio
    this.principalService.getDatos().subscribe(principal => {
      //console.log(principal);
     //Definir informacion a mostrar
    this.HardSkills=principal.HardSkills,
    this.SoftSkills=principal.SoftSkills
    });
  }
}