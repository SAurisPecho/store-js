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

document.addEventListener("DOMContentLoaded", () => {       
    const $dProducts = document.getElementById("dProducts");
    if ($dProducts){
        loadProducts(productsArray, createCard);
    }
    captureText();
})

//SORT 
import { sortProducts } from "./sortProducts.js";

const filter = document.getElementById("filter-sort");
if (filter) {
    filter.addEventListener("change", sortProducts);
}
