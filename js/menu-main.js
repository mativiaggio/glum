import { entradas, ensaladas, carnes } from "./objects/menu-objects.js";

/* 

ENTRADAS

*/
const buildEntradas = () => {
    let contenedor = document.getElementById("container-entradas");
    entradas.forEach((entrada, entradaIndex) => {
        let section = document.createElement("div");
        section.classList.add("row", "mi-row");
        section.innerHTML = `
        <div class="col-lg-7 ${entrada.orientacion} col-md-12 gx-0 mi-img-container">
        <img loading="lazy" src="${entrada.img}" alt="${entrada.nombre}">
        </div>
        <div class="col-lg-5 col-md-12 gx-0 mi-desc-container">
            <div class="mi-desc">
                <div class="text-center mi-desc-title">
                    <h4>
                        ${entrada.nombre}
                    </h4>
                </div>
                <div class="text-center mi-desc-p">
                    <p>
                        ${entrada.descripcion}
                    </p>
                </div>
                <div class="mi-desc-details">
                    <div class="container-fluid">
                        <div class="row details-row">
                            <div class="col-lg-6 col-md-12 details-items">
                                <div class="detail-calific">
                                    <h5>Calificacion:</h5>
                                    <div class="detail-calific-img">
                                        <img src="${entrada.fire1}">
                                        <img src="${entrada.fire2}">
                                        <img src="${entrada.fire3}">
                                        <img src="${entrada.fire4}">
                                        <img src="${entrada.fire5}">
                                    </div>       
                                </div>
                                <h5>Precio: $${entrada.precio}</h5>
                                <h5>Opcion vegetariana: ${entrada.oveg}</h5>
                                <button class='btn aa-carrito-btn' onClick="addEntradaToCart(${entradaIndex})">Añadir al carrito</button><br>
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
                                    ${entrada.condimentos}
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

// CARRITO CHECKER
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

// CONTRUCTOR DE CARRITO

const buildEntradasCart = () => {
    modalCarritoEntrada.innerHTML = '';
    if (cartEntrada.length > 0) {
        cartEntrada.forEach ((entrada, entradaIndex) => {
            total = total + entrada.precio * entrada.quant;
            const carritoContainer = document.createElement('div');
            carritoContainer.className = 'cart-row';
            carritoContainer.innerHTML = `
                <div class="col-2 cart-img">
                <img src="${entrada.img}" alt="${entrada.nombre}">
                </div>
                <div class="col-2 cart-name"><p>${entrada.nombre}</p></div>
                <div class="col-2 cart-price"><p>$${entrada.precio}</p></div>
                <div class="col-2 cart-quant"><p>(${entrada.quant})</p></div>
                <div class="col-2 cart-price">$${entrada.precio * entrada.quant}</div>
                <div class="col-2 cart-delete"><button class="btn cart-delete-btn" onClick="removeEntrada(${entradaIndex})">eliminar</button></div>
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

const buildEnsaladas = () => {
    let contenedor = document.getElementById("container-ensaladas");
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

// CARRITO CHECKER

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

// CONTRUCTOR DE CARRITO

const buildEnsaladasCart = () => {
    modalCarritoEnsalada.innerHTML = '';
    if (cartEnsalada.length > 0) {
        cartEnsalada.forEach ((ensalada, ensaladaIndex) => {
            total = total + ensalada.precio * ensalada.quant;
            const carritoContainer = document.createElement('div');
            carritoContainer.className = 'cart-row';
            carritoContainer.innerHTML = `
                <div class="col-2 cart-img">
                <img src="${ensalada.img}" alt="${ensalada.nombre}">
                </div>
                <div class="col-2 cart-name"><p>${ensalada.nombre}</p></div>
                <div class="col-2 cart-price"><p>$${ensalada.precio}</p></div>
                <div class="col-2 cart-quant"><p>(${ensalada.quant})</p></div>
                <div class="col-2 cart-price">$${ensalada.precio * ensalada.quant}</div>
                <div class="col-2 cart-delete"><button class="btn cart-delete-btn" onClick="removeEnsalada(${ensaladaIndex})">eliminar</button></div>
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
const buildCarnes = () => {
    let contenedor = document.getElementById("container-carnes");
    carnes.forEach((carne, carneIndex) => {
        let section = document.createElement("div");
        section.classList.add("row", "mi-row");
        section.innerHTML = `
        <div class="col-lg-7 ${carne.orientacion} col-md-12 gx-0 mi-img-container">
        <img loading="lazy" src="${carne.img}" alt="${carne.nombre}">
        </div>
        <div class="col-lg-5 col-md-12 gx-0 mi-desc-container">
            <div class="mi-desc">
                <div class="text-center mi-desc-title">
                    <h4>
                        ${carne.nombre}
                    </h4>
                </div>
                <div class="text-center mi-desc-p">
                    <p>
                        ${carne.descripcion}
                    </p>
                </div>
                <div class="mi-desc-details">
                    <div class="container-fluid">
                        <div class="row details-row">
                            <div class="col-lg-6 col-md-12 details-items">
                                <div class="detail-calific">
                                    <h5>Calificacion:</h5>
                                    <div class="detail-calific-img">
                                        <img src="${carne.fire1}">
                                        <img src="${carne.fire2}">
                                        <img src="${carne.fire3}">
                                        <img src="${carne.fire4}">
                                        <img src="${carne.fire5}">
                                    </div>       
                                </div>
                                <h5>Precio: ${carne.precio}</h5>
                                <h5>Opcion vegetariana: ${carne.oveg}</h5>
                                <button class='btn aa-carrito-btn' onClick="addCarneToCart(${carneIndex})">Añadir al carrito</button><br>
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
                                    ${carne.condimentos}
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

// CARRITO CHECKER

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

// CONTRUCTOR DE CARRITO

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
buildCarnes();
buildEntradas();
buildEnsaladas();


// CARRITO INICIAL

let cartEntrada = [];
let cartEnsalada = [];
let cartCarne = [];

// TOTAL INICIAL DEL CARRITO

let total = 0;

// MODAL CARRITO

let modalCarritoEntrada = document.getElementById('cart-container-entrada');
let modalCarritoEnsalada = document.getElementById('cart-container-ensalada');
let modalCarritoCarne = document.getElementById('cart-container-carne');


