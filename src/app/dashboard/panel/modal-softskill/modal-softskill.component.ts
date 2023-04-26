import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Softskill } from 'src/app/modelos/softskill';
import { SoftskillService } from 'src/app/servicios/softskill.service';


@Component({
  selector: 'app-modal-softskill',
  templateUrl: './modal-softskill.component.html',
  styleUrls: ['./modal-softskill.component.css']
})
export class ModalSoftskillComponent implements OnInit {
  form: FormGroup;
    id!: number;
    titulo!: '';
    porcentaje!: 0;
    softskills: Softskill[]=[];
    skill: any;
 
  

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private principalSoftskill:SoftskillService, private ruta: Router) { 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      id: [''],
      titulo:[ '', [Validators.required]],
      porcentaje:[ 0,[Validators.required, Validators.min(0),Validators.max(100) ]],
   })
  }


  ngOnInit(): void {
    this.verSoftskill();
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

verSoftskill(): void {
  this.principalSoftskill.lista().subscribe(data => {
    this.softskills=data})
}

onCreate(): void{
  const sskill = new Softskill(this.titulo, this.porcentaje);
  this.principalSoftskill.create(sskill).subscribe(data=>{
    alert("");
    window.location.reload();
  }, err =>{
    alert("Dato añadido");
    this.form.reset();
  });
}

findSkill(id: number){
  this.principalSoftskill.getById(id).subscribe({
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
    this.principalSoftskill.create(skill).subscribe({
      next: (data) => {
        this.reset();
      },
      error: (e) => console.error(e),
      //complete: () => console.info('complete')
    });
    window.location.reload();
    alert("Dato agregado correctamente");
  } else {
    this.principalSoftskill.edit(skill.id, skill).subscribe({
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
    this.principalSoftskill.delete(id).subscribe(data=>{
     this.verSoftskill();
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