import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  form: FormGroup= new FormGroup({
    Img: new FormControl(''),
    acercademi: new FormControl(''),
    acercademi2: new FormControl(''),
    acercademi3: new FormControl(''),
    acercademi4: new FormControl('')
  });



  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      Img:['', [Validators.required]],
      acercademi:[ '',[Validators.required, Validators.maxLength(200) ]],
      acercademi2:[ '',[Validators.required,Validators.maxLength(200) ]],
      acercademi3:[ '',[Validators.required, Validators.maxLength(200) ]],
      acercademi4:[ '',[Validators.required, Validators.maxLength(200) ]],
   })


  }
  ngOnInit(): void {
  }

  get Img(){
    return this.form.get("Img");
  }
  
  get acercademi(){
   return this.form.get("acercademi");
  }

  get acercademi2(){
    return this.form.get("acercademi2");
   }
  
   get acercademi3(){
    return this.form.get("acercademi3");
   }

   get acercademi4(){
    return this.form.get("acercademi3");
   }


  get ImgValid(){
    return this.Img?.touched && !this.Img?.valid;
  }
  
  get acercademiValid() {
    return this.acercademi?.touched && !this.acercademi?.valid;
  }

  get acercademi2Valid() {
    return this.acercademi2?.touched && !this.acercademi2?.valid;
  }

  get acercademi3Valid() {
    return this.acercademi3?.touched && !this.acercademi3?.valid;
  }

  get acercademi4Valid() {
    return this.acercademi4?.touched && !this.acercademi4?.valid;
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

}
