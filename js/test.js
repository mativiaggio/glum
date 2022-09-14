let entradas = [

    {id: 0,
        
    nombre: 'entrada fria',

    img: '../assets/menu/1entradas/entradaFria-min.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire1: '../assets/icons/menu/fire.png',
    fire2: '../assets/icons/menu/fire.png', 
    fire3: '../assets/icons/menu/fire.png', 
    fire4: '../assets/icons/menu/fire.png', 
    fire5: '../assets/icons/menu/fire-empty.png',  

    precio: 4200, 

    oveg: 'SI', 

    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',},

    {id: 1,
        
    nombre: 'corn deluxe',

    img: '../assets/menu/1entradas/cornDeluxe-min.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire1: '../assets/icons/menu/fire.png',
    fire2: '../assets/icons/menu/fire.png', 
    fire3: '../assets/icons/menu/fire-empty.png', 
    fire4: '../assets/icons/menu/fire-empty.png', 
    fire5: '../assets/icons/menu/fire-empty.png',

    precio: 2100, 

    oveg: 'SI', 
    
    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',

    orientacion: 'order-lg-1',

    },

    {id: 2,
        
    nombre: 'rabas',

    img: '../assets/menu/1entradas/rabas-min.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire1: '../assets/icons/menu/fire.png',
    fire2: '../assets/icons/menu/fire.png', 
    fire3: '../assets/icons/menu/fire.png', 
    fire4: '../assets/icons/menu/fire.png', 
    fire5: '../assets/icons/menu/fire-empty.png', 

    precio: 3400, 

    oveg: 'NO', 
    
    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',

    orientacion: '',

    },

    {id: 3,
        
    nombre: 'tabla de quesos',

    img: '../assets/menu/1entradas/tablaDeQuesos-min.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire1: '../assets/icons/menu/fire.png',
    fire2: '../assets/icons/menu/fire.png', 
    fire3: '../assets/icons/menu/fire.png', 
    fire4: '../assets/icons/menu/fire.png', 
    fire5: '../assets/icons/menu/fire.png',  

    precio: 3600, 

    oveg: 'NO', 
    
    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.', 
    
    orientacion: 'order-lg-1',

    },

]

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

// CARRITO CHECKER DE ENTRADA
const addEntradaToCart = (entradaIndex) => {
    
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
const removeEntrada = (entradaIndex) => {
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

buildEntradas();
let total = 0;
let cartEntrada = [];
let modalCarritoEntrada = document.querySelector('#cart-container-entrada');