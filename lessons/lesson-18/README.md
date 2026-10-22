# درس ۱۸ — CRUD و ساختار پروژه

## هدف درس
CRUD چهار عملیات پایهٔ مدیریت داده است:
- **Create**: ساخت رکورد جدید.
- **Read**: خواندن یک یا چند رکورد.
- **Update**: تغییر رکورد موجود.
- **Delete**: حذف رکورد.

در این درس عملیات‌ها را در ماژول service نگه می‌داریم، دادهٔ اولیه را جدا می‌کنیم و فایل اجرا را برای نمونه‌سازی استفاده می‌کنیم. پروژه همچنان حافظه‌ای است؛ با پایان فرایند تغییرات از بین می‌روند.

## ۱. ساختار پیشنهادی
```text
projects/user-management/
  package.json
  users.js
  userService.js
  app.js
```
- `users.js`: دادهٔ اولیهٔ کاربران.
- `userService.js`: منطق CRUD و اعتبارسنجی.
- `app.js`: فراخوانی توابع و نمایش نتیجه.
- `package.json`: تنظیمات پروژه و دستور اجرا.

## ۲. خواندن همهٔ کاربران
```js
const getAllUsers = () => [...users];
```
کپی آرایه کمک می‌کند مصرف‌کننده نتواند با `push` یا `sort` ترتیب آرایهٔ داخلی را مستقیم تغییر دهد. این فقط کپی سطحی است؛ اشیای داخل آرایه هنوز مشترک‌اند. برای جلوگیری از تغییر ویژگی‌های اشیاء باید طراحی دقیق‌تری داشته باشیم.

## ۳. خواندن کاربر با شناسه
```js
const getUserById = id => users.find(user => user.id === id) ?? null;
```
اگر شناسه پیدا نشود، `null` برمی‌گردد. قرارداد خروجی را در تمام برنامه ثابت نگه دار. اگر ورودی شناسه از HTTP بیاید، ممکن است رشته باشد و باید تبدیل و اعتبارسنجی شود.

## ۴. Update
```js
function updateUser(id, updates) {
  const user = users.find(user => user.id === id);
  if (!user) return null;

  if (updates.name !== undefined) {
    if (typeof updates.name !== "string" || !updates.name.trim()) {
      throw new Error("Name must be a non-empty string.");
    }
    user.name = updates.name.trim();
  }
  if (updates.age !== undefined) {
    if (!Number.isInteger(updates.age) || updates.age <= 0) {
      throw new Error("Age must be a positive integer.");
    }
    user.age = updates.age;
  }
  if (updates.role !== undefined) {
    if (!["admin", "user"].includes(updates.role)) {
      throw new Error("Invalid role.");
    }
    user.role = updates.role;
  }
  if (updates.isActive !== undefined) {
    if (typeof updates.isActive !== "boolean") {
      throw new Error("isActive must be boolean.");
    }
    user.isActive = updates.isActive;
  }
  return user;
}
```
فقط فیلدهای ارسال‌شده تغییر می‌کنند. بررسی با `!== undefined` اجازه می‌دهد مقدار `false` برای `isActive` معتبر باشد. در پروژهٔ واقعی بهتر است همهٔ تغییرات را ابتدا اعتبارسنجی کنیم و سپس یکجا اعمال کنیم تا در صورت خطا، بخشی از کاربر تغییر نکرده باقی نماند.

## ۵. Delete
```js
function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  const [deletedUser] = users.splice(index, 1);
  return deletedUser;
}
```
`findIndex` اندیس را پیدا می‌کند و اگر موردی نبود `-1` می‌دهد. `splice` آرایهٔ اصلی را تغییر می‌دهد. در این قرارداد، حذف موفق کاربر حذف‌شده را برمی‌گرداند و شناسهٔ ناموجود `null`.

## ۶. Create
از تابع `createUser` درس ۱۷ استفاده کن. شناسه باید یکتا باشد و ورودی‌ها قبل از اضافه شدن به آرایه اعتبارسنجی شوند.

## ۷. ماژول‌ها
در `users.js` داده را export کن:
```js
export const users = [
  { id: 1, name: "Ali", age: 20, role: "admin", isActive: true }
];
```
در `userService.js`:
```js
import { users } from "./users.js";
export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
```
تابع‌ها را در همان فایل تعریف کن و export کن. در `package.json` برای ES Modules مقدار `"type": "module"` و اسکریپت `"start": "node app.js"` قرار بده.

## ۸. تست سناریوها
۱. همهٔ کاربران را بخوان.
۲. شناسهٔ موجود و ناموجود را بخوان.
۳. کاربر معتبر ایجاد کن و بررسی کن شناسه‌اش یکتا باشد.
۴. نام و وضعیت فعال کاربر را تغییر بده.
۵. کاربر را حذف کن.
۶. دوباره خواندن همان شناسه را امتحان کن.
۷. ورودی‌های نامعتبر را آزمایش کن.

## ۹. محدودیت فعلی
این هنوز backend واقعی نیست: نه HTTP API داریم، نه دیتابیس، نه احراز هویت. هدف این مرحله یادگیری منطق CRUD و جداسازی فایل‌هاست. در درس‌های آینده همین منطق به Node.js/Express و سپس پایگاه داده متصل می‌شود.

## تمرین نهایی
پنج تابع `createUser`, `getAllUsers`, `getUserById`, `updateUser` و `deleteUser` را کامل کن. برای هرکدام سناریوی موفق و ناموفق بنویس و مطمئن شو فایل `app.js` فقط از سرویس استفاده می‌کند، نه اینکه مستقیماً آرایه را تغییر دهد.

## مرور
- می‌توانم CRUD را با مثال توضیح دهم.
- می‌توانم منطق را از دادهٔ اولیه و فایل اجرا جدا کنم.
- می‌دانم `find`, `findIndex`, `splice` و spread چه نقشی دارند.
- می‌دانم کپی سطحی است و دادهٔ حافظه‌ای پایدار نیست.
- می‌دانم پروژه هنوز API و دیتابیس ندارد.
