interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string;
}

let usuario1:Usuario = { nombreUsuario: 'Diana', password: '12345', confirmarPassword: '12345' };

console.log(usuario1);
console.log(usuario1.nombreUsuario);
console.log(usuario1.password);
console.log(usuario1.confirmarPassword);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log('abordando');
    }
}

avion.abordarTransporte();