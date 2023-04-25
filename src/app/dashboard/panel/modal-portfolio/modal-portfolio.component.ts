import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-modal-portfolio',
  templateUrl: './modal-portfolio.component.html',
  styleUrls: ['./modal-portfolio.component.css']
})
export class ModalPortfolioComponent implements OnInit {
  form: FormGroup;
    id!: number;
    titulo!: '';
    descripcion!: '';
    link!: '';
    proyectos: Proyecto[]=[];
    proye: any;


  constructor(private formBuilder: FormBuilder, private principalProyecto:ProyectoService) {
    this.form= this.formBuilder.group({
      id: [''],
      titulo:['', [Validators.required, Validators.maxLength(40)]],
      descripcion:[ '',[Validators.required, Validators.maxLength(100)]],
      link:[ '',[Validators.required]],
   })
   }

  ngOnInit(): void {
    this.verProyecto();
  }


  get Titulo(){
    return this.form.get("titulo");
   }

   get Descripcion(){
    return this.form.get("descripcion");
   }

   get Link(){
    return this.form.get("link");
   }

   get TituloValid(){
     return this.Titulo?.touched && !this.Titulo?.valid;
   }

   get DescripcionValid() {
     return this.Descripcion?.touched && !this.Descripcion?.valid;
   }

   get LinkValid() {
    return this.Link?.touched && !this.Link?.valid;
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
  onCreate(): void{
    const expe = new Proyecto(this.titulo, this.descripcion, this.link);
    this.principalProyecto.create(expe).subscribe(data=>{
      alert("");
      window.location.reload();
    }, err =>{
      alert("Dato añadido");
      this.form.reset();
    });
  }

  onRespuesta(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
  
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("¡Sección eliminada!")
  }

  verProyecto(): void {
    this.principalProyecto.lista().subscribe(data => {
      this.proyectos=data})
  }

  findProyecto(id: number){
    this.principalProyecto.getById(id).subscribe({
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    console.log("Dato cargado correctamente");
  }

  saveProye() {
    let proye = this.form.value;
    if (proye.id == '') {
      this.principalProyecto.create(proye).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Dato agregado correctamente");
    } else {
      this.principalProyecto.edit(proye.id, proye).subscribe({
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
      this.principalProyecto.delete(id).subscribe(data=>{
       this.verProyecto();
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
