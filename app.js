let entradas = [

    {id: 0,
        
    nombre: 'entrada fria',

    img: '../assets/menu/1entradas/entradaFria.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire: '../assets/icons/menu/fire.jpg', 

    precio: ' $ $ $ $ ', 

    oveg: 'SI', 

    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',},

    {id: 1,
        
    nombre: 'corn deluxe',

    img: '../assets/menu/1entradas/cornDeluxe.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire: '../assets/icons/menu/fire.jpg', 

    precio: ' $ $ ', 

    oveg: 'SI', 
    
    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',},

    {id: 2,
        
    nombre: 'rabas',

    img: '../assets/menu/1entradas/rabas.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire: '../assets/icons/menu/fire.jpg', 

    precio: ' $ $ $ ', 

    oveg: 'NO', 
    
    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',},

    {id: 3,
        
    nombre: 'tabla de quesos',

    img: '../assets/menu/1entradas/tablaDeQuesos.jpg',

    descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.', 

    fire: '../assets/icons/menu/fire.jpg', 

    precio: ' $ $ $ ', 

    oveg: 'NO', 
    
    condimentos: 'Condimentos: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eu odio nec gravida. Vestibulum vel cursus enim.',},

]


const dibujarProducto = () => {
    let contenedor = document.getElementById("container");
    entradas.forEach((entrada) => {
        let card = document.createElement("div");
        card.classList.add("row", "mi-row");
        card.innerHTML = `
        <div class="col-lg-6 col-md-12 gx-0 mi-img-container">
        <img src="${entrada.img}" alt="${entrada.nombre}">
        </div>
        <div class="col-lg-6 col-md-12 gx-0 mi-desc-container">
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
                                        
                                    </div>       
                                </div>
                                <h5>Precio: ${entrada.precio}</h5>
                                <h5>Opcion vegetariana: ${entrada.oveg}</h5>
                                <a href="#" class="btn aa-carrito-btn">Añadir al carrito</a>
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
        contenedor.appendChild(card)
    })
};

dibujarProducto();