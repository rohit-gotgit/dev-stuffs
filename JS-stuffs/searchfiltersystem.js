function searchUsers(users, query) {
  query = query.toLowerCase();

  return users.filter(user =>
    user.name.toLowerCase().includes(query)
  );
}
