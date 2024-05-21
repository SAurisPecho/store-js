//LAYOUT
import {navegationBarr, options, fotterBarr, optionsFotter, } from "./layout.js";

const navSelector = document.getElementById("nav");
navegationBarr(navSelector, options);

const fotterSelector = document.querySelector("#fotter");
fotterBarr(fotterSelector, optionsFotter);

//INICIAR/CIERRE DE SECCION
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

//IMPRESION DE DETALLES DE PRODUCTO
import { getParametro, printDetails } from "./productDetail.js";
getParametro();
printDetails();

//PARA EL EVENTO DE CLICK DE LAS MINIATURAS
import "./changeMini.js";

//PARA EL EVENTO DE CAMBIO/CHANGE PARA EL SUBTOTAL
import "./changeSubtotal.js"

//AGREGAR PRODUCTO AL CARRITO
import "./saveProduct.js";

//AGREGAR A FAVORITOS
import { inicioIcon } from "./toggleFavorite.js";
inicioIcon();

//CARDS DE OFERTAS
import "./cartsOferts.js";

