//PARA EL EVENTO DE CLICK DE LAS MINIATURAS
export function changeMini(event) {
    const selectedSrc = event.target.src; // Obtener la ruta de la imagen de la miniatura clicada
    const bigSelector = document.getElementById("bigImg"); // Seleccionar la imagen grande por su ID
    bigSelector.src = selectedSrc; // Cambiar la ruta de la imagen grande por la ruta de la miniatura
}



