import { getParametro } from "./productDetail.js";
import { productsArray } from "./products.js";

let id = getParametro("id");

//PARA EL EVENTODE CAMBIO/CHANGE PARA EL SUBTOTAL
export function changeSubtotal(event) {   //definir la funcion con el evento onchange como parametro para que dependa segun su cambio
  const quantity = event.target.value;   // en una variable guardar el valor de productos a comprar
  const proDuct = productsArray.find(product => product.id === id);    //buscar el producto segun el id de la url con el metodo find
  const subTotal = quantity * proDuct.price     //calcular el sub total
  const priceSelector = document.querySelector("#price");       //seleccionar la etiqueta a donde se renderizara
  priceSelector.innerHTML = `$${subTotal}`;     // imprimir en el HTML
}

document.addEventListener("DOMContentLoaded", () => {
    const quty = document.querySelector("#quanty");
    quty.addEventListener("change", changeSubtotal);
  });

