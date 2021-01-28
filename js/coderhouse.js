//variables
const carrito = document.querySelector('#carrito');
const listaMenu = document.querySelector('#listado-menu');
const contenedorCarrito = document.querySelector('.dropdown-menu #listado-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

//arreglo del carrito
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    listaMenu.addEventListener('click', agregarMenu);
    carrito.addEventListener('click', eliminarMenu);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        vaciarCarrito();
    })

}

// Funciones
// Función que añade menu al carrito
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