import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  form: FormGroup= new FormGroup({
    link: new FormControl(''),
    icono: new FormControl(''),
  });

constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      link:[ '',[Validators.required]],
      icono:[ '',[Validators.required]],
   })
   }

  ngOnInit(): void {
  }

 
   get link(){
    return this.form.get("link");
   }

   get icono(){
    return this.form.get("icono");
   }

   get linkValid() {
    return this.link?.touched && !this.link?.valid;
  }
  
   get iconoValid(){
     return this.icono?.touched && !this.icono?.valid;
   }



  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Ya puedes ingresar a la sección administrador")
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
