import { Component, OnInit } from '@angular/core';
import { Banner } from '../modelos/banner';
import { BannerService } from '../servicios/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
//Crear/Inicializar variable de instancia para almacenar los datos con los que trata el Servicio 
fondo: Banner[]=[];



  constructor(private principalBanner: BannerService) { }



ngOnInit():  void {
    this.verBanner();
  }

  verBanner(): void {
    this.principalBanner.lista().subscribe(data => {
      this.fondo=data})
    }
}