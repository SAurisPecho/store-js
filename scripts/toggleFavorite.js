import { getParametro } from "./productDetail.js";
import { productsArray } from "./products.js";

export function toggleFavorite() {
  const id = getParametro("id");
  const icon = document.querySelector("#heartIcon");
  // obtener la lista de favoritos del almacenamiento local
  let fav = JSON.parse(localStorage.getItem("fav")) || [];

  const index = fav.findIndex((favProduct) => favProduct.id === id); // verificar si el producto está en la lista de favoritos con findIndex
  if (index !== -1) {
    // Si el producto esta en la lista de favoritos, lo eliminamos
    fav.splice(index, 1);
    if (index !== -1) {
      icon.classList.replace("fa-solid", "fa-regular");
    }
  } else {
    if (fav.length >= 4) {
      //si fav ya tiene mas de 4 productos muestra la alerta y con return detiene la funcion toggleFavorite
      alert("¡Ya tienes 4 productos favoritos! No puedes agregar más.");
      return;
    }
    const addfav = productsArray.find((each) => each.id === id);
    const newFavProduct = {
      id: id,
      title: addfav.title,
      price: addfav.price,
      image: addfav.image,
      policytax: addfav.policytax,
      description: addfav.description,
    };
    fav.push(newFavProduct); // Si el producto no está en la lista de favoritos, lo agregamos
    if (index === -1) {
      icon.classList.replace("fa-regular", "fa-solid");
    }
  }
  localStorage.setItem("fav", JSON.stringify(fav));
  inicioIcon();
}

export function inicioIcon() {
  let $id = getParametro("id");
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  const icon = document.querySelector("#heartIcon");
  const productId = $id; // Obtener el ID del producto de la URL

  if (fav.some((favProduct) => favProduct.id === productId)) {
    // verificar si hay un elemento en fav que tenga el mismo d del productoactual
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
  icon.addEventListener("click", toggleFavorite);
}

export function assignButton() {
  const buttonDeleteFav = document.querySelector("#heartIcon");     //guardamos todos los elementos con clase  thumbnail-container (imagenes chicas)
    buttonDeleteFav.addEventListener("click", inicioIcon);       
  };

document.addEventListener("DOMContentLoaded", () => {       //al documento le agregamos un eventListener para cuando el este cargado
  inicioIcon();
  assignButton();
})  

// document.addEventListener("DOMContentLoaded", () => {       //al documento le agregamos un eventListener para cuando el este cargado
//   inicioIcon();
// })  

