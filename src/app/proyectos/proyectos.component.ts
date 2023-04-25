import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';
import { Proyecto } from '../modelos/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[]=[];


  constructor(
    //Inyectar el servicio para tener acceso en la clase a los métodos
    private principalProyecto:ProyectoService) { }

    ngOnInit(): void {
      this.verProyecto();
      }


  verProyecto(): void {
    this.principalProyecto.lista().subscribe(data => {
      this.proyectos=data})
  }
}
