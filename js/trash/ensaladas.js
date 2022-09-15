import { ensaladas } from "../objects/menu-objects.js";

// ENSALADAS ↓ ↓ ↓ 
const buildEnsaladas = () => {
    let contenedor = document.querySelector("#container-ensaladas");
    ensaladas.forEach((ensalada, ensaladaIndex) => {
        let section = document.createElement("div");
        section.classList.add("row", "mi-row");
        section.innerHTML = `
        <div class="col-lg-7 ${ensalada.orientacion} col-md-12 gx-0 mi-img-container">
        <img loading="lazy" src="${ensalada.img}" alt="${ensalada.nombre}">
        </div>
        <div class="col-lg-5 col-md-12 gx-0 mi-desc-container">
            <div class="mi-desc">
                <div class="text-center mi-desc-title">
                    <h4>
                        ${ensalada.nombre}
                    </h4>
                </div>
                <div class="text-center mi-desc-p">
                    <p>
                        ${ensalada.descripcion}
                    </p>
                </div>
                <div class="mi-desc-details">
                    <div class="container-fluid">
                        <div class="row details-row">
                            <div class="col-lg-6 col-md-12 details-items">
                                <div class="detail-calific">
                                    <h5>Calificacion:</h5>
                                        <div class="detail-calific-img">
                                        <img src="${ensalada.fire1}">
                                        <img src="${ensalada.fire2}">
                                        <img src="${ensalada.fire3}">
                                        <img src="${ensalada.fire4}">
                                        <img src="${ensalada.fire5}">
                                    </div>       
                                </div>
                                <h5>Precio: $${ensalada.precio}</h5>
                                <h5>Opcion vegetariana: ${ensalada.oveg}</h5>
                                <button class='btn aa-carrito-btn' onClick="addEnsaladaToCart(${ensaladaIndex})">Añadir al carrito</button><br>
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
                                    ${ensalada.condimentos}
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

// CARRITO CHECKER DE ENSALADAS ↓ ↓ ↓ 
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


// TOTAL DE PRODUCTO ↓ ↓ ↓ 
let totalEnsaladas = 0;

// CONTRUCTOR DE CARRITO DE ENSALADAS ↓ ↓ ↓ 
const buildEnsaladasCart = () => {
    // modalCarritoEnsalada.className ='cart' 
    modalCarritoEnsalada.innerHTML = '';
    if (cartEnsalada.length > 0) {
        cartEnsalada.forEach ((ensalada, ensaladaIndex) => {
            totalEnsaladas += ensalada.precio;
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
        });
        const totalContainer = document.createElement('div');
        totalContainer.className = 'total-carrito'
        totalContainer.innerHTML = `<div class="total"> total a pagar: $${totalEnsaladas}</div>`
        modalCarritoEnsalada.appendChild(totalContainer);
    } else {
        modalCarritoEnsalada.classList.remove('cart')
    }
};

// ELIMINAR CARRITO ↓ ↓ ↓ 
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

// CARRITO INICIAL ↓ ↓ ↓ 
let cartEnsalada = [];

// MODAL DE CARRITO ↓ ↓ ↓ 
let modalCarritoEnsalada = document.querySelector('#cart-container-ensalada');

export { buildEnsaladas, totalEnsaladas };
