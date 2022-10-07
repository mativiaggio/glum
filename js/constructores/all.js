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
                <div class="col-lg-2 col-md-6 cart-name"><span>${producto.nombre}</span></div>
                <div class="col-lg-2 col-md-6 cart-price"><span>$${producto.precio}</span></div>
                <div class="col-lg-2 col-md-6 cart-quant d-flex">
                    <button class="btn btn-cart-ar" onClick="removeOne(${productoIndex})">-</button>
                    <span>(${producto.cantidad})</span>
                    <button class="btn btn-cart-ar" onClick="addOneMore(${productoIndex})">+</button>
                </div>
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
    fetch('../js/objects/objects.json')
        .then((res) => res.json())
        .then((array) => {
            const productIdFinded = cartProducto.findIndex((elemento) => {
                return elemento.id === array[productoId].id;
            });
            if (productIdFinded === -1) {
                const productoAgregar = array[productoId];
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
        })
};

// AGREGAR UNA UNIDAD
window.addOneMore = (productoIndex) => {
    cartProducto[productoIndex].cantidad ++;
    actualizarStorage(cartProducto);
    buildProductosCart();
}

// ELIMINAR UNA UNIDAD
window.removeOne = (productoIndex) => {
    while (cartProducto[productoIndex].cantidad > 1) {
        cartProducto[productoIndex].cantidad --;
        actualizarStorage(cartProducto);
        buildProductosCart();
        break;
    }
}

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

// PAGAR
window.pagar = () => {
    cartProducto.splice(0, 9999999);
    localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
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

