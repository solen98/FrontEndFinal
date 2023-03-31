import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
form: FormGroup= new FormGroup({
  img: new FormControl(''),
  titulo: new FormControl('')
  });




  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) { 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      img:[ '', [Validators.required]],
      titulo:[ '', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
   })
  }

  ngOnInit(): void {
  }

 //declaramos los campos 
get img(){
  return this.form.get("img");
}

get titulo(){
 return this.form.get("titulo");
}

get imgValid(){
  return this.img?.touched && !this.img?.valid;
}

get tituloValid() {
  return this.titulo?.touched && !this.titulo?.valid;
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
}