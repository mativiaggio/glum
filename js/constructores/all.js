import { productos } from "../objects/objects.js"

const firstAlert = () => {
    Swal.fire({
        title: '<strong>IMPORTANTE</strong>',
        icon: 'info',
        html:
          'Nuestro menú es <b>BASTANTE</b> extenso, te recomnedamos usar nuestro <b>indice</b> para seleccionar cada elementos!',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Aceptar!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
    })
}
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
                <button class='btn aa-carrito-btn' onClick="addToCart(${productoIndex})">Añadir al carrito</button><br>
                <button class='btn btn-vermas' onClick="vermas('${producto.descripcion}', '${producto.condimentos}', '${producto.ingredientes}', ${productoIndex})">Ver más</button><br>
                <a href="#indice">Ir al indice</a>
            </div>
        </div>
        `;
        contenedor.appendChild(section)
        
    })
};

// VER MAS ↓ ↓ ↓
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
        cartProducto.forEach ((producto, productoIndex) => {
            const carritoContainer = document.createElement('div');
            carritoContainer.classList.add('row', 'cart-row')
            carritoContainer.innerHTML = `
                <div class="col-lg-2 col-md-6 cart-img">
                <img src="${producto.img}" alt="${producto.nombre}">
                </div>
                <div class="col-lg-2 col-md-6 cart-name"><p>${producto.nombre}</p></div>
                <div class="col-lg-2 col-md-6 cart-price"><p>$${producto.precio}</p></div>
                <div class="col-lg-2 col-md-6 cart-quant"><p>(${producto.cantidad})</p></div>
                <div class="col-lg-2 col-md-6 cart-price">$${producto.precio * producto.cantidad}</div>
                <div class="col-lg-2 col-md-6 cart-delete"><button class="btn cart-delete-btn" onClick="removeProducto(${productoIndex})">eliminar</button></div>
            `;
            modalCarritoProducto2.appendChild(carritoContainer);
            // localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
        });
        const totalAcumulado = document.getElementById("totalAcumulado");
        totalAcumulado.innerText = cartProducto
          .map((item) => item.precio * item.cantidad)
          .reduce((prev, current) => prev + current, totalProductos);
    } else {
        modalCarritoProducto2.classList.remove('cart')
    }
};

// AÑADIR A CARRITO
/* window.addToCart = (productoId) => {
  const existe = cartProducto.some((prod) => prod.id === productoId);

  if (existe) {
      cartProducto.map((prod) => {
      if (prod.id === productoId) {
      prod.cantidad++;
      }
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
  });
  } else {
  const producto = productos.find((prodId) => prodId.id === productoId);
  cartProducto.push(producto);
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
  }
  buildProductosCart();
}; */
window.addToCart = (productoId) => {
    const productIdFinded = cartProducto.findIndex((elemento) => {
        return elemento.id === productos[productoId].id;
    });
    if (productIdFinded === -1) {
        const productoAgregar = productos[productoId];
        productoAgregar.cantidad = 1;
        cartProducto.push(productoAgregar);
        actualizarStorage(cartProducto);
        buildProductosCart();
    }else {
        cartProducto[productIdFinded].cantidad += 1;
        actualizarStorage(cartProducto);
        buildProductosCart();
    }
};

// ELIMINAR ITEM DE CARRITO ↓ ↓ ↓ 
window.removeProducto = (productoIndex) => {
    cartProducto.splice(productoIndex,1);
    // const totalAcumulado = document.getElementById("totalAcumulado");
    // totalAcumulado.innerText = cartProducto
    //     .map((item) => item.precio * item.cantidad)
    //     .reduce((prev, current) => prev - current, totalProductos);
    //     localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
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

// CARRITO INICIAL ↓ ↓ ↓ 
let cartProducto = [];


// TOTAL DE PRODUCTO ↓ ↓ ↓ 
let totalProductos = 0;

// MODAL DE CARRITO ↓ ↓ ↓ 
// let modalCarritoProducto = document.querySelector('#cart-container');
let modalCarritoProducto2 = document.querySelector('#cart-container');

if (localStorage.getItem("cartProducto")) {
    cartProducto = JSON.parse(localStorage.getItem("cartProducto"));
    buildProductosCart();
}
const actualizarStorage = (cartProducto) => {
    localStorage.setItem("cartProducto", JSON.stringify(cartProducto))
};

export { buildProductos, firstAlert };

