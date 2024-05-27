//LAYOUT
import { navegationBarr, footerBarr } from "./layout.js";

navegationBarr("nav");
footerBarr("fotter");

//INICIAR/CIERRE DE SECCION
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

//IMPRESION DE PRODUCTOS DEL CARRITO
import { printCart } from "./printCart.js";
printCart();

//RENDERIZADO DEL TOTAL
import { printTotal } from "./printCartTotal.js";
printTotal();

//BOTON DE COMPRAR
import { comprar } from "./buy.js";
comprar(); 




