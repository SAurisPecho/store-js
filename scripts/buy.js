import { printCart } from "./printCart.js";
import { printTotal } from "./printCartTotal.js";

export function comprar() {
  Swal.fire({
    title:`¿Confirmar compra?`,
    text: "¿Estás seguro de que deseas finalizar la compra?",
    icon: `question`,
    showCancelButton: true,
    confirmButtonColor: `#3085d6`,
    cancelButtonColor: `#d33`,
    confirmButtonText: `Si, comprar`,
    cancelButtonText: `Cancelar`
  }) .then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Compra finalizada',
        'Tu compra ha sido realizada con éxito',
        'success'
      );
      let cartProducts= [];
      localStorage.setItem("cart", JSON.stringify(cartProducts));
      printCart();
      printTotal();
    }
  });
  }

// // Llamar a la función de comprar cuando el DOM esté completamente cargado
// document.addEventListener("DOMContentLoaded", comprar);


// export function comprar() {
//   // Seleccionar el botón de comprar
//   const buySelector = document.getElementById("buy");
  
//   // Agregar un event listener al botón de comprar
//   if (buySelector) {
//       buySelector.addEventListener("click", () => {
//           // Borrar los productos del carrito
//           localStorage.removeItem("cart");
//           // Redirigir a la página de inicio
//           window.location.href = "./cart.html";
//       });
//   }
// }