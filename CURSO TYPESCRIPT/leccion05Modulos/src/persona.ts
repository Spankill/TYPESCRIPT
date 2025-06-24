//La palabra export indica que la clase será exportada
export class Persona {
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido:string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}