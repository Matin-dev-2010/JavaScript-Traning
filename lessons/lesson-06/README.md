# درس ۶ — توابع و محدودهٔ متغیرها

## ۱. چرا تابع؟
تابع یک کار مشخص را در قالب واحدی قابل استفادهٔ مجدد بسته‌بندی می‌کند. در پروژه، عملیات ساخت، جست‌وجو و حذف کاربر بهتر است در توابع مستقل باشند.

## ۲. تعریف تابع
```js
function greet(name) {
  return `سلام ${name}`;
}
const message = greet("Ali");
console.log(message);
```
پارامتر `name` ورودی تابع است؛ آرگومان `"Ali"` مقداری است که هنگام فراخوانی می‌فرستیم. `return` نتیجه را به فراخواننده برمی‌گرداند و اجرای همان تابع را پایان می‌دهد.

## ۳. تفاوت return و console.log
```js
function add(a, b) {
  return a + b;
}
const result = add(2, 3);
console.log(result);
```
`console.log` فقط برای نمایش در کنسول است. تابعی که چیزی برنگرداند، معمولاً `undefined` برمی‌گرداند. برای ساخت منطق قابل تست، نتیجه را `return` کن.

## ۴. پارامتر پیش‌فرض
```js
function createGreeting(name = "کاربر") {
  return `سلام ${name}`;
}
```
اگر آرگومان ارسال نشود یا `undefined` باشد، مقدار پیش‌فرض استفاده می‌شود.

## ۵. Function expression و arrow function
```js
const multiply = function (a, b) {
  return a * b;
};
const square = n => n * n;
const add = (a, b) => a + b;
```
Arrow function برای callbackها رایج است. تفاوت‌های رفتاری آن با تابع معمولی، به‌ویژه در `this`، در مباحث پیشرفته مهم می‌شود.

## ۶. Scope
متغیر محلی تابع فقط در همان محدوده در دسترس است:
```js
const appName = "Users";
function showName() {
  const localMessage = "درون تابع";
  console.log(appName, localMessage);
}
showName();
// بیرون تابع localMessage در دسترس نیست
```
متغیرهای سراسری را بی‌دلیل زیاد نکن؛ وابستگی پنهان کد را سخت‌تر می‌کند.

## ۷. Callback
تابعی که به تابع دیگری به‌عنوان آرگومان می‌دهیم callback نام دارد:
```js
function processUser(name, callback) {
  return callback(name);
}
const result = processUser("Sara", name => name.toUpperCase());
```
متدهایی مثل `map` و `filter` نیز callback دریافت می‌کنند.

## اشتباهات رایج
- فراموش کردن `return`.
- نوشتن `greet` به جای `greet()` وقتی قصد فراخوانی تابع را داریم.
- استفاده از متغیر محلی بیرون از محدوده‌اش.
- مخلوط کردن منطق تابع با نمایش خروجی در کنسول.

## تمرین
تابع `calculateTotal(price, quantity)` بساز که مبلغ را برگرداند؛ تابعی با پارامتر پیش‌فرض برای خوشامدگویی بنویس؛ سپس یک callback به تابع پردازش نام بده.

## پاسخ نمونه
```js
function calculateTotal(price, quantity) {
  return price * quantity;
}
const greet = (name = "کاربر") => `سلام ${name}`;
console.log(calculateTotal(100, 3), greet());
```

## مرور
می‌توانم ورودی، خروجی، scope و callback را توضیح دهم و تابعی بنویسم که مستقل از کنسول قابل استفاده باشد.
