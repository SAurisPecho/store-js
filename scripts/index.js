//LAYOUT
import { navegationBarr, footerBarr } from "./layout.js";

navegationBarr("nav");
footerBarr("fotter");

//INICIAR/CIERRE DE SECCION 
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

// MAIN TODAS LAS CARTS DE PRODUCTOS
import { loadProducts } from "./productCards.js";
import { getProducts } from "./products.js";
getProducts().then((products) => loadProducts(products, "dProducts"));

// MAIN FILTRADO DE PRODUCTOS
import { captureText } from "./filterProducts.js";
captureText(); // Llama a la función captureText para que se ejecute cuando se escriba en el campo de búsqueda

// SORT
import { sortProducts } from "./sortProducts.js";

