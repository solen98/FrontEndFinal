import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../servicios/educacion.service';
import { Educacion } from '../modelos/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[]=[];

  constructor(
    //Inyectar el servicio para tener acceso en la clase a los métodos
  private principalEducacion: EducacionService
  ) { } 

  ngOnInit(): void {
    this.verEducacion();
    }

  verEducacion(): void {
    this.principalEducacion.lista().subscribe(data => {
      this.educaciones=data})
  }

}

