export function isAuthenticated() {
  const token = localStorage.getItem("token");
  return !!token;
}

export function protectRoute() {
  if (!isAuthenticated()) {
    window.location.href = "/login";
  }
}
