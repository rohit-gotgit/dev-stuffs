function setupDynamicFields(containerEl, addBtn) {
  addBtn.addEventListener("click", () => {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
      <input type="text" name="skill[]" placeholder="Enter skill" />
      <button type="button" class="remove">X</button>
    `;

    wrapper.querySelector(".remove").addEventListener("click", () => {
      wrapper.remove();
    });

    containerEl.appendChild(wrapper);
  });
}
