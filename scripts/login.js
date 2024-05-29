import { loginSeccion } from "./auth.js";
import { navegationBarr, printIcons } from "./layout.js";

printIcons();
navegationBarr("nav");

document.getElementById("loginform").addEventListener("submit", loginSeccion)
