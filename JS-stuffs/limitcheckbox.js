function limitCheckboxSelection(checkboxes, limit) {
  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      const checked = [...checkboxes].filter(c => c.checked);

      if (checked.length > limit) {
        box.checked = false;
        alert(`You can select maximum ${limit}`);
      }
    });
  });
}
