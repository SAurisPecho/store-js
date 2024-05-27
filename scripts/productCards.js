// const $dProducts = document.getElementById("dProducts");

import { getProducts } from "./products.js";

//CARDS DE FORMA DINAMICA
function createCard(product) {
  return `
    <a class="product-card" href="./details.html?id=${product.id}">
        <img class="product-img" src="${product.image}" alt="${product.id}" />
        <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.description}</span>
            <div class="product-price-block">
            <span class="price" id ="price">$${product.price}</span>
            <span class="discount">${product.discount}</span>
            </div>
            <div class="product-tax-policy">${product.policytax}</div>
            <div class = "product-stock-block">
            <span class="stock">¡Solo quedan ${product.stock} productos!</span>
            </div>
        </div>
    </a>
    `;
}

// // Impresion de cards
// export let loadProducts = (productsArray, container) => { // guardamos en una variable una función que reciba como parámetro el array de products
//    if (container) {
//     let productsTemplate = "";   //Definir una variable para concatenar las tarjetas de productos
//     for (const product of productsArray) {   // iterar con for of para que cada vuelta cargue unna tarjeta
//        productsTemplate += createCard(product); // dentro de for of colocamos products template +create card para cada producto, genera la representación HTML utilizando la plantilla y lo agrega al contenedor
//       $dProducts.innerHTML = productsTemplate;
//       }
//     }
// }

// Impresion de cards
function loadProducts(arrayProducts, idSelector) {
  let productsTemplate = "";
  let productsArrayPromise;

  if (arrayProducts && arrayProducts.length > 0) {
    productsArrayPromise = Promise.resolve(arrayProducts);
  } else {
    productsArrayPromise = getProducts();
  }

  productsArrayPromise
    .then((productsArray) => {
      const productsSelector = document.getElementById("dProducts");
      if (productsArray.length > 0) {
        for (const element of productsArray) {
          productsTemplate += createCard(element);
        }
        productsSelector.innerHTML = productsTemplate;
      } else {
        productsSelector.innerHTML =
          "<h3 style='width: 100%; text-align: center'>No hay coincidencias</h3>";
      }
    })
    .catch((error) => {
      console.error("Hubo un problema al obtener los productos:", error);
      const productsSelector = document.getElementById(idSelector);
      productsSelector.innerHTML = "<h3 style='width: 100%; text-align: center'>No hay coincidencias</h3>";
    });
}

export { loadProducts, createCard};
