export const skillCategories = [
  { id: "all", name: { en: "All Skills", ar: "جميع المهارات" } },
  { id: "frontend", name: { en: "Front-End & React", ar: "الواجهات و React" } },
  { id: "programming", name: { en: "Programming & CS", ar: "البرمجة وعلوم الحاسب" } },
  { id: "databases", name: { en: "Databases & SQL", ar: "قواعد البيانات و SQL" } },
  { id: "automation", name: { en: "RPA & Automation", ar: "الأتمتة و RPA" } },
  { id: "embedded", name: { en: "Embedded Systems", ar: "الأنظمة المدمجة" } },
  { id: "tools", name: { en: "Tools & Workflow", ar: "الأدوات وبيئة العمل" } }
];

export const skillsData = [
  // Front-End & React
  {
    name: "React.js",
    category: "frontend",
    highlight: true,
    note: { en: "Component-based architecture & hooks", ar: "معمارية المكونات ودوال الخطاف الحديثة" }
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    highlight: true,
    note: { en: "DOM manipulation, async & modern syntax", ar: "معالجة DOM والبرمجة غير المتزامنة" }
  },
  {
    name: "HTML5",
    category: "frontend",
    highlight: false,
    note: { en: "Semantic document structuring & standards", ar: "الهيكلية الدلالية القياسية للمستندات" }
  },
  {
    name: "CSS3",
    category: "frontend",
    highlight: false,
    note: { en: "Modern styling, animations & responsive styling", ar: "تنسيقات عصرية وتأثيرات حركية متجاوبة" }
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    highlight: true,
    note: { en: "Mobile-first, tablet & desktop adaptability", ar: "توافق كامل للشاشات والأجهزة المتنوعة" }
  },
  {
    name: "CSS Grid",
    category: "frontend",
    highlight: false,
    note: { en: "Two-dimensional layout systems", ar: "نظام التخطيط الشبكي ثنائي الأبعاد" }
  },
  {
    name: "Flexbox",
    category: "frontend",
    highlight: false,
    note: { en: "One-dimensional alignment & flows", ar: "نظام التوزيع والمحاذاة المرنة أحادي البعد" }
  },
  {
    name: "Semantic HTML",
    category: "frontend",
    highlight: false,
    note: { en: "Accessible markup and SEO friendliness", ar: "بنية دلالية ملائمة لمحركات البحث والوصول" }
  },

  // Programming & CS
  {
    name: "C++",
    category: "programming",
    highlight: true,
    note: { en: "Dynamic programming & algorithmic efficiency", ar: "البرمجة الديناميكية والخوارزميات الفعالة" }
  },
  {
    name: "Python",
    category: "programming",
    highlight: false,
    note: { en: "Automation scripts & AI foundations", ar: "سكربتات الأتمتة وأساسيات الذكاء الاصطناعي" }
  },
  {
    name: "Java",
    category: "programming",
    highlight: false,
    note: { en: "Object-oriented software development", ar: "تطوير البرمجيات كائنية التوجه" }
  },
  {
    name: "Data Structures",
    category: "programming",
    highlight: true,
    note: { en: "Arrays, trees, graphs, stacks & queues", ar: "المصفوفات، الأشجار، الرسوم وقوائم الانتظار" }
  },
  {
    name: "Algorithms",
    category: "programming",
    highlight: true,
    note: { en: "Sorting, searching & optimal design", ar: "خوارزميات الفرز، البحث والتصميم الأمثل" }
  },
  {
    name: "Dynamic Programming",
    category: "programming",
    highlight: true,
    note: { en: "State transitions & O(n) memoization", ar: "البرمجة الديناميكية وحساب الحالات بكفاءة" }
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "programming",
    highlight: false,
    note: { en: "Inheritance, encapsulation, polymorphism", ar: "مفاهيم التوريث والتغليف وتعدد الأوجه" }
  },
  {
    name: "Complexity Analysis",
    category: "programming",
    highlight: false,
    note: { en: "Big-O time and space optimization", ar: "تحليل تعقيد الوقت والمساحة لحساب Big-O" }
  },
  {
    name: "Problem Solving",
    category: "programming",
    highlight: false,
    note: { en: "Systematic edge-case debugging", ar: "التفكير التحليلي ومعالجة الحالات البرمجية" }
  },

  // Databases & SQL
  {
    name: "Microsoft SQL Server",
    category: "databases",
    highlight: true,
    note: { en: "Relational database management", ar: "إدارة قواعد البيانات العلائقية" }
  },
  {
    name: "Relational Databases",
    category: "databases",
    highlight: false,
    note: { en: "Data normalization & relational integrity", ar: "تطبيع البيانات والتكامل العلائقي" }
  },
  {
    name: "SQL Queries (DDL & DML)",
    category: "databases",
    highlight: true,
    note: { en: "CREATE, INSERT, SELECT, UPDATE", ar: "إنشاء واستعلام وتعديل البيانات" }
  },
  {
    name: "JOIN Operations",
    category: "databases",
    highlight: false,
    note: { en: "Multi-table relational joins & aggregations", ar: "عمليات الربط العلائقي المتقدمة" }
  },
  {
    name: "ER Modeling & ERD",
    category: "databases",
    highlight: false,
    note: { en: "Entity-Relationship schemas & cardinality", ar: "مخططات الكيانات والعلاقات وتحديد درجاتها" }
  },
  {
    name: "Primary & Foreign Keys",
    category: "databases",
    highlight: false,
    note: { en: "Referential integrity & relational constraints", ar: "المفاتيح الأساسية والأجنبية والتكامل المرجعي" }
  },

  // RPA & Automation
  {
    name: "UiPath Studio",
    category: "automation",
    highlight: true,
    note: { en: "Desktop automation workflow design", ar: "تصميم مسارات الأتمتة المكتبية" }
  },
  {
    name: "UiPath Studio Web",
    category: "automation",
    highlight: false,
    note: { en: "Cloud workflow automation", ar: "أتمتة مسارات العمل السحابية" }
  },
  {
    name: "UiPath Orchestrator",
    category: "automation",
    highlight: true,
    note: { en: "Queues, assets, processes & job schedules", ar: "إدارة القوائم والعمليات والجدولة" }
  },
  {
    name: "REFramework",
    category: "automation",
    highlight: true,
    note: { en: "Robotic Enterprise Framework standard", ar: "إطار عمل المؤسسات للروبوتات (REFramework)" }
  },
  {
    name: "Dispatcher / Performer Architecture",
    category: "automation",
    highlight: true,
    note: { en: "Decoupled queue-based automation", ar: "فصل استخراج المهام عن تنفيذ المعاملات" }
  },
  {
    name: "Orchestrator Queues",
    category: "automation",
    highlight: false,
    note: { en: "Transaction item management & state", ar: "إدارة عناصر المعاملات وحالاتها" }
  },
  {
    name: "DataTables & Excel Automation",
    category: "automation",
    highlight: false,
    note: { en: "Data extraction & reconciliation", ar: "استخراج الجداول ومطابقة التقارير" }
  },
  {
    name: "Email Automation",
    category: "automation",
    highlight: false,
    note: { en: "Scheduled report dispatching", ar: "إرسال التقارير التلقائية المجدولة" }
  },
  {
    name: "AI Automation & Agentic Automation",
    category: "automation",
    highlight: false,
    note: { en: "Autonomous email summarization workflows", ar: "أتمتة معالجة وتلخيص البريد بالذكاء الوكيل" }
  },

  // Embedded Systems
  {
    name: "Arduino",
    category: "embedded",
    highlight: false,
    note: { en: "Microcontroller circuit prototyping", ar: "برمجة وتصميم دوائر المتحكمات الدقيقة" }
  },
  {
    name: "C/C++ Embedded",
    category: "embedded",
    highlight: false,
    note: { en: "Hardware control & register logic", ar: "التحكم بالعتاد والمنطق البرمجي للأجهزة" }
  },
  {
    name: "MQ-2 Gas Sensor",
    category: "embedded",
    highlight: false,
    note: { en: "Hazard detection & buzzer alert triggers", ar: "كشف تسرب الغاز وإطلاق الإنذارات" }
  },
  {
    name: "L293D Motor Driver & PWM",
    category: "embedded",
    highlight: false,
    note: { en: "DC motor speed regulation with PWM", ar: "التحكم بسرعة المحركات عبر نبضات PWM" }
  },
  {
    name: "Keypad & LCD Feedback",
    category: "embedded",
    highlight: false,
    note: { en: "Password authentication security interface", ar: "واجهة أمان الدخول بشاشة ولوحة مفاتيح" }
  },
  {
    name: "Tinkercad Simulation",
    category: "embedded",
    highlight: false,
    note: { en: "Circuit simulation & virtual testing", ar: "محاكاة الدوائر الإلكترونية والتحقق منها" }
  },

  // Tools & Workflow
  {
    name: "Visual Studio Code",
    category: "tools",
    highlight: true,
    note: { en: "Primary development IDE", ar: "بيئة التطوير والبرمجة الرئيسية" }
  },
  {
    name: "Git",
    category: "tools",
    highlight: true,
    note: { en: "Version control & branch management", ar: "إدارة الإصدارات ومزامنة الكود" }
  },
  {
    name: "GitHub",
    category: "tools",
    highlight: true,
    note: { en: "Remote repository hosting", ar: "استضافة المستودعات والمشاريع البرمجية" }
  },
  {
    name: "UiPath",
    category: "tools",
    highlight: false,
    note: { en: "Enterprise workflow design suite", ar: "حزمة تصميم مسارات أتمتة الأعمال" }
  }
];
