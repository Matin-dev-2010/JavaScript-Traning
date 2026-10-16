# درس ۱۴ — متد reduce

## ۱. reduce چه می‌کند؟
`reduce` مجموعه‌ای را به یک نتیجه کاهش می‌دهد: عدد، رشته، شیء، آرایه یا هر مقدار دیگری. دو ورودی مهم دارد: callback و مقدار اولیهٔ accumulator.

## ۲. جمع عددها
```js
const prices = [100, 250, 50];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 400
```
در هر مرحله، مقدار بازگشتی callback به accumulator بعدی تبدیل می‌شود. مقدار اولیهٔ `0` باعث می‌شود آرایهٔ خالی نیز به‌درستی جمع صفر بدهد.

## ۳. شمارش کاربران بر اساس نقش
```js
const roleCounts = users.reduce((counts, user) => {
  counts[user.role] = (counts[user.role] ?? 0) + 1;
  return counts;
}, {});
```
accumulator اینجا یک شیء است. برای هر کاربر، شمارندهٔ نقش او یک واحد زیاد می‌شود.

## ۴. ساختن دیکشنری از شناسه
```js
const usersById = users.reduce((result, user) => {
  result[user.id] = user;
  return result;
}, {});
```
این ساختار دسترسی بر اساس شناسه را ساده می‌کند؛ در مجموعه‌های کوچک، `find` خواناتر است، اما برای دسترسی‌های تکراری map/dictionary می‌تواند مفید باشد.

## ۵. reduce در برابر filter و map
- `map`: تبدیل هر عضو به عضو متناظر.
- `filter`: انتخاب اعضای واجد شرط.
- `reduce`: ترکیب اعضا در یک نتیجهٔ واحد یا ساختاری سفارشی.
از `reduce` صرفاً برای کوتاه کردن کد استفاده نکن؛ اگر `filter` و `map` خواناترند، همان‌ها را انتخاب کن.

## ۶. خطاهای رایج
- فراموش کردن `return` از callback.
- ندادن مقدار اولیه در حالتی که آرایه ممکن است خالی باشد.
- تغییر accumulator با منطق مبهم.
- تلاش برای نوشتن یک reduce پیچیده به جای چند مرحلهٔ ساده و خوانا.

## تمرین
از کاربران تعداد هر نقش را بشمار؛ مجموع سن کاربران را محاسبه کن؛ سپس میانگین سن را با کنترل حالت آرایهٔ خالی به دست آور.

## پاسخ نمونه
```js
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = users.length ? totalAge / users.length : 0;
```

## مرور
می‌توانم accumulator را توضیح دهم و با reduce جمع، شمارش یا تبدیل آرایه به شیء را انجام دهم.
