import { getProducts } from "./products.js";

//PARA AGREGAR UN PRODUCTO AL CARRITO
export function saveProduct(id) { 
  console.log("ID del producto:", id); 
  const isOnline = localStorage.getItem("isOnline") === "true";

  if (!isOnline) {
    Swal.fire({
      title: "Usuario no registrado",
      text: "Debe iniciar sesión para agregar productos al carrito.",
      icon: "warning",
      confirmButtonText: "Aceptar"
    });
  return
  }
  
  getProducts()
    .then((products) => {
      const found = products.find(each => each.id === id);     
      
      if (!found){
        throw new Error("Producto no encontrado");
      }

      const newObjectProduct = {                               
        id: id,
        title: found.title,
        price: found.price,
        image: found.image,
        policytax: found.policytax,
        description: found.description,
        color: document.querySelector("#color-" + id).value,
        quantity: document.getElementById("quanty-"+id).value,
      };
    
      const storage = localStorage.getItem("cart");  
      let cart    
      if (storage) {
        cart = JSON.parse(storage)
      } else {
        cart = [];
      }

      const indxProduct = cart.findIndex(cartProduct => cartProduct.id === id && cartProduct.color === newObjectProduct.color);

      if (indxProduct > -1) {  
        Swal.fire({
          title: "Producto añadido",
          text: "El producto ha sido añadido al carrito",
          icon: "warning",
          confirmButtonText: "Aceptar"
        });
      } else {
        cart.push(newObjectProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
          title:`Producto Añadido`,
          text: `El producto ha sido añadido al carrito`,
          icon: "success",
          confirmButtonText: "Aceptar"
        })
      }
      localStorage.setItem("cart", JSON.stringify(cart));  
    })
    .catch((error) => {
      console.error('Hubo un problema al obtener los productos:', error);
    });
}


// import { productsArray } from "./products.js";

// //PARA AGREGAR UN PRODUCTO AL CARRITO
// export function saveProduct(event) {    //la función saveProduct depende del id del producto, importante en el evento onclick en linea hay que asignar como argumento product.id
//   alert("se añadio el producto al carrito!!!")
//   let containerCart = "";     // creamos una variable vacia
//   let id = event.target.id;
//   const found = productsArray.find(each => each.id === id);     //definir una variable para que busque un producto con el mismo id del argumento
//   const newObjectProduct = {                               //definir un objeto con las propiedades  especificas del producto
//     id: id,
//     title: found.title,
//     price: found.price,
//     image: found.image,
//     policytax: found.policytax,
//     description: found.description,
//     color: document.getElementById("color").value,
//     quantity: document.getElementById("quanty").value,
//   };
//     let cart = JSON.parse(localStorage.getItem("cart"));      //obtener la clave cart de el LS y a el contenido conviertirlo a su formato original con JSON.parse()
//   if (!cart) {     // Verificar si la clave 'cart' es nula o vacia
//     containerCart = [newObjectProduct]  // si cart esta vacia a containerCart qle asignamos el nuevo producto
//   } else {      // si el carrito no esta vacio
//     let indxProduct = cart.findIndex((cartProduct) => cartProduct.id === id) //Buscar si el index del producto ha agregar está en carrito
//       if (indxProduct > -1) {   // si esta en el carrito
//         cart[indxProduct].quantity = Number(cart[indxProduct].quantity) + Number (newObjectProduct.quantity); // accdemos a la pocision del producto en cart con [indxProduct] y a su cantidad , adems sumamos la cantidad del nuevo objeto a agregar
//       } else {  //si no esta en carrito
//       cart.push(newObjectProduct);     // lo guardamos en la variable cart que tiene el localStorage en sus valor original
//       }
//     containerCart = cart;   //asignamos el valor de la variable cart a la variable containerCart
//   }
//   localStorage.setItem("cart", JSON.stringify(containerCart));  //Guardamos en localStorage
// }

// document.addEventListener("DOMContentLoaded", () => {   //al documento le agregamos un eventListener para cuando el este cargado
//     const containerThumbnail = document.querySelector(".btn-outline");     //guardamos todos el boton con clase btn-outline
//       containerThumbnail.addEventListener("click", saveProduct);        // un evento de cick con la funcion changeMini 
//     });