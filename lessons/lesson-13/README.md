# درس ۱۳ — الگوهای پیشرفته و آغاز پروژهٔ User Management

## هدف
از این درس، مفاهیم JavaScript را هم‌زمان در پروژه‌ای واحد به کار می‌بریم. پروژه در این مرحله یک برنامهٔ محلی با دادهٔ حافظه‌ای است؛ هنوز API واقعی، پایگاه داده یا ورود کاربران ندارد.

## ۱. ساختار داده
```js
const users = [
  { id: 1, name: "Ali", age: 20, role: "admin", isActive: true },
  { id: 2, name: "Sara", age: 22, role: "user", isActive: true },
  { id: 3, name: "Reza", age: 17, role: "user", isActive: false },
  { id: 4, name: "Mohammad", age: 25, role: "admin", isActive: true }
];
```
هر کاربر یک شیء و کل مجموعه یک آرایه است. شناسه برای شناسایی پایدار هر رکورد استفاده می‌شود؛ نام برای شناسه مناسب نیست، چون تکراری یا قابل تغییر است.

## ۲. کپی و تبدیل
```js
const userNames = users.map(user => user.name);
const activeUsers = users.filter(user => user.isActive);
const firstAdmin = users.find(user => user.role === "admin") ?? null;
```
این عملیات‌ها به‌ترتیب فهرست نام‌ها، کاربران فعال و اولین مدیر را می‌سازند. `?? null` قرارداد نتیجه را روشن می‌کند.

## ۳. چرا توابع کوچک؟
```js
function getActiveUsers() {
  return users.filter(user => user.isActive);
}
function getUserById(id) {
  return users.find(user => user.id === id) ?? null;
}
```
هر تابع یک مسئولیت دارد. تابع اول فهرست کاربران فعال را می‌دهد و دومی یک کاربر یا `null`. این قرارداد را در تمام پروژه ثابت نگه می‌داریم.

## ۴. زنجیرهٔ متدها
```js
const activeAdminNames = users
  .filter(user => user.isActive)
  .filter(user => user.role === "admin")
  .map(user => user.name);
```
ابتدا کاربران فعال انتخاب می‌شوند، سپس مدیران، و در آخر نام‌ها استخراج می‌شوند. می‌توان شرط‌ها را در یک filter هم ترکیب کرد؛ دو مرحله گاهی برای توضیح بهتر خواناتر است.

## ۵. الگوی جست‌وجو
```js
function searchUsers(searchTerm) {
  const normalized = searchTerm.trim().toLowerCase();
  return users.filter(user =>
    user.name.toLowerCase().includes(normalized)
  );
}
```
`trim` فاصله‌های ابتدا و انتها را حذف می‌کند؛ `toLowerCase` جست‌وجو را نسبت به بزرگی حروف انگلیسی بی‌تفاوت می‌کند؛ `includes` تطبیق جزئی انجام می‌دهد. در پروژهٔ واقعی باید ورودی را هم بررسی کنیم.

## ۶. تصمیم‌های طراحی
- شناسه‌ها باید یکتا باشند.
- توابع جست‌وجو باید رفتار نبودن نتیجه را مشخص کنند.
- منطق پردازش داده را از چاپ خروجی جدا کنیم.
- دادهٔ حافظه‌ای با پایان فرایند از بین می‌رود؛ بعداً پایگاه داده اضافه می‌شود.

## تمرین
تابع‌های `getActiveUsers`, `getUserById` و `searchUsers` را بنویس. آزمایش کن که جست‌وجوی «ali» بتواند «Ali» را پیدا کند و شناسهٔ ناموجود `null` برگرداند.

## مرور
پروژه از همین‌جا شروع می‌شود و درس‌های بعد قابلیت‌های آن را مرحله‌به‌مرحله کامل می‌کنند.
