//CARDS DE FORMA DINAMICA

// const $salesBlockCards = document.querySelector(".salesBlockCards")

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

function loadOferts(arrayProducts, idSelector) {
    let productsTemplate = "";
    let productsArrayPromise;
  
    if (arrayProducts && arrayProducts.length > 0) {
      productsArrayPromise = Promise.resolve(arrayProducts);
    } else {
      productsArrayPromise = getProducts();
    }
  
    productsArrayPromise
      .then((productsArray) => {
        const productsSelector = document.getElementById("salesBlockCards");
        if (productsArray.length > 0) {
          for (const element of productsArray) {
            productsTemplate += cardOferts(element);
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

export { cardOferts, loadOferts}

// let loadOferts = (array, container) => { // guardamos en una variable una función que reciba como parámetro el array de oferts
//     container = document.getElementById("id");
//     let ofertsTemplate = "";   //Definir una variable para concatenar las tarjetas de productos
//      for (const each of array) {   // iterar con for of para que cada vuelta cargue una tarjeta
//         ofertsTemplate += cardOferts(each); // dentro de for of colocamos ofertstemplate +create card para cada producto, genera la representación HTML utilizando la plantilla y lo agrega al contenedor
//        container.innerHTML = ofertsTemplate;
//      }
//  }

    //  document.addEventListener("DOMContentLoaded", () => { // Evento que se dispara cuando el DOM se ha cargado completamente, se ejecuta la función para cargar los productos
    //     const $salesBlockCards = document.querySelector(".salesBlockCards");        //buscamos en el DOM el elemento 
    //     if ($salesBlockCards){                                  //si el elemento $salesBlockCards = id salesBlockCards esta definida
    //       loadOferts(array);                     //se llama a la función loadProducts que tiene como argumento ofertsArray donde estan todos los productos en oferta
    //      }
    //  });