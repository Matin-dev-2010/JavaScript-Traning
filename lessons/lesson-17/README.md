# درس 17: اعتبارسنجی و ایجاد کاربر

نام باید رشته غیرخالی، سن عدد صحیح مثبت و نقش یکی از نقش‌های مجاز باشد.

```js
if (typeof name !== "string" || !name.trim()) throw new Error("Name is required");
if (!Number.isInteger(age) || age <= 0) throw new Error("Invalid age");
if (!["admin", "user"].includes(role)) throw new Error("Invalid role");
```
تمرین: createUser را با اعتبارسنجی، شناسه و return بساز.

## مرور
- [ ] مفهوم را بدون جزوه توضیح می‌دهم.
- [ ] مثال را خودم می‌نویسم.
- [ ] تمرین را با ورودی‌های مختلف آزمایش می‌کنم.
