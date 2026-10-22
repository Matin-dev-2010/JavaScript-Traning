import { useSyncExternalStore } from "react";
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

export function updateUser(id, updates) {
  const user = users.find(user => user.id === id);

  if (!user) {
    return null;
  }

  const allowedFields = ["name", "age", "role", "isActive"];
  const entries = Object.entries(updates);

  for (const [key, value] of entries) {
    if (!allowedFields.includes(key)) {
      throw new Error(`Invalid field: ${key}`);
    }

    if (key === "name" &&
        (typeof value !== "string" || value.trim() === "")) {
      throw new Error("Name is invalid.");
    }

    if (key === "age" &&
        (!Number.isInteger(value) || value <= 0)) {
      throw new Error("Age is invalid.");
    }

    if (key === "role" &&
        !["admin", "user"].includes(value)) {
      throw new Error("Role is invalid.");
    }

    if (key === "isActive" && typeof value !== "boolean") {
      throw new Error("isActive must be a boolean.");
    }
  }

  Object.assign(user, {
    ...updates,
    name: updates.name?.trim() ?? user.name
  });

  return user;
}

export function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
}

export function setUserActive(id, isActive) {
  if (typeof isActive !== "boolean") {
    throw new Error("isActive must be true or false.");
  }

  const user = users.find(user => user.id === id);

  if (!user) {
    return null;
  }

  user.isActive = isActive;
  return user;
}

export function searchUser(searchTerm) {
  const userFind = users.find(user => user.name.toLowerCase() === searchTerm.toLowerCase());
  return userFind;
}

export function getActiveUser() {
  const ActiveUsers = users.filter(user => user.isActive === true);
}

export function getAdmin() {
  const AdminUsers = users.filter(user => user.role === "admin");
}

export function getUserByRole(role) {
  const UserByRole = users.filter(user => user.role === role);
}

export function getUserOlderThan(age) {
  const OlderUser = users.filter(user => user.age > age);
}

export function getUserByName(name) {
  const UserBuName = users.find(user => user.name === name);
}

export function hasInactiveUsers() {
  const Inactive = users.filter(user => !user.isActive);
  if (Inactive.length > 0) {
    return "Find a Inactive User.";
  }
}

export function hasUserNamed(name) {
  const hasNamed = users.some(user => user.name);
}

