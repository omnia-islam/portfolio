export const projectCategories = [
  { id: "all", name: { en: "All Projects", ar: "كافة المشاريع" } },
  { id: "frontend", name: { en: "Front-End", ar: "الواجهات الأمامية" } },
  { id: "programming", name: { en: "Programming", ar: "البرمجة" } },
  { id: "database", name: { en: "Database", ar: "قواعد البيانات" } },
  { id: "automation", name: { en: "RPA / Automation", ar: "الأتمتة و RPA" } },
  { id: "embedded", name: { en: "Embedded Systems", ar: "الأنظمة المدمجة" } },
  { id: "academic", name: { en: "Academic", ar: "المشاريع الأكاديمية" } }
];

export const projects = [
  {
    id: "depi-hub",
    title: {
      en: "DEPI Learning Hub Web Platform",
      ar: "منصة رواد مصر الرقمية التعليمية (DEPI Hub)"
    },
    category: "frontend",
    secondaryCategories: ["frontend"],
    badge: {
      en: "Front-End Trainee Project",
      ar: "مشروع تدريب الواجهات الأمامية"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI)",
      ar: "مبادرة رواد مصر الرقمية (DEPI)"
    },
    image: "/assets/depi-hub.jpg",
    description: {
      en: "A comprehensive educational portal featuring interactive course catalogs, student registration with JavaScript validation, and responsive grid layouts.",
      ar: "منصة تعليمية متكاملة تتميز بكتالوج تفاعلي للدورات التدريبية، ونظام تسجيل طلاب مع التحقق البرمجي بجافاسكريبت وتخطيطات شبكية متجاوبة."
    },
    tools: ["HTML5", "CSS3", "JavaScript", "Flexbox", "CSS Grid", "Responsive Design"],
    role: {
      en: "Front-End Developer",
      ar: "مطوّرة واجهات أمامية"
    },
    featured: true,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "egypt-tour-v2",
    title: {
      en: "Egypt Tour Guide — Interactive Edition (v2)",
      ar: "دليل مصر السياحي — النسخة التفاعلية (v2)"
    },
    category: "frontend",
    secondaryCategories: ["frontend"],
    badge: {
      en: "Interactive Front-End",
      ar: "واجهة تفاعلية متقدمة"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI)",
      ar: "مبادرة رواد مصر الرقمية (DEPI)"
    },
    image: "/assets/egypt-tour2.jpg",
    description: {
      en: "Dynamic tourism web application enhanced with custom JavaScript interactivity, responsive photo exploration, and multi-page destination guides.",
      ar: "تطبيق ويب سياحي تفاعلي مدعوم بخصائص جافاسكريبت الحركية، واستعراض معالم مصر التاريخية (الأقصر، الأهرامات، النيل، أبو سمبل) بتصميم جذاب."
    },
    tools: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "CSS Grid"],
    role: {
      en: "Front-End Developer",
      ar: "مطوّرة واجهات أمامية"
    },
    featured: true,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "myfood",
    title: {
      en: "MyFood Culinary & Recipe Showcase",
      ar: "منصة MyFood لعرض الوصفات وفنون الطهي"
    },
    category: "frontend",
    secondaryCategories: ["frontend"],
    badge: {
      en: "Responsive Web Template",
      ar: "تصميم متجاوب عصري"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI)",
      ar: "مبادرة رواد مصر الرقمية (DEPI)"
    },
    image: "/assets/myfood.jpg",
    description: {
      en: "Modern, clean culinary platform showcasing responsive multi-column recipe cards, chef spotlights, and clean UI/UX layout hierarchies.",
      ar: "منصة طهي عصرية ونظيفة تعرض بطاقات وصفات متعددة الأعمدة وقسماً للتعريف بالطهاة وتوزيعاً بصرياً مريحاً يبرز فنون الطبخ."
    },
    tools: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "Responsive Layout"],
    role: {
      en: "Front-End Developer",
      ar: "مطوّرة واجهات أمامية"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "egypt-tour-v1",
    title: {
      en: "Egypt Tour Guide — Landmark Portal (v1)",
      ar: "دليل مصر السياحي — بوابة المعالم التاريخية (v1)"
    },
    category: "frontend",
    secondaryCategories: ["frontend"],
    badge: {
      en: "Semantic Web Project",
      ar: "مشروع ويب دلالي"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI)",
      ar: "مبادرة رواد مصر الرقمية (DEPI)"
    },
    image: "/assets/egypt-tour.jpg",
    description: {
      en: "Structured multi-page tourism website highlighting iconic Egyptian historical landmarks with semantic HTML5 and responsive typography.",
      ar: "موقع ويب سياحي متعدد الصفحات يسلط الضوء على المعالم التاريخية المصرية بتركيب دلالي متقن HTML5 وخطوط متجاوبة."
    },
    tools: ["HTML5", "CSS3", "Semantic HTML", "Flexbox"],
    role: {
      en: "Front-End Developer",
      ar: "مطوّرة واجهات أمامية"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "pizza-website",
    title: {
      en: "Artisan Pizza Restaurant Showcase",
      ar: "واجهة مطعم البيتزا الإيطالية الفاخرة"
    },
    category: "frontend",
    secondaryCategories: ["frontend"],
    badge: {
      en: "Restaurant Web Layout",
      ar: "تصميم ويب للمطاعم"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI)",
      ar: "مبادرة رواد مصر الرقمية (DEPI)"
    },
    image: "/assets/pizza.jpg",
    description: {
      en: "Responsive restaurant web application featuring interactive menu sections, chef introduction, and contact booking interfaces.",
      ar: "تطبيق ويب متجاوب لمطعم بيتزا يتميز بعرض قوائم الوجبات، وقسم الطهاة، وقنوات الحجز والتواصل."
    },
    tools: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    role: {
      en: "Front-End Developer",
      ar: "مطوّرة واجهات أمامية"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "cafe-website",
    title: {
      en: "Artisan Cafe & Bistro Template",
      ar: "قالب مقهى وبيسترو عصري"
    },
    category: "frontend",
    secondaryCategories: ["frontend"],
    badge: {
      en: "Multi-Page Web Project",
      ar: "مشروع ويب متعدد الصفحات"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI)",
      ar: "مبادرة رواد مصر الرقمية (DEPI)"
    },
    image: "/assets/cafe.jpg",
    description: {
      en: "Multi-page cafe website featuring structured beverage menus, location mapping, and warm, readable typography.",
      ar: "موقع ويب متعدد الصفحات لمقهى عصري يعرض قوائم المشروبات المنسقة، وأوقات العمل وخريطة الموقع."
    },
    tools: ["HTML5", "CSS3", "CSS Grid", "Responsive Design"],
    role: {
      en: "Front-End Developer",
      ar: "مطوّرة واجهات أمامية"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "decode-ways",
    title: {
      en: "Decode Ways — Dynamic Programming Solution",
      ar: "حل مسألة Decode Ways بالبرمجة الديناميكية"
    },
    category: "programming",
    secondaryCategories: ["programming", "academic"],
    badge: {
      en: "Algorithm Engineering",
      ar: "هندسة الخوارزميات"
    },
    affiliation: {
      en: "Misr University for Science and Technology (MUST) — Course Project",
      ar: "جامعة مصر للعلوم والتكنولوجيا (MUST) — مشروع مقرر دراسي"
    },
    image: null,
    description: {
      en: "High-efficiency Dynamic Programming solution in C++ solving the Decode Ways problem with O(n) time and O(n) space complexity, leading the core algorithm concept.",
      ar: "خوارزمية برمجة ديناميكية عالية الكفاءة بلغة C++ لحل مسألة Decode Ways بتعقيد زمني ومكاني O(n)، وقيادة المفهوم الخوارزمي الأساسي للمشروع."
    },
    tools: ["C++", "Dynamic Programming", "Algorithms", "Complexity Analysis"],
    role: {
      en: "Core Algorithm Concept Lead",
      ar: "قائدة المفهوم الخوارزمي الأساسي"
    },
    featured: true,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "acme-rpa",
    title: {
      en: "ACME System RPA Enterprise Automation",
      ar: "أتمتة نظام ACME للشركات عبر UiPath RPA"
    },
    category: "automation",
    secondaryCategories: ["automation"],
    badge: {
      en: "Enterprise RPA Workflow",
      ar: "مسار أتمتة مؤسسي"
    },
    affiliation: {
      en: "Digital HUB / Orange Digital Center — RPA & AI Automation Training",
      ar: "مركز أورنج الرقمي / Digital HUB — تدريب الأتمتة والذكاء الاصطناعي"
    },
    image: null,
    description: {
      en: "End-to-end 10-transaction UiPath automation using Dispatcher/Performer architecture, REFramework, Orchestrator Queues, and Excel reconciliation.",
      ar: "أتمتة شاملة لـ 10 معاملات بنظام ACME باستخدام معمارية Dispatcher/Performer وإطار REFramework وقوائم Orchestrator ومطابقة تقارير Excel."
    },
    tools: ["UiPath", "REFramework", "Dispatcher/Performer", "Orchestrator Queues", "Excel Automation"],
    role: {
      en: "RPA & AI Automation Trainee",
      ar: "متدربة أتمتة العمليات والذكاء الاصطناعي"
    },
    featured: true,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "email-agent",
    title: {
      en: "Autonomous Email Summary Agent",
      ar: "وكيل أتمتة وتلخيص البريد الإلكتروني الذكي"
    },
    category: "automation",
    secondaryCategories: ["automation"],
    badge: {
      en: "Agentic AI Automation",
      ar: "أتمتة الذكاء الوكيل"
    },
    affiliation: {
      en: "Digital HUB / Orange Digital Center — RPA & AI Automation Training",
      ar: "مركز أورنج الرقمي / Digital HUB — تدريب الأتمتة والذكاء الاصطناعي"
    },
    image: null,
    description: {
      en: "Agentic automation workflow that ingests email streams, extracts critical information, and generates concise consolidated summaries.",
      ar: "مسار عمل بالذكاء الوكيل يستقبل رسائل البريد الإلكتروني، ويستخرج المعلومات الحيوية، ويولد ملخصات موجزة وموحدة."
    },
    tools: ["UiPath", "Agentic Automation", "AI Automation", "Python"],
    role: {
      en: "Automation Developer",
      ar: "مطوّرة أتمتة"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "company-db",
    title: {
      en: "Company Database Management System",
      ar: "نظام إدارة قواعد بيانات الشركات (DBMS)"
    },
    category: "database",
    secondaryCategories: ["database", "academic"],
    badge: {
      en: "Relational Database",
      ar: "قاعدة بيانات علائقية"
    },
    affiliation: {
      en: "Misr University for Science and Technology (MUST) — Course Assignment",
      ar: "جامعة مصر للعلوم والتكنولوجيا (MUST) — تكليف مقرر دراسي"
    },
    image: null,
    description: {
      en: "Entity-Relationship model and relational database for enterprise management, featuring relational schema, key integrity, and advanced SQL operations.",
      ar: "نمذجة مخطط الكيانات والعلاقات (ERD) وقاعدة بيانات علائقية لإدارة الشركات، وتطبيق سلامة المفاتيح وعمليات الاستعلام المتقدمة SQL."
    },
    tools: ["SQL", "Microsoft SQL Server", "ER Modeling", "Relational Design"],
    role: {
      en: "Database Designer & Developer",
      ar: "مصممة ومطورة قواعد بيانات"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  },
  {
    id: "embedded-systems",
    title: {
      en: "Embedded Systems: Sensor & Control Hub",
      ar: "مشروعات الأنظمة المدمجة والمتحكمات الدقيقة"
    },
    category: "embedded",
    secondaryCategories: ["embedded", "academic"],
    badge: {
      en: "IoT & Hardware Simulation",
      ar: "محاكاة العتاد وإنترنت الأشياء"
    },
    affiliation: {
      en: "Misr University for Science and Technology (MUST) — Course Project",
      ar: "جامعة مصر للعلوم والتكنولوجيا (MUST) — مشروع مقرر دراسي"
    },
    image: null,
    description: {
      en: "Physical & simulated hardware systems including an MQ-2 gas leakage detector, PWM motor speed regulator, and password-authenticated keypad security.",
      ar: "أنظمة عتاد مدمجة محاكاة تشمل كاشف تسرب غاز بحساس MQ-2، والتحكم بسرعة المحركات بنبضات PWM، ونظام أمني لتسجيل الدخول بكلمة سر ولوحة مفاتيح."
    },
    tools: ["Arduino", "C/C++", "Tinkercad", "MQ-2 Sensor", "L293D", "PWM"],
    role: {
      en: "Hardware & Firmware Developer",
      ar: "مطوّرة عتاد وبرمجيات مدمجة"
    },
    featured: false,
    github: "https://github.com/omnia-islam",
    hasDetails: true
  }
];
