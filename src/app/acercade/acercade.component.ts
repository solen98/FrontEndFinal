import { Component, OnInit } from '@angular/core';
import { Sobremi } from '../modelos/sobremi';
import { SobremiService } from '../servicios/sobremi.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
//Crear/Inicializar variable de instancia para almacenar los datos con los que trata el Servicio 
acercademi : Sobremi[]=[];

  constructor( private principalSobremi:SobremiService ) { }

  ngOnInit(): void {
    this.verSobremi();
    }

  verSobremi(): void {
    this.principalSobremi.lista().subscribe(data => {
      this.acercademi=data})
    }
  }

