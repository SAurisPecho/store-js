import { loadProducts } from "./productCards.js";
import { getProducts } from "./products.js";

const filter = document.getElementById("filter-sort");

export function sortProducts(products, optionSelect) {
    let sortedProducts = [...products]; // Clonamos el array de productos para no modificar el original

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
    }

    return sortedProducts;
}
filter.addEventListener("change", () => {
  getProducts().then((products) => {
      const textSearch = document.getElementById("iSearch").value.toLowerCase();
      let filteredProducts = products.filter(product =>
          product.title.toLowerCase().includes(textSearch)
      );
      const sortedProducts = sortProducts(filteredProducts, filter.value);
      loadProducts(sortedProducts, document.querySelector("#dProducts"));
  }).catch((error) => console.error('Error fetching products:', error));
});
