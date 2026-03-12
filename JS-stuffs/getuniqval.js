export function uniqueValues(arr, key) {
  return [...new Set(arr.map(item => item[key]))];
}
