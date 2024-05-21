//CARDS DE FORMA DINAMICA
import { ofertsArray } from "./products.js";

const $salesBlockCards = document.querySelector(".salesBlockCards")

function cardOferts (ofertArray) {
    return `
    <h2>Ofertas de la semana</h2>
    <a class="product-card" href="./details.html?id=${ofertArray.id}">
        <img class="product-img" src="${ofertArray.image}" alt="${ofertArray.id}" />
        <div class="product-info">
            <span class="product-title">${ofertArray.title}</span>
            <span class="product-description">${ofertArray.description}</span>
            <div class="product-price-block">
            <span class="price">$${ofertArray.price}</span>
            <span class="discount">${ofertArray.discount}</span>
            </div>
            <div class="product-tax-policy">${ofertArray.policytax}</div>
            <div class = "product-stock-block">
            <span class="stock">¡Solo quedan ${ofertArray.stock} productos!</span>
            </div>
        </div>
    </a>
    `;
}
// Impresion de cards
let loadOferts = (ofertsArray) => { // guardamos en una variable una función que reciba como parámetro el array de oferts
    let ofertsTemplate = "";   //Definir una variable para concatenar las tarjetas de productos
     for (const ofertArray of ofertsArray) {   // iterar con for of para que cada vuelta cargue una tarjeta
        ofertsTemplate += cardOferts(ofertArray); // dentro de for of colocamos ofertstemplate +create card para cada producto, genera la representación HTML utilizando la plantilla y lo agrega al contenedor
       $salesBlockCards.innerHTML = ofertsTemplate;
     }
 }

export { cardOferts, loadOferts}

     document.addEventListener("DOMContentLoaded", () => { // Evento que se dispara cuando el DOM se ha cargado completamente, se ejecuta la función para cargar los productos
        const $salesBlockCards = document.querySelector(".salesBlockCards");        //buscamos en el DOM el elemento 
        if ($salesBlockCards){                                  //si el elemento $salesBlockCards = id salesBlockCards esta definida
          loadOferts(ofertsArray);                     //se llama a la función loadProducts que tiene como argumento ofertsArray donde estan todos los productos en oferta
         }
     });