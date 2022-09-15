import { productos } from "../objects/objects.js"


// PRODUCTOS ↓ ↓ ↓ 
const buildProductos = () => {
    let contenedor = document.getElementById("container-productos");
    productos.forEach((producto, productoIndex) => {
        let section = document.createElement("div");
        section.classList.add("row", "mi-row");
        section.innerHTML = `
        <div class="col-12 gx-0 text-center mi-title-container" id="entradas">
            <div class="mi-title">
                <h3>
                    ${producto.categoria}:
                </h3>
            </div>
        </div>
        <div class="col-lg-7 ${producto.orientacion} col-md-12 gx-0 mi-img-container">
        <img loading="lazy" src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div class="col-lg-5 col-md-12 gx-0 mi-desc-container">
            <div class="mi-desc">
                <div class="text-center mi-desc-title">
                    <h4>
                        ${producto.nombre}
                    </h4>
                </div>
                <div class="text-center mi-desc-p">
                    <p>
                        ${producto.descripcion}
                    </p>
                </div>
                <div class="mi-desc-details">
                    <div class="container-fluid">
                        <div class="row details-row">
                            <div class="col-lg-6 col-md-12 details-items">
                                <div class="detail-calific">
                                    <h5>Calificacion:</h5>
                                    <div class="detail-calific-img">
                                        <img src="${producto.fire1}">
                                        <img src="${producto.fire2}">
                                        <img src="${producto.fire3}">
                                        <img src="${producto.fire4}">
                                        <img src="${producto.fire5}">
                                    </div>       
                                </div>
                                <h5>Precio: $${producto.precio}</h5>
                                <h5>Opcion vegetariana: ${producto.oveg}</h5>
                                <button class='btn aa-carrito-btn' onClick="addProductoToCart(${productoIndex})">Añadir al carrito</button><br>
                                <a href="#indice">Ir al indice</a>
                            </div>
                            <div class="col-lg-6 col-md-12 details-ing-container">
                                <h6 class="text-center">lista completa de ingredientes</h6>
                                <ul>
                                    <li>Ingrediente #1</li>
                                    <li>Ingrediente #2</li>
                                    <li>Ingrediente #3</li>
                                    <li>Ingrediente #4</li>
                                </ul>
                                <p>
                                    ${producto.condimentos}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        contenedor.appendChild(section)
    })
};

// CARRITO CHECKER DE PRODUCTO ↓ ↓ ↓ 
window.addProductoToCart = (productoIndex) => {
    
    const indexFinder = cartProducto.findIndex((item) => {
        return item.id === productos[productoIndex].id;
    });
    if (indexFinder === -1) {
        const addItem = productos[productoIndex]
        addItem.quant = 1;
        cartProducto.push(addItem); 

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
            title: `Producto agregado con exito!`
          })

        buildProductosCart();
    }else {
        cartProducto[indexFinder].quant += 1;   

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
            title: `Producto agregado con exito!`
          })

        buildProductosCart();
    }
};

// CONTRUCTOR DE CARRITO DE PRODUCTOS ↓ ↓ ↓ 
const buildProductosCart = () => {
    modalCarritoProducto.innerHTML = '';
    if (cartProducto.length > 0) {
        cartProducto.forEach ((producto, productoIndex) => {
            totalProductos = totalProductos + producto.precio;
            const carritoContainer = document.createElement('div');
            carritoContainer.classList.add('row', 'cart-row')
            carritoContainer.innerHTML = `
                <div class="col-lg-2 col-md-6 cart-img">
                <img src="${producto.img}" alt="${producto.nombre}">
                </div>
                <div class="col-lg-2 col-md-6 cart-name"><p>${producto.nombre}</p></div>
                <div class="col-lg-2 col-md-6 cart-price"><p>$${producto.precio}</p></div>
                <div class="col-lg-2 col-md-6 cart-quant"><p>(${producto.quant})</p></div>
                <div class="col-lg-2 col-md-6 cart-price">$${producto.precio * producto.quant}</div>
                <div class="col-lg-2 col-md-6 cart-delete"><button class="btn cart-delete-btn" onClick="removeProducto(${productoIndex})">eliminar</button></div>
            `;
            modalCarritoProducto.appendChild(carritoContainer);
        })
        const totalContainer = document.createElement('div');
        totalContainer.className = 'total-carrito'
        totalContainer.innerHTML = `<div class="total"> total a pagar: $${totalProductos}</div>`
        modalCarritoProducto.appendChild(totalContainer);
    } else {
        modalCarritoProducto.classList.remove('cart')
    }
};

// ELIMINAR ITEM DE CARRITO ↓ ↓ ↓ 
window.removeProducto = (productoIndex) => {
    cartProducto.splice(productoIndex,1);
    totalProductos = totalProductos * 0
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

// CARRITO INICIAL ↓ ↓ ↓ 
let cartProducto = [];

// TOTAL DE PRODUCTO ↓ ↓ ↓ 
let totalProductos = 0;

// MODAL DE CARRITO ↓ ↓ ↓ 
let modalCarritoProducto = document.querySelector('#cart-container-entrada');

export { buildProductos };

