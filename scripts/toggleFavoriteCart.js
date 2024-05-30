import { getProducts } from "./products.js";

export function toggleFavorite(id, icon) {
  console.log("ID del producto:", id);
  getProducts()
  .then((products) => {
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  const index = fav.findIndex((favProduct) => favProduct.id === id);

  if (index !== -1) {
    // Si el producto está en la lista de favoritos, lo eliminamos
    fav.splice(index, 1);
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  } else {
    // Verificar el límite de favoritos
    if (fav.length >= 4) {
      Swal.fire({
        title: "Producto no añadido",
        text: "Ya tienes 4 productos favoritos! No puedes agregar más",
        icon: "warning",
        confirmButtonText: "Aceptar"
      });            
      return;
    }
    

    // Si el producto no está en la lista de favoritos, lo agregamos
    const addfav = products.find((each) => each.id === id);
    const newFavProduct = {
      id: id,
      title: addfav.title,
      price: addfav.price,
      image: addfav.image,
      policytax: addfav.policytax,
      description: addfav.description,
    };
    fav.push(newFavProduct);
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  }

    localStorage.setItem("fav", JSON.stringify(fav));
    updateFavoriteIcons();
  })
  .catch((error) => {
    console.error('Hubo un problema al añadir a favoritos :', error);
});
}

// Función para inicializar los iconos de favoritos en la carga de la página
export function initializeFavoriteIcons() {
  updateFavoriteIcons();
  
  // Añadir event listeners a todos los iconos de favoritos
  const iconButtons = document.querySelectorAll(".btn-favorite i");
  iconButtons.forEach(icon => {
    icon.addEventListener("click", function() {
      const productId = icon.getAttribute("data-productid");
      toggleFavorite(productId, icon);
    });
  });
}

// Función para actualizar los iconos de favoritos después de cualquier cambio
function updateFavoriteIcons() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];
  const iconButtons = document.querySelectorAll(".btn-favorite i");

  iconButtons.forEach(icon => {
    const productId = icon.getAttribute("data-productid");
    
    if (fav.some((favProduct) => favProduct.id === productId)) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    } else {
      icon.classList.remove("fa-solid");
      icon.classList.add("fa-regular");
    }
  });
}

window.addEventListener("DOMContentLoaded", initializeFavoriteIcons);

 
// import { productsArray } from "./products.js";

// export function toggleFavorite(id, icon) {
//   let fav = JSON.parse(localStorage.getItem("fav")) || [];
//   const index = fav.findIndex((favProduct) => favProduct.id === id);

//   if (index !== -1) {
//     // Si el producto está en la lista de favoritos, lo eliminamos
//     fav.splice(index, 1);
//     icon.classList.remove("fa-solid");
//     icon.classList.add("fa-regular");
//   } else {
//     // Verificar el límite de favoritos
//     if (fav.length >= 4) {
//       alert("¡Ya tienes 4 productos favoritos! No puedes agregar más.");
//       return;
//     }

//     // Si el producto no está en la lista de favoritos, lo agregamos
//     const addfav = productsArray.find((each) => each.id === id);
//     const newFavProduct = {
//       id: id,
//       title: addfav.title,
//       price: addfav.price,
//       image: addfav.image,
//       policytax: addfav.policytax,
//       description: addfav.description,
//     };
//     fav.push(newFavProduct);
//     icon.classList.remove("fa-regular");
//     icon.classList.add("fa-solid");
//   }

//   localStorage.setItem("fav", JSON.stringify(fav));
//   updateFavoriteIcons();
// }

// // Función para inicializar los iconos de favoritos en la carga de la página
// export function initializeFavoriteIcons() {
//   updateFavoriteIcons();
  
//   // Añadir event listeners a todos los iconos de favoritos
//   const iconButtons = document.querySelectorAll(".btn-favorite i");
//   iconButtons.forEach(icon => {
//     icon.addEventListener("click", function() {
//       const productId = icon.getAttribute("data-productid");
//       toggleFavorite(productId, icon);
//     });
//   });
// }

// // Función para actualizar los iconos de favoritos después de cualquier cambio
// function updateFavoriteIcons() {
//   const fav = JSON.parse(localStorage.getItem("fav")) || [];
//   const iconButtons = document.querySelectorAll(".btn-favorite i");

//   iconButtons.forEach(icon => {
//     const productId = icon.getAttribute("data-productid");
    
//     if (fav.some((favProduct) => favProduct.id === productId)) {
//       icon.classList.remove("fa-regular");
//       icon.classList.add("fa-solid");
//     } else {
//       icon.classList.remove("fa-solid");
//       icon.classList.add("fa-regular");
//     }
//   });
// }

// window.addEventListener("DOMContentLoaded", initializeFavoriteIcons);
