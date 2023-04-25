import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import { Hardskill } from 'src/app/modelos/hardskill';
import { HardskillService } from 'src/app/servicios/hardskill.service';


@Component({
  selector: 'app-modal-hardskill',
  templateUrl: './modal-hardskill.component.html',
  styleUrls: ['./modal-hardskill.component.css']
})
export class ModalHardskillComponent implements OnInit {
  form: FormGroup;
    id!: number;
    titulo!: '';
    porcentaje!: 0;
    hardskills: Hardskill[]=[];
    skill: any;
 


  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private principalHardskill:HardskillService, private ruta: Router) { 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      id: [''],
      titulo:[ '', [Validators.required]],
      porcentaje:[ 0,[Validators.required, Validators.min(0),Validators.max(100) ]],
   })
  }

  ngOnInit(): void {
    this.verHardskill();

  }

 //declaramos los campos 
get Titulo(){
  return this.form.get("titulo");
}

get Porcentaje(){
 return this.form.get("porcentaje");
}

get TituloValid(){
  return this.Titulo?.touched && !this.Titulo?.valid;
}

get PorcentajeValid() {
  return this.Porcentaje?.touched && !this.Porcentaje?.valid;
}


onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

  if (this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo salio bien ¡Dato cargado!")
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched(); 
    alert("¡COMPLETA LOS DATOS!")
  }
}
onRespuesta(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("¡Sección eliminada!")
}



onCreate(): void{
  const hskill = new Hardskill(this.titulo, this.porcentaje);
  this.principalHardskill.create(hskill).subscribe(data=>{
    alert("");
    window.location.reload();
  }, err =>{
    alert("Dato añadido");
    this.form.reset();
  });
}

verHardskill(): void {
  this.principalHardskill.lista().subscribe(data => {
    this.hardskills=data})
  }

  findSkill(id: number){
    this.principalHardskill.getById(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    console.log("Dato cargado correctamente");
  }

  saveSkill() {
    let skill = this.form.value;
    if (skill.id == '') {
      this.principalHardskill.create(skill).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Dato agregado correctamente");
    } else {
      this.principalHardskill.edit(skill.id, skill).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Dato modificado correctamente");
    }
  }

  reset(): void {
    this.form.reset();
  }

  delete(id:number){
    if (id != undefined){
      this.principalHardskill.delete(id).subscribe(data=>{
       this.verHardskill();
      }, err =>{
        alert("Dato eliminado");
        this.form.reset();
      });
  
    }
  }


limpiar(): void {
  this.form.reset();
}

cerrar(): void {
  window.location.reload();
}

}
