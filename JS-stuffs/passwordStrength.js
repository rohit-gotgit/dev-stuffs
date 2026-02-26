export function checkPasswordStrength(password) {
  if (typeof password !== "string") return "Weak";

  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  if (password.length < 6) {
    return "Weak";
  }

  if (password.length >= 8 && hasLetters && hasNumbers && hasSpecial) {
    return "Strong";
  }

  if (hasLetters && hasNumbers) {
    return "Medium";
  }

  return "Weak";
}
