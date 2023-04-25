export class Sobremi {
    id! : number;
    acercademi1 : string;
    acercademi2 : string;
    acercademi3 : string;
    acercademi4 : string;
    imagen : string;
    correo: string;
    contrasena : string;
   
    

    constructor (acercademi1:string, acercademi2:string ,acercademi3:string, acercademi4:string, imagen:string,
        correo:string, contrasena:string){
        this.acercademi1 = acercademi1;
        this.acercademi2 = acercademi2;
        this.acercademi3 = acercademi3;
        this.acercademi4 = acercademi4;
        this.imagen = imagen;
        this.correo = correo;
        this.contrasena = contrasena;
        


}
}
