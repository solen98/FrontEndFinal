import { Component, OnInit } from '@angular/core';
import { RedesService } from '../servicios/redes.service';
import { Redes } from '../modelos/redes';


@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  redes : Redes[]=[];

  constructor(
     private principalRedes:RedesService
  ) { }



  ngOnInit(): void {
  this.verRed();
  }

 verRed(): void {
  this.principalRedes.lista().subscribe(data => {
    this.redes=data})
}
}



