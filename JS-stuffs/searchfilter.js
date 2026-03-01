export function searchItems(items, keyword) {
  if (!Array.isArray(items) || !keyword) return [];

  return items.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}
