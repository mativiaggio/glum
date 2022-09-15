import { carnes } from "../objects/menu-objects.js";

//ENTRADAS ↓ ↓ ↓ 
const buildCarnes = () => {
    let contenedor = document.querySelector("#container-carnes");
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
                                <h5>Precio: $${carne.precio}</h5>
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

// CARRITO CHECKER DE CARNES ↓ ↓ ↓  
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



// CONTRUCTOR DE CARRITO DE CARNES ↓ ↓ ↓ 
const buildCarnesCart = () => {
    modalCarritoCarne.innerHTML = '';
    if (cartCarne.length > 0) {
        cartCarne.forEach ((carne, carneIndex) => {
            totalCarnes += carne.precio * carne.quant;
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
        const totalContainer = document.createElement('div');
        totalContainer.className = 'total-carrito'
        totalContainer.innerHTML = `<div class="total"> total a pagar: $${totalCarnes}</div>`
        modalCarritoCarne.appendChild(totalContainer);
        console.log(totalCarnes)
    } else {
        modalCarritoCarne.classList.remove('cart')
    }
};


// ELIMINAR ITEM DE CARRITO ↓ ↓ ↓ 
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

// CARRITO INICIAL ↓ ↓ ↓ 
let cartCarne = [];

// MODAL DE CARRITO ↓ ↓ ↓ 
let modalCarritoCarne = document.querySelector('#cart-container-carne')
// TOTAL DE PRODUCTO ↓ ↓ ↓ 
let totalCarnes = 0;
export { buildCarnes, totalCarnes };