function setupImagePreview(inputEl, previewEl) {
  inputEl.addEventListener("change", () => {
    const file = inputEl.files[0];

    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      previewEl.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}
