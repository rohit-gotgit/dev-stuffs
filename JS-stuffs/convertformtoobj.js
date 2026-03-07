export function formToObject(form) {
  const formData = new FormData(form);
  const result = {};

  for (let [key, value] of formData.entries()) {
    result[key] = value;
  }

  return result;
}
