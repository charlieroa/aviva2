//aplicando jquery

let $modalOverlay = $('.modal-overlay'),
    $modalContainer = $('.modal-container'),
    $modalTrigger = $('.modal-trigger'),
    $modalClose = $('.modal-close');

$modalTrigger.on('click', function() {
    $modalContainer.toggleClass('modal--show');
});

$modalOverlay.on('click', function() {
    $modalContainer.toggleClass('modal--show');
});

$modalClose.on('click', function() {
    $modalContainer.removeClass('modal--show');
});


//variables
const carrito = document.querySelector('#carrito');
const listaMenu = document.querySelector('#listado-menu');
const contenedorCarrito = document.querySelector('.dropdown-menu #listado-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
//buscador
const btnEnviar = document.querySelector('#enviar');
const ubicacion = document.querySelector('#direccion');
const menu = document.querySelector('#menu');

//arreglo del carrito
let articulosCarrito = [];
let mostrarMenu = [];

//llamar por ajax menu



fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(meals => meals.json())
    .then(meal => {
        mostrarMenu = meal.meals;
        console.log(mostrarMenu);
        mostrarMenu.map((meal) => {

            //crear imagen          
            const imagen = document.createElement('img');
            imagen.src = meal.strMealThumb;
            imagen.classList.add('card-img-top');

            //enlace de imagen
            const enlaceImagen = document.createElement('a');
            enlaceImagen.href = '#';
            enlaceImagen.id = 1;
            enlaceImagen.appendChild(imagen);

            //titulo
            const titulo = document.createElement('h3');
            titulo.textContent = meal.strMeal;
            titulo.classList.add('h5', 'mt-1', 'card-body', 'py-2', 'text-center');

            //precio
            const precioPlato = document.createElement('p');
            precioPlato.textContent = '15.000';
            precioPlato.classList.add('h5', 'py-2', 'text-center');

            //crear div
            const info = document.createElement('div');
            info.classList.add('info-cardcard', 'border-0', 'box-shadow');
            info.appendChild(enlaceImagen)
            info.appendChild(titulo);
            info.appendChild(precioPlato);

            //crear card
            const cardPlato = document.createElement('div');
            cardPlato.classList.add('col-md-4', 'col-sm-6', 'mb-grid-gutter');
            cardPlato.appendChild(info);

            //agregar a contenedor
            const listadoDeComidas = document.querySelector('#listadoDeComidas');
            listadoDeComidas.appendChild(cardPlato);
            console.log(listadoDeComidas);

        });
    })




// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
//     .then(meals => meals.json())
//     .then(meal => {
//         mostrarMenu = meal.meals;
//         console.log(mostrarMenu);
//         mostrarMenu.map((meal) => {

//             //titulo
//             const titulo = document.createElement('h3');
//             titulo.textContent = meal.strMeal;
//             titulo.classList.add('h5', 'mt-1', 'card-body', 'py-2', 'text-center');

//             //precio
//             const precioPlato = document.createElement('p');
//             precioPlato.textContent = '15.000';
//             precioPlato.classList.add('h5', 'py-2', 'text-center');

//             //crear div
//             const info = document.createElement('div');
//             info.classList.add('info-cardcard', 'border-0', 'box-shadow');
//             info.appendChild(titulo);
//             info.appendChild(precioPlato);

//             //agregar a contenedor
//             const listadoDeComidas = document.querySelector('#listadoDeComidasPLato');
//             listadoDeComidas.appendChild(info);
//             console.log(listadoDeComidas);

//         });
//     })


cargarEventListeners();

//eventos
function cargarEventListeners() {
    //buscador
    // document.addEventListener('DOMContentLoaded', inicioApp);
    ubicacion.addEventListener('blur', validarFormulario);
    menu.addEventListener('blur', validarMenu);
    // Dispara cuando se presiona "Agregar Carrito"
    listaMenu.addEventListener('click', agregarMenu);
    carrito.addEventListener('click', eliminarMenu);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        vaciarCarrito();
    })
}

//buscador de menu//

// function inicioApp() {
//     btnEnviar.disabled = true;
//     btnEnviar.textContent = 'Sin datos';
// }


function validarFormulario(campo) {
    if (campo.target.value.length > 0) {

        //elimina los errores del Dom
        const error = document.querySelector('#alerta')
        error.remove();
        campo.target.classList.remove('error-direccion');
        campo.target.classList.add('validando-direccion');

    } else {
        campo.target.classList.add('error-direccion');
        mostrarError("Escribe una dirección valida por favor");
    }

}

function validarMenu(campo) {
    if (campo.target.value.length > 0) {
        const errores = document.querySelector('#alerta')
        errores.remove();
        campo.target.classList.remove('error-direccion');
        campo.target.classList.add('validando-direccion');
    } else {
        campo.target.classList.add('error-direccion');
        mostrarError("Selecciona una opción");
    }
}



if (ubicacion.value !== '' && menu.value !== '') {
    btnEnviar.disabled = false;
}

function mostrarError(mensaje) {
    document.getElementById("alert-busqueda").className =
        "alert alert-primary alert-dismissible";
    document.getElementById("alert-busqueda-texto").innerText =
        mensaje;
}



// Añade menu al carrito
function agregarMenu(e) {
    e.preventDefault();
    /* Delegation para agregar-carrito y con contains compruebo que verdaderamente sea la imagen
    la que estan dando clic
    */

    if (e.target.classList.contains('card-img-top')) {
        const menuSelecccionado = e.target.parentElement.parentElement;
        leerDatosMenu(menuSelecccionado);
    }
}

function VerPrecios() {
    articulosCarrito = articulosCarrito.filter(menuSelecccionado => menuSelecccionado.precio !== MenuId);
}



// Lee los datos del menu

function leerDatosMenu(menuSelecccionado) {

    const infoMenu = {
        imagen: menuSelecccionado.querySelector('img').src,
        titulo: menuSelecccionado.querySelector('h3').textContent,
        precio: menuSelecccionado.querySelector('.precio').textContent,
        id: menuSelecccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //creo una funcion para saber si exite el mismo menu y este pueda sumar las cantidades
    if (articulosCarrito.some(menuSelecccionado => menuSelecccionado.id === infoMenu.id)) {
        const menuSelecccionado = articulosCarrito.map(menuSelecccionado => {
            if (menuSelecccionado.id === infoMenu.id) {
                menuSelecccionado.cantidad++;
                return menuSelecccionado;
            } else {
                return menuSelecccionado;
            }
        })
        articulosCarrito = [...menuSelecccionado];
    } else {
        articulosCarrito = [...articulosCarrito, infoMenu];
    }

    carritoHTML();
}



// Elimina el curso del carrito en el DOM
function eliminarMenu(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        // e.target.parentElement.parentElement.remove();
        const MenuId = e.target.getAttribute('data-id')

        // // Eliminar del arreglo del carrito
        articulosCarrito = articulosCarrito.filter(menuSelecccionado => menuSelecccionado.id !== MenuId);
        carritoHTML();
    }

}

// Muestra el menu seleccionado en el Carrito
function carritoHTML() {
    vaciarCarrito();
    articulosCarrito.forEach(menuSelecccionado => {
        //aqui hago una destructuring del objeto
        const { imagen, titulo, precio, cantidad, id } = menuSelecccionado;
        let precioTotal = (menuSelecccionado.cantidad * menuSelecccionado.precio);
        //aqui estoy imprimiendo en el html los elemento dentro del carrito
        const row = document.createElement('div');
        row.innerHTML = `
        <div class="widget-cart-item pb-3 border-bottom" >
        <button class="close text-danger" type="button" aria-label="Remove"><span class="borrar-curso" aria-hidden="true" data-id="${id}">&times;</span></button>
        <div class="media align-items-center pt-2">
        <a class="d-block mr-2 pb-3" href="#"><img width="100" src="${imagen}" alt="Pizza" /></a>
        <div class="media-body">
            <h6 class="widget-product-title"><a href="#">${titulo}</a></h6>
            <div class="widget-product-meta"><span class="text-accent mr-2">${precioTotal}</span><span class="text-muted">x ${cantidad}</span></div>
        </div>
        </div>
        </div>         
          `;
        //con appendchild agrengo al dom la iteracion.
        contenedorCarrito.appendChild(row);
    });

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}