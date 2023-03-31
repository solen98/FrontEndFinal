import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
  form: FormGroup= new FormGroup({
    nombre: new FormControl(''),
    profesion: new FormControl(''),
  });


 constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(35)]],
      profesion:[ '',[Validators.required, Validators.maxLength(50)]],
   })
   }


  ngOnInit(): void {
  }

  get nombre(){
    return this.form.get("nombre");
   }

   get profesion(){
    return this.form.get("profesion");
   }

   get nombreValid(){
    return this.nombre?.touched && !this.nombre?.valid;
  }


   get profesionValid(){
     return this.profesion?.touched && !this.profesion?.valid;
   }


  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("¡DATOS CARGADOS!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      alert("¡COMPLETA LOS DATOS!")
    }
 
  }

}
