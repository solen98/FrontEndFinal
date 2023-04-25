import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Banner } from 'src/app/modelos/banner';
import { BannerService } from 'src/app/servicios/banner.service';

@Component({
  selector: 'app-modal-banner',
  templateUrl: './modal-banner.component.html',
  styleUrls: ['./modal-banner.component.css']
})
export class ModalBannerComponent implements OnInit {
  form: FormGroup;
  id!: number;
  fondo: Banner[]=[];
  nombre! : '';
  profesion!: '';



 constructor(private formBuilder: FormBuilder, private principalBanner: BannerService) {
    this.form= this.formBuilder.group({
      id: [''],
      nombre:['', [Validators.required, Validators.maxLength(35)]],
      profesion:[ '',[Validators.required, Validators.maxLength(50)]],
   })
   }


  ngOnInit(): void {
    this.verBanner();
  }

  get Nombre(){
    return this.form.get("nombre");
   }

   get Profesion(){
    return this.form.get("profesion");
   }

   get NombreValid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }


   get ProfesionValid(){
     return this.Profesion?.touched && !this.Profesion?.valid;
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

  findBanner(id: number){
    this.principalBanner.getById(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    console.log("Dato cargado correctamente");
  }

  verBanner(): void {
    this.principalBanner.lista().subscribe(data => {
      this.fondo=data})
  }


  saveBanner() {
    let banner = this.form.value;
    if (banner.id == '') {
      this.principalBanner.create(banner).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Dato agregado correctamente");
    } else {
      this.principalBanner.edit(banner.id, banner).subscribe({
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
  
  cerrar(): void {
    window.location.reload();
  }
  

}
