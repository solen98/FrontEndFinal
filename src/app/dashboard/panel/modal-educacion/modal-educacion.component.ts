import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
form: FormGroup;
  id!: number;
  imagen! : '';
  titulo! : '';
  educaciones : Educacion[]=[];
  educa: any;



  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private principalEducacion: EducacionService) { 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      id: [''],
      imagen:['', [Validators.required]],
      titulo:['', [Validators.required, Validators.minLength(10), Validators.maxLength(80)]],
   })
  }
 

  ngOnInit(): void {
    this.verEducacion();
  }

 //declaramos los campos 
get Imagen(){
  return this.form.get("imagen");
}

get Titulo(){
 return this.form.get("titulo");
}

get imagenValid(){
  return this.Imagen?.touched && !this.Imagen?.valid;
}

get tituloValid() {
  return this.Titulo?.touched && !this.Titulo?.valid;
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
  const educa = new Educacion(this.titulo, this.imagen);
  this.principalEducacion.create(educa).subscribe(data=>{
    alert("");
    window.location.reload();
  }, err =>{
    alert("Dato añadido");
    this.form.reset();
  });
}

verEducacion(): void {
  this.principalEducacion.lista().subscribe(data => {
    this.educaciones=data})
}

findEducacion(id: number){
  this.principalEducacion.getById(id).subscribe({
    next: (data) => {
      this.form.setValue(data);
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
  });
  console.log("Dato cargado correctamente");
}

saveEduca() {
  let educa = this.form.value;
  if (educa.id == '') {
    this.principalEducacion.create(educa).subscribe({
      next: (data) => {
        this.reset();
      },
      error: (e) => console.error(e),
      //complete: () => console.info('complete')
    });
    window.location.reload();
    alert("Dato agregado correctamente");
  } else {
    this.principalEducacion.edit(educa.id, educa).subscribe({
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
    this.principalEducacion.delete(id).subscribe(data=>{
     this.verEducacion();
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