import { users } from "./users.js";

const allowedRoles = ["admin", "user"];
const editableFields = ["name", "age", "role", "isActive"];

export function getAllUsers() {
  return users.map(user => ({ ...user }));
}

export function getUserById(id) {
  return users.find(user => user.id === id) ?? null;
}

function validateUserInput({ name, age, role, isActive }, partial = false) {
  if (!partial || name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") throw new Error("Name must be a non-empty string.");
  }
  if (!partial || age !== undefined) {
    if (!Number.isInteger(age) || age <= 0) throw new Error("Age must be a positive integer.");
  }
  if (!partial || role !== undefined) {
    if (!allowedRoles.includes(role)) throw new Error('Role must be "admin" or "user".');
  }
  if (isActive !== undefined && typeof isActive !== "boolean") throw new Error("isActive must be a boolean.");
}

export function createUser(name, age, role = "user") {
  validateUserInput({ name, age, role });
  const nextId = users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
  const newUser = { id: nextId, name: name.trim(), age, role, isActive: true };
  users.push(newUser);
  return { ...newUser };
}

export function updateUser(id, updates) {
  const user = users.find(item => item.id === id);
  if (!user) return null;
  if (!updates || typeof updates !== "object" || Array.isArray(updates)) throw new Error("Updates must be an object.");
  const keys = Object.keys(updates);
  if (keys.length === 0) throw new Error("Provide at least one field to update.");
  const invalidFields = keys.filter(key => !editableFields.includes(key));
  if (invalidFields.length) throw new Error(`Fields cannot be updated: ${invalidFields.join(", ")}`);
  const candidate = { ...user, ...updates };
  validateUserInput(candidate, true);
  if (updates.name !== undefined) candidate.name = updates.name.trim();
  Object.assign(user, candidate);
  return { ...user };
}

export function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

export function searchUsers(searchTerm) {
  if (typeof searchTerm !== "string") throw new Error("Search term must be a string.");
  const query = searchTerm.trim().toLowerCase();
  if (!query) return [];
  return users.filter(user => user.name.toLowerCase().includes(query)).map(user => ({ ...user }));
}

export function getActiveAdmins() {
  return users.filter(user => user.isActive && user.role === "admin")
    .sort((a, b) => b.age - a.age)
    .map(user => ({ ...user }));
}
