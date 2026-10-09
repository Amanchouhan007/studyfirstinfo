# Study First Info Ltd.

> **Official Digital Admissions, Scholarship Directory & Counselor Portal for Higher Studies Abroad**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

---

## 📌 Project Overview

**Study First Info Ltd.** is a modern full-stack web platform designed for Bangladeshi students pursuing undergraduate and postgraduate education across Schengen Europe (Hungary, Germany, Finland, Poland), the United Kingdom, China, Malaysia, Ireland, and New Zealand.

The platform provides verified scholarship evaluation, seamless event registration, counselor directory access, and real-time admissions communication across physical branch desks in Dhaka, Sylhet, and Chittagong.

---

## 🏛️ Official Branch Directory

| Branch | Campus / Address | Direct Helpline | Corporate IP Phone | Official WhatsApp |
| :--- | :--- | :--- | :--- | :--- |
| **Banani (Head Office)** | Rosa Bella Apt, House 3, Level 2, Block D, Road 17, Banani, Dhaka-1213 | `+880 1898-833034` | `+8809613752752` | [Chat on WhatsApp](https://wa.me/8801898833034) |
| **Farmgate Branch** | 7th Floor (Lift-6), BTI Central Plaza, Green Road, Dhaka-1215 | `+880 1806-971441` | `+8809613752752` | [Chat on WhatsApp](https://wa.me/8801806971441) |
| **Sylhet Branch** | Millennium Shopping Centre, Lift 10, Room 907, Zindabazar, Sylhet-3100 | `+880 1898-383120` | `+8809613752752` | [Chat on WhatsApp](https://wa.me/8801898383120) |
| **Chittagong Branch** | Sanmar Ocean City, Level 5, GEC Circle, Chittagong | `+880 1806-971443` | `+8809613752752` | [Chat on WhatsApp](https://wa.me/8801806971443) |

---

## 📂 Repository Structure

```text
studyfirstinfo/
├── backend/                       # Express.js REST API & Prisma Database
│   ├── prisma/                    # Database schema & migrations
│   └── src/                       # Controllers, routes, and middleware
├── frontend/                      # React 19 + TypeScript + Vite SPA
│   ├── public/                    # Static assets, robots.txt, sitemap & _redirects
│   ├── src/                       # Components, pages, hooks, and data models
│   └── index.html                 # HTML entry point with SEO metadata
├── docs/                          # Project documentation & reference assets
│   ├── reference/                 # University guides, pathway spreadsheets & brochures
│   └── reports/                   # Responsive QA audits and functional reports
├── netlify.toml                   # Netlify CI/CD build & routing configuration
└── README.md                      # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites
* **Node.js** (v20 or higher)
* **npm** or **yarn**

### 1. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:5173`.

### 2. Backend Setup

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

The backend server will run at `http://localhost:5000`.

### 3. Production Build

```bash
cd frontend
npm run build
```

The production-optimized bundle will be generated in `frontend/dist`.

---

## 🌐 Netlify Deployment

This repository includes built-in Netlify SPA configuration:

* **Publish Directory:** `frontend/dist`
* **Build Command:** `npm run build`
* **SPA Fallback:** Handled via `frontend/public/_redirects` and root `netlify.toml` for seamless client-side routing on all deep links.

---

## 📄 License & Attribution

Copyright © 2026 Study First Info Ltd. All rights reserved.
