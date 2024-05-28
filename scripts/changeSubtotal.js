import { getProducts } from "./products.js";

//PARA EL EVENTODE CAMBIO/CHANGE PARA EL SUBTOTAL
export function changeSubtotal(event) {
  getProducts()
    .then((products) => {
      const quantity = event.target.value; 
      const id = event.target.dataset.productid
      const proDuct = products.find((product) => product.id === id); 
      const subTotal = quantity * proDuct.price; 
      const priceSelector = document.querySelector("#price"); 
      priceSelector.innerHTML = `$${subTotal}`; 
      
    })
    .catch((error) => {
      console.error("Hubo un problema al obtener los productos:", error);
    });
} 




// //PARA EL EVENTODE CAMBIO/CHANGE PARA EL SUBTOTAL
// export function changeSubtotal(event) {   //definir la funcion con el evento onchange como parametro para que dependa segun su cambio
//   const quantity = event.target.value;   // en una variable guardar el valor de productos a comprar
//   const proDuct = productsArray.find(product => product.id === id);    //buscar el producto segun el id de la url con el metodo find
//   const subTotal = quantity * proDuct.price     //calcular el sub total
//   const priceSelector = document.querySelector("#price");       //seleccionar la etiqueta a donde se renderizara
//   priceSelector.innerHTML = `$${subTotal}`;     // imprimir en el HTML
// }
