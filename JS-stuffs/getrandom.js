export function getRandomItem(arr) {
  if (!arr.length) return null;

  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
