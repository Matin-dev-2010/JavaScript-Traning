import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  searchUsers,
  getActiveAdmins
} from "./userService.js";

console.log("Initial users:", getAllUsers());
console.log("User ID 2:", getUserById(2));
console.log("Search 'sa':", searchUsers("sa"));
console.log("Active admins:", getActiveAdmins());

const created = createUser("Neda", 21, "user");
console.log("Created:", created);
console.log("Updated:", updateUser(created.id, { age: 22, isActive: false }));
console.log("Deleted:", deleteUser(created.id));
console.log("Final users:", getAllUsers());
