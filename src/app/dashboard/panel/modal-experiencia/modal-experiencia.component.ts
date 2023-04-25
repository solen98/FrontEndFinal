import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
    id?: number;
    imagen! :  '';
    titulo! :  '';
    subtitulo! : '';
    descripcion! : '';
    experiencias: Experiencia[]=[];
    trabajos: any;


  constructor(private formBuilder: FormBuilder, private principalExperiencia:ExperienciaService, private ruta: Router) {
    this.form= this.formBuilder.group({
      id: [''],
      imagen:['',[Validators.required]],
      titulo:['', [Validators.required, Validators.maxLength(40)]],
      subtitulo:['', [Validators.required,  Validators.maxLength(50)]],
      descripcion:['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
   })}
  
  ngOnInit(): void {
    this.verExperiencia();
  }

  get Imagen(){
    return this.form.get("imagen");
  }

  get Titulo(){
    return this.form.get("titulo");
   }

   get Subtitulo(){
    return this.form.get("subtitulo");
   }

   get Descripcion(){
    return this.form.get("descripcion");
   }

   get ImagenValid(){
     return this.Imagen?.touched && !this.Imagen?.valid;
   }

   get TituloValid() {
     return this.Titulo?.touched && !this.Titulo?.valid;
   }

   get SubtituloValid() {
    return this.Subtitulo?.touched && !this.Subtitulo?.valid;
  }

  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
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

  onCreate(): void{
    const expe = new Experiencia(this.titulo, this.subtitulo, this.descripcion, this.imagen);
    this.principalExperiencia.create(expe).subscribe(data=>{
      alert("");
      window.location.reload();
    }, err =>{
      alert("Dato añadido");
      this.form.reset();
    });
  }

  verExperiencia(): void {
    this.principalExperiencia.lista().subscribe(data => {
      this.experiencias=data})
  }

  findExperiencia(id: number){
    this.principalExperiencia.getById(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    console.log("Dato cargado correctamente");
  }

  saveExpe() {
    let expe = this.form.value;
    if (expe.id == '') {
      this.principalExperiencia.create(expe).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Dato agregado correctamente");
    } else {
      this.principalExperiencia.edit(expe.id, expe).subscribe({
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
      this.principalExperiencia.delete(id).subscribe(data=>{
       this.verExperiencia();
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