# درس 18: CRUD و ساختار پروژه

CRUD یعنی Create, Read, Update, Delete. منطق داده را در ماژول service و داده اولیه را در فایل جدا قرار بده.

```js
const getAllUsers = () => [...users];
const getUserById = id => users.find(u => u.id === id) ?? null;
```
تمرین: createUser, getAllUsers, getUserById, updateUser و deleteUser را پیاده کن.

## مرور
- [ ] مفهوم را بدون جزوه توضیح می‌دهم.
- [ ] مثال را خودم می‌نویسم.
- [ ] تمرین را با ورودی‌های مختلف آزمایش می‌کنم.
