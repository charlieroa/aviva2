let nombre = prompt('cual es tu nombre y apellido?');
let tipo = prompt('Elije el plan que deseas?\nplato: 0\nmes: 1\naño: 2', 0);
let ubicacion = prompt('Escribe la direccion para entregar tu vehiculo');


function saludar(nombre) {
    document.querySelector('.nav-item .nav-link').textContent = `Hola ${nombre}`;
}

saludar(nombre);

let plato = 0;
let mes = 1;
let año = 2;

const vehiculo = [plato, mes, año];

if (tipo == plato) {
    console.log('tienes que pagar $15.000 pesos');
} else if (tipo == mes) {
    console.log('tienes que pagar $50.000 pesos');
} else if (tipo == año) {
    console.log('tienes que pagar $550.000 pesos');
} else {
    console.log('no seleccionaste nada');
}


function Datos(direccion) {
    this.direccion = direccion;
}

const Datos3 = new Datos(ubicacion)

console.log(Datos3);