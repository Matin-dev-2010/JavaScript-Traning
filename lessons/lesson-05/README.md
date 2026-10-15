# درس 5: آبجکت‌ها، spread و destructuring

آبجکت داده را به شکل کلید/مقدار نگه می‌دارد. Destructuring مقادیر را جدا می‌کند و spread با `...` ساختار را گسترش می‌دهد.

```js
const user = {name:"Ali", age:20, role:"user"};
const {name, age} = user;
const admin = {...user, role:"admin"};
const {password, ...safeUser} = {...user, password:"secret"};
```
نکته: spread کپی سطحی می‌سازد. تمرین: فیلد حساس را از نسخه امن حذف کن.

## مرور
- [ ] مفهوم را بدون جزوه توضیح می‌دهم.
- [ ] مثال را خودم می‌نویسم.
- [ ] تمرین را با ورودی‌های مختلف آزمایش می‌کنم.
