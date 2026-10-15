# درس 10: مدیریت خطا

`throw new Error()` خطا می‌سازد و `try/catch` امکان مدیریت آن را می‌دهد.

```js
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
try { divide(10, 0); } catch (error) { console.error(error.message); }
```
تمرین: ورودی نامعتبر در ایجاد کاربر را رد کن.

## مرور
- [ ] مفهوم را بدون جزوه توضیح می‌دهم.
- [ ] مثال را خودم می‌نویسم.
- [ ] تمرین را با ورودی‌های مختلف آزمایش می‌کنم.
