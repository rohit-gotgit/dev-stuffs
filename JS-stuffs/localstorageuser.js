export function saveUserSession(user) {
  if (!user || typeof user !== "object") return;

  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserSession() {
  const data = localStorage.getItem("user");

  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function clearUserSession() {
  localStorage.removeItem("user");
}
