function autocomplete(list, input) {
  input = input.toLowerCase();

  return list.filter(item =>
    item.toLowerCase().startsWith(input)
  );
}
