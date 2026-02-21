function setupMultiStepForm(steps, nextBtn, prevBtn) {
  let current = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === steps.length - 1;
  }

  nextBtn.addEventListener("click", () => {
    if (current < steps.length - 1) {
      current++;
      showStep(current);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showStep(current);
    }
  });

  showStep(current);
}
