# Study First Info — Official Technical Handover & Architecture Dossier

**Target Domain:** [https://studyfirstinfo.com](https://studyfirstinfo.com)  
**Document Version:** 1.0.0 (Production Release Ready)  
**Maintained For:** Study First Info Ltd. Management & Future Engineering Team  

---

## 1. Executive Summary & Purpose
This handover document is prepared as a turnkey technical blueprint for **Study First Info Ltd.**. Any prospective software engineer, web developer, or devops specialist hired in the future can clone this repository, run the application within 2 minutes, and seamlessly extend existing modules without redesigning or rebuilding the architecture from scratch.

---

## 2. Technology Stack & Framework Standards
* **Frontend Framework:** React 19 (Modern functional components, hooks, optimized re-renders)
* **Build System & Tooling:** Vite (Fast HMR, optimized ES modules bundling)
* **Type System:** TypeScript (Strict typing for robust enterprise stability)
* **Styling & Design System:** Tailwind CSS with customized brand colors:
  * Primary: Deep Trust Navy (`#0A2540` / brand primary)
  * Accent / Brand Green: Academic Emerald (`#047857` / brand accent)
  * Neutrals: Slate & Zinc high-contrast surfaces
* **Icons & Assets:** Lucide React (featherweight SVG icons)
* **Routing:** React Router v6 (`BrowserRouter` with declarative SPA routing)

---

## 3. Repository Architecture & Directory Blueprint
```
afsana-ui/
├── public/                       # Static public assets served at root
│   ├── robots.txt                # Search engine crawler policies (Google Search Console ready)
│   ├── sitemap.xml               # Canonical XML sitemap with 10 prioritized URLs
│   ├── favicon.svg               # Vector browser favicon
│   ├── logo.png                  # Official high-res logo
│   └── icons.svg                 # SVG sprite symbols
│
├── src/
│   ├── assets/                   # Bundled graphics and imagery
│   ├── components/               # Modular reusable UI components
│   │   ├── admin/                # Admin Portal Desks:
│   │   │   ├── AdminSeoDesk.tsx         # [NEW] Meta Title/Desc, Schema.org & GTM Studio
│   │   │   ├── AdminSidebar.tsx         # Responsive executive dashboard navigation
│   │   │   ├── AdminStatsRow.tsx        # KPI metrics & lead counters
│   │   │   ├── AdminPipelineTable.tsx   # Active student applications tracking
│   │   │   ├── AdminCounselorGrid.tsx   # Counselor allocation & workload
│   │   │   ├── AdminWaiversDesk.tsx     # Chinese CSC & German waiver approvals
│   │   │   ├── AdminAnalyticsDesk.tsx   # Intake & remittance analytics
│   │   │   └── AdminSettingsDesk.tsx    # Dhaka/Chittagong physical branch settings
│   │   ├── auth/                 # Sign-in, Register, OTP modals & forms
│   │   ├── layout/               # Global Navbar, Footer, ScrollToTop, Floating CTA
│   │   └── sections/             # Page sections (Hero, EligibilityMatcher, etc.)
│   ├── data/                     # Typed local schemas, counselors data, pathways
│   ├── pages/                    # Route entry points:
│   │   ├── HomePage.tsx          # Multi-campaign hero & university showcase
│   │   ├── AdminPage.tsx         # Executive HQ Management Portal
│   │   ├── CounselorsPage.tsx    # Verified counselor booking directory
│   │   ├── CountriesPage.tsx     # Germany, China, UK, Malaysia guides
│   │   ├── PathwayPage.tsx       # Foundation, Bachelor & Master pathways
│   │   ├── ServicesPage.tsx      # Blocked account, visa filing & SOP review
│   │   ├── ScholarshipsPage.tsx  # 100% CSC waiver & DAAD directory
│   │   ├── BlogPage.tsx          # Educational articles & admission updates
│   │   ├── AboutPage.tsx         # Dhaka/Ctg presence & team credentials
│   │   └── CareersPage.tsx       # Counselor recruitment & openings
│   ├── App.tsx                   # Central router & layout guards
│   ├── index.css                 # Base Tailwind imports & CSS custom animations
│   └── main.tsx                  # React DOM root bootstrapping
│
├── index.html                    # Root HTML with rich SEO tags, OpenGraph & Schema.org
├── vite.config.ts                # Vite bundler configurations
└── package.json                  # Dependencies & execution scripts
```

---

## 4. Quickstart Guide (For Future Developers)

### Step 1: Prerequisites
* Node.js: `v18.0.0` or higher (`v20 LTS` recommended)
* Package Manager: `npm` (included with Node)

### Step 2: Installation
```bash
# Clone the repository
git clone <YOUR_GIT_REPOSITORY_URL>
cd afsana-ui

# Install all dependencies
npm install
```

### Step 3: Run Local Development Server
```bash
npm run dev
```
The app will launch at `http://localhost:5173`. Any changes made will hot-reload instantly.

### Step 4: Build for Production
```bash
npm run build
```
This produces an optimized production bundle inside the `/dist` directory.

---

## 5. SEO, Google Search Console & Analytics Setup

### A. Robots.txt (`/public/robots.txt`)
* **Live URL:** `https://studyfirstinfo.com/robots.txt`
* **Purpose:** Allows search engines to crawl public pages (Home, Countries, Counselors, Blog, etc.) while blocking crawler access to private routes (`/admin/*`, `/dashboard/*`, `/auth`).
* **Sitemap Reference:** Declared at the footer of robots.txt for instant discovery.

### B. Sitemap.xml (`/public/sitemap.xml`)
* **Live URL:** `https://studyfirstinfo.com/sitemap.xml`
* **Google Search Console Submission:**
  1. Open Google Search Console for property `https://studyfirstinfo.com`.
  2. Navigate to **Sitemaps** in the left menu.
  3. Enter `sitemap.xml` in the field and click **Submit**.
  4. Google will index all 10 priority URLs with change frequencies.

### C. Admin SEO Desk (`/admin` -> "SEO, Schema & GTM" Tab)
* **Page Meta Headlines & Descriptions:** Edit titles and descriptions with a real-time Google search snippet preview.
* **Schema.org Structured Data (JSON-LD):** Configured with valid `EducationalOrganization` schema for Google Rich Results.
* **Google Tag Manager (GTM) & GA4:** Admin can insert their container ID (e.g., `GTM-XXXXXXX`) or GA4 measurement ID (`G-XXXXXXXXXX`) without touching the codebase.

---

## 6. Deployment Guide

### Option 1: Apache / cPanel Web Hosting
1. Run `npm run build` on your local terminal.
2. Upload the contents of the `/dist` folder to `public_html`.
3. Create or ensure an `.htaccess` file exists in `public_html` with the following rewrite rule (necessary for React Router SPA routes):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 2: Nginx Web Server
Add the `try_files` directive to your Nginx server block:
```nginx
location / {
    root /var/www/studyfirstinfo/dist;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

### Option 3: Vercel / Netlify (Zero Config)
* Connect repository to Vercel/Netlify.
* Build Command: `npm run build`
* Output Directory: `dist`

---

## 7. Future Backend API Integration Checklist
For a full-stack backend engineer connecting an Express.js / NestJS / Django backend:
1. **API Endpoints:** Create a service layer in `src/services/api.ts` utilizing `axios` or native `fetch`.
2. **Environment Variables:** Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=https://api.studyfirstinfo.com/v1
   VITE_GTM_CONTAINER_ID=GTM-SFI2026
   VITE_GOOGLE_ANALYTICS_ID=G-9X7Y8Z1234
   ```
3. **Authentication:** Connect `/src/pages/AuthPage.tsx` and `/src/components/auth/` to JWT `/auth/login` and `/auth/register` endpoints.

---

**Prepared by:** Technical Engineering Lead  
**Handover Status:** Complete & Verified  
