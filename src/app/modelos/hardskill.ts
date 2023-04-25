export class Hardskill {
    id! : number;
    titulo : string;
    porcentaje : number;
  

     constructor (titulo:string, porcentaje:number){
        this.titulo = titulo ?? 'Insertar nuevo titulo';
        this.porcentaje = porcentaje ?? 0; 
    }

   
}
