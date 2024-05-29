import { renderIcons } from "./online.js";
import { getUsers } from "./users.js";

export function loginSeccion (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let users = getUsers();
    let user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
        alert("Correo electrónico o contraseña incorrectos.");
        localStorage.setItem("isOnline", false);
    }
    alert("Inicio de sesión exitoso.");
    localStorage.setItem("isOnline", true);
    window.location.href = "index.html";
    renderIcons();
}