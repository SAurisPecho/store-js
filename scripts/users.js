function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(email, password, offers) {
  let users = getUsers();

  let existingUser = users.find((user) => user.email === email);
  if (existingUser) {
      return {
          success: false,
          message: "El correo electrónico ya está registrado.",
      };
  }
  users.push({ email, password, offers });
  saveUsers(users);
  return { success: true, message: "Registro exitoso." };
}

function handleRegister(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const offers = document.getElementById("ofers").checked;
  if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
  }
  const result = registerUser(email, password, offers);
  if (result.success) {
  alert(result.message);
  window.location.href = "login.html";
  } else {
  alert(result.message);
  }
}

export { handleRegister, getUsers };