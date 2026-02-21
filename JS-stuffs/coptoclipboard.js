function copyToClipboard(text, feedbackEl) {
  navigator.clipboard.writeText(text)
    .then(() => {
      feedbackEl.textContent = "Copied!";
      setTimeout(() => feedbackEl.textContent = "", 2000);
    })
    .catch(() => {
      feedbackEl.textContent = "Failed!";
    });
}
