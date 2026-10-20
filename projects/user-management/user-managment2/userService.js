import { users } from "./users.js";

const allowedRoles = ["admin", "user"];

export function getAllUsers() {
    return users.map(users => ({ ...users }));
}

export function getUserById(id) {
    return users.find(users => users.id === id) ?? null;
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

export function createUser(name, age, role) {
    validateUserInput({ name, age, role });
    const nextid = users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
    const newUser = { id: nextid, name: name.trim(), age, role, isActive: true};
    users.push(newUser);
    return { ...newUser };
}

