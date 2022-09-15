import { productos } from "../objects/objects.js"


// PRODUCTOS ↓ ↓ ↓ 
const buildProductos = () => {
    let contenedor = document.getElementById("container-productos");
    productos.forEach((producto, productoIndex) => {
        let section = document.createElement("div");
        section.classList.add("col-xl-3", "col-lg-4", "col-md-6", "gx-0", "text-center", "cart-grid");
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
                <h5 class="details-pds" >Opción vegetariana: ${producto.oveg}</h5>       
                <button class='btn aa-carrito-btn' onClick="addProductoToCart(${productoIndex})">Añadir al carrito</button><br>
                <button class='btn btn-vermas' onClick="vermas('${producto.descripcion}', '${producto.condimentos}', '${producto.ingredientes}', ${productoIndex})">Ver más</button><br>
                <a href="#indice">Ir al indice</a><br>
            </div>
        </div>
        `;
        contenedor.appendChild(section)
        
    })
};

window.vermas = (descripcion, condimentos, ingredientes, productoIndex) => {
    Swal.fire({
        title: '<strong class="lista-de-ingredientes-title">Lista de <u>ingredientes principales</u>:</strong>',
        icon: 'info',
        html:`
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
            <button class='btn alert-carrito-btn' onClick="addProductoToCart(${productoIndex})">Añadir al carrito</button><br>
        </div>`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Aceptar',
      })
}

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
            totalProductos += producto.precio;
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

