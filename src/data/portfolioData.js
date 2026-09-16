import { personalInfo, socialLinks } from './socialLinks';
import { skillCategories, skillsData } from './skills';
import { projectCategories, projects } from './projects';
import { experienceData } from './experience';
import { educationData } from './education';
import { credentialCategories, credentialsData } from './credentials';

export {
  personalInfo,
  socialLinks,
  skillCategories,
  skillsData,
  projectCategories,
  projects,
  experienceData,
  educationData,
  credentialCategories,
  credentialsData
};

export const heroStats = [
  {
    id: "cgpa",
    value: "3.64 / 4.00",
    label: { en: "Academic CGPA", ar: "المعدل التراكمي" },
    sublabel: { en: "MUST • Faculty of Info Tech", ar: "جامعة MUST • تكنولوجيا المعلومات" }
  },
  {
    id: "depi",
    value: "159+ Hours",
    label: { en: "DEPI React Training", ar: "تدريب React بمبادرة DEPI" },
    sublabel: { en: "Digital Egypt Pioneers Initiative", ar: "مبادرة رواد مصر الرقمية" }
  },
  {
    id: "projects",
    value: "6+ Web Projects",
    label: { en: "Frontend Builds", ar: "مشاريع وتطبيقات الواجهات" },
    sublabel: { en: "Responsive Apps & Portals", ar: "تطبيقات وتصاميم متجاوبة" }
  },
  {
    id: "huawei",
    value: "Full Marks",
    label: { en: "Huawei HCIA-AI V4.0", ar: "دورة هواوي للذكاء الاصطناعي" },
    sublabel: { en: "Certified Course Completion", ar: "إتمام معتمد بالدرجات الكاملة" }
  }
];
