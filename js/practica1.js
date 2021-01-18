let nombre = prompt('cual es tu nombre y apellido?');

function saludar(nombre = 'Usuario') {
    document.querySelector('.nav-item .nav-link').textContent = `Hola ${nombre}`;
}

saludar(nombre);