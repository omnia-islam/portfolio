# Omnia Islam — Professional Portfolio Website

A modern, high-performance, dynamic, and bilingual (English & Arabic with full RTL support) personal portfolio for **Omnia Islam**, positioned as a **React Front-End Developer / Computer Science Student**.

Built strictly from Omnia's CV as the single source of truth, emphasizing modern front-end engineering, React component architecture, and UI/UX design, supported by solid foundations in Computer Science, SQL, and enterprise RPA automation.

---

## Key Features

- **Professional Positioning**: Clear hierarchy establishing Omnia primarily as a React Front-End Developer, backed by a 3.64/4.00 CGPA at MUST, intensive React training at DEPI (159+ hours, 6 templates), and enterprise automation experience at Orange Digital Center.
- **Bilingual & Full RTL Support**: Seamless toggle between English and Arabic. When switched to Arabic, the page flips smoothly to right-to-left (`dir="rtl"`) layout using dedicated typography (`Cairo`) and authentic translations.
- **EmailJS Live Integration**: Production-ready contact form wired to EmailJS:
  - **Public Key**: `efMtz1mWHXrVJGqXy`
  - **Service ID**: `service_3vdtnv1`
  - **Template ID**: `template_4klof4q`
  - **Recipient**: `omnia.islamm@gmail.com`
  - Includes input validation, loading states, success/error feedback, and a direct email fallback button (`mailto:`).
- **Interactive Project Case Studies**: Filterable project gallery (All, Front-End, Algorithms, RPA, Databases) with search and deep-dive modals detailing the problem, solution, technical breakdown, and actual implementation code.
- **Categorized Technical Skills**: Intelligently organized into Front-End, Programming & CS, Databases, RPA & Automation, Embedded Systems, and Tools with no synthetic percentage bars.
- **Verified Credentials & Education**: Distinct partitioning of digital credentials (IBM SkillsBuild) vs specialized courses (Oracle AI for You, Huawei HCIA-AI with full marks), and MUST Computer Science degree details.
- **Modern Developer UI/UX**:
  - Dark modern palette (`#0A0F1D`, `#0F172A`, `#1E293B`)
  - Subtle React cyan (`#61DAFB`) and purple (`#8B5CF6`) accents
  - Top scroll progress bar & floating back-to-top button
  - Interactive terminal card in the Hero
  - Sticky blurred navbar with mobile drawer menu

---

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Icons**: Lucide React
- **Email Service**: `@emailjs/browser`
- **Styling**: Vanilla CSS with modern CSS custom properties, glassmorphism, responsive grid/flexbox, and RTL support.

---

## Project Structure

```
translated/
├── public/
│   ├── Omnia_Islam_CV.pdf
│   └── assets/
│       ├── depi-hub.jpg
│       ├── egypt-tour.jpg
│       ├── egypt-tour2.jpg
│       ├── myfood.jpg
│       ├── pizza.jpg
│       └── cafe.jpg
├── src/
│   ├── components/
│   │   ├── Certifications/
│   │   │   └── Certifications.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Education/
│   │   │   └── Education.jsx
│   │   ├── Experience/
│   │   │   └── Experience.jsx
│   │   ├── Projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   └── Projects.jsx
│   │   ├── Skills/
│   │   │   ├── SkillCard.jsx
│   │   │   └── Skills.jsx
│   │   ├── UI/
│   │   │   ├── BackToTop.jsx
│   │   │   ├── BrandIcons.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── Toast.jsx
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Services.jsx
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── portfolioData.js
│   │   ├── projectDetails.js
│   │   └── translations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started Locally

### Option A: From File Explorer (One-Click)
Simply navigate to this folder in Windows File Explorer and double-click **`start_server.bat`**.
- It verifies Node.js and dependencies automatically.
- It starts the development server.
- It automatically opens your default web browser to **`http://localhost:3000`**.

---

### Option B: From Terminal / PowerShell
1. **Install Dependencies** (if not already installed):
```bash
npm install
```

2. **Run Development Server**:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static build in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```
