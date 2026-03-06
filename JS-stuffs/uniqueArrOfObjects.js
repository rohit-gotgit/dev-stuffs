export function uniqueByKey(array, key) {
  const seen = new Set();

  return array.filter(item => {
    if (seen.has(item[key])) {
      return false;
    }

    seen.add(item[key]);
    return true;
  });
}
