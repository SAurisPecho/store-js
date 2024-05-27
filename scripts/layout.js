// const navSelector = document.getElementById("nav");

function navegationBarr(id) {
  let template = "";
  getOptions()
    .then((navOptions) => {
      for (const navOption of navOptions) {
        template += `
        <li class="nav-li">
          <a class="nav-button" href="${navOption.linkTo}">${navOption.title}</a>
        </li>
        `;
      }
      const navSelector = document.getElementById(id);
      navSelector.innerHTML = template;
    })
    .catch((error) => {
      console.error("Hubo un error al obtener las opciones:", error);
    });
}
// export function navegationBarr(navSelector, options) {
//   for (let option of options) {
//     const anchor = document.createElement("a");
//     anchor.className = "nav-button";
//     anchor.textContent = option.title;
//     anchor.href = option.linkTo;
//     navSelector.appendChild(anchor);
//   }
// }
// export const options = [
//     { title: "Ofertas de la semana", linkTo: "./outlet.html" },
//     { title: "Cómo comprar", linkTo: "./how.html" },
//     { title: "Costos y tarifas", linkTo: "./taxs.html" },
//     { title: "Mis pedidos", linkTo: "./orders.html" },
//     { title: "Garantia", linkTo: "./warranty.html" },
//   ];

// const fotterSelector = document.querySelector("#fotter");

function footerBarr(id) {
  let template = "";
  getOptionsFooter()
  .then((footerOptions) => {
    for (const footerOption of footerOptions) {
      template =
        template +
        `
        <div class="footer-column">
          <h3>
            <a href="${footerOption.linkTo}">${footerOption.title}</a>
          </h3>
          <ul>
          ${footerOption.opts
            .map(
              (opt) =>
                `<li href="./index.html">${opt}</li>`
            )
            .join("")}
          </ul>
        </div>
      `;
    }
    const footerSelector = document.getElementById(id);
    footerSelector.innerHTML = template;
  })
  .catch((error) => {
    console.error('Hubo un error al obtener las opciones:', error);
  })
}

// export function fotterBarr(fotterSelector, optionsFotter) {
//   for (let optionFotter of optionsFotter) {
//     const column = document.createElement("div"); //un div para representar cada columna del pie de página
//     column.classList.add("footer-column"); //para añadir una clase a cada div que representa una columna del pie de página

//     const title = document.createElement("h3"); //para crear un título para la columna (h3)
//     const titleLink = document.createElement("a"); //para crear un enlace para el título que redirige a la página correspondiente

//     titleLink.href = optionFotter.linkTo;
//     titleLink.textContent = optionFotter.title;
//     title.appendChild(titleLink);
//     column.appendChild(title);

//     const optList = document.createElement("ul"); //crea una lista para que represente las opciones de la columna
//     for (let opt of optionFotter.opts) {
//       const elemntList = document.createElement("li"); //crea un elemento de lista para cada opción (li)
//       elemntList.textContent = opt; //para poner el texto a cada opt de la lista
//       optList.appendChild(elemntList); //a cada ul se le agrega el li
//     }
//     column.appendChild(optList); // a cada columna se le agrega su lista
//     fotterSelector.appendChild(column); // a la session fotter se le agrega cada columna
//   }
// }
// export const optionsFotter = [
//     { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"] },
//     { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago","Envios","Devoluciones"] },
//     { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"]},
//     { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
//     { title: "Garantia", linkTo: "./warranty.html", opts: ["Garantia 7 dias"]},
//   ];
//

//traer datos de un documento json

async function getOptions() {
  try {
  const response = await fetch("./Json/options.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.navOptions;
    } catch(error) {
      console.error("Hubo un problema con la operación fetch:", error);
      throw error;
    }
}

async function getOptionsFooter() {
  try{
  const response = await fetch("./Json/options.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.footerOptions;
    } catch(error) {
      console.error("Hubo un problema con la operación fetch:", error);
      throw error;
    }
}

export { navegationBarr, footerBarr }