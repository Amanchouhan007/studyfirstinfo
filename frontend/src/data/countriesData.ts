interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

interface SolvencyItem {
  title: string;
  detail: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ProgramItem {
  name: string;
  level: string;
  fee: string;
  description?: string;
}

interface CostAndBank {
  monthlyCost: string;
  bankFundSingle: string;
  bankMaturity: string;
  familyFund: string;
}

export interface UniversityItem {
  id: string;
  name: string;
  badge: string;
  type: string;
  tagline: string;
  intakes: string;
  deadlines: string;
  tuitionUG: string;
  tuitionPG: string;
  scholarship: string;
  workRights: string;
  entryUG: string;
  entryPG: string;
  whyStudy: string[];
  costAndBank: CostAndBank;
  careerAndPsw: string;
  partTimeJobs: string;
  applicationSteps: string[];
  programs: ProgramItem[];
}

export interface CountryRecord {
  id: string;
  code: string;
  flag: string;
  name: string;
  regionCode: 'europe' | 'uk' | 'oceania' | 'asia';
  regionBadge: string;
  tagline: string;
  usp: string;
  highlights: string[];
  livingCost: string;
  institutionsCount: string;
  heroImg: string;
  pillBadge: string;
  subBadge: string;
  heroHeading: string;
  heroDesc: string;
  tuition: string;
  tuitionSub: string;
  living: string;
  livingSub: string;
  work: string;
  workSub: string;
  psw: string;
  pswSub: string;
  whyStudy: WhyItem[];
  solvency: SolvencyItem[];
  roadmap: string[];
  faqs: FaqItem[];
  universities: UniversityItem[];
}

export const FLAG_MAP: Record<string, string> = {
  'new-zealand': 'https://flagcdn.com/w80/nz.png',
  'hungary': 'https://flagcdn.com/w80/hu.png',
  'united-kingdom': 'https://flagcdn.com/w80/gb.png',
  'malaysia': 'https://flagcdn.com/w80/my.png',
  'germany': 'https://flagcdn.com/w80/de.png',
  'cyprus': 'https://flagcdn.com/w80/cy.png',
  'greece': 'https://flagcdn.com/w80/gr.png',
  'lithuania': 'https://flagcdn.com/w80/lt.png',
  'china': 'https://flagcdn.com/w80/cn.png',
  'russia': 'https://flagcdn.com/w80/ru.png',
  'south-korea': 'https://flagcdn.com/w80/kr.png',
  'south_korea': 'https://flagcdn.com/w80/kr.png',
  'ireland': 'https://flagcdn.com/w80/ie.png',
  'thailand': 'https://flagcdn.com/w80/th.png',
};

export const COUNTRIES_DB: Record<string, CountryRecord> = {
  "new-zealand": {
    id: "new-zealand",
    code: "NZ",
    flag: "🇳🇿",
    name: "New Zealand",
    regionCode: "oceania",
    regionBadge: "OCEANIA",
    tagline: "World-Class English Education & Family Pathway",
    usp: "Spouse Flies Together with Full Work Rights | 3-Year Post-Study Work Permit | High PR Index",
    highlights: [
      "Up to 3-Year Post-Study Work Visa (PSW)",
      "Spouse allowed with open work rights (UG & PG)",
      "Pay tuition fee after Approval in Principle (AIP)"
    ],
    livingCost: "NZ$ 1,200 â€“ NZ$ 1,800 / month",
    institutionsCount: "8+ Listed",
    heroImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇳🇿 Family-Friendly Study Hub",
    subBadge: "Pay Tuition After Visa AIP â€¢ Spouse Full-Time Work Rights",
    heroHeading: "Study in New Zealand: Pay Fees After Visa & Spouse Rights",
    heroDesc: "Zero upfront tuition risk: pay university fees only after receiving official Approval in Principle (AIP) from Immigration New Zealand. Accompanying spouses receive full-time open work permits, and dependent children study in New Zealand domestic public schools completely free.",
    tuition: "NZ$ 24,000 â€“ NZ$ 45,000/yr",
    tuitionSub: "Payable strictly after AIP",
    living: "NZ$ 1,200 â€“ NZ$ 1,800/mo",
    livingSub: "High quality of life",
    work: "25 Hours / Week",
    workSub: "Full-time during vacations",
    psw: "Up to 3-Year Open PSW",
    pswSub: "Direct Skilled Migrant PR routes",
    whyStudy: [
      { icon: "🛡️", title: "Pay Tuition After Visa (AIP)", desc: "You do not transfer tuition fees until Immigration New Zealand issues official Approval in Principle confirming visa approval." },
      { icon: "👨‍👩‍👧", title: "Spouse Full-Time Work Rights", desc: "Spouses receive open work permits with no hourly restrictions, and children receive free domestic schooling." },
      { icon: "📈", title: "Up to 3-Year Open PSW", desc: "Graduates qualify for up to 3 years of post-study work rights with clear permanent residency points under the Green List." },
      { icon: "💰", title: "Savings & FDR Accepted", desc: "Both Savings and Fixed Deposit (FDR) accounts are accepted with 4 to 6 months of maturity." }
    ],
    solvency: [
      { title: "Bank Solvency Requirement", detail: "Bachelor: ~70 Lac to 1 Crore BDT | Master: ~60 to 80 Lac BDT | Spouse/Child: >20 Lac BDT." },
      { title: "Account Maturity Duration", detail: "4 to 6 months maturity required (both Savings and Fixed Deposit FDR accepted)." },
      { title: "Tuition Payment Timing", detail: "Payable strictly AFTER Approval in Principle (AIP) is issued by Immigration NZ." },
      { title: "Family Privileges", detail: "Accompanying spouse receives open work visa; children attend domestic public schools tuition-free." }
    ],
    roadmap: [
      "Step 01: Profile audit and Green List course selection with senior counselors.",
      "Step 02: University issues unconditional Offer of Place (OOP).",
      "Step 03: Prepare 4-6 months maturity bank statement / FDR proof.",
      "Step 04: Lodge online student visa file with Immigration New Zealand (INZ).",
      "Step 05: Complete medical and police clearance certificates.",
      "Step 06: INZ issues official Approval in Principle (AIP) -> Pay university tuition fee.",
      "Step 07: Final e-Visa stamped and flight to Auckland/Hamilton."
    ],
    faqs: [
      { q: "What does 'Pay Tuition After Visa (AIP)' mean?", a: "It means you do not pay your university tuition fee until Immigration New Zealand (INZ) has verified your profile and issued an 'Approval in Principle' (AIP) letter confirming your visa is approved upon fee payment." },
      { q: "Can my spouse work full-time in New Zealand?", a: "Yes! If you are enrolled in an eligible Master's degree (Level 9) or a qualification on the New Zealand Green List, your spouse receives an open work visa with no hourly restrictions." }
    ],
    universities: [
      {
        id: "auckland",
        name: "University of Auckland",
        badge: "Ranked #1 in NZ (QS Top 70)",
        type: "Public Research University",
        tagline: "New Zealand's flagship research university located in central Auckland.",
        intakes: "February 2027, July 2027",
        deadlines: "Nov 30 for Feb Intake | April 30 for July Intake",
        tuitionUG: "NZ$ 35,000 â€“ NZ$ 55,000 / year",
        tuitionPG: "NZ$ 40,000 â€“ NZ$ 70,000+ / year",
        scholarship: "NZ$ 5,000 â€“ NZ$ 20,000 International Student Excellence Scholarship",
        workRights: "25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.00/5.00 | IELTS 6.0 (no band < 5.5) / PTE 52",
        entryPG: "Bachelor CGPA 2.75/4.00 | IELTS 6.5 (no band < 6.0) / PTE 59",
        whyStudy: [
          "World Top 70 university with world-renowned faculties in engineering, AI, and management.",
          "Spouse can fly together with full-time open work rights; children receive free public schooling.",
          "Pay tuition fees ONLY after visa Approval in Principle (AIP) from Immigration New Zealand (INZ).",
          "Up to 3-year Post-Study Work Visa (PSW) with direct pathways to skilled migrant Permanent Residency."
        ],
        costAndBank: {
          monthlyCost: "NZ$ 1,300 â€“ NZ$ 1,900 / month",
          bankFundSingle: "UG: ~à§³70 Lac â€“ 1 Crore BDT | PG: ~à§³60 â€“ 80 Lac BDT",
          bankMaturity: "4 to 6 months maturity required (both Savings & FDR accepted)",
          familyFund: "Spouse & Child: >20 Lac BDT additional statement"
        },
        careerAndPsw: "Up to 3 Years Post-Study Work Permit. Strong demand in Auckland tech corridor, healthcare, and engineering firms with high PR points index.",
        partTimeJobs: "Legal permission to work up to 25 hours per week during academic semesters, and full-time during vacations.",
        applicationSteps: [
          "Profile assessment & program shortlisting with Study First Info",
          "Application to institution & conditional offer letter release",
          "Receive unconditional Offer of Place (OOP)",
          "Prepare financial evidence (4-6 month maturity statement/FDR)",
          "Submit online visa file to Immigration New Zealand (INZ)",
          "INZ AIP (Approval in Principle) issued â†’ Pay official tuition fees",
          "Final e-Visa stamp and pre-departure briefing"
        ],
        programs: [
          { name: "Bachelor of Science in Computer Science & AI", level: "Undergraduate (3 Years)", fee: "NZ$ 42,000/yr" },
          { name: "Master of Data Science & Big Data Analytics", level: "Postgraduate (1.5-2 Years)", fee: "NZ$ 46,500/yr" },
          { name: "Bachelor of Commerce (Finance & Management)", level: "Undergraduate (3 Years)", fee: "NZ$ 39,500/yr" },
          { name: "Master of Business Administration (MBA)", level: "Postgraduate (1.5 Years)", fee: "NZ$ 58,000/yr" },
          { name: "Master of Health Sciences / Nursing", level: "Postgraduate (2 Years)", fee: "NZ$ 44,000/yr" }
        ]
      },
      {
        id: "wintec",
        name: "Waikato Institute of Technology (Wintec)",
        badge: "Applied Learning & Budget Friendly",
        type: "Government Institute of Technology",
        tagline: "Hands-on vocational qualifications directly mapped to New Zealand Green List occupations.",
        intakes: "February 2027, July 2027",
        deadlines: "Dec 10 for Feb Intake | May 25 for July Intake",
        tuitionUG: "Diploma: NZ$ 18,000 â€“ NZ$ 25,000 / yr | Degree: NZ$ 24,000 â€“ NZ$ 35,000 / yr",
        tuitionPG: "PGD: NZ$ 25,000 â€“ NZ$ 32,000 / yr",
        scholarship: "NZ$ 2,500 â€“ NZ$ 5,000 Regional Grants",
        workRights: "25 hrs/week part-time",
        entryUG: "Diploma: HSC pass, IELTS 5.5 | Degree: HSC GPA 4.0, IELTS 6.0",
        entryPG: "Bachelor pass | IELTS 6.0â€“6.5",
        whyStudy: [
          "Lower entry barriers for students with academic gaps or moderate language scores.",
          "Vocational diplomas directly matched to NZ Green List shortage occupations (Nursing, IT, Civil).",
          "Lower living costs in Hamilton compared to major metros.",
          "Pay tuition fee strictly after INZ Approval in Principle (AIP)."
        ],
        costAndBank: {
          monthlyCost: "NZ$ 1,000 â€“ NZ$ 1,400 / month",
          bankFundSingle: "Diploma/UG: ~à§³65 â€“ 70 Lac BDT",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Spouse & child sponsorship support supported"
        },
        careerAndPsw: "Post-Study Work Permit for eligible degree and Green List vocational qualifications; fast-track pathway to residency.",
        partTimeJobs: "25 hours per week during semester; full-time during vacations.",
        applicationSteps: [
          "Profile assessment & pathway selection",
          "Application to Wintec â†’ Offer of Place",
          "Financial documentation prep",
          "Visa lodgement & AIP clearance",
          "Pay fees & receive student visa"
        ],
        programs: [
          { name: "Diploma in Information Technology Support", level: "Diploma (2 Years)", fee: "NZ$ 19,500/yr" },
          { name: "Bachelor of Nursing (Green List)", level: "Undergraduate (3 Years)", fee: "NZ$ 26,000/yr" },
          { name: "Graduate Diploma in Applied Management", level: "Grad Diploma (1 Year)", fee: "NZ$ 24,500/yr" }
        ]
      }
    ]
  },

  "hungary": {
    id: "hungary",
    code: "HU",
    flag: "🇭🇺",
    name: "Hungary",
    regionCode: "europe",
    regionBadge: "EUROPE (SCHENGEN)",
    tagline: "Heart of Central Europe & High Visa Success",
    usp: "Submit Visa in Dhaka (No India visit) | Stipendium Hungaricum 100% Scholarship | MOI Accepted",
    highlights: [
      "Visa file processed directly in Dhaka without visiting New Delhi",
      "Stipendium Hungaricum: 100% tuition, dorm, medical & monthly stipend",
      "IELTS waiver possible with English Medium Instruction (MOI)"
    ],
    livingCost: "â‚¬400 â€“ â‚¬700 / month",
    institutionsCount: "10+ Listed",
    heroImg: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇭🇺 Central European Schengen Hub",
    subBadge: "Direct Dhaka Embassy File Submission (No India Trip)",
    heroHeading: "Study in Hungary: 100% Scholarships & Direct Dhaka Visa",
    heroDesc: "Over 500+ successful Hungary student visas handled by Study First Info Ltd. Enjoy 100% tuition coverage with Stipendium Hungaricum, free borderless mobility across 29 Schengen countries, and direct Dhaka embassy interviews without traveling to India.",
    tuition: "â‚¬0 to â‚¬7,800/yr",
    tuitionSub: "100% Full-Ride Eligible",
    living: "â‚¬400 â€“ â‚¬650/mo",
    livingSub: "Dormitories from â‚¬150/mo",
    work: "24 Hours / Week",
    workSub: "Legal student work rights",
    psw: "1.5 â€“ 2 Years PSW",
    pswSub: "Schengen Job Seeker TRP",
    whyStudy: [
      { icon: "🏛️", title: "Direct Dhaka Embassy", desc: "Submit your student visa file directly at the Embassy of Hungary in Dhaka. Zero third-country travel to New Delhi required!" },
      { icon: "🎓", title: "100% Full-Ride Scholarship", desc: "Stipendium Hungaricum covers 100% tuition fees, free dormitory accommodation, monthly stipends, and medical insurance." },
      { icon: "📜", title: "MOI English Waiver", desc: "Accepts Medium of Instruction (MOI) certificates from accredited Bangladeshi universities without requiring IELTS for eligible degrees." },
      { icon: "🌍", title: "29-Country Schengen Travel", desc: "Your Hungarian student residence permit gives you complete borderless mobility and legal part-time work rights across the Schengen zone." }
    ],
    solvency: [
      { title: "Embassy Living Solvency Amount", detail: "~â‚¬10,000 to â‚¬12,000 proof in student or legal sponsor account." },
      { title: "Bank Statement Maturity", detail: "3 to 6 months of steady transaction history proving source of income." },
      { title: "Sponsor Relationship Proof", detail: "Father/Mother or close relative with affidavit of financial support." },
      { title: "Tuition Deposit Policy", detail: "Paid directly to university escrow account following conditional offer issuance." }
    ],
    roadmap: [
      "Step 01: Free Academic Transcript & GPA Evaluation at Study First Info desks.",
      "Step 02: University Application Submission with MOI or IELTS score.",
      "Step 03: Pass online university oral motivation interview / math test (if applicable).",
      "Step 04: Receive official Letter of Acceptance and Tuition Fee Invoice.",
      "Step 05: 1-to-1 Intensive Mock Interview Coaching at our Banani or Sylhet office.",
      "Step 06: Submit visa file at the Embassy of Hungary in Dhaka.",
      "Step 07: Collect National D Visa & Airport greeting by CEO Md Jubed Miah in Europe."
    ],
    faqs: [
      { q: "Is an IELTS score mandatory for Hungary universities?", a: "Not for all universities! Institutions like Budapest Metropolitan University (METU), John von Neumann, and University of GyÅ‘r accept Medium of Instruction (MOI) certificates from recognized Bangladeshi universities." },
      { q: "Do I have to travel to India for the Hungary visa interview?", a: "No! All Bangladeshi students submit their visa files and complete biometrics/interviews directly at the Embassy of Hungary in Dhaka (Baridhara)." }
    ],
    universities: [
      {
        id: "metu",
        name: "Budapest Metropolitan University (METU)",
        badge: "Diamond Partner â€¢ Central Budapest",
        type: "Private University of Applied Sciences",
        tagline: "Highest visa approval record with Study First Info; modern business & media campus in Budapest.",
        intakes: "February 2027, September 2026",
        deadlines: "Application Start: 1 Aug | Deadline: 20 Nov for Feb Intake",
        tuitionUG: "â‚¬7,000 â€“ â‚¬7,800 / year",
        tuitionPG: "â‚¬7,200 â€“ â‚¬8,200 / year",
        scholarship: "Stipendium Hungaricum (100% funded) + University Fee Waivers",
        workRights: "24 hrs/week legal employment",
        entryUG: "GPA 50-60%: Foundation program | GPA 60-69%: Math test mandatory for Business | GPA 70%+: Direct entry without Math test. MOI or IELTS 5.5 accepted.",
        entryPG: "Bachelor CGPA 2.5+/4.0, MOI or IELTS 6.0",
        whyStudy: [
          "Study in central Budapest with ultra-modern campus facilities and creative studio labs.",
          "100% possible without IELTS: Medium of Instruction (MOI) fully recognized from Bangladesh.",
          "Visa application submitted and processed directly in Dhaka without travelling to New Delhi.",
          "High visa approval track record with dedicated university career counseling support.",
          "Study gap accepted with proper professional documentation."
        ],
        costAndBank: {
          monthlyCost: "â‚¬400 â€“ â‚¬700 / month (Dorms â‚¬150â€“â‚¬250/mo)",
          bankFundSingle: "~â‚¬10,000 â€“ â‚¬12,000 in student or sponsor's account",
          bankMaturity: "3 months bank statement recommended",
          familyFund: "Sponsor statement with proof of source of income"
        },
        careerAndPsw: "Post-Study Work Permit in Europe; full 29-country Schengen residence and mobility; Budapest is a burgeoning international corporate services hub.",
        partTimeJobs: "International students have full legal rights to work 24 hours per week during class semesters.",
        applicationSteps: [
          "Application start: 1 Aug | Application deadline: 20 Nov",
          "Submit academic certificates & MOI or IELTS test report",
          "Math test required only for students with GPA 60â€“69% (GPA 70%+ exempt)",
          "Receive official Acceptance Letter and Tuition Invoice",
          "Embassy visa file submission directly in Dhaka",
          "Interview at the Hungarian Embassy in Dhaka & receive National D Visa"
        ],
        programs: [
          { name: "BSc Business Administration and Management", level: "Bachelor (3.5 Yrs)", fee: "â‚¬7,000/yr" },
          { name: "BSc Commerce and Marketing", level: "Bachelor (3.5 Yrs)", fee: "â‚¬7,000/yr" },
          { name: "BA Communication and Media Studies", level: "Bachelor (3 Yrs)", fee: "â‚¬7,800/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (2 Yrs)", fee: "â‚¬8,200/yr" },
          { name: "MSc Marketing & Business Development", level: "Master (2 Yrs)", fee: "â‚¬7,200/yr" }
        ]
      },
      {
        id: "debrecen",
        name: "University of Debrecen",
        badge: "Historic 500-Year Heritage (Est. 1538)",
        type: "Comprehensive Public Research University",
        tagline: "Over 500 years of academic heritage. World-renowned faculties in Medicine, Computer Science, and Engineering.",
        intakes: "September 2026, February 2027",
        deadlines: "June 15 for September | Nov 15 for February",
        tuitionUG: "â‚¬6,000 â€“ â‚¬8,500 / year (Medicine up to â‚¬14,000)",
        tuitionPG: "â‚¬6,500 â€“ â‚¬9,000 / year",
        scholarship: "Full Stipendium Hungaricum (100% Free Tuition, Dorm, Insurance, Monthly Stipend)",
        workRights: "24 hrs/week legal work",
        entryUG: "HSC pass | IELTS 5.5â€“6.0 or MOI | Entrance test for Medicine & Engineering",
        entryPG: "Bachelor degree in relevant stream | IELTS 6.0 or MOI",
        whyStudy: [
          "Over 500 years of continuous academic heritage with Nobel laureate connections.",
          "100% full-ride funding through Stipendium Hungaricum with free accommodation and monthly stipend.",
          "Directly accredited medical and engineering degrees recognized across the EU, UK, and USA.",
          "Affordable campus life in Hungary's second-largest city."
        ],
        costAndBank: {
          monthlyCost: "â‚¬350 â€“ â‚¬550 / month (University dorms available)",
          bankFundSingle: "~â‚¬9,000 â€“ â‚¬11,000 living expense proof",
          bankMaturity: "3 months bank statement",
          familyFund: "Student or parents account"
        },
        careerAndPsw: "EU-wide medical license eligibility; international IT corporations in Debrecen (Continental, BMW plant, NI); Schengen job seeker permit.",
        partTimeJobs: "24 hours per week legal part-time employment during the academic term.",
        applicationSteps: [
          "Online application submission through university portal",
          "Entrance exam or skype interview for STEM/Medical",
          "Receipt of official Acceptance Letter",
          "Visa submission at Dhaka Hungarian Embassy",
          "National D Visa grant"
        ],
        programs: [
          { name: "BSc in Computer Science & Artificial Intelligence", level: "Bachelor (3 Yrs)", fee: "â‚¬6,500/yr" },
          { name: "BSc in Mechatronics & Mechanical Engineering", level: "Bachelor (3.5 Yrs)", fee: "â‚¬7,000/yr" },
          { name: "Doctor of General Medicine (6 Years)", level: "Integrated Master (6 Yrs)", fee: "â‚¬14,000/yr" }
        ]
      }
    ]
  },

  "united-kingdom": {
    id: "united-kingdom",
    code: "GB",
    flag: "🇬🇧",
    name: "United Kingdom",
    regionCode: "uk",
    regionBadge: "UNITED KINGDOM",
    tagline: "World-Renowned Heritage & 2-Year Graduate Visa",
    usp: "1-Year Master's Degree | 2-Year Graduate PSW | MOI Accepted from Reputed Bangladeshi Universities",
    highlights: [
      "2-Year Graduate Route Post-Study Work Permit",
      "Fast 1-Year Master's saving 50% tuition and living costs",
      "Â£3,000 to Â£10,000 Guaranteed & Merit Scholarships"
    ],
    livingCost: "Â£800 â€“ Â£1,200 / month outside London",
    institutionsCount: "8+ Listed",
    heroImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇬🇧 1-Year Fast-Track Masters",
    subBadge: "Up to Â£10,000 Scholarships â€¢ 2-Year Graduate Route PSW",
    heroHeading: "Study in the UK: 1-Year Masters & Â£10k Grants",
    heroDesc: "A 1-Year Master's degree in the UK saves a full year of living and tuition expenses while unlocking the 2-Year Graduate Route Post-Study Work Permit. Enjoy Â£3,000 to Â£10,000 merit scholarships and MOI waivers from 28+ Bangladeshi universities.",
    tuition: "Â£14,500 â€“ Â£22,000/yr",
    tuitionSub: "Up to Â£10,000 Grants Available",
    living: "Â£850 â€“ Â£1,200/mo",
    livingSub: "Lower outside London",
    work: "20 Hours / Week",
    workSub: "Full-time during holidays",
    psw: "2-Year Graduate Route",
    pswSub: "Post-Study Work Permit (PSW)",
    whyStudy: [
      { icon: "â±ï¸", title: "1-Year Fast Master's Degree", desc: "Graduate in just 12 months, saving a full year of tuition and living expenses compared to 2-year programs elsewhere." },
      { icon: "📜", title: "MOI Waiver from 28 Unis", desc: "Graduates from 28+ leading private and public Bangladeshi universities can waive IELTS with an official MOI certificate." },
      { icon: "💼", title: "2-Year Post-Study Work", desc: "Qualify for the 2-Year Graduate Route PSW allowing you to work full-time in any corporate sector across the UK." }
    ],
    solvency: [
      { title: "UKVI 28-Day Bank Rule", detail: "Tuition balance + living expenses held for 28 consecutive days." },
      { title: "Estimated Statement Amount", detail: "Approximately ~38 to 42 Lakh BDT in an approved commercial bank." }
    ],
    roadmap: [
      "Step 01: Profile evaluation & check MOI waiver eligibility.",
      "Step 02: University conditional offer letter issued within 1-2 weeks.",
      "Step 03: Prepare 28-day bank statement (~40 Lakh BDT).",
      "Step 04: Clear Pre-CAS interview & pay university CAS deposit.",
      "Step 05: Official CAS (Confirmation of Acceptance for Studies) letter issued.",
      "Step 06: Submit UKVI student visa application in Dhaka/Sylhet."
    ],
    faqs: [
      { q: "Can I apply to UK universities without IELTS?", a: "Yes! Many partner universities accept an official Medium of Instruction (MOI) certificate from 28+ recognized Bangladeshi universities." }
    ],
    universities: [
      {
        id: "hertfordshire",
        name: "University of Hertfordshire",
        badge: "25 Mins to Central London â€¢ Top 50 UK",
        type: "Public University",
        tagline: "Hatfield campus just 25 mins by train to Kings Cross London. Accepts CGPA down to 2.50 and genuine study gaps.",
        intakes: "January 2027, September 2026",
        deadlines: "Available Intake: January 2027 | App Deadline: Nov 2026",
        tuitionUG: "LLB (Hons): Â£17,450 / year (First year net: ~Â£14,200 after scholarship)",
        tuitionPG: "Â£18,600 â€“ Â£20,460 / year (1-Year Fast Master's)",
        scholarship: "Up to Â£3,000 Guaranteed Scholarship for Self-Funded Students",
        workRights: "20 hrs/week during term time",
        entryUG: "HSC GPA 4.0/5.0 (65%) | IELTS 6.0 / PTE 59 / MOI accepted",
        entryPG: "Bachelor CGPA 2.50/4.0 (UK 2:2 equivalent) | IELTS 6.0â€“6.5 / PTE 59 / MOI accepted",
        whyStudy: [
          "Only 25 minutes by direct train from Hatfield Campus to Central London (Kings Cross).",
          "Top 50 UK University (Guardian Guide 2026); sprawling 125-acre modern campus.",
          "Medium of Instruction (MOI) accepted for eligible graduates from reputed Bangladeshi universities.",
          "Low CGPA accepted (down to 2.50/4.00 for business and computing degrees)."
        ],
        costAndBank: {
          monthlyCost: "Â£850 â€“ Â£1,100 / month",
          bankFundSingle: "~à§³40 Lakh BDT held for 28 consecutive days in approved bank",
          bankMaturity: "28 consecutive days maturity prior to visa application",
          familyFund: "Student or parents bank account with relationship affidavit"
        },
        careerAndPsw: "2-Year Graduate Route Post-Study Work Permit (PSW). Direct access to London financial district, tech hub, and healthcare sectors.",
        partTimeJobs: "20 hours per week during term; full-time during holidays.",
        applicationSteps: [
          "Profile assessment with Study First Info senior counselors",
          "Direct university application submission",
          "Receive Conditional Offer Letter",
          "Attend Pre-CAS Credibility Interview",
          "Pay CAS Deposit & receive official CAS letter",
          "Submit UKVI student visa file"
        ],
        programs: [
          { name: "Bachelor of Laws LLB (Hons)", level: "Bachelor (3 Yrs)", fee: "Â£17,450/yr (Â£14,200 net)" },
          { name: "MSc Computer Science & Software Engineering", level: "Master (1 Yr)", fee: "Â£18,600/yr" },
          { name: "MSc Artificial Intelligence & Robotics", level: "Master (1 Yr)", fee: "Â£19,500/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (1 Yr)", fee: "Â£20,460/yr" }
        ]
      },
      {
        id: "cardiff",
        name: "Cardiff University (Russell Group)",
        badge: "Russell Group Member â€¢ QS Top 180",
        type: "World Elite Research University",
        tagline: "World top-180 research university. Cardiff is consistently ranked the UK's most affordable capital city.",
        intakes: "January 2027, September 2026",
        deadlines: "Sept to Oct application window | Payment Deadline: Nov/Dec",
        tuitionUG: "Â£21,000 â€“ Â£28,000 / year",
        tuitionPG: "Â£24,000 â€“ Â£33,000 / year (1-Year Master's)",
        scholarship: "Up to Â£8,000 â€“ Â£10,000 Postgraduate Scholarship Awards",
        workRights: "20 hrs/week during term time",
        entryUG: "HSC top grades / Foundation | IELTS 6.5",
        entryPG: "4-Year Bachelor with CGPA 3.0/4.0+ | IELTS 6.5",
        whyStudy: [
          "World Top 180 elite Russell Group research university.",
          "Generous postgraduate scholarships up to Â£8,000 â€“ Â£10,000 for January and September intakes.",
          "Cardiff is consistently ranked as the UK's most cost-effective capital city for student living."
        ],
        costAndBank: {
          monthlyCost: "Â£750 â€“ Â£1,000 / month",
          bankFundSingle: "~à§³40 Lakh BDT held for 28 consecutive days",
          bankMaturity: "28 consecutive days maturity",
          familyFund: "Student or parents bank account"
        },
        careerAndPsw: "2-Year Graduate Route Post-Study Work Permit. Elite brand recognition with top-tier corporate recruiters globally.",
        partTimeJobs: "20 hours per week during term time.",
        applicationSteps: [
          "Application submission for January or September intake",
          "Receive Conditional Offer Letter",
          "Pre-CAS interview & deposit payment",
          "CAS issuance & UKVI Visa lodgement"
        ],
        programs: [
          { name: "MSc Strategic Marketing & Analytics", level: "Master (1 Yr)", fee: "Â£25,500/yr" },
          { name: "MSc Data Science and Analytics", level: "Master (1 Yr)", fee: "Â£28,500/yr" },
          { name: "MSc Healthcare & Public Health", level: "Master (1 Yr)", fee: "Â£24,500/yr" }
        ]
      }
    ]
  },

  "malaysia": {
    id: "malaysia",
    code: "MY",
    flag: "🇲🇾",
    name: "Malaysia",
    regionCode: "asia",
    regionBadge: "SOUTHEAST ASIA",
    tagline: "Top Asian Education Hub & Save 70% Budget",
    usp: "Official Partner of UniSZA | 1st Year Cost Only à§³5.5 Lakh | UK & US Credit Transfers",
    highlights: [
      "Top 10 Public University (UniSZA): 1st year official cost only à§³5.5 Lakh BDT",
      "MILA University: Guaranteed 50% Flat Scholarship on entire degree",
      "Save 60%â€“80% compared with UK, USA, or Australia"
    ],
    livingCost: "RM 1,200 â€“ RM 2,000 / month",
    institutionsCount: "6+ Listed",
    heroImg: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇲🇾 Top ASEAN Higher Education Hub",
    subBadge: "100% Medical Waivers â€¢ MILA 50% Flat â€¢ UniSZA ~à§³5.5 Lakh",
    heroHeading: "Study in Malaysia: 100% Scholarships & Fast EMGS",
    heroDesc: "Earn accredited UK and Australian dual degrees at 70% lower budgets. Benefit from fast 3 to 4 week EMGS visa clearance, 100% tuition-free healthcare scholarships, and public university fees starting from only ~à§³5.5 Lakh BDT for the first year.",
    tuition: "RM 10,500 â€“ RM 18,000/yr",
    tuitionSub: "~à§³3.12 Lakh BDT/yr (UniSZA Public)",
    living: "RM 1,200 â€“ RM 1,800/mo",
    livingSub: "~à§³30k â€“ à§³45k BDT/mo",
    work: "Permitted on Vacations",
    workSub: "Semester break work allowed",
    psw: "Fast eVAL Clearance",
    pswSub: "3 to 4 week processing",
    whyStudy: [
      { icon: "🏥", title: "100% Medical & Healthcare Quota", desc: "Zero tuition fees for Bachelor, Master & PhD in Nursing, Physiotherapy, Pharmacy, and MBA Healthcare Management." },
      { icon: "🏛️", title: "UniSZA Public University Partner", desc: "Top 10 public university in Malaysia with total first-year official expenses of only ~à§³5.5 Lakh BDT." },
      { icon: "🎓", title: "MILA 50% Flat Scholarship", desc: "Guaranteed 50% flat discount on entire course fees across all undergraduate and postgraduate degrees." }
    ],
    solvency: [
      { title: "Bank Statement Requirement", detail: "Very flexible: ~à§³5 to à§³7 Lakh BDT proof of funds in student or parent account." },
      { title: "EMGS Visa Processing Fee", detail: "Approximately ~RM 3,000 to RM 6,000 payable directly after offer letter." }
    ],
    roadmap: [
      "Step 01: Profile assessment and university shortlisting.",
      "Step 02: University Offer Letter released within 3-5 working days.",
      "Step 03: EMGS visa file submission in Malaysia.",
      "Step 04: eVAL (Electronic Visa Approval Letter) issued within ~3-4 weeks.",
      "Step 05: Single Entry Visa (SEV) stamped at Malaysian High Commission Dhaka."
    ],
    faqs: [
      { q: "What is the total first-year budget for UniSZA?", a: "The total official first-year cost at UniSZA is approximately ~à§³5.5 Lakh BDT." }
    ],
    universities: [
      {
        id: "unisza",
        name: "Universiti Sultan Zainal Abidin (UniSZA)",
        badge: "Official Direct Partner â€¢ Top 10 Public",
        type: "Prestigious Government Public University",
        tagline: "Subsidized government public university. 1st year total official expenses only ~à§³5.5 Lakh BDT.",
        intakes: "September 2026, February 2027",
        deadlines: "Rolling admissions: ~2 months prior to intake start",
        tuitionUG: "RM 10,500 / year (~à§³3.12 Lakh BDT/yr)",
        tuitionPG: "Master: RM 25,000 total | PhD: RM 27,000â€“RM 43,000 total",
        scholarship: "Subsidized Public University Fees & 100% EMGS Packages",
        workRights: "Permitted during semester breaks & vacations",
        entryUG: "HSC GPA 3.0+ | IELTS 5.5",
        entryPG: "Bachelor CGPA 2.50+ | IELTS 5.5 or MOI Accepted for Research Master's & PhD",
        whyStudy: [
          "Ranked among the Top 10 Public Universities in Malaysia (THE World University Rankings 2026).",
          "Official Direct Recruitment Partner: Study First Info Ltd. provides seamless end-to-end processing.",
          "1st year total official expenses only à§³5.5 Lakh BDT (includes Tuition, EMGS, Admin, Registration).",
          "Medium of Instruction (MOI) fully accepted for Research Master's and PhD programs."
        ],
        costAndBank: {
          monthlyCost: "RM 1,000 â€“ RM 1,500 / month (~à§³25,000 â€“ à§³38,000 BDT)",
          bankFundSingle: "Very flexible: ~à§³5 Lakh to à§³7 Lakh BDT proof of funds",
          bankMaturity: "Recent 3 months bank statement",
          familyFund: "Student or parental sponsorship accepted"
        },
        careerAndPsw: "High employability in ASEAN multinational hubs, corporate Islamic finance, and smooth credit progression to Western institutions.",
        partTimeJobs: "Allowed during semester breaks and academic vacations.",
        applicationSteps: [
          "Profile assessment with Study First Info (official UniSZA partner)",
          "Issue official University Offer Letter within 5-7 working days",
          "EMGS visa processing submission in Malaysia (~4-6 weeks)",
          "Issuance of eVAL (Electronic Visa Approval Letter)",
          "Single Entry Visa (SEV) endorsement at Malaysian Embassy in Dhaka"
        ],
        programs: [
          { name: "Bachelor of Business Administration (Risk & Takaful) Hons", level: "Bachelor (3.5 Yrs)", fee: "RM 10,500/yr" },
          { name: "Bachelor of Information Technology (Informatics) Hons", level: "Bachelor (3.5 Yrs)", fee: "RM 10,500/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (2 Yrs)", fee: "RM 25,000 total" }
        ]
      },
      {
        id: "mila",
        name: "MILA University",
        badge: "50% FLAT Guaranteed Scholarship",
        type: "Private University",
        tagline: "Spacious green campus in Nilai. Complete 3 to 3.5 year fast-track bachelor degrees at 50% flat discount.",
        intakes: "October 2026, January 2027",
        deadlines: "6 weeks prior to intake launch",
        tuitionUG: "RM 12,000 â€“ RM 18,000 / year (Net)",
        tuitionPG: "RM 14,000 â€“ RM 20,000 / year",
        scholarship: "50% Flat Scholarship on Entire Degree (100% waiver for GPA 75%+)",
        workRights: "Permitted during vacations",
        entryUG: "HSC pass | IELTS 5.0â€“5.5 or MOI accepted",
        entryPG: "Bachelor degree | MOI or IELTS 5.5",
        whyStudy: [
          "Guaranteed 50% FLAT scholarship across the entire program duration for UG & PG.",
          "100% Scholarship (Zero Tuition Fee) available for strong academic profiles (75%+ & IELTS 5.5).",
          "Fast graduation: complete a 3 to 3.5 year bachelor's degree."
        ],
        costAndBank: {
          monthlyCost: "RM 1,200 â€“ RM 1,800 / month",
          bankFundSingle: "~à§³5 Lakh to à§³6 Lakh BDT",
          bankMaturity: "Recent bank statement",
          familyFund: "Student or parents account"
        },
        careerAndPsw: "High regional placement rate; seamless credit transfer pathways to the UK, USA, and Australia.",
        partTimeJobs: "Permitted during semester vacations.",
        applicationSteps: [
          "Profile evaluation & scholarship confirmation",
          "Offer letter issuance within 3 days",
          "EMGS fee submission & visa approval",
          "eVAL issuance & flight to Malaysia"
        ],
        programs: [
          { name: "BSc (Hons) in Computer Science & Artificial Intelligence", level: "Bachelor (3 Yrs)", fee: "RM 15,000/yr" },
          { name: "Bachelor of Business Management", level: "Bachelor (3 Yrs)", fee: "RM 13,500/yr" },
          { name: "Fast-Track MBA (Master of Business Administration)", level: "Master (1 Yr)", fee: "RM 16,000 total" }
        ]
      }
    ]
  },

  "lithuania": {
    id: "lithuania",
    code: "LT",
    flag: "🇱🇹",
    name: "Lithuania",
    regionCode: "europe",
    regionBadge: "EUROPE (SCHENGEN)",
    tagline: "EU Schengen Degree & Ultra Low Tuition Fees",
    usp: "Starting Tuition â‚¬3,500/Year | European TRP Card | English-Taught Degrees",
    highlights: [
      "Affordable European Union degrees starting from only â‚¬3,500/year",
      "Temporary Residence Permit (TRP) with full European mobility",
      "Part-time legal work rights: 20 hours/week"
    ],
    livingCost: "â‚¬400 â€“ â‚¬700 / month",
    institutionsCount: "7+ Listed",
    heroImg: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇱🇹 Affordable Schengen Destination",
    subBadge: "Tuition from â‚¬3,500/Yr â€¢ European TRP Residence Permit",
    heroHeading: "Study in Lithuania: Affordable Tuition & Full Schengen Rights",
    heroDesc: "Study in the vibrant Baltic tech and FinTech hub of Vilnius and Kaunas. Complete European Union accredited degrees starting from only â‚¬3,500 per year with legal 20 hours/week work rights and 29-country Schengen mobility.",
    tuition: "â‚¬3,500 â€“ â‚¬4,500/yr",
    tuitionSub: "Affordable EU Degree",
    living: "â‚¬400 â€“ â‚¬700/mo",
    livingSub: "Dormitories from â‚¬150/mo",
    work: "20 Hours / Week",
    workSub: "Legal work rights",
    psw: "1-Year Job Seeker TRP",
    pswSub: "EU residence extension",
    whyStudy: [
      { icon: "💵", title: "Low Tuition Rates", desc: "European Union recognized bachelor degrees starting from only â‚¬3,500 to â‚¬4,500 per year." },
      { icon: "🌍", title: "Schengen TRP Card", desc: "Temporary Residence Permit granting complete borderless mobility across 29 Schengen countries." }
    ],
    solvency: [
      { title: "Bank Solvency Proof", detail: "Proof of ~â‚¬7,000 to â‚¬9,000 in student or sponsor account." }
    ],
    roadmap: [
      "Step 01: Profile review & SKVC credential recognition check.",
      "Step 02: University application & motivation interview.",
      "Step 03: Acceptance letter and National D Visa file submission."
    ],
    faqs: [
      { q: "Is IELTS mandatory for Lithuania?", a: "SMK and VBC accept IELTS 5.5, PTE 59, or Medium of Instruction (MOI) certificates." }
    ],
    universities: [
      {
        id: "smk",
        name: "SMK College of Applied Sciences",
        badge: "Largest Private Applied College",
        type: "College of Applied Sciences",
        tagline: "Campuses in Vilnius, Kaunas, and Klaipeda; project-based education with direct company internships.",
        intakes: "February 2027 (Spring), September 2026",
        deadlines: "Spring Intake Deadline: 1 December",
        tuitionUG: "â‚¬3,500 â€“ â‚¬4,500 / year (3 Years)",
        tuitionPG: "N/A (Bachelor Specialist)",
        scholarship: "Institutional merit discounts & performance grants",
        workRights: "20 hrs/week legal work",
        entryUG: "Higher Secondary (12 years) GPA 4.5/5.0 or 3.5/4.0 | IELTS 5.5, PTE 59, or MOI",
        entryPG: "N/A",
        whyStudy: [
          "Lithuania's largest private college of applied sciences with modern campuses in Vilnius, Kaunas, and Klaipeda.",
          "Highly practical syllabus directly oriented toward European tech, game design, and business jobs.",
          "Affordable tuition starting from only â‚¬3,500 per year."
        ],
        costAndBank: {
          monthlyCost: "â‚¬400 â€“ â‚¬700 / month (Dorms from â‚¬150/mo)",
          bankFundSingle: "~â‚¬7,000 â€“ â‚¬9,000 in student or sponsor account",
          bankMaturity: "3 months bank statement",
          familyFund: "Student or parents bank statement"
        },
        careerAndPsw: "Lithuanian Temporary Residence Permit (TRP) allowing Schengen mobility and European job seeker extension.",
        partTimeJobs: "20 hours per week legal part-time employment during study.",
        applicationSteps: [
          "Submit HSC marksheet and IELTS / PTE score",
          "Pass online motivation interview with college faculty",
          "SKVC educational credential recognition in Lithuania",
          "National D Visa lodgement and TRP issuance"
        ],
        programs: [
          { name: "Information and Cyber Security", level: "Bachelor (3 Yrs)", fee: "â‚¬4,400/yr" },
          { name: "Programming and Multimedia", level: "Bachelor (3 Yrs)", fee: "â‚¬4,400/yr" },
          { name: "International Business", level: "Bachelor (3 Yrs)", fee: "â‚¬3,500/yr" }
        ]
      }
    ]
  },

  "cyprus": {
    id: "cyprus",
    code: "CY",
    flag: "🇨🇾",
    name: "Cyprus",
    regionCode: "europe",
    regionBadge: "MEDITERRANEAN EUROPE",
    tagline: "Affordable Mediterranean Degree & 43% Flat Discount",
    usp: "Deposit Only â‚¬3,400 (~à§³4.5 Lakh BDT) | 43% Flat Tuition Discount | MOI Accepted",
    highlights: [
      "Initial deposit only â‚¬3,400 (~4.5 Lakh BDT)",
      "Guaranteed 43% to 45% tuition discount for international applicants",
      "IELTS waiver possible with Medium of Instruction (MOI)"
    ],
    livingCost: "â‚¬350 â€“ â‚¬550 / month",
    institutionsCount: "4+ Listed",
    heroImg: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇨🇾 Mediterranean Low Budget Hub",
    subBadge: "Deposit Only â‚¬3,400 (~à§³4.5 Lakh BDT) â€¢ 43% Flat Waiver",
    heroHeading: "Study in Cyprus: 43% Flat Waiver & Low Deposit",
    heroDesc: "Study First Info holds a direct institutional contract with Cyprus International University (CIU). Fly to Europe with an initial deposit of only â‚¬3,400 (~4.5 Lakh BDT), guaranteed 43% flat tuition discounts, and IELTS 5.0 or MOI waivers.",
    tuition: "â‚¬3,000 â€“ â‚¬4,200/yr",
    tuitionSub: "After 43% Flat Discount",
    living: "â‚¬350 â€“ â‚¬500/mo",
    livingSub: "Affordable Mediterranean living",
    work: "20 Hours / Week",
    workSub: "In designated commercial sectors",
    psw: "Credit Mobility",
    pswSub: "Direct transfer to UK & Europe",
    whyStudy: [
      { icon: "💰", title: "43% Flat Tuition Scholarship", desc: "Exclusive direct contract with Cyprus International University saving nearly ~â‚¬4,300 across your entire degree." },
      { icon: "âœˆï¸", title: "Lowest Initial Deposit", desc: "Start your file and fly with an initial deposit of only â‚¬3,400 (~4.5 Lakh BDT). Pay remaining fees in easy installments." }
    ],
    solvency: [
      { title: "Initial Payable Deposit", detail: "Only â‚¬3,400 to obtain official university acceptance and immigration clearance." }
    ],
    roadmap: [
      "Step 01: Submit academic transcripts & passport copy to Study First Info.",
      "Step 02: University issues conditional offer letter with 43% flat scholarship in 3-5 days.",
      "Step 03: Pay initial deposit of â‚¬3,400 into official university escrow.",
      "Step 04: Immigration clearance and visa approval letter issued."
    ],
    faqs: [
      { q: "What is the initial deposit required for Cyprus?", a: "The initial deposit to obtain university acceptance and visa clearance is only â‚¬3,400 (approximately ~à§³4.5 Lakh BDT)." }
    ],
    universities: [
      {
        id: "ciu",
        name: "Cyprus International University (CIU)",
        badge: "Direct Contract Partner â€¢ 43% Flat Discount",
        type: "International University",
        tagline: "Ultra-modern 300-acre Mediterranean campus. High visa issuance rate with minimal financial friction.",
        intakes: "September 2026, February 2027",
        deadlines: "Rolling monthly admissions",
        tuitionUG: "â‚¬3,000 â€“ â‚¬4,200 / year (Net fee)",
        tuitionPG: "â‚¬3,500 â€“ â‚¬5,000 / year",
        scholarship: "Guaranteed 43% Flat Scholarship (~â‚¬4,300 total value)",
        workRights: "20 hrs/week in designated sectors",
        entryUG: "HSC pass | IELTS 4.5â€“5.0 or MOI accepted",
        entryPG: "Bachelor pass | MOI or IELTS 5.0",
        whyStudy: [
          "Guaranteed 43% flat tuition scholarship on all undergraduate degrees.",
          "Lowest initial deposit in Europe: only â‚¬3,400 (~à§³4.5 Lakh BDT) to process visa.",
          "Credit transfer options available to UK and European partner institutions."
        ],
        costAndBank: {
          monthlyCost: "â‚¬350 â€“ â‚¬550 / month",
          bankFundSingle: "Very flexible: ~à§³3.5 Lakh to à§³5 Lakh BDT",
          bankMaturity: "Recent 3 months bank statement",
          familyFund: "Student or parents account"
        },
        careerAndPsw: "Direct stepping stone to European hospitality, tourism, IT, and transfer to UK degrees.",
        partTimeJobs: "20 hours per week permitted in designated campus and hospitality services.",
        applicationSteps: [
          "Quick documentation check (MOI or basic IELTS)",
          "Offer letter issuance",
          "Pay initial deposit of â‚¬3,400",
          "Visa clearance confirmation"
        ],
        programs: [
          { name: "BSc in Computer Engineering & Software", level: "Bachelor (4 Yrs)", fee: "â‚¬3,500/yr" },
          { name: "BA in Business Administration", level: "Bachelor (4 Yrs)", fee: "â‚¬3,200/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (1.5 Yrs)", fee: "â‚¬3,800/yr" }
        ]
      }
    ]
  },

  "greece": {
    id: "greece",
    code: "GR",
    flag: "🇬🇷",
    name: "Greece",
    regionCode: "europe",
    regionBadge: "EUROPE (SCHENGEN)",
    tagline: "Cradle of Civilization & Pay Tuition After Visa",
    usp: "Pay Tuition Fee After Visa Approval | ~90% Visa Ratio | Full Schengen Travel",
    highlights: [
      "Pay university tuition fee after visa is approved",
      "High visa success ratio (~90%)",
      "Full Schengen mobility across Europe"
    ],
    livingCost: "â‚¬450 â€“ â‚¬700 / month",
    institutionsCount: "3+ Listed",
    heroImg: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇬🇷 Pay Tuition After Visa Hub",
    subBadge: "90% Visa Ratio â€¢ Pay Fees After Visa Confirmation",
    heroHeading: "Study in Greece: Pay Fees After Visa & Schengen Rights",
    heroDesc: "Study in Greece with minimal financial risk: pay university tuition fees strictly after your Schengen visa is confirmed. Enjoy an exceptional 90% visa approval track record and complete borderless travel throughout 29 Schengen states.",
    tuition: "â‚¬3,500 â€“ â‚¬6,500/yr",
    tuitionSub: "Pay strictly after visa",
    living: "â‚¬450 â€“ â‚¬700/mo",
    livingSub: "Affordable Mediterranean cost",
    work: "20 Hours / Week",
    workSub: "Legal work rights",
    psw: "Schengen Mobility",
    pswSub: "Full European job access",
    whyStudy: [
      { icon: "🛡️", title: "Pay Tuition After Visa", desc: "Zero financial loss risk: pay tuition fees only after your official European visa approval." },
      { icon: "📈", title: "~90% Visa Approval", desc: "One of the highest visa success records for Bangladeshi students in the European Schengen area." }
    ],
    solvency: [
      { title: "Bank Solvency Amount", detail: "~â‚¬7,000 to â‚¬9,000 living expense proof in student or parent account." }
    ],
    roadmap: [
      "Step 01: Submit academic certificates for conditional offer.",
      "Step 02: Document apostille and legal verification.",
      "Step 03: Visa submission at VFS.",
      "Step 04: Pay tuition fees after visa approval and fly."
    ],
    faqs: [
      { q: "Do I pay tuition before the visa?", a: "No! At our partner institutions in Greece, you pay tuition fees only after your visa is approved." }
    ],
    universities: [
      {
        id: "greece-partners",
        name: "Athens International Partner Colleges",
        badge: "Pay Tuition After Visa",
        type: "Accredited Higher Education Partner",
        tagline: "Pay tuition only after your visa is issued; prime gateway to EU shipping and tourism hospitality jobs.",
        intakes: "October 2026, February 2027",
        deadlines: "6 weeks prior to intake",
        tuitionUG: "â‚¬3,500 â€“ â‚¬6,500 / year",
        tuitionPG: "â‚¬4,000 â€“ â‚¬7,000 / year",
        scholarship: "University tuition discounts based on merit",
        workRights: "20 hrs/week legal employment",
        entryUG: "HSC / A-Level pass | IELTS 5.0â€“5.5 or MOI",
        entryPG: "Bachelor degree pass | MOI or IELTS 5.5",
        whyStudy: [
          "Pay tuition fees ONLY after your European visa is approved.",
          "High visa success rate (approx 90%) for Bangladeshi students.",
          "Full Schengen visa granting free movement across 29 European countries."
        ],
        costAndBank: {
          monthlyCost: "â‚¬450 â€“ â‚¬700 / month",
          bankFundSingle: "~â‚¬7,000 â€“ â‚¬9,000 living expense proof",
          bankMaturity: "3 months bank statement",
          familyFund: "Student or parents account"
        },
        careerAndPsw: "European residency; careers in Greek shipping lines, logistics, and tourism conglomerates.",
        partTimeJobs: "20 hours per week legal employment.",
        applicationSteps: [
          "Submit academic certificates for conditional offer",
          "Document apostille and legal verification",
          "Visa submission at VFS",
          "Pay tuition fees after visa approval"
        ],
        programs: [
          { name: "BSc in Maritime Management & Shipping Logistics", level: "Bachelor (3 Yrs)", fee: "â‚¬4,500/yr" },
          { name: "BA in International Tourism & Hospitality", level: "Bachelor (3 Yrs)", fee: "â‚¬3,800/yr" },
          { name: "BSc in Business & Information Systems", level: "Bachelor (3 Yrs)", fee: "â‚¬3,900/yr" }
        ]
      }
    ]
  },

  "germany": {
    id: "germany",
    code: "DE",
    flag: "🇩🇪",
    name: "Germany",
    regionCode: "europe",
    regionBadge: "EUROPE (SCHENGEN)",
    tagline: "Zero Tuition Public Universities & High Tech",
    usp: "100% Tuition-Free Public Seats | 18-Month Job Seeker Visa | Top Global Economy",
    highlights: [
      "100% Tuition-Free public university seats across Germany",
      "18-Month Post-Study Work Permit across 29 EU nations",
      "Official Blocked Account (â‚¬11,208 to â‚¬11,904) setup support"
    ],
    livingCost: "â‚¬850 â€“ â‚¬1,000 / month",
    institutionsCount: "5+ Listed",
    heroImg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇩🇪 100% Tuition-Free Public Universities",
    subBadge: "No Tuition Fees Across All 16 German Federal States",
    heroHeading: "Study in Germany: Zero Tuition Fees & High-Tech Careers",
    heroDesc: "Germany offers world-leading engineering, computing, and business degrees at 100% tuition-free public universities. Benefit from 20 hours/week part-time employment, an 18-month job seeker visa, and direct pathways to EU permanent residency.",
    tuition: "0â‚¬ (Tuition-Free)",
    tuitionSub: "Only minor semester contribution",
    living: "â‚¬850 â€“ â‚¬1,000/mo",
    livingSub: "Covered by Blocked Account",
    work: "20 Hours / Week",
    workSub: "120 full days / 240 half days",
    psw: "18-Month Post Study Work",
    pswSub: "Direct EU Blue Card pathway",
    whyStudy: [
      { icon: "💸", title: "100% Tuition-Free Education", desc: "Public universities in Germany charge zero tuition fees for both domestic and international students." },
      { icon: "🏭", title: "Economic Powerhouse of Europe", desc: "Home to global industrial giants (Siemens, BMW, Bosch, SAP) offering extensive internships." }
    ],
    solvency: [
      { title: "German Blocked Account (Sperrkonto)", detail: "Statutory amount of â‚¬11,208 to â‚¬11,904 deposited in verified escrow." }
    ],
    roadmap: [
      "Step 01: Profile review & 13-year education equivalency check.",
      "Step 02: Uni-Assist document submission & VPD certificate clearance.",
      "Step 03: Official University Zulassung (Letter of Admission) received.",
      "Step 04: Blocked Account setup & Dhaka German Embassy visa interview."
    ],
    faqs: [
      { q: "Can I study in Germany tuition-free?", a: "Yes! All public universities in Germany charge 0 Euro tuition fees." }
    ],
    universities: [
      {
        id: "tum-partners",
        name: "Technical University of Munich (TUM) & Public Partners",
        badge: "Top 50 QS World Ranked â€¢ Public University",
        type: "Public University",
        tagline: "Germany's top engineering university. Zero tuition fees with world-class artificial intelligence and robotics labs.",
        intakes: "Winter (October), Summer (April)",
        deadlines: "July 15 for Winter | Jan 15 for Summer",
        tuitionUG: "â‚¬0 Tuition Fee (~â‚¬150/sem contribution)",
        tuitionPG: "â‚¬0 Tuition Fee (~â‚¬150/sem contribution)",
        scholarship: "DAAD Merit Scholarships & Industrial Research Grants",
        workRights: "20 Hours / Week",
        entryUG: "13 years education (or Studienkolleg) | IELTS 6.5 or German B2",
        entryPG: "Bachelor CGPA 3.0+/4.0 | IELTS 6.5 or German B2/C1",
        whyStudy: [
          "100% tuition-free higher education at a global top 50 institution.",
          "World capital of automotive and mechanical engineering.",
          "Direct access to paid working-student (Werkstudent) jobs paying â‚¬14â€“â‚¬20/hr."
        ],
        costAndBank: {
          monthlyCost: "â‚¬850 â€“ â‚¬1,050 / month",
          bankFundSingle: "â‚¬11,208 Blocked Account (Sperrkonto)",
          bankMaturity: "Deposited prior to visa interview",
          familyFund: "Sponsor or self-funded blocked account"
        },
        careerAndPsw: "18-month job seeker visa (Aufenthaltserlaubnis zur Arbeitsplatzsuche) leading to an EU Blue Card.",
        partTimeJobs: "120 full days or 240 half days per calendar year.",
        applicationSteps: [
          "VPD clearance through Uni-Assist",
          "University direct application",
          "Admission letter (Zulassung) issued",
          "Blocked account activation & embassy appointment"
        ],
        programs: [
          { name: "BSc in Informatics / Computer Science", level: "Bachelor (3 Yrs)", fee: "â‚¬0 Tuition" },
          { name: "MSc in Robotics, Cognition & Intelligence", level: "Master (2 Yrs)", fee: "â‚¬0 Tuition" },
          { name: "MSc in Mechanical & Automotive Engineering", level: "Master (2 Yrs)", fee: "â‚¬0 Tuition" }
        ]
      }
    ]
  },

  "china": {
    id: "china",
    code: "CN",
    flag: "🇨🇳",
    name: "China",
    regionCode: "asia",
    regionBadge: "EAST ASIA",
    tagline: "100% CSC Full-Ride Scholarships & High-Tech Campuses",
    usp: "100% Tuition Waiver + Free Dorm + Monthly Stipend (Type A & B CSC Schemes)",
    highlights: [
      "100% fully funded Chinese Government Scholarships (CSC)",
      "Zero tuition + free on-campus single/double accommodation",
      "Monthly living allowance from 2,500 to 3,500 RMB (~à§³40kâ€“à§³55k BDT)"
    ],
    livingCost: "2,000 â€“ 3,500 RMB / month",
    institutionsCount: "15+ Listed",
    heroImg: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇨🇳 100% CSC Full-Ride Hub",
    subBadge: "Zero Tuition â€¢ Free Dormitory â€¢ Monthly Cash Stipend",
    heroHeading: "Study in China: 100% Full-Ride Scholarships & Global Tech",
    heroDesc: "Study at world-class Chinese universities with comprehensive Chinese Government Scholarships (CSC) and provincial awards. Enjoy zero tuition fees, verified campus accommodation, and generous monthly cash allowances.",
    tuition: "100% Full Waiver (CSC)",
    tuitionSub: "Or 12,000â€“25,000 RMB self-funded",
    living: "Covered by Stipend",
    livingSub: "2,500â€“3,500 RMB monthly stipend",
    work: "Campus Research & Internships",
    workSub: "Permitted during study",
    psw: "High-Tech Z-Visa Route",
    pswSub: "Direct MNC recruitment",
    whyStudy: [
      { icon: "🎓", title: "100% Full-Ride Funding", desc: "CSC scholarships cover full tuition, campus housing, and monthly living stipends for bachelor, master, and doctoral scholars." },
      { icon: "âš¡", title: "Global STEM & AI Leader", desc: "Top world-ranked labs in artificial intelligence, civil engineering, robotics, and international trade." }
    ],
    solvency: [
      { title: "Bank Solvency Proof", detail: "CSC Full-Ride scholars are exempt from large bank solvency requirements (~à§³3 to à§³5 Lakh BDT statement sufficient)." }
    ],
    roadmap: [
      "Step 01: Pre-admission evaluation & CSC category matching.",
      "Step 02: Professor acceptance letter & university direct portal.",
      "Step 03: JW202 / JW201 visa authorization notice issuance.",
      "Step 04: Dhaka Chinese Visa Application Center submission."
    ],
    faqs: [
      { q: "Is English taught in China?", a: "Yes! Hundreds of MBBS, Engineering, and Business degrees are taught 100% in English." }
    ],
    universities: [
      {
        id: "china-stem",
        name: "Top Chinese National Key Universities",
        badge: "100% CSC Full Ride",
        type: "National Double First-Class Partner",
        tagline: "Comprehensive Chinese Government Scholarships covering 100% tuition, dorm, and monthly stipend.",
        intakes: "September Intake (Annual)",
        deadlines: "April 15 for CSC Schemes",
        tuitionUG: "100% Scholarship / 18,000 RMB",
        tuitionPG: "100% Scholarship / 24,000 RMB",
        scholarship: "Chinese Government Scholarship (Type A/B) + Provincial",
        workRights: "Designated research and internship permits",
        entryUG: "HSC GPA 4.50+ / 5.00 | English proficiency certificate",
        entryPG: "Bachelor CGPA 3.0+ / 4.0 | MOI accepted",
        whyStudy: ["Full financial security with monthly stipend", "Modern research campuses", "Global industry linkages"],
        costAndBank: {
          monthlyCost: "Covered by monthly stipend (~3,000 RMB)",
          bankFundSingle: "Nominal: ~à§³3 Lakh to à§³5 Lakh BDT",
          bankMaturity: "1 to 3 months statement",
          familyFund: "Student or parents"
        },
        careerAndPsw: "Prime career placement with Chinese and multinational engineering, tech, and trade conglomerates.",
        partTimeJobs: "On-campus teaching assistantships and authorized internships.",
        applicationSteps: ["CSC online portal", "University review", "JW202 issuance", "Visa stamp"],
        programs: [
          { name: "BSc in Computer Science & Artificial Intelligence", level: "Bachelor (4 Yrs)", fee: "100% CSC" },
          { name: "MSc in International Trade & Cross-Border Logistics", level: "Master (2.5 Yrs)", fee: "100% CSC" },
          { name: "MSc in Civil & Environmental Engineering", level: "Master (2.5 Yrs)", fee: "100% CSC" }
        ]
      }
    ]
  },

  "russia": {
    id: "russia",
    code: "RU",
    flag: "🇷🇺",
    name: "Russia",
    regionCode: "europe",
    regionBadge: "EURASIA",
    tagline: "Pay Tuition After Visa & 100% State Quota Funding",
    usp: "Pay Tuition Fees After Visa | Direct Dhaka Embassy Submission | Monthly 15k Ruble Stipend",
    highlights: [
      "Pay tuition fees strictly after visa is stamped",
      "Direct visa processing at the Russian Embassy in Dhaka",
      "100% Russian State Quota scholarships available"
    ],
    livingCost: "$250 â€“ $400 / month",
    institutionsCount: "10+ Listed",
    heroImg: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇷🇺 Pay After Visa Destination",
    subBadge: "Dhaka Embassy Visa â€¢ Pay Tuition Strictly After Visa",
    heroHeading: "Study in Russia: Pay Fees After Visa & State Quotas",
    heroDesc: "Study at premier Russian state universities with zero financial risk: pay university tuition fees strictly after receiving your visa sticker from the Russian Embassy in Dhaka.",
    tuition: "$1,800 â€“ $4,500/yr",
    tuitionSub: "Pay strictly after visa",
    living: "$250 â€“ $400/mo",
    livingSub: "Extremely affordable dorms & living",
    work: "20 Hours / Week",
    workSub: "Legal work rights permitted",
    psw: "Eurasian Work Permit",
    pswSub: "Direct transition to work visa",
    whyStudy: [
      { icon: "🛡️", title: "Pay Tuition After Visa", desc: "No university fee transfer is required before visa issuance. You pay only after your visa is secured." },
      { icon: "🏛️", title: "Direct Dhaka Embassy", desc: "Complete consular processing in Dhaka without needing to travel to India." }
    ],
    solvency: [
      { title: "Bank Solvency Proof", detail: "Very accessible: ~à§³5 Lakh to à§³7 Lakh BDT bank balance." }
    ],
    roadmap: [
      "Step 01: Application submission for Russian Ministry Invitation Letter.",
      "Step 02: Official Invitation issued by the Ministry of Internal Affairs.",
      "Step 03: Direct visa stamping at Russian Embassy Dhaka.",
      "Step 04: Fly to Russia and pay tuition fee on campus."
    ],
    faqs: [
      { q: "Do I pay tuition before the visa?", a: "No! You pay your tuition fees after getting your visa and arriving in Russia." }
    ],
    universities: [
      {
        id: "novosibirsk-state",
        name: "Novosibirsk State University & State Tech",
        badge: "Pay After Visa",
        type: "Russian State Research University",
        tagline: "Pay tuition only after visa approval; top global ranking in Physics, IT, Medicine, and Engineering.",
        intakes: "September & October",
        deadlines: "August 15",
        tuitionUG: "$2,200 â€“ $3,800 / year",
        tuitionPG: "$2,500 â€“ $4,200 / year",
        scholarship: "Russian Government State Quota (100% Tuition + 15,000 Ruble Stipend)",
        workRights: "20 hours/week legal work permit",
        entryUG: "HSC 60%+ | English Medium or 1-Year Preparatory",
        entryPG: "Bachelor Degree | MOI accepted",
        whyStudy: ["Pay after visa security", "Low living expense ($250/mo)", "Globally recognized degree"],
        costAndBank: {
          monthlyCost: "$250 â€“ $400 / month",
          bankFundSingle: "~à§³5 Lakh to à§³7 Lakh BDT",
          bankMaturity: "Recent 1-3 months",
          familyFund: "Student or sponsor"
        },
        careerAndPsw: "High demand in engineering, scientific research, and global software companies.",
        partTimeJobs: "Campus laboratories, English tutoring, and IT support.",
        applicationSteps: ["Ministry invitation letter", "Medical tests", "Dhaka embassy visa", "Pay tuition in Russia"],
        programs: [
          { name: "BSc in General Medicine (MBBS in English)", level: "Bachelor (6 Yrs)", fee: "$3,800/yr" },
          { name: "BSc in Computer Science & Applied Mathematics", level: "Bachelor (4 Yrs)", fee: "$2,800/yr" },
          { name: "MSc in Big Data & Artificial Intelligence", level: "Master (2 Yrs)", fee: "$3,200/yr" }
        ]
      }
    ]
  },
  "south-korea": {
    id: "south-korea",
    code: "KR",
    flag: "🇰🇷",
    name: "South Korea",
    regionCode: "asia",
    regionBadge: "ASIA",
    tagline: "Content Pending Client Data",
    usp: "Content Pending Client Data",
    highlights: [],
    livingCost: "Pending",
    institutionsCount: "Pending",
    heroImg: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "Pending",
    subBadge: "Pending",
    heroHeading: "Study in South Korea",
    heroDesc: "Content Pending Client Data",
    tuition: "Pending",
    tuitionSub: "Pending",
    living: "Pending",
    livingSub: "Pending",
    work: "Pending",
    workSub: "Pending",
    psw: "Pending",
    pswSub: "Pending",
    whyStudy: [],
    solvency: [],
    roadmap: [],
    faqs: [],
    universities: []
  },
  "ireland": {
    id: "ireland",
    code: "IE",
    flag: "🇮🇪",
    name: "Ireland",
    regionCode: "europe",
    regionBadge: "EUROPE",
    tagline: "Content Pending Client Data",
    usp: "Content Pending Client Data",
    highlights: [],
    livingCost: "Pending",
    institutionsCount: "Pending",
    heroImg: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "Pending",
    subBadge: "Pending",
    heroHeading: "Study in Ireland",
    heroDesc: "Content Pending Client Data",
    tuition: "Pending",
    tuitionSub: "Pending",
    living: "Pending",
    livingSub: "Pending",
    work: "Pending",
    workSub: "Pending",
    psw: "Pending",
    pswSub: "Pending",
    whyStudy: [],
    solvency: [],
    roadmap: [],
    faqs: [],
    universities: []
  },
  "thailand": {
    id: "thailand",
    code: "TH",
    flag: "🇹🇭",
    name: "Thailand",
    regionCode: "asia",
    regionBadge: "ASIA",
    tagline: "Content Pending Client Data",
    usp: "Content Pending Client Data",
    highlights: [],
    livingCost: "Pending",
    institutionsCount: "Pending",
    heroImg: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "Pending",
    subBadge: "Pending",
    heroHeading: "Study in Thailand",
    heroDesc: "Content Pending Client Data",
    tuition: "Pending",
    tuitionSub: "Pending",
    living: "Pending",
    livingSub: "Pending",
    work: "Pending",
    workSub: "Pending",
    psw: "Pending",
    pswSub: "Pending",
    whyStudy: [],
    solvency: [],
    roadmap: [],
    faqs: [],
    universities: []
  }
};


