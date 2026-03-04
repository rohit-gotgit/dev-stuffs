export function detectOutsideClick(element, callback) {
  function handler(event) {
    if (!element.contains(event.target)) {
      callback();
    }
  }

  document.addEventListener("click", handler);

  return () => {
    document.removeEventListener("click", handler);
  };
}
