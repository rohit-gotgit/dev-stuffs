function setupEmailAvailability(inputEl, statusEl) {
  let timer;

  inputEl.addEventListener("input", () => {
    clearTimeout(timer);
    statusEl.textContent = "Checking...";

    timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/check-email?email=${inputEl.value}`);
        const data = await res.json();

        statusEl.textContent = data.available
          ? "Email available "
          : "Email already taken ";
      } catch {
        statusEl.textContent = "Error checking email";
      }
    }, 500);
  });
}
