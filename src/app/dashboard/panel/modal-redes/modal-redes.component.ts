import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redes } from 'src/app/modelos/redes';
import { RedesService } from 'src/app/servicios/redes.service';


@Component({
  selector: 'app-modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit {
  form: FormGroup;
    id!: number; 
    link!: '';
    icono!: '';
    redes: Redes[]=[];
    red: any;


constructor(private formBuilder: FormBuilder,  private principalRedes:RedesService) {
    this.form= this.formBuilder.group({
      id: [''],
      link:[ '',[Validators.required]],
      icono:[ '',[Validators.required]],
   })
   }

  ngOnInit(): void {
    this.verRed();
  }

 
   get Link(){
    return this.form.get("link");
   }

   get Icono(){
    return this.form.get("icono");
   }

   get LinkValid() {
    return this.Link?.touched && !this.Link?.valid;
  }
  
   get IconoValid(){
     return this.Icono?.touched && !this.Icono?.valid;
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

  verRed(): void {
    this.principalRedes.lista().subscribe(data => {
      this.redes=data})
  }

  onCreate(): void{
    const yo = new Redes(this.link ,this.icono);
    this.principalRedes.create(yo).subscribe(data=>{
      alert("");
      window.location.reload();
    }, err =>{
      alert("Información añadida");
      this.form.reset();
    });
  }


limpiar(): void {
  this.form.reset();
}

findRed(id: number){
  this.principalRedes.getById(id).subscribe({
    next: (data) => {
      this.form.setValue(data);
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
  });
  console.log("Dato cargado correctamente");
}

saveRed() {
  let red = this.form.value;
  if (red.id == '') {
    this.principalRedes.create(red).subscribe({
      next: (data) => {
        this.reset();
      },
      error: (e) => console.error(e),
      //complete: () => console.info('complete')
    });
    window.location.reload();
    alert("Dato agregado correctamente");
  } else {
    this.principalRedes.edit(red.id, red).subscribe({
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

delete(id:number){
  if (id != undefined){
    this.principalRedes.delete(id).subscribe(data=>{
     this.verRed();
    }, err =>{
      alert("Dato eliminado");
      this.form.reset();
    });
  }
}

reset(): void {
  this.form.reset();
}

cerrar(): void {
  window.location.reload();
}

  }
