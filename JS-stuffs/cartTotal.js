export function calculateCartTotal(items) {
  if (!Array.isArray(items)) return 0;

  let subtotal = items.reduce((sum, item) => {
    if (
      typeof item.price !== "number" ||
      typeof item.quantity !== "number"
    ) {
      return sum;
    }
    return sum + item.price * item.quantity;
  }, 0);

  // Apply discount
  if (subtotal > 2000) {
    subtotal *= 0.9;
  }

  // Add 18% GST
  const total = subtotal * 1.18;

  return Number(total.toFixed(2));
}
