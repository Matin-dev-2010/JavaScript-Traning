# درس ۱۲ — Destructuring پیشرفته، rest و spread

## ۱. استخراج ویژگی با تغییر نام و مقدار پیش‌فرض
```js
const user = { id: 1, name: "Sara" };
const { name: displayName, role = "user" } = user;
```
`displayName` مقدار ویژگی `name` را می‌گیرد. مقدار پیش‌فرض `role` فقط زمانی اعمال می‌شود که مقدار ویژگی `undefined` باشد.

## ۲. Destructuring تو در تو
```js
const account = {
  name: "Ali",
  address: { city: "Mashhad", country: "Iran" }
};
const { address: { city } } = account;
```
اگر `address` وجود نداشته باشد، این الگو می‌تواند خطا دهد. در ساختارهای اختیاری، ابتدا مسیر را بررسی کن یا از optional chaining استفاده کن.

## ۳. Rest در آرایه
```js
const [first, second, ...others] = [10, 20, 30, 40];
console.log(first, second, others); // 10, 20, [30, 40]
```
Rest باقی اعضا را در آرایه‌ای جمع می‌کند و باید در انتهای الگوی destructuring قرار بگیرد.

## ۴. Rest در شیء
```js
const { password, ...safeUser } = {
  id: 1, name: "Ali", password: "secret"
};
```
`safeUser` شامل بقیهٔ ویژگی‌هاست. این روش برای حذف فیلد شناخته‌شده مفید است، ولی برای خروجی امن API معمولاً انتخاب صریح فیلدهای مجاز مطمئن‌تر است.

## ۵. Rest پارامتر تابع
```js
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3));
```
Rest پارامترها را در آرایه جمع می‌کند. برخلاف `arguments`، یک آرایهٔ واقعی در اختیار داریم.

## ۶. فرق rest و spread
- **Spread** مقدارهای یک آرایه/شیء قابل گسترش را باز می‌کند: `[...names]`.
- **Rest** چند مقدار باقی‌مانده را جمع می‌کند: `function f(...args)`.
ظاهرشان مشابه است؛ نقش آن‌ها به محل استفاده بستگی دارد.

## تمرین
یک کاربر دارای `id`, `name`, `password`, `role` بساز. نام را با نام مستعار استخراج کن، رمز را از نسخهٔ عمومی جدا کن، و تابعی بساز که هر تعداد عدد را جمع کند.

## مرور
می‌توانم destructuring تو در تو، مقدار پیش‌فرض، rest و spread را تشخیص دهم و تفاوت نقش آن‌ها را توضیح دهم.
