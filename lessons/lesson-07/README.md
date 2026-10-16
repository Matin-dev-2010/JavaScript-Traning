# درس ۷ — تبدیل نوع داده

## چرا تبدیل نوع مهم است؟
ورودی فرم‌ها، فایل‌ها و درخواست‌های HTTP اغلب به شکل رشته دریافت می‌شوند. قبل از محاسبه یا اعتبارسنجی باید نوع داده را آگاهانه بررسی و تبدیل کنیم.

## ۱. Number و String
```js
console.log(Number("42"));   // 42
console.log(Number("abc"));  // NaN
console.log(String(25));     // "25"
console.log(Number(""));     // 0
```
`Number` رشتهٔ قابل تبدیل را به عدد تبدیل می‌کند. رشتهٔ خالی به صفر تبدیل می‌شود؛ بنابراین اگر خالی بودن ورودی مهم است، قبل از تبدیل آن را بررسی کن.

## ۲. parseInt و parseFloat
```js
console.log(parseInt("42px", 10)); // 42
console.log(parseFloat("12.5kg")); // 12.5
```
این توابع از ابتدای رشته عدد را می‌خوانند و ممکن است بخش بعدی را نادیده بگیرند. برای اعتبارسنجی سخت‌گیرانه، صرفاً به آن‌ها تکیه نکن.

## ۳. NaN
`NaN` یعنی نتیجهٔ عددی معتبر تولید نشده است:
```js
const age = Number("بیست");
console.log(Number.isNaN(age)); // true
```
برای بررسی بهتر از `Number.isNaN` استفاده کن. نکته: `NaN === NaN` برابر false است.

## ۴. Boolean و truthiness
```js
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(0));       // false
console.log(Boolean("0"));     // true
```
رشتهٔ `"0"` خالی نیست، پس truthy است. مقادیر falsy شامل `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` و `NaN` هستند.

## ۵. اعتبارسنجی عدد
```js
function parseAge(value) {
  if (typeof value === "string" && value.trim() === "") {
    throw new Error("سن نباید خالی باشد");
  }
  const age = Number(value);
  if (!Number.isInteger(age) || age <= 0) {
    throw new Error("سن باید عدد صحیح مثبت باشد");
  }
  return age;
}
```
تبدیل و اعتبارسنجی دو مرحلهٔ جدا هستند: اول تبدیل، بعد بررسی قواعد دامنه.

## اشتباهات رایج
- تصور اینکه `Number("abc")` خطا پرتاب می‌کند؛ خروجی آن `NaN` است.
- تبدیل ورودی خالی به صفر و پذیرفتن ناخواستهٔ آن.
- استفاده از `parseInt` بدون بررسی اینکه کل رشته معتبر است.
- اشتباه گرفتن رشتهٔ عددی با عدد واقعی.

## تمرین
تابعی بنویس که قیمت رشته‌ای را دریافت کند، خالی یا نامعتبر بودن را رد کند، فقط عدد مثبت بپذیرد و عدد را برگرداند.

## پاسخ نمونه
```js
function parsePrice(value) {
  if (String(value).trim() === "") throw new Error("قیمت خالی است");
  const price = Number(value);
  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("قیمت نامعتبر است");
  }
  return price;
}
```

## مرور
می‌توانم ورودی رشته‌ای را تبدیل کنم و تفاوت تبدیل ساده با اعتبارسنجی واقعی را توضیح دهم.
