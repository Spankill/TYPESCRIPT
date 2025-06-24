let suma = function( a:number, b:number){
    return a+b;
};

console.log(suma(5,3));


let sumaFlecha = (a:number, b:number) => {
    return a + b;
};


let sumaFlecha1 = (a:number, b:number) => a + b;


console.log(sumaFlecha(5,5));

console.log(sumaFlecha1(10,5));

var obtenerNombre = function(){
    return 'pedrito';
}

let obtenerNombreFlecha = () => 'pedrito';

console.log(obtenerNombre());
console.log(obtenerNombreFlecha());