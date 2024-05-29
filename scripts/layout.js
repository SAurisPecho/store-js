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
            .map((opt) => `<li href="./index.html">${opt}</li>`)
            .join("")}
          </ul>
        </div>
      `;
      }
      const footerSelector = document.getElementById(id);
      footerSelector.innerHTML = template;
    })
    .catch((error) => {
      console.error("Hubo un error al obtener las opciones:", error);
    });
}

async function getOptions() {
  try {
    const response = await fetch("./Json/options.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.navOptions;
  } catch (error) {
    console.error("Hubo un problema con la operación fetch:", error);
    throw error;
  }
}

async function getOptionsFooter() {
  try {
    const response = await fetch("./Json/options.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.footerOptions;
  } catch (error) {
    console.error("Hubo un problema con la operación fetch:", error);
    throw error;
  }
}

export { navegationBarr, footerBarr, printIcons};

function printIcons() {
  let template = `
  <div class="socialred">
      <li><a href="#" class="iconFacebook"><img src="assets/facebook.png" alt="facebook"></a></li>
      <li><a href="#" class="iconInstagram"><img src="assets/instagram.png" alt="instagram"></a></li>
  </div>
      <li><a href="#" class="iconUsuarioOnline hidden"><i class="fa-solid fa-user-check"></i></a></li>
      <li><a href="#" class="iconUsuarioOffline"><i class="fa-solid fa-circle-user"></i></a></li>
      <li><a href="./cart.html" class="iconCart hidden"><img src="assets/cart-28-24.png" alt="carrito-de-compra"></a></li> 
      <li><a href="./favorite.html" class="iconFav hidden"><img src="assets/favorite-5-24.ico" alt="favoritos"></a></li> 
  `;
  document.querySelector(".header-social").innerHTML = template;
}
