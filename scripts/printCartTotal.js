import { comprar } from "./buy.js";

//Definir función printTotal
export function printTotal() {
    // Definiendo variable cartproducts que traiga el array del localStorage
    let cartproducts = JSON.parse(localStorage.getItem("cart"));
    //Definir variable para almacenar el precio total
    let totalPrice = 0;
    if (cartproducts !== null) {
      //Iterar sobre los productos del carrito
      cartproducts.forEach((product) => {
        //Sumar el precio de cada producto al total
        totalPrice += product.price * product.quantity;
      });
    }
  
    //Traer el selector del contenedor del total
    const totalContainer = document.querySelector("#total");
    //Limpiar el contenedor
    totalContainer.innerHTML = "";
    //Agregar el html
    totalContainer.innerHTML = `
      <h1 class="cart-title">Resumen del pedido</h1>
      <div class="cart-total">
          <p class="cart-total-title"> Total    </p>
          <P class="cart-total-price">USD $${totalPrice !== null || totalPrice !== 0 ? totalPrice : 0}</p>
      </div>
      <p class="cart-tax">Incluye impuesto País y percepción AFIP</p>
      <button class="cart-btn" id="buy" type="button">COMPRAR</button>
  `;
  comprar();
  }