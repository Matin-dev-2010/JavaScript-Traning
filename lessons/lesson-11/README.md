# درس ۱۱ — ماژول‌ها

## چرا ماژول؟
وقتی برنامه بزرگ می‌شود، قرار دادن همه‌چیز در یک فایل نگهداری را دشوار می‌کند. ماژول‌ها کد را به فایل‌های مستقل تقسیم می‌کنند و مرز بین داده، منطق و اجرای برنامه را روشن می‌سازند.

## ۱. Named export
در فایل `math.js`:
```js
export function add(a, b) {
  return a + b;
}
export const taxRate = 0.1;
```
در فایل دیگر:
```js
import { add, taxRate } from "./math.js";
console.log(add(2, 3), taxRate);
```
نام واردشده باید با نام export مطابق باشد، مگر آنکه هنگام import نام مستعار بدهیم.

## ۲. Default export
```js
export default function greet(name) {
  return `سلام ${name}`;
}
```
وارد کردن:
```js
import greet from "./greet.js";
```
هر فایل می‌تواند یک default export داشته باشد؛ در یک فایل می‌توان چند named export هم داشت. انتخاب روش باید یکدست و خوانا باشد.

## ۳. تفکیک پروژه
نمونهٔ ساختار:
```text
user-management/
  app.js
  users.js
  userService.js
  package.json
```
- `users.js`: دادهٔ اولیه.
- `userService.js`: منطق کار با کاربران.
- `app.js`: اجرای نمونه‌ها و نمایش نتیجه.
این تفکیک باعث می‌شود منطق کسب‌وکار به کنسول یا رابط خاص وابسته نباشد.

## ۴. ES Modules در Node.js
برای استفاده از import/export در فایل‌های `.js`، پروژه می‌تواند در `package.json` شامل `"type": "module"` باشد. در import محلی Node.js معمولاً پسوند فایل را صریح بنویس:
```js
import { getAllUsers } from "./userService.js";
```

## ۵. وابستگی و چرخهٔ import
ماژول‌ها نباید بی‌دلیل به یکدیگر وابسته شوند. اگر دو فایل دائماً همدیگر را import کنند، چرخهٔ وابستگی ممکن است فهم و آزمایش کد را دشوار کند. منطق مشترک را در ماژول مناسب جدا کن.

## اشتباهات رایج
- فراموش کردن `./` در مسیر فایل محلی.
- اشتباه گرفتن default و named import.
- فراموش کردن پسوند فایل در Node.js.
- گذاشتن همهٔ منطق در فایل اجرا.

## تمرین
تابع `getAllUsers` را در `userService.js` export کن و در `app.js` وارد کن. یک تابع `getUserById` هم اضافه و خروجی آن را نمایش بده.

## مرور
می‌توانم کد را بین فایل‌ها تقسیم کنم و مسیر import/export را درست تنظیم کنم.
