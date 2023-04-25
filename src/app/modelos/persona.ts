export class Persona {
    id?: number;
    email: string;
    clave: string;

    constructor (email:string, clave:string){
        this.email = email;
        this.clave = clave;
    
        }
}
