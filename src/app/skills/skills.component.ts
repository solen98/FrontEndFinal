import { Component, OnInit } from '@angular/core';
import { Softskill } from '../modelos/softskill';
import { Hardskill } from '../modelos/hardskill';
import { HardskillService } from '../servicios/hardskill.service';
import { SoftskillService } from '../servicios/softskill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  softskills: Softskill[]=[];
  hardskills: Hardskill[]=[];
  
  constructor(
     //Inyectar el servicio para tener acceso en la clase a los métodos
     private principalHardskill:HardskillService, private principalSoftskill:SoftskillService
  ) { }

  ngOnInit(): void {
    this.verHardskill();
    this.verSoftskill();
    }

  verHardskill(): void {
    this.principalHardskill.lista().subscribe(data => {
      this.hardskills=data})
    }
  
  verSoftskill(): void {
    this.principalSoftskill.lista().subscribe(data => {
      this.softskills=data})
}


}
