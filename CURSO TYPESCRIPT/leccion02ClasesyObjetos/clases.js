"use strict";
//constructor inicia los atributos 
//getNombre para acceder a la propiedad privada de nombre 
class Persona {
    //public nombre:string;
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 1;
    }
}
let persona1 = new Persona('Diana');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
