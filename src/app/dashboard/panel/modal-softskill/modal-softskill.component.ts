import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal-softskill',
  templateUrl: './modal-softskill.component.html',
  styleUrls: ['./modal-softskill.component.css']
})
export class ModalSoftskillComponent implements OnInit {
  form: FormGroup= new FormGroup({
    titulo: new FormControl(''),
    porcentaje: new FormControl('')
  });

  

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) { 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      titulo:[ '', [Validators.required, Validators.pattern("[a-zA-ZñÑá-úÁ-Ú]*")]],
      porcentaje:[ 0,[Validators.required, Validators.min(0),Validators.max(100) ]],
   })
  }


  ngOnInit(): void {
  }

//declaramos los campos 
get titulo(){
  return this.form.get("titulo");
}

get porcentaje(){
 return this.form.get("porcentaje");
}

get tituloValid(){
  return this.titulo?.touched && !this.titulo?.valid;
}

get porcentajeValid() {
  return this.porcentaje?.touched && !this.porcentaje?.valid;
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
}

