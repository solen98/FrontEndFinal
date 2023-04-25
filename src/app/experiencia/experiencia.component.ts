import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../servicios/experiencia.service';
import { Experiencia } from '../modelos/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencias: Experiencia[]=[];


  constructor(
    //Inyectar el servicio para tener acceso en la clase a los métodos
  private principalExperiencia:ExperienciaService
  ) { } 

  ngOnInit(): void {
  this.verExperiencia();
  }

 verExperiencia(): void {
  this.principalExperiencia.lista().subscribe(data => {
    this.experiencias=data})
}



}
