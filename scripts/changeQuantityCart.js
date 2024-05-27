import { updateSubtotal } from "./printCart.js"
import { printTotal } from "./printCartTotal.js";


// Función para cambiar la cantidad de productos en el carrito
export function changeQuantity(event) {
  if (event && event.target) { // Verificar si event es definido y tiene la propiedad target
    // Definiendo variable cartproducts que traiga el array del localStorage
    let cartproducts = JSON.parse(localStorage.getItem("cart"));
    // Traer el id del producto
    const id = event.target.id.split("_");
    // Traer el valor de la cantidad
    const quantity = event.target.value;
    // Iterar sobre los productos del carrito
    cartproducts.forEach((product) => {
      // Verificar si el id del producto es igual al id del producto seleccionado
      if (product.id === id[0] && product.color == id[1]) {
        // Cambiar la cantidad del producto
        product.quantity = quantity;
        // Actualizar el subtotal usando la función importada
        updateSubtotal(product);
      }
    });
    // Guardar el carrito en localStorage
    localStorage.setItem("cart", JSON.stringify(cartproducts));
    printTotal();
  }
}

export function initializeQuantityInputs() {
    const inputs = document.querySelectorAll(".product-input");
    // Asignamos el event listener changeQuantity a cada input
    inputs.forEach(input => {
        input.addEventListener("change", changeQuantity);
    });
}


// Llamar a la función de inicialización cuando el DOM esté cargado inicialmente
document.addEventListener("DOMContentLoaded", () => {
  initializeQuantityInputs();
});

