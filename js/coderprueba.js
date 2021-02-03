const btnEnviar = document.querySelector('#enviar');



eventListeners();

function eventListeners() {
    // Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
}


function inicioApp() {
    console.log('iniciandoapp');
}