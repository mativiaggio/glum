import { cartProducto } from "../constructores/all.js";

const alertaDeCarritoVacio = () => {
    Swal.fire({
        title: '<strong>Ups!</strong>',
        icon: 'info',
        html:
            'Tu carrito esta <b>vacío</b>, <br> dirigete a nuestro <a href="./menu.html">menú</a> para agregar items!',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Aceptar!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    });
}

cartProducto.length === 0 ? alertaDeCarritoVacio() : null;