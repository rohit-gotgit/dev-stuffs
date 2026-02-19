export function calculateCartTotal(prices) {
  if (!Array.isArray(prices)) return 0;

  let total = 0;

  for (let p of prices) {
    if (typeof p === "number" && p >= 0) {
      total += p;
    }
  }

  if (total >= 5000) total *= 0.8;
  else if (total >= 1000) total *= 0.9;

  return Math.round(total);
}
