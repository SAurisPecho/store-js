import { loadProducts } from "./productCards.js";
import { productsArray } from "./products.js";

export let filteredProducts = [...productsArray]; // Inicialmente todos los productos
const productContainer = document.querySelector("#dProducts");    // seleccionamos el contenedor de productos en DOM
productContainer.addEventListener("change", sortProducts);      // al contenedor le agregamos un evento de cambio, que llama a sortProducts cuando ocurre

export function sortProducts() {
  const filter = document.querySelector("#filter-sort"); //selecionar el elemento que va a ordenar los productos en el documento
  const optionSelect = filter.value; //obtener el valor del selector
  
  let sortedProducts = [...filteredProducts];   // clonar el array de productos filtrados para no mutar el original directamente

  if (optionSelect === "ascendente") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (optionSelect === "descendente") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (optionSelect === "precioMayor") {
    sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (optionSelect === "precioMenor") {
    sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (optionSelect === "default") {
    sortedProducts.sort((a, b) => a.id.localeCompare(b.id));
    // filter.value = "default";     // restablecer el valor del filtro a "default"
  }
  loadProducts(sortedProducts, productContainer);   // Carga los productos ordenados en el contenedor de productos
}