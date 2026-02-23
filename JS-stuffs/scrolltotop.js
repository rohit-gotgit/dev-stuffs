function setupScrollToTop(btnEl) {
  window.addEventListener("scroll", () => {
    btnEl.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btnEl.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
