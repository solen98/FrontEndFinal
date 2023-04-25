export class Experiencia {
    id! : number;
    titulo : string;
    subtitulo : string;
    descripcion : string;
    imagen : string;


    constructor (titulo:string, subtitulo:string ,descripcion:string, imagen:string){
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

    }
}
