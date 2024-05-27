//LAYOUT
import { navegationBarr, footerBarr } from "./layout.js";

navegationBarr("nav");
footerBarr("fotter");

//INICIAR/CIERRE DE SECCION
import { onlineLocalStorage, initialEvent } from "./online.js";

onlineLocalStorage();
initialEvent();

//IMPRESION DE DETALLES DE PRODUCTO
import { printDetails } from "./productDetail.js";
import { getProducts } from "./products.js";
import { loadOferts } from "./cartsOferts.js";

const query = location.search; //para capturar la cadena de consulta
const params = new URLSearchParams(query); //Creamos una nueva URLSearchParams con la cadena de consulta
const id = params.get("id"); //usamos get para obtener el valor de id
printDetails(id);

getProducts().then((products) => {
    const onsale = products.filter((each) => each.onsale);
    loadOferts(onsale, "salesBlockCards");
}).catch((error) => {
    console.error('Hubo un problema al obtener los productos:', error);
});





