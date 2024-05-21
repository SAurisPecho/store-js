//LAYOUT
import { navegationBarr, options, fotterBarr, optionsFotter } from "./layout.js";

const navSelector = document.getElementById("nav");
navegationBarr(navSelector, options);

const fotterSelector = document.querySelector("#fotter");
fotterBarr(fotterSelector, optionsFotter);

//INICIAR/CIERRE DE SECCION 
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

//MAIN TODAS LAS CARTS DE PRODUCTOS
import { productsArray } from "./products.js"
import { createCard, loadProducts } from "./productCards.js";

//MAIN FILTRADO DE PRODUCTOS
import { captureText } from "./filterProducts.js";

document.addEventListener("DOMContentLoaded", () => {         // Evento que se dispara cuando el DOM se ha cargado completamente, se ejecuta la función para cargar los productos
    const $dProducts = document.getElementById("dProducts");
    if ($dProducts){
        loadProducts(productsArray, createCard);        //se llama a la función loadProducts que tiene como argumento productosArray donde estan todos los productos
    }
    captureText();
})