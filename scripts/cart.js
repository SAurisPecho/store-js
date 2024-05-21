//LAYOUT
import { navegationBarr, options, fotterBarr, optionsFotter } from "./layout.js";

const navSelector = document.getElementById("nav");
navegationBarr(navSelector, options);

const fotterSelector = document.querySelector("#fotter");
fotterBarr(fotterSelector, optionsFotter);

//INICIAR/CIERRE DE SECCION 
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

//IMPRESION DE PRODUCTOS DEL CARRITO
import { printCart } from "./printCart.js";
printCart();

//AÑADIR A FAVORITOS
import "./toggleFavoriteCart.js"

//BORRAR PRODUCTO DE CARRITO
import "./deleteItemCart.js";

//RENDERIZADO DEL TOTAL
import { printTotal } from "./printCartTotal.js";
printTotal();

//BOTON DE COMPRAR
import { comprar } from "./buy.js";
comprar();




