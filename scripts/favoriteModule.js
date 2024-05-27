//LAYOUT
import { navegationBarr, footerBarr } from "./layout.js";

navegationBarr("nav");
footerBarr("fotter");

//INICIAR/CIERRE DE SECCION 
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

//FAVORITOS
import { printFavorites } from "./favorite.js";
printFavorites();

