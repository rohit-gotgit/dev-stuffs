function sortItems(items, type) {
  const arr = [...items];

  if (type === "price-asc") {
    arr.sort((a, b) => a.price - b.price);
  } else if (type === "price-desc") {
    arr.sort((a, b) => b.price - a.price);
  } else if (type === "name") {
    arr.sort((a, b) => a.name.localeCompare(b.name));
  }

  return arr;
}
