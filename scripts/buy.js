//Seleccionar al boton de comprar

export function comprar() {
  // Seleccionar el botón de comprar
  const buySelector = document.getElementById("buy");
  
  // Agregar un event listener al botón de comprar
  if (buySelector) {
      buySelector.addEventListener("click", () => {
          // Borrar los productos del carrito
          localStorage.removeItem("cart");
          // Redirigir a la página de inicio
          window.location.href = "./cart.html";
      });
  }
}

// // Llamar a la función de comprar cuando el DOM esté completamente cargado
// document.addEventListener("DOMContentLoaded", comprar);
