import { navOption, fotterOption } from "./optsNavFot"

const navOptions: navOption[] = [
    {
      "title": "Ofertas de la semana",
      "linkTo": "./outlet.html"
    },
    {
      "title": "Cómo comprar",
      "linkTo": "./how.html"
    },
    {
      "title": "Costos y tarifas",
      "linkTo": "./taxs.html"
    },
    {
      "title": "Mis pedidos",
      "linkTo": "./orders.html"
    },
    {
      "title": "Garantia",
      "linkTo": "./warranty.html"
    }
  ]

const footerOptions: fotterOption[] = [
    {
      "title": "Ofertas de la semana",
      "linkTo": "./outlet.html",
      "opts": ["Laptops", "Audio", "Auriculares"]
    },
    {
      "title": "Cómo comprar",
      "linkTo": "./how.html",
      "opts": ["Formas de pago", "Envios", "Devoluciones"]
    },
    {
      "title": "Costos y tarifas",
      "linkTo": "./taxs.html",
      "opts": ["Impuestos", "Facturación"]
    },
    {
      "title": "Mis pedidos",
      "linkTo": "./orders.html",
      "opts": ["Pedir nuevamente", "Lista de deseos"]
    },
    {
      "title": "Garantia",
      "linkTo": "./warranty.html",
      "opts": ["Garantia 7 dias"]
    }
  ]

  export {navOptions, footerOptions};