import { navegationBarr, printIcons } from "./layout.js";
import { handleRegister } from "./users.js";

printIcons();
navegationBarr("nav");

document.getElementById("registerform").addEventListener("submit", handleRegister);
