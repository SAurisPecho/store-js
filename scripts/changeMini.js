//PARA EL EVENTO DE CLICK DE LAS MINIATURAS
export function changeMini(event) {    //definir la funcion para que dependa del event en linea de las miniaturas
    const selectedSrc = event.target.src;   //guardar la ruta de la imagen de la miniatura
    const bigSelector = document.getElementById("bigImg");        //seleccionar el id de la imagen agrandada
    bigSelector.src = selectedSrc;                // cambia la ruta src de la imagen grande por la ruta de la miniatura en la que se hizo clic.
    //document.querySelector(".thumbnail-container").addEventListener("click", changeMini);     //agrega un event listener al contenedor de miniaturas, Cuando se hace clic en cualquier miniatura dentro de este contenedor, la función changeMini se ejecutará.
  }

  document.addEventListener("DOMContentLoaded", () => {   //al documento le agregamos un eventListener para cuando el este cargado
    const containerThumbnail = document.querySelectorAll(".thumbnail-container");     //guardamos todos los elementos con clase  thumbnail-container (imagenes chicas)
    containerThumbnail.forEach(thumbnail => {           //iteramos la variable que contiene todas las imagenes chicas y por cada imagen se agrega
      thumbnail.addEventListener("click", changeMini);        // un evento de cick con la funcion changeMini 
    });
  }); 
