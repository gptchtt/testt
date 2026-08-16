# موقع الهدية 💌

قالب موقع هدية رومانسي — باسورد للدخول، معرض صور، أغنية، ورسايل حب بتتكتب بشكل تدريجي.

## تشغيله أول مرة

```bash
npm install
npm run dev
```

افتح http://localhost:3000 — هيوديك على صفحة القفل، والباسورد الافتراضي هو `ourstory` (غيّره من content.config.js).

## عشان تعمل نسخة لعميل جديد

عدّل ملف **content.config.js** بس. مش محتاج تلمس أي كود تاني:

- `password` — كلمة السر بتاعة الموقع
- `recipientName` — اسم الشخص اللي هيستلم الهدية
- `heroTitle` / `heroSubtitle` — العنوان الرئيسي
- `photos` — حط صورك في `public/images` واكتب أسمائها هنا
- `song` — حط الأغنية في `public/audio` واكتب اسم الملف
- `loveLetters` — كل سطر في المصفوفة ده هيتكتب لوحده بشكل typewriter
- `signature` — التوقيع في الآخر

## النشر على Vercel (مجاني)

1. ارفع المشروع كـ repo على GitHub
2. روح على vercel.com → New Project → اختار الـ repo
3. اضغط Deploy، وهيديك رابط زي `yourproject.vercel.app`

## لكل عميل جديد

1. اعمل `fork` أو انسخ المشروع في مجلد جديد
2. عدّل `content.config.js` بس
3. غيّر الصور في `public/images` والأغنية في `public/audio`
4. ارفعه كـ repo جديد وانشره على Vercel

الصور اللي في `public/images` دلوقتي هي صور تجريبية بس — استبدلها بصور العميل الحقيقية.
