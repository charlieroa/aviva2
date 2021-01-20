let nombre = prompt('cual es tu nombre y apellido?');
let plato = prompt('¿Qué te gustaria almorzar hoy escribe tu antojo, escribelo');
let tipo = prompt('Elije el plan que deseas?\nplato: 0\nmes: 1\naño: 2', 0);


function saludar(nombre = 'Hola usuario, registrate') {
    document.querySelector('.nav-item .nav-link').textContent = `Hola ${nombre}`;
}

saludar(nombre);

const carrito = [
    { plato1: 'asado argentino', precio: 15000 },
    { plato2: 'asado argentino', precio: 15000 },
    { plato3: 'asado argentino', precio: 15000 },
];

// Añadir objeto al carrito con la propiedade push
const plato4 = {
    plato5: plato,
    precio: 15000
}

carrito.push(plato4);

const plato5 = {
    comida3: 'plato estandar',
    comida4: 'postre de natas'
}

// en vez de utilizar concat utilice spread operator de es6
let resultado = [...carrito, plato5];

console.log(resultado);

let unPlato = 0;
let mes = 1;
let año = 2;

const solicitud = [unPlato, mes, año];

if (tipo == unPlato) {
    console.log('tienes que pagar $15.000 pesos');
} else if (tipo == mes) {
    console.log('tienes que pagar $50.000 pesos');
} else if (tipo == año) {
    console.log('tienes que pagar $550.000 pesos');
} else {
    console.log('no seleccionaste nada');
}