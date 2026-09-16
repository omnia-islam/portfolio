export const projectDetails = {
  "depi-hub": {
    title: {
      en: "DEPI Learning Hub Web Platform",
      ar: "منصة رواد مصر الرقمية التعليمية (DEPI Hub)"
    },
    category: {
      en: "Front-End Development",
      ar: "تطوير الواجهات الأمامية"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI) — Front-End Trainee",
      ar: "مبادرة رواد مصر الرقمية (DEPI) — متدربة واجهات أمامية"
    },
    duration: {
      en: "July 2026 – Present",
      ar: "يوليو 2026 – حتى الآن"
    },
    overview: {
      en: "A structured educational web application developed as part of DEPI training, featuring an interactive course catalog, student registration with custom JavaScript form validation, and responsive viewport support.",
      ar: "تطبيق ويب تعليمي منظم أُنجز كجزء من تدريب مبادرة DEPI، يحتوي على كتالوج دورات تفاعلي، واستمارة تسجيل طلاب مع التحقق البرمجي بجافاسكريبت وتجاوب كامل مع مختلف الشاشات."
    },
    problem: {
      en: "Learners needed an intuitive, responsive interface to browse available software engineering courses, view curriculum details, and submit registrations with client-side verification.",
      ar: "احتاج الطلاب لواجهة بديهية متجاوبة تمكنهم من استعراض مسارات هندسة البرمجيات المتاحة، والاطلاع على تفاصيل المناهج، والتسجيل مع التحقق الفوري من صحة المدخلات قبل الإرسال."
    },
    solution: {
      en: "Architected a multi-page web platform using semantic HTML5, modern CSS3 layout techniques (CSS Grid and Flexbox), and modular JavaScript for DOM manipulation and form validation.",
      ar: "بناء منصة متعددة الصفحات بهيكلية HTML5 دلالية، وتقنيات تخطيط CSS3 حديثة (CSS Grid و Flexbox)، وجافاسكريبت معيارية لمعالجة شجرة العناصر DOM والتحقق من المدخلات."
    },
    keyHighlights: [
      {
        en: "Built multi-column responsive course cards with hover interactions and category tags.",
        ar: "إنشاء بطاقات دورات تدريبية متجاوبة متعددة الأعمدة بتأثيرات تمرير وتصنيفات ملونة."
      },
      {
        en: "Implemented comprehensive client-side form validation ensuring correct input formats before submission.",
        ar: "تطبيق تحقق دقيق من صحة حقول نموذج التسجيل (الاسم، البريد، والمسار) لمنع الأخطاء."
      },
      {
        en: "Ensured seamless viewing across mobile, tablet, and widescreen desktop layouts.",
        ar: "ضمان تناسق العرض وسلاسة التجربة عبر الهواتف الذكية والأجهزة اللوحية والشاشات العريضة."
      },
      {
        en: "Integrated clean semantic structure with accessible form controls and typography.",
        ar: "بناء هيكلية دلالية متوافقة مع معايير سهولة الوصول مع خطوط متناسقة ومريحة للقراءة."
      }
    ],
    technicalBreakdown: {
      structure: { en: "Semantic HTML5, modular layout, accessible forms", ar: "هيكلية HTML5 دلالية، تخطيط معياري، نماذج ميسرة الوصول" },
      styling: { en: "CSS3, CSS Grid for courses, Flexbox for navigation and cards", ar: "تنسيقات CSS3، شبكة CSS Grid للدورات، و Flexbox للتنقل والبطاقات" },
      logic: { en: "Vanilla JavaScript ES6+ for form validation, DOM events, and modal feedback", ar: "جافاسكريبت ES6+ للتحقق من المدخلات، أحداث DOM وتنبيهات الاستجابة" }
    },
    sampleCode: `// Registration Form Validation & Interactivity
function validateRegistration(event) {
  event.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  const email = document.getElementById('studentEmail').value.trim();
  const track = document.getElementById('courseTrack').value;
  
  if (!name || !email.includes('@') || !track) {
    showFeedback('Please provide valid input across all required fields.', 'error');
    return false;
  }
  showFeedback('Registration submitted successfully for ' + track + '!', 'success');
  return true;
}`
  },

  "egypt-tour-v2": {
    title: {
      en: "Egypt Tour Guide — Interactive Edition (v2)",
      ar: "دليل مصر السياحي — النسخة التفاعلية (v2)"
    },
    category: {
      en: "Front-End Development",
      ar: "تطوير الواجهات الأمامية"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI) — Front-End Trainee",
      ar: "مبادرة رواد مصر الرقمية (DEPI) — متدربة واجهات أمامية"
    },
    duration: {
      en: "July 2026",
      ar: "يوليو 2026"
    },
    overview: {
      en: "An enhanced version of the Egypt Tour Guide web application, introducing dynamic JavaScript interactions, photo gallery viewports, and responsive navigation across historic Egyptian destinations.",
      ar: "إصدار متطور من تطبيق دليل مصر السياحي، يضيف تفاعلية جافاسكريبت حركية، ومعرض صور ديناميكي، وقوائم تنقل متجاوبة لاستكشاف الوجهات التاريخية المصرية."
    },
    problem: {
      en: "Static tourism pages often lack engaging interactivity needed to showcase architectural monuments and travel destinations effectively.",
      ar: "غالباً ما تفتقر الصفحات السياحية الثابتة إلى التفاعل الجذاب اللازم لإبراز المعالم الأثرية والوجهات السياحية بصورة مشوقة."
    },
    solution: {
      en: "Engineered interactive destination views and photo galleries using vanilla JavaScript event handling, dynamic modal views, and smooth CSS transitions.",
      ar: "برمجة استعراض تفاعلي للوجهات ومعارض الصور باستخدام مستمعات أحداث جافاسكريبت، ونوافذ منبثقة تفاعلية، وانتقالات CSS ناعمة."
    },
    keyHighlights: [
      {
        en: "Implemented dynamic image modal and photo viewer for landmark exploration (Luxor, Pyramids, Nile, Abu Simbel).",
        ar: "تطبيق نافذة عرض تفاعلية للصور لاستكشاف المعالم (الأقصر، الأهرامات، النيل، أبو سمبل)."
      },
      {
        en: "Created responsive mobile navigation toggle with smooth dropdown animations.",
        ar: "برمجة قائمة تنقل مخصصة للهواتف مع تأثيرات فتح وغلق انسيابية."
      },
      {
        en: "Utilized CSS Grid for fluid image galleries adapting from 1 to 4 columns based on screen width.",
        ar: "استخدام CSS Grid لمعارض الصور المرنة التي تتدرج من عمود واحد إلى 4 أعمدة وفق الشاشة."
      },
      {
        en: "Designed semantic sectioning for cultural landmarks, opening hours, and travel insights.",
        ar: "تقسيم دلالي للمواقع التراثية، ومواعيد الزيارة، وتوجيهات السفر المفيدة."
      }
    ],
    technicalBreakdown: {
      interactivity: { en: "JavaScript DOM event listeners, modal viewer, mobile navigation toggle", ar: "مستمعات أحداث DOM بجافاسكريبت، نافذة تفاعلية للصور، قائمة هاتفية" },
      layout: { en: "CSS Grid gallery with responsive auto-fit columns", ar: "معرض صور بنظام CSS Grid وأعمدة متلائمة تلقائياً" },
      visuals: { en: "Optimized responsive images with subtle hover lift and transition effects", ar: "صور محسنة متجاوبة مع تأثيرات رفع ناعمة عند التمرير" }
    },
    sampleCode: `// Photo Gallery Modal Viewer
const galleryItems = document.querySelectorAll('.gallery-thumb');
const modalViewer = document.getElementById('photoModal');
const modalImage = document.getElementById('modalDisplayImage');

galleryItems.forEach(thumb => {
  thumb.addEventListener('click', () => {
    modalImage.src = thumb.dataset.fullsize;
    modalImage.alt = thumb.alt;
    modalViewer.classList.add('is-active');
  });
});`
  },

  "myfood": {
    title: {
      en: "MyFood Culinary & Recipe Showcase",
      ar: "منصة MyFood لعرض الوصفات وفنون الطهي"
    },
    category: {
      en: "Front-End Development",
      ar: "تطوير الواجهات الأمامية"
    },
    affiliation: {
      en: "Digital Egypt Pioneers Initiative (DEPI) — Front-End Trainee",
      ar: "مبادرة رواد مصر الرقمية (DEPI) — متدربة واجهات أمامية"
    },
    duration: {
      en: "July 2026",
      ar: "يوليو 2026"
    },
    overview: {
      en: "A clean, modern culinary template built with a focus on UI/UX presentation, featuring recipe cards, chef biographies, and a balanced multi-column grid.",
      ar: "قالب ويب عصري ونظيف لفنون الطهي مبني بتركيز على جودة تجربة وواجهة المستخدم (UI/UX)، يتميز ببطاقات وصفات متعددة وقسم للطهاة."
    },
    problem: {
      en: "Food and recipe platforms require clear visual hierarchy, appetizing imagery, and scannable recipe cards without visual clutter.",
      ar: "تتطلب منصات المأكولات والوصفات تسلسلاً بصرياً مريحاً، واستعراضاً أنيقاً للصور وبطاقات واضحة للمكونات دون فوضى بصرية."
    },
    solution: {
      en: "Designed a clean, minimalist card-based layout using CSS Grid and Flexbox, emphasizing readability, subtle borders, and balanced whitespace.",
      ar: "تصميم واجهة أنيقة تعتمد على البطاقات باستخدام CSS Grid و Flexbox، مع إبراز وضوح النصوص والمساحات الفارغة الموزونة."
    },
    keyHighlights: [
      {
        en: "Engineered flexible card grids supporting various recipe categories.",
        ar: "بناء شبكة بطاقات مرنة تدعم أصناف الوجبات والوصفات المتنوعة."
      },
      {
        en: "Implemented dedicated 'About the Chef' bio section with structured typography.",
        ar: "تصميم قسم مخصص للتعريف بالطهاة وتخصصاتهم بأسلوب بصري مرتب."
      },
      {
        en: "Mobile-first responsive design maintaining legible proportions on smartphones.",
        ar: "تصميم متجاوب متوافق مع الهواتف أولاً يحافظ على تناسق الأبعاد وسهولة القراءة."
      }
    ],
    technicalBreakdown: {
      layout: { en: "CSS Grid multi-column system with responsive breakpoints", ar: "نظام أعمدة متعددة عبر CSS Grid مع نقاط توقف متجاوبة" },
      typography: { en: "Carefully scaled headers, body copy, and category pill tags", ar: "تدرج طباعي متناسق للعناوين ونصوص المحتوى والوسوم" },
      components: { en: "Recipe cards, category pills, chef showcase, footer navigation", ar: "بطاقات الوصفات، شارات التصنيف، عرض الطهاة وتذييل الصفحة" }
    },
    sampleCode: `/* Modern Responsive Recipe Grid */
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1.5rem 0;
}

.recipe-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}`
  },

  "decode-ways": {
    title: {
      en: "Decode Ways — Dynamic Programming Solution",
      ar: "حل مسألة Decode Ways بالبرمجة الديناميكية"
    },
    category: {
      en: "Algorithms & CS",
      ar: "الخوارزميات وعلوم الحاسب"
    },
    affiliation: {
      en: "Misr University for Science and Technology (MUST) — Course Project",
      ar: "جامعة مصر للعلوم والتكنولوجيا (MUST) — مشروع مقرر دراسي"
    },
    duration: {
      en: "May 2026",
      ar: "مايو 2026"
    },
    overview: {
      en: "A high-performance algorithmic implementation in C++ solving the classic Decode Ways problem using Dynamic Programming, achieving optimal O(n) time and O(n) space complexity.",
      ar: "تطبيق خوارزمي عالي الكفاءة بلغة C++ لحل مسألة Decode Ways الشهيرة بالبرمجة الديناميكية، محققاً كفاءة مثالية O(n) في الوقت والمساحة."
    },
    problem: {
      en: "A message containing letters from A-Z is encoded to numbers using 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. Given a string s containing only digits, determine the total number of ways to decode it.",
      ar: "رسالة مشفرة تتكون من أرقام تقابل الحروف من A إلى Z حيث 'A' -> 1 و 'Z' -> 26. المطلوب إيجاد إجمالي عدد الطرق الممكنة لفك تشفير السلسلة النصية المعطاة."
    },
    solution: {
      en: "Formulated a state recurrence relation dp[i] = dp[i-1] + dp[i-2] under valid digit range constraints (1-9 for single digits, 10-26 for two digits). Led the core algorithm concept within the university team.",
      ar: "صياغة علاقة الانتقال الرياضية dp[i] = dp[i-1] + dp[i-2] مع مراعاة قيود الأرقام الصحيحة (1-9 للخانة الواحدة، و10-26 للخانة الثنائية). قمت بقيادة المفهوم الخوارزمي الأساسي ضمن فريق المشروع."
    },
    keyHighlights: [
      {
        en: "Reduced exponential recursion O(2^n) to linear O(n) time complexity.",
        ar: "تقليص التعقيد الزمني من الأسي O(2^n) إلى الخطي O(n)."
      },
      {
        en: "Handled critical edge cases including leading zeros ('0'), standalone zeros, and invalid code groupings.",
        ar: "معالجة الحالات الحدية الحرجة كالأصفار في البداية ('0') والمجموعات غير الصالحة."
      },
      {
        en: "Reused precomputed subproblem solutions through dynamic array memoization.",
        ar: "إعادة استخدام نتائج المسائل الفرعية المحسوبة مسبقاً عبر مصفوفة الحالات."
      }
    ],
    technicalBreakdown: {
      language: { en: "C++ (C++17 standard)", ar: "لغة C++ (معيار C++17)" },
      paradigm: { en: "Dynamic Programming (Bottom-Up Tabulation)", ar: "البرمجة الديناميكية (الجدولة التصاعدية Bottom-Up)" },
      complexity: { en: "Time: O(n) | Space: O(n) (can be optimized to O(1))", ar: "الوقت: O(n) | المساحة: O(n) مع إمكانية ضغطها إلى O(1)" }
    },
    sampleCode: `// Dynamic Programming Solution for Decode Ways in C++
#include <string>
#include <vector>

int numDecodings(const std::string& s) {
    if (s.empty() || s[0] == '0') return 0;
    int n = s.length();
    std::vector<int> dp(n + 1, 0);
    dp[0] = 1; // Base case: empty string
    dp[1] = 1; // Base case: first digit valid
    
    for (int i = 2; i <= n; ++i) {
        int oneDigit = s[i - 1] - '0';
        int twoDigits = std::stoi(s.substr(i - 2, 2));
        
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
}`
  },

  "acme-rpa": {
    title: {
      en: "ACME System RPA Enterprise Automation",
      ar: "أتمتة نظام ACME للشركات عبر UiPath RPA"
    },
    category: {
      en: "RPA & Automation",
      ar: "الأتمتة و RPA"
    },
    affiliation: {
      en: "Digital HUB / Orange Digital Center — RPA and AI Automation Training",
      ar: "مركز أورنج الرقمي / Digital HUB — تدريب الأتمتة والذكاء الاصطناعي"
    },
    duration: {
      en: "June – July 2026",
      ar: "يونيو – يوليو 2026"
    },
    overview: {
      en: "End-to-end enterprise workflow automation for the ACME System using UiPath Studio, the Robotic Enterprise Framework (REFramework), and Orchestrator Queues to automate a 10-transaction business process.",
      ar: "أتمتة شاملة لمسار عمل مؤسسي لنظام ACME باستخدام UiPath Studio وإطار عمل REFramework وقوائم Orchestrator لمعالجة 10 معاملات عمل مؤتمتة بالكامل."
    },
    problem: {
      en: "Manual data extraction from legacy ACME web interfaces, manual transaction calculation, and manual Excel reconciliation were slow and error-prone.",
      ar: "كان استخراج البيانات يدوياً من واجهات ACME القديمة ومطابقة تقارير Excel وحساب المعاملات عملية بطيئة ومعرضة للأخطاء البشرية."
    },
    solution: {
      en: "Engineered a decoupled Dispatcher/Performer architecture: the Dispatcher extracts work items into DataTables and pushes them to Orchestrator Queues; the Performer fetches items via REFramework, processes business rules, reconciles Excel reports, and sends automated email notifications.",
      ar: "تطبيق معمارية منفصلة Dispatcher/Performer: يقوم المرسل باستخراج بنود العمل وتحميلها إلى قوائم Orchestrator؛ ويتولى المنفذ سحب البنود ومعالجة قواعد العمل ومطابقة التقارير وإرسال رسائل البريد."
    },
    keyHighlights: [
      {
        en: "Engineered robust AS-IS to TO-BE process transformation with business exception handling.",
        ar: "تحويل مسار العمل من اليدوي AS-IS إلى المؤتمت TO-BE مع معالجة الاستثناءات التشغيلية."
      },
      {
        en: "Decoupled transaction ingestion from processing using UiPath Orchestrator Queues.",
        ar: "فصل استخراج المهام عن تنفيذ المعاملات عبر قوائم UiPath Orchestrator."
      },
      {
        en: "Built automated Excel report reconciliation and scheduled email delivery.",
        ar: "بناء نظام مطابقة تلقائي لتقارير Excel وتوليد الإشعارات البريدية المجدولة."
      },
      {
        en: "Resolved queue reference issues and Config.xlsx multi-process file-lock conflicts.",
        ar: "معالجة مشكلات تعارض إقفال ملف الإعدادات Config.xlsx ومراجع القوائم لضمان استقرار التشغيل."
      }
    ],
    technicalBreakdown: {
      architecture: { en: "Dispatcher / Performer Pattern with UiPath REFramework", ar: "نمط Dispatcher / Performer مع إطار عمل REFramework" },
      components: { en: "UiPath Studio, Orchestrator Queues, DataTables, Excel Activities", ar: "UiPath Studio، قوائم Orchestrator، جداول DataTables، وأنشطة Excel" },
      reliability: { en: "Try-Catch state machine, system and business exception handling", ar: "آلة الحالات مع Try-Catch للتعامل مع استثناءات النظام وقواعد العمل" }
    },
    sampleCode: `// Dispatcher Work Item Push to Orchestrator Queue (Pseudo-workflow)
For Each Row in dt_WorkItems:
  If row("Type").ToString.Equals("WI4") And row("Status").ToString.Equals("Open") Then:
    Add Queue Item:
      QueueName: "ACME_WorkItems"
      ItemInformation:
        "WIID": row("WIID").ToString
        "Description": row("Description").ToString
        "Date": row("Date").ToString
    Log Message: "Enqueued WIID: " + row("WIID").ToString`
  },

  "email-agent": {
    title: {
      en: "Autonomous Email Summary Agent",
      ar: "وكيل أتمتة وتلخيص البريد الإلكتروني الذكي"
    },
    category: {
      en: "RPA & Automation",
      ar: "الأتمتة و RPA"
    },
    affiliation: {
      en: "Digital HUB / Orange Digital Center — RPA and AI Automation Training",
      ar: "مركز أورنج الرقمي / Digital HUB — تدريب الأتمتة والذكاء الاصطناعي"
    },
    duration: {
      en: "July 2026",
      ar: "يوليو 2026"
    },
    overview: {
      en: "An agentic automation workflow combining UiPath automation and Python scripting to ingest email communications, extract key action items, and synthesize actionable summaries.",
      ar: "مسار عمل بالذكاء الوكيل يجمع بين روبوتات UiPath وسكربتات بايثون لاستقبال رسائل البريد، واستخراج بنود العمل، وصياغة ملخصات تنفيذية موحدة."
    },
    problem: {
      en: "Corporate employees spend excessive time reading through lengthy unstructured email threads to locate deadlines and actionable requirements.",
      ar: "يستنزف الموظفون وقتاً كبيراً في قراءة سلاسل البريد الطويلة غير المنظمة للبحث عن المواعيد النهائية والمهام المطلوبة."
    },
    solution: {
      en: "Constructed an automated workflow that connects to mailboxes, filters unread messages, extracts email bodies, processes text through agentic summarization logic, and generates a digest report.",
      ar: "بناء مسار مؤتمت يتصل بصندوق البريد، ويصفي الرسائل غير المقروءة، ويستخرج نصوصها، ويمررها لمنطق التلخيص الذكي لإنتاج تقرير ملخص منظم."
    },
    keyHighlights: [
      {
        en: "Automated retrieval of unread emails and attachments.",
        ar: "سحب الرسائل غير المقروءة والمرفقات تلقائياً."
      },
      {
        en: "Synthesized core email points into structured summaries.",
        ar: "استخلاص النقاط الجوهرية وصياغتها في ملخص تنفيذي منظم."
      },
      {
        en: "Combined UiPath integration activities with Python text processing.",
        ar: "الدمج بين أنشطة أتمتة UiPath ومعالجة النصوص بلغة Python."
      }
    ],
    technicalBreakdown: {
      automation: { en: "UiPath Mail Activities, Outlook/IMAP integration", ar: "أنشطة بريد UiPath، وتكامل Outlook / IMAP" },
      scripting: { en: "Python for text extraction and pattern analysis", ar: "لغة Python لاستخراج النصوص وتحليل الأنماط" },
      output: { en: "Consolidated executive digest delivered via scheduled notification", ar: "ملخص تنفيذي موحد يُرسل في إشعار مجدول" }
    },
    sampleCode: `# Python-based Email Content Parsing & Action Extraction
import re

def extract_action_items(email_body):
    action_patterns = [r"please (.*)", r"deadline:? (.*)", r"action required:? (.*)"]
    actions = []
    for line in email_body.splitlines():
        for pattern in action_patterns:
            match = re.search(pattern, line, re.IGNORECASE)
            if match:
                actions.append(match.group(1).strip())
    return actions`
  },

  "company-db": {
    title: {
      en: "Company Database Management System",
      ar: "نظام إدارة قواعد بيانات الشركات (DBMS)"
    },
    category: {
      en: "Databases & Systems",
      ar: "قواعد البيانات والأنظمة"
    },
    affiliation: {
      en: "Misr University for Science and Technology (MUST) — Course Assignment",
      ar: "جامعة مصر للعلوم والتكنولوجيا (MUST) — تكليف مقرر دراسي"
    },
    duration: {
      en: "March 2026",
      ar: "مارس 2026"
    },
    overview: {
      en: "Comprehensive relational database design and SQL implementation for enterprise company management, modeling departments, employees, projects, and assignments.",
      ar: "تصميم وتنفيذ متكامل لقاعدة بيانات علائقية لإدارة الشركات، يمثل الأقسام والموظفين والمشاريع والتكليفات وفق معايير النمذجة الحديثة."
    },
    problem: {
      en: "Designing an efficient schema that eliminates data redundancy, enforces referential integrity, and supports complex multi-table analytical queries.",
      ar: "تصميم مخطط قاعدة بيانات يقضي على تكرار البيانات، ويفرض التكامل المرجعي، ويدعم الاستعلامات التحليلية المعقدة عبر جداول متعددة."
    },
    solution: {
      en: "Created an Entity-Relationship Diagram (ERD) with appropriate cardinality, implemented relational tables with primary and foreign key constraints in Microsoft SQL Server, and executed queries using DDL and DML operations.",
      ar: "بناء مخطط الكيانات والعلاقات (ERD) مع تحديد العلاقات ودرجاتها، وتنفيذ الجداول بمفاتيح أساسية وأجنبية في MS SQL Server، وتطبيق استعلامات DDL و DML."
    },
    keyHighlights: [
      {
        en: "Constructed normalized relational schema with primary and foreign key cascades.",
        ar: "بناء مخطط علائقي قياسي مع قواعد المفاتيح الأساسية والأجنبية."
      },
      {
        en: "Executed complex queries utilizing INNER JOIN, LEFT JOIN, and aggregate functions.",
        ar: "كتابة استعلامات متقدمة باستخدام عمليات الربط JOIN والدوال التجميعية."
      },
      {
        en: "Applied CREATE, INSERT, SELECT, UPDATE, and DELETE operations for lifecycle management.",
        ar: "تطبيق كافة عمليات إدارة دورة حياة البيانات من إنشاء وتعديل واستعلام."
      }
    ],
    technicalBreakdown: {
      engine: { en: "Microsoft SQL Server", ar: "محرك Microsoft SQL Server" },
      modeling: { en: "Entity-Relationship (ER) Diagramming & Normalization", ar: "مخططات الكيانات والعلاقات ERD وتطبيع الجداول" },
      sql: { en: "DDL schema creation, DML data manipulation, complex relational joins", ar: "إنشاء الجداول بـ DDL، ومعالجة البيانات بـ DML، وعمليات الربط العلائقي" }
    },
    sampleCode: `-- Relational Schema & Analytical JOIN Query
SELECT 
    e.Fname + ' ' + e.Lname AS EmployeeName,
    d.Dname AS Department,
    p.Pname AS ProjectName,
    w.Hours AS WorkedHours
FROM EMPLOYEE e
JOIN DEPARTMENT d ON e.Dno = d.Dnumber
JOIN WORKS_ON w ON e.Ssn = w.Essn
JOIN PROJECT p ON w.Pno = p.Pnumber
WHERE w.Hours > 10.0
ORDER BY d.Dname, WorkedHours DESC;`
  },

  "embedded-systems": {
    title: {
      en: "Embedded Systems: Sensor & Control Hub",
      ar: "مشروعات الأنظمة المدمجة والمتحكمات الدقيقة"
    },
    category: {
      en: "Databases & Systems",
      ar: "قواعد البيانات والأنظمة"
    },
    affiliation: {
      en: "Misr University for Science and Technology (MUST) — Course Project",
      ar: "جامعة مصر للعلوم والتكنولوجيا (MUST) — مشروع مقرر دراسي"
    },
    duration: {
      en: "May 2026",
      ar: "مايو 2026"
    },
    overview: {
      en: "Interactive embedded systems engineered and simulated via Tinkercad: an MQ-2 gas leakage detection system with buzzer alerts, a PWM-controlled DC motor driver with L293D, and a keypad-authenticated LCD access security system.",
      ar: "أنظمة مدمجة تفاعلية تمت هندستها ومحاكاتها عبر Tinkercad: نظام لكشف تسرب الغاز بحساس MQ-2 مع تنبيه صوتي، والتحكم بسرعة محرك DC بنبضات PWM عبر شريحة L293D، ونظام حماية بكلمة سر عبر لوحة مفاتيح وشاشة LCD."
    },
    problem: {
      en: "Interfacing physical sensors, motors, and input peripherals with microcontrollers while handling analog signal conversion and timing constraints.",
      ar: "ربط الحساسات والمحركات وأجهزة الإدخال بالمتحكمات الدقيقة ومعالجة تحويل الإشارات التناظرية والتحكم الزمني الدقيق."
    },
    solution: {
      en: "Wrote C/C++ firmware for Arduino, reading MQ-2 analog signals to trigger active buzzers, modulating PWM duty cycles to control motor speeds, and validating 4-digit security PINs via matrix keypad logic.",
      ar: "كتابة برمجيات مدمجة بلغة C/C++ للأردوينو، وقراءة إشارات حساس MQ-2 لتفعيل صفارات الإنذار، وتعديل عرض النبضة PWM لضبط سرعة المحرك، والتحقق من الرمز السري عبر مصفوفة المفاتيح."
    },
    keyHighlights: [
      {
        en: "Built and simulated an MQ-2 gas leakage detector with audible alerts.",
        ar: "بناء ومحاكاة كاشف تسرب غاز بحساس MQ-2 مع إنذار صوتي فوري."
      },
      {
        en: "Regulated DC motor speed using an L293D motor driver with PWM duty cycling.",
        ar: "التحكم في سرعة محرك تيار مستمر عبر مشغل L293D ونبضات PWM."
      },
      {
        en: "Implemented a password authentication system with matrix keypad and LCD status display.",
        ar: "تنفيذ نظام أمني للتحقق من كلمة المرور مع لوحة مفاتيح وشاشة LCD تفاعلية."
      }
    ],
    technicalBreakdown: {
      hardware: { en: "Arduino Uno, MQ-2 Sensor, L293D Driver, 16x2 LCD, 4x4 Keypad, Buzzer", ar: "أردوينو Uno، حساس MQ-2، مشغل L293D، شاشة LCD 16x2، لوحة مفاتيح 4x4، صفارة إنذار" },
      firmware: { en: "C/C++ embedded code, GPIO management, analog-to-digital conversion", ar: "برمجة C/C++ للأنظمة المدمجة، إدارة منافذ GPIO، والتحويل التناظري الرقمي" },
      simulation: { en: "Autodesk Tinkercad circuit schematics & virtual verification", ar: "تصميم ومحاكاة الدوائر الإلكترونية والتحقق منها عبر Autodesk Tinkercad" }
    },
    sampleCode: `// Gas Leakage Detector with Buzzer Alert (Arduino C++)
const int gasSensorPin = A0;
const int buzzerPin = 9;
const int gasThreshold = 400;

void setup() {
  pinMode(gasSensorPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(gasSensorPin);
  Serial.println(sensorValue);
  
  if (sensorValue > gasThreshold) {
    tone(buzzerPin, 1000); // Trigger buzzer alert
  } else {
    noTone(buzzerPin);
  }
  delay(200);
}`
  }
};
