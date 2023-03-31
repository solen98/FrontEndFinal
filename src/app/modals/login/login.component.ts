import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private Router: Router){ 


    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })};
   submitted = false; //submitted/enviado




  ngOnInit(){}
  //metodos para el formulario
  //toma el dato del password
  get Password(){
    return this.form.get("password");
  }
 //toma el dato del mail
  get Mail(){
    return this.form.get("email");
   }
  //metodo de validacion del password
   get PasswordValid(){
     return this.Password?.touched && !this.Password?.valid;
   }
  //metodo de validacion del mail
   get MailValid() {
     return this.Mail?.touched && !this.Mail?.valid;
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
    }
 
  }


}
