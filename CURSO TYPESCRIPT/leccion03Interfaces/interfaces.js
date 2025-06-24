"use strict";
let usuario1 = { nombreUsuario: 'Diana', password: '12345', confirmarPassword: '12345' };
console.log(usuario1);
console.log(usuario1.nombreUsuario);
console.log(usuario1.password);
console.log(usuario1.confirmarPassword);
let avion = {
    abordarTransporte: function () {
        console.log('abordando');
    }
};
avion.abordarTransporte();
