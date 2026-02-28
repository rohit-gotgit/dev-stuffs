export function paginate(items, pageNumber, pageSize) {
  if (!Array.isArray(items) || pageNumber < 1 || pageSize < 1) {
    return [];
  }

  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;

  return items.slice(start, end);
}
