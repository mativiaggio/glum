import { productos } from "../objects/objects.js"

// PRODUCTOS ↓ ↓ ↓ 
const buildProductos = () => {
    let contenedor = document.getElementById("container-productos");
    fetch('../js/objects/objects.json')
        .then((res) => res.json())
        .then((array) => {
            array.forEach((producto, productoIndex) => {
                const section = document.createElement("div");
                section.classList.add("col-xl-3", "col-lg-4", "col-md-6", "gx-0", "text-center", "product-grid");
                section.idName
                section.innerHTML = `
                <div class="card" style="width: 18rem;" id="${producto.categoria}">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title mi-desc-title">${producto.nombre}</h5>
                        <div class="detail-calific">
                            <h5>Calificación:</h5>
                            <div class="detail-calific-img">
                                <img src="${producto.fire1}">
                                <img src="${producto.fire2}">
                                <img src="${producto.fire3}">
                                <img src="${producto.fire4}">
                                <img src="${producto.fire5}">
                            </div>
                        </div>
                        <h5 class="details-pds" >Precio: $${producto.precio}</h5>     
                        <button class='btn aa-carrito-btn' onClick="addToCart(${productoIndex})">Añadir al carrito</button><br>
                        <button class='btn btn-vermas' onClick="vermas('${producto.descripcion}', '${producto.condimentos}', '${producto.ingredientes}', ${productoIndex})">Ver más</button><br>
                        <a href="#indice">Ir al indice</a>
                    </div>
                </div>
                `;
                contenedor.appendChild(section)
            })
        })
    /*     productos.forEach((producto, productoIndex) => {
            let section = document.createElement("div");
            section.classList.add("col-xl-3", "col-lg-4", "col-md-6", "gx-0", "text-center", "product-grid");
            section.idName
            section.innerHTML = `
            <div class="card" style="width: 18rem;" id="${producto.categoria}">
                <img src="${producto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title mi-desc-title">${producto.nombre}</h5>
                    <div class="detail-calific">
                        <h5>Calificación:</h5>
                        <div class="detail-calific-img">
                            <img src="${producto.fire1}">
                            <img src="${producto.fire2}">
                            <img src="${producto.fire3}">
                            <img src="${producto.fire4}">
                            <img src="${producto.fire5}">
                        </div>
                    </div>
                    <h5 class="details-pds" >Precio: $${producto.precio}</h5>     
                    <button class='btn aa-carrito-btn' onClick="addToCart(${productoIndex})">Añadir al carrito</button><br>
                    <button class='btn btn-vermas' onClick="vermas('${producto.descripcion}', '${producto.condimentos}', '${producto.ingredientes}', ${productoIndex})">Ver más</button><br>
                    <a href="#indice">Ir al indice</a>
                </div>
            </div>
            `;
            contenedor.appendChild(section)
            
        }) */
};

// VER MAS ↓ ↓ ↓
window.vermas = (descripcion, condimentos, ingredientes, productoIndex) => {
    Swal.fire({
        title: '<strong class="lista-de-ingredientes-title">Lista de <u>ingredientes principales</u>:</strong>',
        icon: 'info',
        html: `
        <div class="vermas-alert-content">
            <p>
                ${ingredientes}.
            </p>
            <p>
                <strong>Descripción:</u></strong><br>
                ${descripcion}
            </p><br>
            <p>
                <strong>Condimentos:</u></strong><br>
                ${condimentos}
            </p><br>
            <button class='btn alert-carrito-btn' onClick="addToCart(${productoIndex})">Añadir al carrito</button><br>
        </div>`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Aceptar',
    })
}

// CONTRUCTOR DE CARRITO DE PRODUCTOS ↓ ↓ ↓ 
const buildProductosCart = () => {
    modalCarritoProducto2.innerHTML = '';
    if (cartProducto.length > 0) {
        cartProducto.forEach((producto, productoIndex) => {
            const carritoContainer = document.createElement('div');
            carritoContainer.classList.add('row', 'cart-row')
            carritoContainer.innerHTML = `
                <div class="col-lg-2 col-md-6 cart-img">
                <img src="${producto.img}" alt="${producto.nombre}">
                </div>
                <div class="col-lg-2 col-md-6 cart-name"><p>${producto.nombre}</p></div>
                <div class="col-lg-2 col-md-6 cart-price"><p>$${producto.precio}</p></div>
                <div class="col-lg-2 col-md-6 cart-quant"><p>(${producto.cantidad})</p></div>
                <div class="col-lg-2 col-md-6 cart-total-price">$${producto.precio * producto.cantidad}</div>
                <div class="col-lg-2 col-md-6 cart-delete"><button class="btn cart-delete-btn" onClick="removeProducto(${productoIndex})">eliminar</button></div>
            `;
            modalCarritoProducto2.appendChild(carritoContainer);
            // localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
        });
        const totalAcumulado = document.getElementById("totalAcumulado");
        totalAcumulado.innerText = cartProducto
            .map((item) => item.precio * item.cantidad)
            .reduce((prev, current) => prev + current, totalProductos);
        const btnApay = document.querySelector('#btn-a-pay');
        btnApay.classList.add('nav-link');
    } else {
        modalCarritoProducto2.classList.remove('cart')
        const btnApay = document.querySelector('#btn-a-pay');
        btnApay.classList.add('nav-link', 'disabled');
    }
};

// AÑADIR A CARRITO
window.addToCart = (productoId) => {
    const productIdFinded = cartProducto.findIndex((elemento) => {
        return elemento.id === productos[productoId].id;
    });
    if (productIdFinded === -1) {
        const productoAgregar = productos[productoId];
        productoAgregar.cantidad = 1;
        cartProducto.push(productoAgregar);

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito!'
        })

        actualizarStorage(cartProducto);
        buildProductosCart();
    } else {
        cartProducto[productIdFinded].cantidad++;

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto agregado al carrito!'
        })

        actualizarStorage(cartProducto);
        buildProductosCart();
    }
};

// ELIMINAR ITEM DE CARRITO ↓ ↓ ↓ 
window.removeProducto = (productoIndex) => {
    cartProducto.splice(productoIndex, 1);
    const totalAcumulado = document.getElementById("totalAcumulado");
    totalAcumulado.innerText = cartProducto
        .map((item) => item.precio * item.cantidad)
        .reduce((prev, current) => prev - current, totalProductos);
    localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
    actualizarStorage(cartProducto);
    buildProductosCart();
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'warning',
        title: `Producto eliminado!`
    })
    buildProductosCart();

}

window.pagar = () => {

    Swal.fire({
        title: '<strong>Un paso mas!</strong>',
        icon: 'info',
        html:
            'Completa la siguiente informacion para pagar!',
        html: `<div class="payment-container">
        <form action="post">
            <div class="form-payment-container">
                <div class="visa">
                    <label><img style="height: 50px;" src="../../assets/icons/payment/visa.png"></label><br>
                    <input type="checkbox" id="cbox1" value="first_checkbox">
                </div>
                <div class="mastercard">
                    <label><img style="height: 50px;" src="../assets/icons/payment/mastercard.jpg"></label><br>
                    <input type="checkbox" id="cbox1" value="first_checkbox">
                </div>
                <div class="paypal">
                    <label><img style="height: 50px;" src="../assets/icons/payment/paypal.png"></label><br>
                    <input type="checkbox" id="cbox1" value="first_checkbox">
                </div>
            </div>
            <label>Name</label><br>
            <input type="text" name="Name" placeholder="John Doe"><br><br>
            <label>Card Number</label><br>
            <input type="text" id="cr_no" name="card-no" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19"><br><br>
            <label>Expiry Date</label><br>
            <input type="text" id="exp" name="expdate" placeholder="MM/YY" minlength="5" maxlength="5"><br><br>
            <label>CVV</label><br>
            <input type="password" name="cvv" placeholder="123" minlength="3" maxlength="3"><br><br>
            <label>Direccion</label><br>
            <input type="text" name="Name" placeholder="Direccion"><br><br>
        </form>
    </div>`,

        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            `Pagar`,
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    });
    cartProducto.length != 0 ? cartProducto.length = 0 : null;
    const totalAcumulado = document.getElementById("totalAcumulado");
    totalAcumulado.innerText = cartProducto
        .map((item) => item.precio * item.cantidad * 0)
        .reduce((prev, current) => prev + current, totalProductos);

    actualizarStorage(cartProducto);
    buildProductosCart();
}

// CARRITO INICIAL ↓ ↓ ↓ 
let cartProducto = [];


// TOTAL DE PRODUCTO ↓ ↓ ↓ 
let totalProductos = 0;

// MODAL DE CARRITO ↓ ↓ ↓ 
let modalCarritoProducto2 = document.querySelector('#cart-container');

// LOCAL STORAGE ↓ ↓ ↓
if (localStorage.getItem("cartProducto")) {
    cartProducto = JSON.parse(localStorage.getItem("cartProducto"));
    buildProductosCart();
}
const actualizarStorage = (cartProducto) => {
    localStorage.setItem("cartProducto", JSON.stringify(cartProducto))
};

// EXPORT ↓ ↓ ↓
export { buildProductos, cartProducto };

