export function canAccess(role, action) {
  const permissions = {
    admin: ["view", "edit", "delete"],
    editor: ["view", "edit"],
    viewer: ["view"]
  };

  if (!permissions[role]) return false;

  return permissions[role].includes(action);
}
