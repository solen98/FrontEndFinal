import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Sobremi } from 'src/app/modelos/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  form: FormGroup;
    id!: number; 
    imagen!: '';
    acercademi1!: '';
    acercademi2!: '';
    acercademi3!: '';
    acercademi4!: '';
    correo!: '';
    contrasena!: '';
    acercadeyo : Sobremi[]=[];
    sobremi: any;



  constructor(private formBuilder: FormBuilder, private principalSobremi:SobremiService ) { 
    this.form= this.formBuilder.group({
      id: [''],
      imagen:['', [Validators.required]],
      acercademi1:[ '',[Validators.required, Validators.maxLength(200) ]],
      acercademi2:[ '',[Validators.required,Validators.maxLength(200) ]],
      acercademi3:[ '',[Validators.required, Validators.maxLength(200) ]],
      acercademi4:[ '',[Validators.required, Validators.maxLength(200) ]],
      correo: ['',[Validators.required, Validators.email]],
      contrasena:[['',Validators.required, Validators.minLength(8)]]
   })


  }
  ngOnInit(): void {
     this.verSobremi(); 
    }

  get Imagen(){
    return this.form.get("imagen");
  }
  
  get Acercademi1(){
   return this.form.get("acercademi1");
  }

  get Acercademi2(){
    return this.form.get("acercademi2");
   }
  
   get Acercademi3(){
    return this.form.get("acercademi3");
   }

   get Acercademi4(){
    return this.form.get("acercademi3");
   }

   get Correo(){
    return this.form.get("correo");
   }

   get Contrasena(){
    return this.form.get("contrasena");
   }



  get ImagenValid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }
  
  get Acercademi1Valid() {
    return this.Acercademi1?.touched && !this.Acercademi1?.valid;
  }

  get Acercademi2Valid() {
    return this.Acercademi2?.touched && !this.Acercademi2?.valid;
  }

  get Acercademi3Valid() {
    return this.Acercademi3?.touched && !this.Acercademi3?.valid;
  }

  get Acercademi4Valid() {
    return this.Acercademi4?.touched && !this.Acercademi4?.valid;
  }

  get CorreoValid() {
    return this.Correo?.touched && !this.Correo?.valid;
  }

  get ContrasenaValid() {
    return this.Contrasena?.touched && !this.Contrasena?.valid;
  }


  verSobremi(): void {
    this.principalSobremi.lista().subscribe(data => {
      this.acercadeyo=data})
    }

    findSobremi(id: number){
      this.principalSobremi.getById(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      console.log("Dato cargado correctamente");
    }

    onCreate(): void{
      const sobremi = new Sobremi(this.imagen, this.acercademi1, this.acercademi2, this.acercademi3, this.acercademi4, this.correo, this.contrasena);
      this.principalSobremi.create(sobremi).subscribe(data=>{
        alert("");
        window.location.reload();
      }, err =>{
        alert("Dato añadido");
        this.form.reset();
      });
    }
    
    saveSobremi() {
      let sobremi = this.form.value;
      if (sobremi.id == '') {
        this.principalSobremi.create(sobremi).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          //complete: () => console.info('complete')
        });
        window.location.reload();
        alert("Dato agregado correctamente");
      } else {
        this.principalSobremi.edit(sobremi.id, sobremi).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          //complete: () => console.info('complete')
        });
        window.location.reload();
        alert("Dato modificado correctamente");
      }
    }
  

limpiar(): void {
  this.form.reset();
}

cerrar(): void {
  window.location.reload();
}

}
