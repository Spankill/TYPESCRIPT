//constructor inicia los atributos 
//getNombre para acceder a la propiedad privada de nombre 

class Persona{
    private nombre:string;
    //public nombre:string;

    constructor(nombre:string){
        this.nombre = nombre;
    }
    getNombre():string{
        return this.nombre;
    }

    static metodoEstatico(){
        return 1;
    }
}

let persona1 = new Persona('Diana');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
