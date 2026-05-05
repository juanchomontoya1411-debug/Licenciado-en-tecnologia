// 1. Identificamos las tarjetas por su ID
const btnReportar = document.querySelector('#btn-reportar');
const btnManual = document.querySelector('#btn-manual');

// 2. Acción para el botón de Reportar
btnReportar.addEventListener('click', () => {
    alert("¿Quien le gana a Goku?...");
    // Aquí podrías llevarlos a otra página: 
    // window.location.href = "reporte.html";
});

// 3. Acción para el botón de Manual
btnManual.addEventListener('click', () => {
    alert("Abriendo el manual de usuario");
});