export function printFavorites() {
    let myFavorite = document.querySelector(".containerMainFavorite");
    myFavorite.innerHTML = ""; // Limpiar el contenido actual
    // Obtener la lista de favoritos del almacenamiento local
    let fav = JSON.parse(localStorage.getItem("fav")) || [];
    // Verificar si hay productos favoritos
    if (fav.length === 0) {
        myFavorite.innerHTML = `
            <article class="product-cart" id="cartproducts">
                <div class="title-product">No tiene productos favoritos</div>
                <a class="inicio" href="index.html">
                <i class="fa-solid fa-heart-circle-plus"></i>
                </a>
            </article>
        `;
    } else {
        // Iterar sobre los productos favoritos y agregarlos al contenedor
        fav.forEach((product) => {
            const productDiv = document.createElement("article");
            productDiv.classList.add("product-cart");
            productDiv.setAttribute("id", "cartproducts");
            productDiv.setAttribute("data-product-id", product.id);
            productDiv.innerHTML = `
                <img class="product-imge" src="${product.image}"/>
                <div class="productdetailsyprice">
                    <div class="product-details">
                        <div class="title-product">${product.title}</div>
                        <div class="description-product">${product.description}</div>
                    </div>    
                    <div class="product-price">
                        <div class="top">
                            <div class="price">P.U. $ ${product.price}.00</div>
                            <button class="btn-dlt"><i class="fa-solid fa-trash-can"></i></button>
                        </div>    
                    </div>
                </div>
            `;
            myFavorite.appendChild(productDiv);
        });
    }
    // Agregar event listeners a los botones de eliminación
    const deleteButtons = document.querySelectorAll(".btn-dlt");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            deleteItem(event);
        });
    });
}




export function deleteItem(event) {
    if (event) {
        // Obtener el botón que activó la función
        const button = event.target;
        // Obtener el contenedor del producto
        const productDiv = button.closest(".product-cart");
        // Obtener el ID del producto
        const productId = productDiv.getAttribute("data-product-id");

        // Eliminar el producto de los favoritos y actualizar el localStorage
        removeFromFavorites(productId);
        // Volver a imprimir los favoritos para reflejar los cambios
        printFavorites();
    } 
}

export function removeFromFavorites(productId) {
    let fav = JSON.parse(localStorage.getItem("fav")) || [];
    // Encontrar el índice del producto en el array de favoritos
    let index = fav.findIndex((favProduct) => favProduct.id === productId);
    // Si se encuentra el producto, eliminarlo del array de favoritos
    if (index !== -1) {
        fav.splice(index, 1);
        // Actualizar el almacenamiento local con la lista modificada de favoritos
        localStorage.setItem("fav", JSON.stringify(fav));
    }
} 