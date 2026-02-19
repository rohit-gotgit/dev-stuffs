function login(email, rememberMe) {
  const user = { email };

  if (rememberMe) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
}

function logout() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
}
