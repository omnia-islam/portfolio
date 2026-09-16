export const credentialCategories = [
  { id: "all", name: { en: "All Entries", ar: "كافة السجلات" } },
  { id: "credential", name: { en: "Digital Credentials", ar: "شهادات الاعتماد الرقمية" } },
  { id: "course", name: { en: "Courses & Training", ar: "الدورات والتدريب المكثف" } }
];

export const credentialsData = [
  {
    id: "ibm-ai",
    type: "credential",
    title: {
      en: "IBM SkillsBuild AI Literacy — Digital Credential",
      ar: "شهادة اعتماد محو الأمية في الذكاء الاصطناعي — IBM SkillsBuild"
    },
    issuer: {
      en: "IBM SkillsBuild",
      ar: "منصة IBM SkillsBuild"
    },
    date: {
      en: "Completed August 2026",
      ar: "أُنجزت في أغسطس 2026"
    },
    credentialType: {
      en: "Digital Credential",
      ar: "شهادة اعتماد رقمية"
    },
    badge: {
      en: "Verified Digital Credential",
      ar: "اعتماد رقمي رسمي"
    },
    topics: [
      { en: "AI Fundamentals", ar: "أساسيات الذكاء الاصطناعي" },
      { en: "Generative AI Concepts", ar: "مفاهيم الذكاء الاصطناعي التوليدي" },
      { en: "Responsible AI", ar: "الذكاء الاصطناعي المسؤول والأخلاقي" },
      { en: "Societal & Workplace Impact", ar: "تأثير الذكاء الاصطناعي في بيئة العمل والمجتمع" }
    ]
  },
  {
    id: "huawei-ai",
    type: "course",
    title: {
      en: "Huawei HCIA-AI V4.0 — Course",
      ar: "دورة HCIA-AI V4.0 للذكاء الاصطناعي — هواوي"
    },
    issuer: {
      en: "Huawei",
      ar: "شركة هواوي (Huawei)"
    },
    date: {
      en: "Completed with Full Marks | April 2026",
      ar: "أُنجزت بالدرجات الكاملة | أبريل 2026"
    },
    credentialType: {
      en: "Specialized Technical Course",
      ar: "دورة تقنية متخصصة"
    },
    badge: {
      en: "Full Marks Achieved",
      ar: "الدرجات الكاملة"
    },
    topics: [
      { en: "Machine Learning & Deep Learning", ar: "تعلم الآلة والتعلم العميق" },
      { en: "Neural Networks Architecture", ar: "معمارية الشبكات العصبية الاصطناعية" },
      { en: "Computer Vision", ar: "الرؤية الحاسوبية ومعالجة الصور" },
      { en: "Natural Language Processing (NLP)", ar: "معالجة اللغات الطبيعية (NLP)" }
    ]
  },
  {
    id: "oracle-ai",
    type: "course",
    title: {
      en: "Oracle AI for You — Course",
      ar: "دورة الذكاء الاصطناعي لك — أوراكل (Oracle)"
    },
    issuer: {
      en: "Oracle",
      ar: "شركة أوراكل (Oracle)"
    },
    date: {
      en: "Completed August 2026",
      ar: "أُنجزت في أغسطس 2026"
    },
    credentialType: {
      en: "Course (32 Hours)",
      ar: "دورة تدريبية (32 ساعة)"
    },
    badge: {
      en: "32 Hours of Training",
      ar: "32 ساعة تدريبية"
    },
    topics: [
      { en: "AI & Machine Learning Fundamentals", ar: "أساسيات الذكاء الاصطناعي وتعلم الآلة" },
      { en: "Generative AI Foundations", ar: "مبادئ الذكاء الاصطناعي التوليدي" },
      { en: "Responsible AI Applications", ar: "تطبيقات الذكاء الاصطناعي الأخلاقية" },
      { en: "Real-World Problem Solving", ar: "حل المشكلات الواقعية بالتقنيات الذكية" }
    ]
  }
];
