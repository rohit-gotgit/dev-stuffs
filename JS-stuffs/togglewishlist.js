export function toggleWishlist(wishlist, productId) {
  if (!Array.isArray(wishlist)) return [];

  if (wishlist.includes(productId)) {
    return wishlist.filter(id => id !== productId);
  }

  return [...wishlist, productId];
}
