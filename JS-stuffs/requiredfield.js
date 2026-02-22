function validateRequiredFields(formEl) {
  let valid = true;

  formEl.querySelectorAll("[required]").forEach(input => {
    if (!input.value.trim()) {
      input.classList.add("error");
      valid = false;
    } else {
      input.classList.remove("error");
    }
  });

  return valid;
}
