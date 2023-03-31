import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup = new FormGroup({
    img: new FormControl(''),
    titulo: new FormControl(''),
    subtitulo: new FormControl(''),
    descripcion: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      img:['',[Validators.required]],
      titulo:['', [Validators.required, Validators.maxLength(40)]],
      subtitulo:['', [Validators.required,  Validators.maxLength(50)]],
      descripcion:['', [Validators.required, Validators.minLength(20), Validators.maxLength(80)]],
   })}
  
  ngOnInit(): void {}

  get Img(){
    return this.form.get("img");
  }

  get titulo(){
    return this.form.get("titulo");
   }

   get subtitulo(){
    return this.form.get("subtitulo");
   }

   get descripcion(){
    return this.form.get("descripcion");
   }

   get ImgValid(){
     return this.Img?.touched && !this.Img?.valid;
   }

   get tituloValid() {
     return this.titulo?.touched && !this.titulo?.valid;
   }

   get subtituloValid() {
    return this.subtitulo?.touched && !this.subtitulo?.valid;
  }

  get descripcionValid() {
    return this.descripcion?.touched && !this.descripcion?.valid;
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