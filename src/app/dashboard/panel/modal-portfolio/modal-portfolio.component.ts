import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.css']
})
export class ModalPortfolioComponent implements OnInit {
  form: FormGroup= new FormGroup({
    titulo: new FormControl(''),
    descripcion: new FormControl(''),
    link: new FormControl(''),

  });

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      titulo:['', [Validators.required, Validators.maxLength(40)]],
      descripcion:[ '',[Validators.required, Validators.maxLength(100)]],
      link:[ '',[Validators.required]],
   })
   }

  ngOnInit(): void {
  }


  get titulo(){
    return this.form.get("titulo");
   }

   get descripcion(){
    return this.form.get("descripcion");
   }

   get link(){
    return this.form.get("link");
   }

   get tituloValid(){
     return this.titulo?.touched && !this.titulo?.valid;
   }

   get descripcionValid() {
     return this.descripcion?.touched && !this.descripcion?.valid;
   }

   get linkValid() {
    return this.link?.touched && !this.link?.valid;
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
