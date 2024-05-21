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

//FAVORITOS
import { printFavorites } from "./favorite.js";
printFavorites();

