import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Sobremi } from 'src/app/modelos/sobremi';

import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  form: FormGroup;
  sobremi: Sobremi = new Sobremi("", "", "", "", "", "", "");
 
  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private auteService: AutenticacionService, private ruta: Router){ 


    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      contrasena:['',[Validators.required, Validators.minLength(8)]],
      correo:['', [Validators.required, Validators.email]],
   })};
   //submitted = false; 




  ngOnInit(){

  }
  //metodos para el formulario
  //toma el dato del password
  get Correo(){
    return this.form.get("correo");
  }
 //toma el dato del mail
  get Contrasena(){
    return this.form.get("contrasena");
   }
  //metodo de validacion del password
   get CorreoValid(){
     return this.Correo?.touched && !this.Correo?.valid;
   }
  //metodo de validacion del mail
   get ContrasenaValid() {
     return this.Contrasena?.touched && !this.Contrasena?.valid;
   }


   //onEnviar(event: Event){
    // event.preventDefault;
    // if (this.form.valid){
     //this.auteService.loginPersona(JSON.stringify(this.form.value)).subscribe(data =>
     //  {
     //    console.log("DATA: " + JSON.stringify(data));
      //  this.ruta.navigate(['/dashboard'])
      // }, error =>{
     //    alert("error al iniciar sesion")
     //  })
      //this.ruta.navigate([''])
  //   }  else {
      // alert("Hay un error en el formulario")
     //}
   
  // }

  onEnviar(event: Event) {
    if (this.form.valid) {
        console.log(JSON.stringify(this.form.value));
        
        event.preventDefault;
        this.auteService.loginPersona(this.form.value).subscribe(data => {               
            if (data === null || data === undefined)
            {
              alert("Credenciales no validas");
            }else{
              this.ruta.navigate(['/dashboard']); 
            }
          },            
          error => {
              alert("Credenciales no validas " + error);
          })             
    }else {
      console.log("formulario no válido" + JSON.stringify(this.form.value));
        sessionStorage.setItem('currentUser', "null");
        sessionStorage.setItem('idUser', "0");
        alert("Credenciales no validas");
        
    }
  }

  onCerrar() {
        sessionStorage.setItem('currentUser', "null");
        sessionStorage.setItem('idUser', "0");  
        this.ruta.navigate(['/portfolio']);
  }
  volver(){
    this.ruta.navigate(['/']);
  }

 
  }



