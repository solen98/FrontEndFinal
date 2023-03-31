import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {
  form: FormGroup= new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl(''),
  });


constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      usuario:['', [Validators.required, Validators.email]],
      contrasena:[ '',[Validators.required, Validators.minLength(8)]],
   })
   }


  ngOnInit(): void {
  }

  get usuario(){
    return this.form.get("usuario");
   }

   get contrasena(){
    return this.form.get("contrasena");
   }

   get usuarioValid(){
     return this.usuario?.touched && !this.usuario?.valid;
   }

   get contrasenaValid() {
     return this.contrasena?.touched && !this.contrasena?.valid;
   }

 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("DATOS GUARDADOS")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      alert("¡COMPLETA LOS DATOS!")
    }
 
  }

}
