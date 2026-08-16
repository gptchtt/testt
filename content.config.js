// ============================================================
// ده الملف الوحيد اللي هتغيره لكل عميل جديد. متلمسش أي كود تاني.
// This is the ONLY file you need to edit for each new client.
// ============================================================

const content = {
  // كلمة السر اللي هي هتدخلها عشان تفتح الموقع
  password: "test",

  // اسمها / العنوان اللي هيظهر في صفحة القفل
  recipientName: "ليلى",

  // العنوان الرئيسي بعد فتح الموقع
  heroTitle: "لكل لحظة كنتِ فيها السبب",
  heroSubtitle: "هدية صغيرة، لأكبر حاجة في حياتي",

  // الصور - حط أسامي الصور اللي رفعتها في public/images
  // كل صورة ليها caption اختياري
  photos: [
    { src: "/images/360_F_536903680_10hquiCjziB2Kux3bVSD1EnC2rdNzSg2.jpg", caption: "أول يوم اتقابلنا فيه" },
    { src: "/images/pexels-jasmine-carter-888899.jpg", caption: "الرحلة اللي مش هتتنسى" },
    { src: "/images/360_F_354435799_7pxwyGmLhDL4zixqaFDjxm6Q2PnZizYf.jpg", caption: "ضحكتك المفضلة عندي" },
    { src: "/images/photo-4.jpg", caption: "" }
  ],

  // الأغنية - ممكن تحط ملف mp3 في public/audio وتكتب اسمه هنا
  song: {
    src: "/audio/song.mp3",
    title: "الأغنية اللي بتفكرني بيكي",
    artist: "اسم المغني"
  },

  // رسايل الحب - كل رسالة هتتكتب بشكل تدريجي (typewriter)
  loveLetters: [
    "من أول ما شفتك عرفت إن حياتي هتتغير.",
    "كل يوم بحبك أكتر من اللي قبله، وكل يوم بتفاجئيني بحاجة جديدة أحبها فيكي.",
    "الموقع ده صغير قدام اللي في قلبي، بس عايز يبقى تذكار لكل حاجة حلوة بينا."
  ],

  // توقيع في آخر الموقع
  signature: "بحبك، أنا"
};

export default content;
