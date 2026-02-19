function setupDropdown(toggleBtn, menuEl) {
  toggleBtn.addEventListener("click", () => {
    menuEl.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !menuEl.contains(e.target)) {
      menuEl.classList.remove("active");
    }
  });
}
