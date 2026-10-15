# درس 4: متدهای آرایه

`map()` تبدیل، `filter()` فیلتر، `find()` اولین نتیجه، `some()` وجود حداقل یک نتیجه و `includes()` بررسی وجود مقدار را انجام می‌دهد.

```js
const users = [{name:"Ali", age:17}, {name:"Sara", age:22}];
const adults = users.filter(user => user.age >= 18);
const names = users.map(user => user.name);
```
تمرین: نام ادمین‌ها را با filter و map استخراج کن.

## مرور
- [ ] مفهوم را بدون جزوه توضیح می‌دهم.
- [ ] مثال را خودم می‌نویسم.
- [ ] تمرین را با ورودی‌های مختلف آزمایش می‌کنم.
