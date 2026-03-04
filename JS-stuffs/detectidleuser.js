export function setupIdleTimer(timeout, onIdle) {
  let timer;

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(onIdle, timeout);
  }

  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);
  window.addEventListener("click", resetTimer);

  resetTimer();

  return () => {
    clearTimeout(timer);
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keydown", resetTimer);
    window.removeEventListener("click", resetTimer);
  };
}
