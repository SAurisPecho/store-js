import { loadProducts } from "./productCards.js";
import { getProducts } from "./products.js";
import { sortProducts } from "./sortProducts.js";

export let filteredProducts = [];

export function captureText() {
  const searchSelector = document.getElementById("iSearch");
  const productContainer = document.getElementById("dProducts");
  searchSelector.addEventListener("keyup", (event) => {
  const textSearch = searchSelector.value.toLowerCase();
        getProducts()
        .then((productsArray) => {
            filteredProducts = productsArray.filter(product => product.title.toLowerCase().includes(textSearch)); // Filtrar productos
            sortProducts(filteredProducts, "default"); // Ordenar los productos filtrados
            loadProducts(filteredProducts, productContainer); // Carga los productos filtrados y ordenados en el contenedor
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
  });
}  

// import { productsArray } from "./products.js";
// import { loadProducts } from "./productCards.js";
// import { sortProducts, filteredProducts} from "./sortProducts.js";

// const searchSelector = document.getElementById("iSearch");  //seleccionamos el input de busqueda en el DOM
// const productContainer = document.querySelector('#dProducts');  //seleccionamos el elemento hacia donde se renderizara los productos

// let textSearch = ""; //asignamos una variable vacia para el texto buscado

// export function captureText() {     //funcion ejecutada cuando el usuario escriba en el campo de búsqueda
//   textSearch = searchSelector.value.toLowerCase();  // a la variable textSearch le asignamos el valor escrito en el input de busqueda
//   // filtrar productos basado en el texto de búsqueda
//   filteredProducts.length = 0;      //vacía el array filteredProducts
//   productsArray.forEach(product => {      // iteramos sobre cada producto en productsArray
//     if (product.title.toLowerCase().includes(textSearch)) {   // si el titulo del producto incuyelo buscado en textSearch
//       filteredProducts.push(product);           //lo agregamos a filteredProducts 
//     }
//   });
//   // ordenar los productos filtrados
//   sortProducts();   //llamamos a la funcion sortProducts para ordenar los productos filtrados segun la opcion del select

//   // Cargar productos filtrados y ordenados
//   loadProducts(filteredProducts, productContainer);  //llamamos a load product para renderizae lo productos filtrados y ordenarlos en el contenedor en DOM
// }

// searchSelector.addEventListener("keyup", captureText); // Añadir event listener para el campo de búsqueda para que ejecute el evento con la funcion captureText
