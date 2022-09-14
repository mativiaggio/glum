import { entradas, ensaladas, carnes } from "./objects/menu-objects.js";
import { buildEntradas} from "./constructores/entradas.js";
import { buildEnsaladas} from "./constructores/ensaladas.js";
import { buildCarnes} from "./constructores/carnes.js";
/* 

ENTRADAS

*/
// CARRITO CHECKER DE ENTRADA
window.addEntradaToCart = (entradaIndex) => {
    
    const indexFinder = cartEntrada.findIndex((item) => {
        return item.id === entradas[entradaIndex].id;
    });
    if (indexFinder === -1) {
        const addItem = entradas[entradaIndex]
        addItem.quant = 1;
        cartEntrada.push(addItem); 

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

        buildEntradasCart();
    }else {
        cartEntrada[indexFinder].quant += 1;   

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

        buildEntradasCart();
    }
};

// CONTRUCTOR DE CARRITO DE ENTRADA

const buildEntradasCart = () => {
    modalCarritoEntrada.innerHTML = '';
    if (cartEntrada.length > 0) {
        cartEntrada.forEach ((entrada, entradaIndex) => {
            total = total + entrada.precio * entrada.quant;
            const carritoContainer = document.createElement('div');
            carritoContainer.classList.add('row', 'cart-row')
            carritoContainer.innerHTML = `
                <div class="col-lg-2 col-md-6 cart-img">
                <img src="${entrada.img}" alt="${entrada.nombre}">
                </div>
                <div class="col-lg-2 col-md-6 cart-name"><p>${entrada.nombre}</p></div>
                <div class="col-lg-2 col-md-6 cart-price"><p>$${entrada.precio}</p></div>
                <div class="col-lg-2 col-md-6 cart-quant"><p>(${entrada.quant})</p></div>
                <div class="col-lg-2 col-md-6 cart-price">$${entrada.precio * entrada.quant}</div>
                <div class="col-lg-2 col-md-6 cart-delete"><button class="btn cart-delete-btn" onClick="removeEntrada(${entradaIndex})">eliminar</button></div>
            `;
            modalCarritoEntrada.appendChild(carritoContainer);
        })
    }
};
window.removeEntrada = (entradaIndex) => {
    cartEntrada.splice(entradaIndex,1);
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
    buildEntradasCart();
}
/* 

ENSALADAS ↓ ↓ ↓

*/
// CARRITO CHECKER DE ENSALADAS

window.addEnsaladaToCart = (ensaladaIndex) => {
    
    const indexFinder = cartEnsalada.findIndex((item) => {
        return item.id === ensaladas[ensaladaIndex].id;
    });
    if (indexFinder === -1) {
        const addItem = ensaladas[ensaladaIndex]
        addItem.quant = 1;
        cartEnsalada.push(addItem); 

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

        buildEnsaladasCart();
    }else {
        cartEnsalada[indexFinder].quant += 1;   

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

        buildEnsaladasCart();
    }
};

// CONTRUCTOR DE CARRITO DE ENSALADAS

const buildEnsaladasCart = () => {
    modalCarritoEnsalada.innerHTML = '';
    if (cartEnsalada.length > 0) {
        cartEnsalada.forEach ((ensalada, ensaladaIndex) => {
            total = total + ensalada.precio * ensalada.quant;
            const carritoContainer = document.createElement('div');
            carritoContainer.classList.add('row', 'cart-row')
            carritoContainer.innerHTML = `
                <div class="col-lg-2 col-md-6 cart-img">
                <img src="${ensalada.img}" alt="${ensalada.nombre}">
                </div>
                <div class="col-lg-2 col-md-6 cart-name"><p>${ensalada.nombre}</p></div>
                <div class="col-lg-2 col-md-6 cart-price"><p>$${ensalada.precio}</p></div>
                <div class="col-lg-2 col-md-6 cart-quant"><p>(${ensalada.quant})</p></div>
                <div class="col-lg-2 col-md-6 cart-price">$${ensalada.precio * ensalada.quant}</div>
                <div class="col-lg-2 col-md-6 cart-delete"><button class="btn cart-delete-btn" onClick="removeEnsalada(${ensaladaIndex})">eliminar</button></div>
            `;
            modalCarritoEnsalada.appendChild(carritoContainer);
        })
    }
};
window.removeEnsalada = (ensaladaIndex) => {
    cartEnsalada.splice(ensaladaIndex,1);
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
    buildEnsaladasCart();
}
/* 

CARNES

*/


// CARRITO CHECKER DE CARNES

window.addCarneToCart = (carneIndex) => {
    
    const indexFinder = cartCarne.findIndex((item) => {
        return item.id === carnes[carneIndex].id;
    });
    if (indexFinder === -1) {
        const addItem = carnes[carneIndex]
        addItem.quant = 1;
        cartCarne.push(addItem); 

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

        buildCarnesCart();
    }else {
        cartCarne[indexFinder].quant += 1;   

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

        buildCarnesCart();
    }
};

// CONTRUCTOR DE CARRITO DE CARNES

const buildCarnesCart = () => {
    modalCarritoCarne.innerHTML = '';
    if (cartCarne.length > 0) {
        cartCarne.forEach ((carne, carneIndex) => {
            total = total + carne.precio * carne.quant;
            const carritoContainer = document.createElement('div');
            carritoContainer.classList.add('cart-row', 'row');
            carritoContainer.innerHTML = `
                <div class="col-lg-2 col-md-6 cart-img">
                <img src="${carne.img}" alt="${carne.nombre}">
                </div>
                <div class="col-lg-2 col-md-6 cart-name"><p>${carne.nombre}</p></div>
                <div class="col-lg-2 col-md-6 cart-price"><p>$${carne.precio}</p></div>
                <div class="col-lg-2 col-md-6 cart-quant"><p>(${carne.quant})</p></div>
                <div class="col-lg-2 col-md-12 cart-price">$${carne.precio * carne.quant}</div>
                <div class="col-lg-2 col-md-12 cart-delete"><button class="btn cart-delete-btn" onClick="removeCarne(${carneIndex})">eliminar</button></div>
            `;
            modalCarritoCarne.appendChild(carritoContainer);
        })
    }
};
window.removeCarne = (carneIndex) => {
    cartCarne.splice(carneIndex,1);
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
    buildCarnesCart();
}
buildEntradas();
buildEnsaladas();
buildCarnes();


// CARRITO INICIAL

let cartEntrada = [];
let cartEnsalada = [];
let cartCarne = [];

// TOTAL INICIAL DEL CARRITO

let total = 0;

// MODAL CARRITO
let modalCarritoEntrada = document.querySelector('#cart-container-entrada');
let modalCarritoEnsalada = document.querySelector('#cart-container-ensalada');
let modalCarritoCarne = document.querySelector('#cart-container-carne');


