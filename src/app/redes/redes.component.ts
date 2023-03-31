import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../servicios/principal.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  Redes:any;

  constructor(
    private principalService: PrincipalService
  ) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio
    this.principalService.getDatos().subscribe(principal => {
      //console.log(principal);
     //Definir informacion a mostrar
    this.Redes=principal.Redes
  });
  }

}
