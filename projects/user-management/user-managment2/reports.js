import { useSyncExternalStore } from "react";
import { users } from "./users.js";

export function SortUserAtoB() {
    const userTarget = [...users].sort((a , b) => a.age - b.age);
    return userTarget;
}

export function SortUserBtoA() {
    const userTarget = [...users].sort((a , b) => b.age - a.age);
    return userTarget;
}

export function UserNameActive() {
    const userTarget = users.filter(user => user.isActive === true);
    return userTarget;
}

export function CountUsers() {
    return users.length;
}

export function AverageAgeOfUsers() {
    const userTarget = users.reduce((total, { age }) => total + age, 0);
    const CountUser = users.length;
    const Average = userTarget / CountUser;
    return Average;
}

export function CountActiveUserAndNotActiveUser() {
    const ActiveUser = users.filter(user => user.isActive === true);

    const NotActiveUser = users.filter(user => user.isActive === false);
    return `Count Of NotActive User = ${NotActiveUser.length} And Count Of Active User = ${ActiveUser.length}`;
}

export function OldestAndYoungest() {
    const ages = users.map(({ age }) => age);
    const Maxage = Math.max(...ages);
    const Minage = Math.min(...ages);
    return `Maximum of the age = ${Maxage} And Minimum of the age = ${Minage}`;
}