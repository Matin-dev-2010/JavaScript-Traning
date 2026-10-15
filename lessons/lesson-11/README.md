# درس 11: ماژول‌ها

با `export` و `import` کد را بین فایل‌ها تقسیم کن. برای ES Modules در Node.js، در package.json مقدار `"type":"module"` قرار بده.

```js
// math.js
export const add = (a,b) => a+b;
// app.js
import { add } from "./math.js";
```
تمرین: users.js و userService.js را به پروژه متصل کن.

## مرور
- [ ] مفهوم را بدون جزوه توضیح می‌دهم.
- [ ] مثال را خودم می‌نویسم.
- [ ] تمرین را با ورودی‌های مختلف آزمایش می‌کنم.
