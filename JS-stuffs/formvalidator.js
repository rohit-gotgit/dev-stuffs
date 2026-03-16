function validateForm(data) {
  const errors = {};

  if (!data.name) {
    errors.name = "Name required";
  }

  if (!data.email || !data.email.includes("@")) {
    errors.email = "Invalid email";
  }

  if (!data.password || data.password.length < 6) {
    errors.password = "Password too short";
  }

  return errors;
}
