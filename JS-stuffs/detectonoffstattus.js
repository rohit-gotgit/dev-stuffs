export function monitorNetworkStatus(callback) {
  window.addEventListener("online", () => callback(true));
  window.addEventListener("offline", () => callback(false));
}
