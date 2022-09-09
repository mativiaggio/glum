/*

Primera entrega del proyecto final.

Como se puede notar se ha usado el mismo codigo JavaScript que en la entrega de arrays. Sin embargo tiene una diferencia, se agrego la funcion de, en el alert que muestra el carrito, tambien muestra la cantidad de unidades elegidas por el usuario y se aclara el IVA% que se aplico al producto.

Notese tambien que se ha cambiado el array de objetos, este array ahora muestra una serie de platos que se pueden pedir a comprar, ya que la tematica del proyecto es de un "ecommerce" de un restaurant de lujo el cual contiene un carrito de compras donde puede pedir y abonar productos para ser enviados por medio de un delivery.

Ademas, la pagina contiene estilos CSS3 hechos con SCSS. Se tiene en cuenta y se sabe que los mismos no son necesarios en ninguna instancia de entrega, sin embargo decidi incluirlos ya que quiero, en un futuro, mostrar este proyecto como parte de mi portfolio. 

- Fecha de creacion: 06/09/2022
- Fecha de finalizacion: 07/09/2022

*/



/*

Funciones del programa ↓ ↓ ↓

*/

function compraCalc (a, b, c, d) {

  let unidadesTotales = d

  let totalMasUnidades = a * b

  let totalMasUnidadesMasIVA = totalMasUnidades + (totalMasUnidades * 0.10)

  let totalACarrito = Math.floor(totalMasUnidadesMasIVA)

  let aCarrito = [
    {articulo : c, precio: totalACarrito, unidadesTotales}
  ]

  carrito.push(aCarrito[0])
}

function eleccionProductoSimplificada(productoAComprar){

  let unidades = Number(prompt('Cuantas unidades?'))

  let unidadesElegidas = unidades

  let nombre = menu[productoAComprar].nombre

  let precio = menu[productoAComprar].precio

  compraCalc(precio, unidades, nombre, unidadesElegidas)
}

function eleccionProducto(){

  let productoAComprar = Number(prompt('\n Si desea comprar la Entrada fría ingrese 0 \n\n Si desea comprar el Corn deluxe ingrese 1 \n\n Si desea comprar las Rabas ingrese 2 \n\n Si desea comprar la Tabla de quesos ingrese 3 \n\n Si desea comprar la Premium salad ingrese 4 \n\n Si desea comprar la Fresh salad ingrese 5\n\n'))

  eleccionProductoSimplificada(productoAComprar)

  return carrito

}


/* 

Variables iniciales ↓ ↓ ↓

*/

let carrito = []


let cuotasIniciales = 0

let seguirComprando = 0

/* 

Objectos por cada plato disponible ↓ ↓ ↓

*/

const menu = [
  {id:0, nombre:'Entrada fría', precio: 4300},
  {id:1, nombre:'Corn deluxe', precio: 2200},
  {id:2, nombre:'Rabas', precio: 3100},
  {id:3, nombre:'Tabla de quesos', precio: 2999},
  {id:4, nombre:'Premium salad', precio: 3350},
  {id:5, nombre:'Fresh salad', precio: 2100},
]

/*
Varibale y alert donde muestra el menu al usuario ↓ ↓ ↓
*/
let nuestroMenu = menu.map((nuestroMenu_c)=> `${nuestroMenu_c.id}: ${nuestroMenu_c.nombre} $${nuestroMenu_c.precio}`)
alert(`Nuestro menu:\n\n${nuestroMenu.join('\n\n')}\n\n`)


/* 
Ciclo que se ejecutara cuando el usuario quiera comprar ↓ ↓ ↓
*/
while (seguirComprando === 0) {

  eleccionProducto()

  let carrito_list = carrito.map((carrito_completo)=> `${carrito_completo.articulo} $${carrito_completo.precio} (${carrito_completo.unidadesTotales}) *Se ha sumado 10% de IVA*`)

  const total = carrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);

  alert(`Tu carrito: \n\n ${carrito_list.join('\n\n')}\n\n Total a pagar: $${total}`)

  let seguir = prompt('Seguir comprando? [s/N]')

  if (seguir.toLowerCase() == 'n') {
      
    alert(`Usted abonara un total es de $${Math.floor(total)}.\n\nAhora Puede disfrutar de nuestra pagina!`)

    seguirComprando += 1
    break

  }else {
    continue
  }
}


























































