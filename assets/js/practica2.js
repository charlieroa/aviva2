//aqui hago un radom que elija un numero aliatorio entre 0 y 3
let opcionMaquina = Math.floor(Math.random() * 3);

console.log(opcionMaquina);

//Se definen los 3 datos del arreglo

const piedra = 0;
const papel = 1;
const tijera = 2;

let opciones = ["Piedra", "Papel", "Tijera"];

//Se pide al usuario que elija una ipcion para hacer el condicional

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

//El resultado se imprime en el Dom
const textoEncabezado = document.querySelector('.text-center h1').textContent;


if (opcionUsuario == piedra) {
    if (opcionMaquina == piedra) {
        document.querySelector('.text-center h1').textContent = `Empate!`;
    } else if (opcionMaquina == papel) {
        document.querySelector('.text-center h1').textContent = `Perdiste :(`;
    } else if (opcionMaquina == tijera) {
        document.querySelector('.text-center h1').textContent = `Ganaste!`;
    }
} else if (opcionUsuario == papel) {
    if (opcionMaquina == piedra) {
        document.querySelector('.text-center h1').textContent = `Ganaste!`;
    } else if (opcionMaquina == papel) {
        document.querySelector('.text-center h1').textContent = `Empate!`;
    } else if (opcionMaquina == tijera) {
        document.querySelector('.text-center h1').textContent = `Perdiste :(`;
    }
} else if (opcionUsuario == tijera) {
    if (opcionMaquina == piedra) {
        document.querySelector('.text-center h1').textContent = `Perdiste :(`;
    } else if (opcionMaquina == papel) {
        document.querySelector('.text-center h1').textContent = `Ganaste!`;
    } else if (opcionMaquina == tijera) {
        document.querySelector('.text-center h1').textContent = `Empate!`;
    }
} else {
    alert("No jugaste :(");
    document.querySelector('.text-center h1').textContent = `No jugaste :(`;
}