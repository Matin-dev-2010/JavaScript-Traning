# درس ۵ — اشیاء، destructuring و spread

## ۱. شیء چیست؟
شیء داده‌های مرتبط را در قالب کلید و مقدار نگه می‌دارد:
```js
const user = {
  id: 1,
  name: "Sara",
  age: 22,
  role: "user",
  isActive: true
};
console.log(user.name);
console.log(user["role"]);
```
از نقطه برای کلید ثابت و از براکت وقتی کلید در متغیر است استفاده کن.

## ۲. افزودن و ویرایش ویژگی
```js
user.age = 23;
user.city = "Mashhad";
delete user.city;
```
این عملیات شیء را تغییر می‌دهند. در برنامه‌های بزرگ باید روشن باشد کدام تابع اجازهٔ تغییر داده را دارد.

## ۳. Destructuring
```js
const { name, age } = user;
console.log(name, age);
const { name: displayName } = user;
```
می‌توان مقدار ویژگی‌ها را در متغیرهای جدا گرفت و نام متغیر را با `name: displayName` تغییر داد. برای آرایه:
```js
const coordinates = [35, 59];
const [latitude, longitude] = coordinates;
```

## ۴. مقدار پیش‌فرض
```js
const { role = "user" } = {};
console.log(role); // user
```
مقدار پیش‌فرض destructuring زمانی استفاده می‌شود که ویژگی `undefined` باشد، نه زمانی که `null` باشد.

## ۵. Spread
```js
const original = { name: "Ali", age: 20 };
const updated = { ...original, age: 21 };
const names = ["Ali", "Sara"];
const allNames = [...names, "Reza"];
```
در شیء، ویژگی‌های قبلی کپی می‌شوند و ویژگی‌های بعدی هم‌نام را بازنویسی می‌کنند. Spread کپی سطحی (shallow copy) می‌سازد؛ اشیای تو در تو ممکن است همچنان مشترک باشند.

## ۶. حذف اطلاعات حساس از خروجی
```js
const account = { id: 1, name: "Ali", password: "secret" };
const { password, ...publicAccount } = account;
console.log(publicAccount); // بدون password
```
این الگو برای ساخت خروجی عمومی مفید است، اما به‌تنهایی امنیت کامل ایجاد نمی‌کند؛ بهتر است فقط فیلدهای مجاز را انتخاب کنیم.

## اشتباهات رایج
- تصور اینکه `const user` اجازهٔ تغییر ویژگی‌ها را نمی‌دهد.
- فراموش کردن اینکه spread کپی عمیق نیست.
- انتظار داشتن مقدار پیش‌فرض برای `null`.
- ارسال فیلدهای داخلی مثل رمز عبور به خروجی API.

## تمرین
یک شیء کاربر بساز، نام و نقش را با destructuring استخراج کن، با spread سن را تغییر بده و یک شیء عمومی بساز که فیلد `password` را نداشته باشد.

## پاسخ نمونه
```js
const user = { id: 1, name: "Mina", age: 20, role: "user", password: "x" };
const { name, role } = user;
const olderUser = { ...user, age: 21 };
const { password, ...publicUser } = user;
```

## مرور
می‌توانم داده‌های شیء را بخوانم، destructure کنم و بدون تغییر مستقیم نسخه‌ای جدید بسازم.
