import { getAllUsers, createUser, updateUser, searchUser, getAdmin, deleteUser } from "./userService.js";

const AllUser = getAllUsers();
const createUsers = createUser("Aysan", 15, "admin");
const updateUsers = updateUser(3, { name: "Matin"});
const updateUsers2 = updateUser(3, { isActive: true});
const JustAdmin = getAdmin();
const deleteUsers = deleteUser(1);
const update = updateUser(777, { name: "Nima"});

console.log(AllUser);
console.log(JustAdmin);
console.log(deleteUsers);
console.log(updateUsers);
console.log(updateUsers2);
console.log(update);
console.log(AllUser);