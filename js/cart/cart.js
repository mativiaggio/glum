import { productos } from "../objects/objects.js"



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
            <button class='btn alert-carrito-btn' onClick="addProductoToCart(${productoIndex})">Añadir al carrito</button><br>
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
    modalCarritoProducto.innerHTML = '';
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
            modalCarritoProducto.appendChild(carritoContainer);
            localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
        });
        const totalAcumulado = document.getElementById("totalAcumulado");
        totalAcumulado.innerText = cartProducto
          .map((item) => item.precio * item.cantidad)
          .reduce((prev, current) => prev + current, totalProductos);
    } else {
        modalCarritoProducto.classList.remove('cart')
    }
};

// ADD TO CART ↓ ↓ ↓
// window.addToCart = (productoIndex) => {
//     const productExist = cartProducto.some((producto) => producto.id === productoIndex);
//     if (productExist) {
//         cartProducto.map((producto) => {
//         if (producto.id === productoIndex) {
//           producto.cantidad++;
//         }
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'bottom-end',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
          
//           Toast.fire({
//             icon: 'success',
//             title: `Producto agregado con exito!`
//           })
//       });
//     } else {
//       const producto = productos.find((productoIndex) => productoIndex.id === productoIndex);
//       cartProducto.push(producto);
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'bottom-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'success',
//         title: `Producto agregado con exito!`
//       })
//     }
//     buildProductosCart();
//   };
window.addToCart = (productoId) => {
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
};


// ELIMINAR ITEM DE CARRITO ↓ ↓ ↓ 
window.removeProducto = (productoIndex) => {
    cartProducto.splice(productoIndex,1);
    const totalAcumulado = document.getElementById("totalAcumulado");
    totalAcumulado.innerText = cartProducto
        .map((item) => item.precio * item.cantidad)
        .reduce((prev, current) => prev - current, totalProductos);
        localStorage.setItem("cartProducto", JSON.stringify(cartProducto));
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
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("cartProducto")) {
      cartProducto = JSON.parse(localStorage.getItem("cartProducto"));
      buildProductosCart();
    }
});
// MODAL DE CARRITO ↓ ↓ ↓ 
let modalCarritoProducto = document.querySelector('#cart-container');


export { addToCart }