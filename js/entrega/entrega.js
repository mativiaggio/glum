const minutosTotales = 30;

let tiempoTotal = minutosTotales * 60;

const container = document.getElementById('entrega');

setInterval(cuentaRegresiva, 1000);

function cuentaRegresiva() {

    const minutos = Math.floor(tiempoTotal / 60);

    let segundos = tiempoTotal % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    container.innerHTML = `${minutos}:${segundos}`;

    tiempoTotal--;

}