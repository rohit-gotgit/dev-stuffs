function startCountdown(duration, displayEl) {
  let time = duration;

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    displayEl.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (time <= 0) {
      clearInterval(interval);
      displayEl.textContent = "Time's up!";
    }

    time--;
  }, 1000);
}
