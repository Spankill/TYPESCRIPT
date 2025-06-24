"use strict";
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
let sumaFlecha = (a, b) => {
    return a + b;
};
let sumaFlecha1 = (a, b) => a + b;
console.log(sumaFlecha(5, 5));
console.log(sumaFlecha1(10, 5));
var obtenerNombre = function () {
    return 'pedrito';
};
let obtenerNombreFlecha = () => 'pedrito';
console.log(obtenerNombre());
console.log(obtenerNombreFlecha());
