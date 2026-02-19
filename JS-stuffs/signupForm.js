function handleSignupSubmit(e) {
  e.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirm = document.querySelector("#confirmPassword").value;

  let valid = true;

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelector("#emailError").textContent = "Invalid email";
    valid = false;
  }

  if (password.length < 8) {
    document.querySelector("#passwordError").textContent = "Min 8 characters";
    valid = false;
  }

  if (password !== confirm) {
    document.querySelector("#confirmError").textContent = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    console.log("Form submitted");
  }
}
