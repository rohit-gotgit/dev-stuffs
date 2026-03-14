function paginate(data, page, limit) {
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    page,
    limit,
    total: data.length,
    data: data.slice(start, end)
  };
}
