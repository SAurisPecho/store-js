import { comprar } from "./buy.js";
import { printCart } from "./printCart.js";
import { printTotal } from "./printCartTotal.js";
import { initializeFavoriteIcons, toggleFavorite } from "./toggleFavoriteCart.js";


export function deleteItem(event) {
    if (event) {
        // Obtener el botón que activó la función
        const button = event.target;
        // Obtener el contenedor del producto
        const productDiv = button.closest(".product-cart");
        // Obtener el ID del producto
        const productId = productDiv.getAttribute("data-product-id");
        // Eliminar el producto de los favoritos y actualizar el localStorage
        removeFromCart(productId);
        // Volver a imprimir los favoritos para reflejar los cambios
        printCart();
        printTotal();
        // Reasignar event listeners a los botones de eliminación
        assignButtons();
        initializeFavoriteIcons();
    }
}

window.addEventListener("DOMContentLoaded", initializeFavoriteIcons);

export function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Encontrar el índice del producto en el array de favoritos
    let index = cart.findIndex((cartProduct) => cartProduct.id === productId);
    // Si se encuentra el producto, eliminarlo del array de favoritos
    if (index !== -1) {
        cart.splice(index, 1);
        // Actualizar el almacenamiento local con la lista modificada de favoritos
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export function assignButtons() {
    const buttonDelete = document.querySelectorAll(".fa-solid.fa-trash-can");     //guardamos todos los elementos con clase  thumbnail-container (imagenes chicas)
    buttonDelete.forEach(button => {           //iteramos la variable que contiene todos los botones y agregamos un evento
      button.addEventListener("click", deleteItem);       
    });
}

document.addEventListener("DOMContentLoaded", () => {       //al documento le agregamos un eventListener para cuando el este cargado
    assignButtons();
})  
