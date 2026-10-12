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
  id?: string;
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
'bulgaria': 'https://flagcdn.com/w80/bg.png',
  'czech-republic': 'https://flagcdn.com/w80/cz.png',
  'denmark': 'https://flagcdn.com/w80/dk.png',
  'finland': 'https://flagcdn.com/w80/fi.png',
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
    livingCost: "NZ$ 1,200 – NZ$ 1,800 / month",
    institutionsCount: "14+ Listed",
    heroImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇳🇿 Family-Friendly Study Hub",
    subBadge: "Pay Tuition After Visa AIP • Spouse Full-Time Work Rights",
    heroHeading: "Study in New Zealand: Pay Fees After Visa & Spouse Rights",
    heroDesc: "Zero upfront tuition risk: pay university fees only after receiving official Approval in Principle (AIP) from Immigration New Zealand. Accompanying spouses receive full-time open work permits, and dependent children study in New Zealand domestic public schools completely free.",
    tuition: "NZ$ 24,000 – NZ$ 45,000/yr",
    tuitionSub: "Payable strictly after AIP",
    living: "NZ$ 1,200 – NZ$ 1,800/mo",
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
        tuitionUG: "NZ$ 35,000 – NZ$ 55,000 / year",
        tuitionPG: "NZ$ 40,000 – NZ$ 70,000+ / year",
        scholarship: "NZ$ 5,000 – NZ$ 20,000 International Student Excellence Scholarship",
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
          monthlyCost: "NZ$ 1,300 – NZ$ 1,900 / month",
          bankFundSingle: "UG: ~৳70 Lac – 1 Crore BDT | PG: ~৳60 – 80 Lac BDT",
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
          "INZ AIP (Approval in Principle) issued → Pay official tuition fees",
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
        tuitionUG: "Diploma: NZ$ 18,000 – NZ$ 25,000 / yr | Degree: NZ$ 24,000 – NZ$ 35,000 / yr",
        tuitionPG: "PGD: NZ$ 25,000 – NZ$ 32,000 / yr",
        scholarship: "NZ$ 2,500 – NZ$ 5,000 Regional Grants",
        workRights: "25 hrs/week part-time",
        entryUG: "Diploma: HSC pass, IELTS 5.5 | Degree: HSC GPA 4.0, IELTS 6.0",
        entryPG: "Bachelor pass | IELTS 6.0–6.5",
        whyStudy: [
          "Lower entry barriers for students with academic gaps or moderate language scores.",
          "Vocational diplomas directly matched to NZ Green List shortage occupations (Nursing, IT, Civil).",
          "Lower living costs in Hamilton compared to major metros.",
          "Pay tuition fee strictly after INZ Approval in Principle (AIP)."
        ],
        costAndBank: {
          monthlyCost: "NZ$ 1,000 – NZ$ 1,400 / month",
          bankFundSingle: "Diploma/UG: ~৳65 – 70 Lac BDT",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Spouse & child sponsorship support supported"
        },
        careerAndPsw: "Post-Study Work Permit for eligible degree and Green List vocational qualifications; fast-track pathway to residency.",
        partTimeJobs: "25 hours per week during semester; full-time during vacations.",
        applicationSteps: [
          "Profile assessment & pathway selection",
          "Application to Wintec → Offer of Place",
          "Financial documentation prep",
          "Visa lodgement & AIP clearance",
          "Pay fees & receive student visa"
        ],
        programs: [
          { name: "Diploma in Information Technology Support", level: "Diploma (2 Years)", fee: "NZ$ 19,500/yr" },
          { name: "Bachelor of Nursing (Green List)", level: "Undergraduate (3 Years)", fee: "NZ$ 26,000/yr" },
          { name: "Graduate Diploma in Applied Management", level: "Grad Diploma (1 Year)", fee: "NZ$ 24,500/yr" }
        ]
      },
      {
        id: "aut",
        name: "Auckland University of Technology (AUT)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Top modern university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$32,000–$48,000/yr",
        tuitionPG: "NZ$36,000–$55,000/yr",
        scholarship: "NZ$5,000–$15,000 International scholarships",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5) / PTE 52",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0) / PTE 59",
        whyStudy: [
          "Top modern university",
          "focus on practical industry learning and tech integration",
          "excellent student support",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Spouse >20L BDT"
        },
        careerAndPsw: "Post-Study Work Visa; Auckland tech corridor placement; spouse full-time work rights",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Counselling",
          "Step 2: Apply",
          "Step 3: Offer of Place",
          "Step 4: Financial/Visa docs",
          "Step 5: INZ AIP",
          "Step 6: Pay fees after visa",
          "Step 7: Travel",
        ],
        programs: [
          { name: "BSc / MSc in Engineering", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$48,000/yr" },
          { name: "BSc / MSc in Computer Science", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$48,000/yr" },
          { name: "BSc / MSc in AI", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$48,000/yr" },
          { name: "BSc / MSc in Design", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$48,000/yr" },
          { name: "BSc / MSc in Business", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$48,000/yr" },
        ]
      },
      {
        id: "university-of-waikato",
        name: "University of Waikato",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Triple Crown accredited Business School",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$30,000–$45,000/yr",
        tuitionPG: "NZ$35,000–$52,000/yr",
        scholarship: "NZ$2,500–$15,000 Vice-Chancellor's International Excellence Awards",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5) / PTE 52",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0) / PTE 59",
        whyStudy: [
          "Triple Crown accredited Business School",
          "serene Hamilton campus",
          "lower regional living costs",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Post-Study Work Visa; regional settlement points for PR; spouse full-time work rights",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Financial Evidence",
          "Step 4: Visa Lodgement",
          "Step 5: INZ AIP",
          "Step 6: Pay tuition fee",
          "Step 7: Travel",
        ],
        programs: [
          { name: "BSc / MSc in Management", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$45,000/yr" },
          { name: "BSc / MSc in Supply Chain", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$45,000/yr" },
          { name: "BSc / MSc in Environmental Science", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$45,000/yr" },
          { name: "BSc / MSc in CS", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$45,000/yr" },
          { name: "BSc / MSc in Law", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$45,000/yr" },
        ]
      },
      {
        id: "massey-university",
        name: "Massey University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "World leader in agriculture & food tech",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$31,000–$46,000/yr",
        tuitionPG: "NZ$35,000–$55,000/yr",
        scholarship: "NZ$5,000–$10,000 merit tuition waivers",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5)",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0)",
        whyStudy: [
          "World leader in agriculture & food tech",
          "multi-campus network (Auckland, Palmerston North)",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "High demand in agriculture, food sciences, and veterinary; Post-study work pathways",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Counselling",
          "Step 2: Apply",
          "Step 3: Offer of Place",
          "Step 4: Medical/Police",
          "Step 5: INZ Assessment",
          "Step 6: Pay tuition after visa",
          "Step 7: Fly",
        ],
        programs: [
          { name: "BSc / MSc in Agriculture", level: "Undergraduate / Postgraduate", fee: "NZ$31,000–$46,000/yr" },
          { name: "BSc / MSc in Food Technology", level: "Undergraduate / Postgraduate", fee: "NZ$31,000–$46,000/yr" },
          { name: "BSc / MSc in Aviation", level: "Undergraduate / Postgraduate", fee: "NZ$31,000–$46,000/yr" },
          { name: "BSc / MSc in Business", level: "Undergraduate / Postgraduate", fee: "NZ$31,000–$46,000/yr" },
          { name: "BSc / MSc in Nursing", level: "Undergraduate / Postgraduate", fee: "NZ$31,000–$46,000/yr" },
        ]
      },
      {
        id: "victoria-university-of-we",
        name: "Victoria University of Wellington",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Located in the capital city",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$32,000–$50,000/yr",
        tuitionPG: "NZ$37,000–$58,000/yr",
        scholarship: "NZ$10,000 Tongarewa International Scholarship & Master's awards",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5)",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0)",
        whyStudy: [
          "Located in the capital city",
          "close links to government ministries, research agencies, and tech firms",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Government and corporate post-study employment; 3-year PSW; spouse full work rights",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Financial evidence",
          "Step 4: INZ Visa assessment",
          "Step 5: Pay tuition after AIP",
          "Step 6: Final visa",
        ],
        programs: [
          { name: "BSc / MSc in Public Policy", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$50,000/yr" },
          { name: "BSc / MSc in Architecture", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$50,000/yr" },
          { name: "BSc / MSc in Law", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$50,000/yr" },
          { name: "BSc / MSc in Software Dev", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$50,000/yr" },
          { name: "BSc / MSc in AI", level: "Undergraduate / Postgraduate", fee: "NZ$32,000–$50,000/yr" },
        ]
      },
      {
        id: "university-of-canterbury",
        name: "University of Canterbury",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "World-renowned engineering faculty",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$34,000–$52,000/yr",
        tuitionPG: "NZ$38,000–$60,000/yr",
        scholarship: "NZ$10,000–$25,000 high-achievement international scholarships",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5)",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0)",
        whyStudy: [
          "World-renowned engineering faculty",
          "Christchurch innovation & infrastructure rebuilding hub",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Christchurch engineering & tech boom; skilled migrant PR pathways; Post-study work permit",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Select program",
          "Step 2: Apply",
          "Step 3: Offer",
          "Step 4: Financial assessment",
          "Step 5: Lodgement",
          "Step 6: Pay tuition after AIP",
          "Step 7: Visa",
        ],
        programs: [
          { name: "BSc / MSc in Civil & Mechanical Engineering", level: "Undergraduate / Postgraduate", fee: "NZ$34,000–$52,000/yr" },
          { name: "BSc / MSc in Forestry", level: "Undergraduate / Postgraduate", fee: "NZ$34,000–$52,000/yr" },
          { name: "BSc / MSc in Data Science", level: "Undergraduate / Postgraduate", fee: "NZ$34,000–$52,000/yr" },
          { name: "BSc / MSc in Commerce", level: "Undergraduate / Postgraduate", fee: "NZ$34,000–$52,000/yr" },
        ]
      },
      {
        id: "lincoln-university",
        name: "Lincoln University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Specialist land-based university in the Southern Hemisphere",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$30,000–$44,000/yr",
        tuitionPG: "NZ$35,000–$50,000/yr",
        scholarship: "NZ$5,000–$10,000 International Global Challenges scholarships",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5)",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0)",
        whyStudy: [
          "Specialist land-based university in the Southern Hemisphere",
          "top graduate employment rate",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Agritech & environmental sector demand; regional migration bonus; spouse work permit",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer of Place",
          "Step 3: Financial prep",
          "Step 4: INZ lodgement",
          "Step 5: Pay tuition after AIP",
          "Step 6: Fly",
        ],
        programs: [
          { name: "BSc / MSc in Agribusiness", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$44,000/yr" },
          { name: "BSc / MSc in Environmental Management", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$44,000/yr" },
          { name: "BSc / MSc in Tourism", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$44,000/yr" },
          { name: "BSc / MSc in Agriculture Science", level: "Undergraduate / Postgraduate", fee: "NZ$30,000–$44,000/yr" },
        ]
      },
      {
        id: "university-of-otago",
        name: "University of Otago",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "NZ's oldest university (Dunedin)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "NZ$35,000–$55,000/yr",
        tuitionPG: "NZ$38,000–$65,000+/yr",
        scholarship: "NZ$10,000–$25,000+ Otago International Excellence scholarships",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "HSC GPA 4.0/5.0, IELTS 6.0 (min 5.5)",
        entryPG: "CGPA 2.75/4.0, IELTS 6.5 (min 6.0)",
        whyStudy: [
          "NZ's oldest university (Dunedin)",
          "premier medical and clinical health science faculty",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: UG ~70L-1Cr BDT, PG ~60-80L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Clinical placements & healthcare shortage list; long-term PR pathways; spouse work rights",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Financials",
          "Step 4: Medical/Police",
          "Step 5: INZ Assessment",
          "Step 6: Pay tuition after AIP",
          "Step 7: Visa",
        ],
        programs: [
          { name: "BSc / MSc in Health Sciences", level: "Undergraduate / Postgraduate", fee: "NZ$35,000–$55,000/yr" },
          { name: "BSc / MSc in Biomedical Science", level: "Undergraduate / Postgraduate", fee: "NZ$35,000–$55,000/yr" },
          { name: "BSc / MSc in Dentistry", level: "Undergraduate / Postgraduate", fee: "NZ$35,000–$55,000/yr" },
          { name: "BSc / MSc in Nursing", level: "Undergraduate / Postgraduate", fee: "NZ$35,000–$55,000/yr" },
          { name: "BSc / MSc in Finance", level: "Undergraduate / Postgraduate", fee: "NZ$35,000–$55,000/yr" },
        ]
      },
      {
        id: "ara-institute-of-canterbu",
        name: "Ara Institute of Canterbury",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "South Island's largest vocational institute",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Diploma: NZ$18,000–$26,000/yr; Degree: NZ$25,000–$35,000/yr",
        tuitionPG: "Diploma: NZ$18,000–$26,000/yr; Degree: NZ$25,000–$35,000/yr",
        scholarship: "Regional & course-specific international bursaries",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "Diploma: IELTS 5.5. PGD: IELTS 6.0. Degree: IELTS 6.0",
        entryPG: "Diploma: IELTS 5.5. PGD: IELTS 6.0. Degree: IELTS 6.0",
        whyStudy: [
          "South Island's largest vocational institute",
          "direct project ties across Canterbury",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: ~70L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Canterbury construction & ICT workforce needs; post-study work visa; spouse work permit",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Financial verification",
          "Step 4: INZ Assessment",
          "Step 5: Pay tuition after AIP",
          "Step 6: Visa",
        ],
        programs: [
          { name: "BSc / MSc in ICT", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$26,000/yr; Degree: NZ$25,000–$35,000/yr" },
          { name: "BSc / MSc in Construction Management", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$26,000/yr; Degree: NZ$25,000–$35,000/yr" },
          { name: "BSc / MSc in Hospitality", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$26,000/yr; Degree: NZ$25,000–$35,000/yr" },
          { name: "BSc / MSc in Nursing", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$26,000/yr; Degree: NZ$25,000–$35,000/yr" },
        ]
      },
      {
        id: "otago-polytechnic",
        name: "Otago Polytechnic",
        badge: "Applied Learning & STEM Focus",
        type: "Government Institute of Technology",
        tagline: "Exceptional student satisfaction",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr",
        tuitionPG: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr",
        scholarship: "NZ$2,500–$7,500 international student awards",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "Diploma: IELTS 5.5. Degree: IELTS 6.0",
        entryPG: "Diploma: IELTS 5.5. Degree: IELTS 6.0",
        whyStudy: [
          "Exceptional student satisfaction",
          "experiential learning tied to local employers",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: ~70L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Direct entry to regional employment; post-study work rights; spouse full-time work",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Prepare funds",
          "Step 4: Visa application",
          "Step 5: Pay fees after visa",
          "Step 6: Fly",
        ],
        programs: [
          { name: "BSc / MSc in Applied Science", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr" },
          { name: "BSc / MSc in Design", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr" },
          { name: "BSc / MSc in Construction", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr" },
          { name: "BSc / MSc in Culinary Arts", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr" },
          { name: "BSc / MSc in Occupational Therapy", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$19,000–$27,000/yr; Degree: NZ$26,000–$36,000/yr" },
        ]
      },
      {
        id: "sit",
        name: "Southern Institute of Technology (SIT)",
        badge: "Applied Learning & STEM Focus",
        type: "Government Institute of Technology",
        tagline: "Lowest tuition fees",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr",
        tuitionPG: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr",
        scholarship: "Accommodation bursaries and subsidized tuition packages",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "Diploma: IELTS 5.5. Degree: IELTS 6.0",
        entryPG: "Diploma: IELTS 5.5. Degree: IELTS 6.0",
        whyStudy: [
          "Lowest tuition fees",
          "Zero-fees English & accommodation support packages",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: ~70L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Pathways for regional settlement and long-term residency; post-study work visa",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Financial verification",
          "Step 4: INZ Assessment",
          "Step 5: Pay tuition after AIP",
          "Step 6: Visa",
        ],
        programs: [
          { name: "BSc / MSc in IT", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr" },
          { name: "BSc / MSc in Hospitality", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr" },
          { name: "BSc / MSc in Business", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr" },
          { name: "BSc / MSc in Trades", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr" },
          { name: "BSc / MSc in Nursing", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$24,000/yr; Degree: NZ$24,000–$32,000/yr" },
        ]
      },
      {
        id: "toi-ohomai-institute-of-t",
        name: "Toi Ohomai Institute of Technology",
        badge: "Applied Learning & STEM Focus",
        type: "Government Institute of Technology",
        tagline: "Bay of Plenty regional focus",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr",
        tuitionPG: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr",
        scholarship: "Regional international study bursaries",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "Diploma: IELTS 5.5. Degree: IELTS 6.0",
        entryPG: "Diploma: IELTS 5.5. Degree: IELTS 6.0",
        whyStudy: [
          "Bay of Plenty regional focus",
          "maritime, forestry, and tourism linkages",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: ~70L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Growing logistics, tourism, and marine tech job market; post-study work permit",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Prepare funds",
          "Step 4: INZ Visa",
          "Step 5: Pay fees after AIP",
          "Step 6: Visa",
        ],
        programs: [
          { name: "BSc / MSc in Forestry", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr" },
          { name: "BSc / MSc in Marine Studies", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr" },
          { name: "BSc / MSc in Business", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr" },
          { name: "BSc / MSc in IT", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr" },
          { name: "BSc / MSc in Nursing", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$18,000–$25,000/yr; Degree: NZ$24,000–$34,000/yr" },
        ]
      },
      {
        id: "ica",
        name: "International College of Auckland (ICA)",
        badge: "Verified Academic Institution",
        type: "Government Institute of Technology",
        tagline: "Specialized pathway provider for students needing bridge qualifications or study gap coverage",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Diploma: NZ$16,000–$22,000/yr",
        tuitionPG: "Diploma: NZ$16,000–$22,000/yr",
        scholarship: "Pathway fee reductions & flexible instalments",
        workRights: "Up to 25 hrs/week during study; full-time during holidays",
        entryUG: "Diploma: HSC pass, IELTS 5.5 / internal test",
        entryPG: "Diploma: HSC pass, IELTS 5.5 / internal test",
        whyStudy: [
          "Specialized pathway provider for students needing bridge qualifications or study gap coverage",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Fund: ~65-70L BDT (4-6 mo maturity)",
          bankMaturity: "4 to 6 months maturity required",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Articulation into university degrees; student work rights during study",
        partTimeJobs: "Up to 25 hrs/week during study; full-time during holidays",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer",
          "Step 3: Financial docs",
          "Step 4: INZ Assessment",
          "Step 5: Pay fee after AIP",
          "Step 6: Fly",
        ],
        programs: [
          { name: "BSc / MSc in Business", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$16,000–$22,000/yr" },
          { name: "BSc / MSc in Computing", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$16,000–$22,000/yr" },
          { name: "BSc / MSc in Telecommunications", level: "Undergraduate / Postgraduate", fee: "Diploma: NZ$16,000–$22,000/yr" },
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
    livingCost: "€400 – €700 / month",
    institutionsCount: "10+ Listed",
    heroImg: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇭🇺 Central European Schengen Hub",
    subBadge: "Direct Dhaka Embassy File Submission (No India Trip)",
    heroHeading: "Study in Hungary: 100% Scholarships & Direct Dhaka Visa",
    heroDesc: "Over 500+ successful Hungary student visas handled by Study First Info Ltd. Enjoy 100% tuition coverage with Stipendium Hungaricum, free borderless mobility across 29 Schengen countries, and direct Dhaka embassy interviews without traveling to India.",
    tuition: "€0 to €7,800/yr",
    tuitionSub: "100% Full-Ride Eligible",
    living: "€400 – €650/mo",
    livingSub: "Dormitories from €150/mo",
    work: "24 Hours / Week",
    workSub: "Legal student work rights",
    psw: "1.5 – 2 Years PSW",
    pswSub: "Schengen Job Seeker TRP",
    whyStudy: [
      { icon: "🏛️", title: "Direct Dhaka Embassy", desc: "Submit your student visa file directly at the Embassy of Hungary in Dhaka. Zero third-country travel to New Delhi required!" },
      { icon: "🎓", title: "100% Full-Ride Scholarship", desc: "Stipendium Hungaricum covers 100% tuition fees, free dormitory accommodation, monthly stipends, and medical insurance." },
      { icon: "📜", title: "MOI English Waiver", desc: "Accepts Medium of Instruction (MOI) certificates from accredited Bangladeshi universities without requiring IELTS for eligible degrees." },
      { icon: "🌍", title: "29-Country Schengen Travel", desc: "Your Hungarian student residence permit gives you complete borderless mobility and legal part-time work rights across the Schengen zone." }
    ],
    solvency: [
      { title: "Embassy Living Solvency Amount", detail: "~€10,000 to €12,000 proof in student or legal sponsor account." },
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
        badge: "Diamond Partner • Central Budapest",
        type: "Private University of Applied Sciences",
        tagline: "Highest visa approval record with Study First Info; modern business & media campus in Budapest.",
        intakes: "February 2027, September 2026",
        deadlines: "Application Start: 1 Aug | Deadline: 20 Nov for Feb Intake",
        tuitionUG: "€7,000 – €7,800 / year",
        tuitionPG: "€7,200 – €8,200 / year",
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
          monthlyCost: "€400 – €700 / month (Dorms €150–€250/mo)",
          bankFundSingle: "~€10,000 – €12,000 in student or sponsor's account",
          bankMaturity: "3 months bank statement recommended",
          familyFund: "Sponsor statement with proof of source of income"
        },
        careerAndPsw: "Post-Study Work Permit in Europe; full 29-country Schengen residence and mobility; Budapest is a burgeoning international corporate services hub.",
        partTimeJobs: "International students have full legal rights to work 24 hours per week during class semesters.",
        applicationSteps: [
          "Application start: 1 Aug | Application deadline: 20 Nov",
          "Submit academic certificates & MOI or IELTS test report",
          "Math test required only for students with GPA 60–69% (GPA 70%+ exempt)",
          "Receive official Acceptance Letter and Tuition Invoice",
          "Embassy visa file submission directly in Dhaka",
          "Interview at the Hungarian Embassy in Dhaka & receive National D Visa"
        ],
        programs: [
          { name: "BSc Business Administration and Management", level: "Bachelor (3.5 Yrs)", fee: "€7,000/yr" },
          { name: "BSc Commerce and Marketing", level: "Bachelor (3.5 Yrs)", fee: "€7,000/yr" },
          { name: "BA Communication and Media Studies", level: "Bachelor (3 Yrs)", fee: "€7,800/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (2 Yrs)", fee: "€8,200/yr" },
          { name: "MSc Marketing & Business Development", level: "Master (2 Yrs)", fee: "€7,200/yr" }
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
        tuitionUG: "€6,000 – €8,500 / year (Medicine up to €14,000)",
        tuitionPG: "€6,500 – €9,000 / year",
        scholarship: "Full Stipendium Hungaricum (100% Free Tuition, Dorm, Insurance, Monthly Stipend)",
        workRights: "24 hrs/week legal work",
        entryUG: "HSC pass | IELTS 5.5–6.0 or MOI | Entrance test for Medicine & Engineering",
        entryPG: "Bachelor degree in relevant stream | IELTS 6.0 or MOI",
        whyStudy: [
          "Over 500 years of continuous academic heritage with Nobel laureate connections.",
          "100% full-ride funding through Stipendium Hungaricum with free accommodation and monthly stipend.",
          "Directly accredited medical and engineering degrees recognized across the EU, UK, and USA.",
          "Affordable campus life in Hungary's second-largest city."
        ],
        costAndBank: {
          monthlyCost: "€350 – €550 / month (University dorms available)",
          bankFundSingle: "~€9,000 – €11,000 living expense proof",
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
          { name: "BSc in Computer Science & Artificial Intelligence", level: "Bachelor (3 Yrs)", fee: "€6,500/yr" },
          { name: "BSc in Mechatronics & Mechanical Engineering", level: "Bachelor (3.5 Yrs)", fee: "€7,000/yr" },
          { name: "Doctor of General Medicine (6 Years)", level: "Integrated Master (6 Yrs)", fee: "€14,000/yr" }
        ]
      },
      {
        id: "university-of-pcs",
        name: "University of Pécs",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "Hungary's oldest university (est. 1367)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€4,500 – €9,000/yr",
        tuitionPG: "€4,500 – €9,000/yr",
        scholarship: "Stipendium Hungaricum (100% full ride) + University merit discounts",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC GPA 3.5+/5.0 or Bachelor CGPA 2.75+; IELTS 5.5-6.5 or MOI accepted",
        entryPG: "HSC GPA 3.5+/5.0 or Bachelor CGPA 2.75+; IELTS 5.5-6.5 or MOI accepted",
        whyStudy: [
          "Hungary's oldest university (est. 1367)",
          "official partner of Study First Info",
          "expo presence by regional delegate Arif Syed",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €350–€550/mo in Pécs",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "EU-wide recognized degrees; Schengen residency & post-study job seeker visa",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: DreamApply portal",
          "Step 2: Online interview",
          "Step 3: Offer letter",
          "Step 4: Dhaka Embassy submission",
          "Step 5: Visa",
        ],
        programs: [
          { name: "Bachelor's, Master's, PhD in Business, Health Sciences, Gene", level: "Bachelor / Master", fee: "€4,500 – €9,000/yr" },
        ]
      },
      {
        id: "john-von-neumann-universi",
        name: "John von Neumann University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "NO APPLICATION FEE before offer letter",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€3,500 – €5,500/yr",
        tuitionPG: "€3,500 – €5,500/yr",
        scholarship: "Stipendium Hungaricum & institutional tuition discounts",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC / Bachelor pass; MOI accepted or IELTS 5.5",
        entryPG: "HSC / Bachelor pass; MOI accepted or IELTS 5.5",
        whyStudy: [
          "NO APPLICATION FEE before offer letter",
          "IELTS not mandatory (MOI accepted)",
          "modern Kecskemét campus",
          "high visa success",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €350–€500/mo in Kecskemét",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Automotive & IT hub in Kecskemét (Mercedes-Benz industrial ecosystem)",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Zero application fee apply",
          "Step 2: Document check",
          "Step 3: Offer letter",
          "Step 4: Embassy file in Dhaka",
          "Step 5: Visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Computer Science, Business Administ", level: "Bachelor / Master", fee: "€3,500 – €5,500/yr" },
        ]
      },
      {
        id: "szchenyi-istvn-university",
        name: "Széchenyi István University (University of Győr)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Located in automotive capital Győr",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€3,000 – €6,500/yr",
        tuitionPG: "€3,000 – €6,500/yr",
        scholarship: "Stipendium Hungaricum fully funded scholarship",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC / Bachelor 60%+; IELTS 5.5 or MOI accepted",
        entryPG: "HSC / Bachelor 60%+; IELTS 5.5 or MOI accepted",
        whyStudy: [
          "Located in automotive capital Győr",
          "direct industrial tie-up with Audi Hungaria",
          "high practical placement rate",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €400–€600/mo in Győr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Direct engineering career pathways with Audi & European manufacturing giants",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Assessment",
          "Step 3: Offer letter",
          "Step 4: Embassy visa submission in Dhaka",
          "Step 5: Travel",
        ],
        programs: [
          { name: "Bachelor's & Master's in Automotive Engineering, Mechanical,", level: "Bachelor / Master", fee: "€3,000 – €6,500/yr" },
        ]
      },
      {
        id: "elte",
        name: "Eötvös Loránd University (ELTE)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Hungary's top-ranked public research university in Budapest",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€4,000 – €7,500/yr",
        tuitionPG: "€4,000 – €7,500/yr",
        scholarship: "Stipendium Hungaricum (100% funded)",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC GPA 4.0+/5.0 or Bachelor CGPA 3.0+; IELTS 6.0 or MOI; subject entrance test",
        entryPG: "HSC GPA 4.0+/5.0 or Bachelor CGPA 3.0+; IELTS 6.0 or MOI; subject entrance test",
        whyStudy: [
          "Hungary's top-ranked public research university in Budapest",
          "rich Nobel laureate heritage",
          "world-renowned faculty",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €500–€700/mo in Budapest",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Top EU research & corporate tech careers; post-study Schengen stay-back",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: ELTE portal",
          "Step 2: Entrance exam",
          "Step 3: Conditional offer",
          "Step 4: Dhaka Embassy visa file",
        ],
        programs: [
          { name: "Bachelor's, Master's, PhD in Computer Science, Data Science,", level: "Bachelor / Master", fee: "€4,000 – €7,500/yr" },
        ]
      },
      {
        id: "university-of-szeged",
        name: "University of Szeged",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "Nobel Prize winning research legacy (Albert Szent-Györgyi & Katalin Karikó)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€4,000 – €8,000/yr (Medicine higher)",
        tuitionPG: "€4,000 – €8,000/yr (Medicine higher)",
        scholarship: "Stipendium Hungaricum scholarship",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC / Bachelor pass; IELTS 5.5-6.5 or MOI accepted",
        entryPG: "HSC / Bachelor pass; IELTS 5.5-6.5 or MOI accepted",
        whyStudy: [
          "Nobel Prize winning research legacy (Albert Szent-Györgyi & Katalin Karikó)",
          "top university in southern Hungary",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €350–€550/mo in Szeged",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "EU medical and scientific research career opportunities; Schengen work permit",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: DreamApply portal",
          "Step 2: Entrance exam/interview",
          "Step 3: Offer",
          "Step 4: Embassy visa in Dhaka",
        ],
        programs: [
          { name: "Bachelor's & Master's in Medicine, Chemistry, Biology, Compu", level: "Bachelor / Master", fee: "€4,000 – €8,000/yr (Medicine higher)" },
        ]
      },
      {
        id: "university-of-miskolc",
        name: "University of Miskolc",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Affordable public university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€3,500 – €5,500/yr",
        tuitionPG: "€3,500 – €5,500/yr",
        scholarship: "Stipendium Hungaricum scholarship",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC / Bachelor pass; IELTS 5.5 or MOI accepted",
        entryPG: "HSC / Bachelor pass; IELTS 5.5 or MOI accepted",
        whyStudy: [
          "Affordable public university",
          "heavy industrial engineering legacy",
          "low cost of living",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €300–€450/mo in Miskolc",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Central European manufacturing, engineering, and logistics roles",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply online",
          "Step 2: Academic review",
          "Step 3: Offer letter",
          "Step 4: Dhaka Embassy visa process",
        ],
        programs: [
          { name: "Bachelor's & Master's in Materials Engineering, Mechanical,", level: "Bachelor / Master", fee: "€3,500 – €5,500/yr" },
        ]
      },
      {
        id: "semmelweis-university",
        name: "Semmelweis University",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Premier medical university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€12,000 – €18,000/yr",
        tuitionPG: "€12,000 – €18,000/yr",
        scholarship: "Stipendium Hungaricum (Full medical tuition covered)",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC Pre-medical stream (strong Biology/Chemistry); entrance exam; IELTS 6.5 or MOI",
        entryPG: "HSC Pre-medical stream (strong Biology/Chemistry); entrance exam; IELTS 6.5 or MOI",
        whyStudy: [
          "Premier medical university",
          "ranked top 250 in the world",
          "qualifications directly recognized across EU and UK",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €500–€750/mo in Budapest",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Direct medical licensing across Europe and the UK; clinical hospital residencies",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Semmelweis portal",
          "Step 2: Medical entrance exam",
          "Step 3: Acceptance",
          "Step 4: Dhaka Embassy visa",
        ],
        programs: [
          { name: "BSc / MSc in 6 yrs", level: "Undergraduate / Postgraduate", fee: "€12,000 – €18,000/yr" },
        ]
      },
      {
        id: "corvinus-university-of-bu",
        name: "Corvinus University of Budapest",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Premier business & economics university in Hungary",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€6,000 – €8,500/yr",
        tuitionPG: "€6,000 – €8,500/yr",
        scholarship: "Stipendium Hungaricum scholarship",
        workRights: "24 hours per week legal work rights",
        entryUG: "HSC GPA 4.0+/5.0; strong mathematics background; IELTS 6.0-6.5 or MOI",
        entryPG: "HSC GPA 4.0+/5.0; strong mathematics background; IELTS 6.0-6.5 or MOI",
        whyStudy: [
          "Premier business & economics university in Hungary",
          "EQUIS and AMBA international accreditations",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €500–€700/mo in Budapest",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "International banking, corporate finance, FMCG, and management consulting",
        partTimeJobs: "24 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Direct portal",
          "Step 2: Math/oral interview",
          "Step 3: Offer letter",
          "Step 4: Embassy visa submission in Dhaka",
        ],
        programs: [
          { name: "Bachelor's & Master's in International Business, Finance, Ec", level: "Bachelor / Master", fee: "€6,000 – €8,500/yr" },
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
      "£3,000 to £10,000 Guaranteed & Merit Scholarships"
    ],
    livingCost: "£800 – £1,200 / month outside London",
    institutionsCount: "8+ Listed",
    heroImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇬🇧 1-Year Fast-Track Masters",
    subBadge: "Up to £10,000 Scholarships • 2-Year Graduate Route PSW",
    heroHeading: "Study in the UK: 1-Year Masters & £10k Grants",
    heroDesc: "A 1-Year Master's degree in the UK saves a full year of living and tuition expenses while unlocking the 2-Year Graduate Route Post-Study Work Permit. Enjoy £3,000 to £10,000 merit scholarships and MOI waivers from 28+ Bangladeshi universities.",
    tuition: "£14,500 – £22,000/yr",
    tuitionSub: "Up to £10,000 Grants Available",
    living: "£850 – £1,200/mo",
    livingSub: "Lower outside London",
    work: "20 Hours / Week",
    workSub: "Full-time during holidays",
    psw: "2-Year Graduate Route",
    pswSub: "Post-Study Work Permit (PSW)",
    whyStudy: [
      { icon: "⏱️", title: "1-Year Fast Master's Degree", desc: "Graduate in just 12 months, saving a full year of tuition and living expenses compared to 2-year programs elsewhere." },
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
        badge: "25 Mins to Central London • Top 50 UK",
        type: "Public University",
        tagline: "Hatfield campus just 25 mins by train to Kings Cross London. Accepts CGPA down to 2.50 and genuine study gaps.",
        intakes: "January 2027, September 2026",
        deadlines: "Available Intake: January 2027 | App Deadline: Nov 2026",
        tuitionUG: "LLB (Hons): £17,450 / year (First year net: ~£14,200 after scholarship)",
        tuitionPG: "£18,600 – £20,460 / year (1-Year Fast Master's)",
        scholarship: "Up to £3,000 Guaranteed Scholarship for Self-Funded Students",
        workRights: "20 hrs/week during term time",
        entryUG: "HSC GPA 4.0/5.0 (65%) | IELTS 6.0 / PTE 59 / MOI accepted",
        entryPG: "Bachelor CGPA 2.50/4.0 (UK 2:2 equivalent) | IELTS 6.0–6.5 / PTE 59 / MOI accepted",
        whyStudy: [
          "Only 25 minutes by direct train from Hatfield Campus to Central London (Kings Cross).",
          "Top 50 UK University (Guardian Guide 2026); sprawling 125-acre modern campus.",
          "Medium of Instruction (MOI) accepted for eligible graduates from reputed Bangladeshi universities.",
          "Low CGPA accepted (down to 2.50/4.00 for business and computing degrees)."
        ],
        costAndBank: {
          monthlyCost: "£850 – £1,100 / month",
          bankFundSingle: "~৳40 Lakh BDT held for 28 consecutive days in approved bank",
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
          { name: "Bachelor of Laws LLB (Hons)", level: "Bachelor (3 Yrs)", fee: "£17,450/yr (£14,200 net)" },
          { name: "MSc Computer Science & Software Engineering", level: "Master (1 Yr)", fee: "£18,600/yr" },
          { name: "MSc Artificial Intelligence & Robotics", level: "Master (1 Yr)", fee: "£19,500/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (1 Yr)", fee: "£20,460/yr" }
        ]
      },
      {
        id: "cardiff",
        name: "Cardiff University (Russell Group)",
        badge: "Russell Group Member • QS Top 180",
        type: "World Elite Research University",
        tagline: "World top-180 research university. Cardiff is consistently ranked the UK's most affordable capital city.",
        intakes: "January 2027, September 2026",
        deadlines: "Sept to Oct application window | Payment Deadline: Nov/Dec",
        tuitionUG: "£21,000 – £28,000 / year",
        tuitionPG: "£24,000 – £33,000 / year (1-Year Master's)",
        scholarship: "Up to £8,000 – £10,000 Postgraduate Scholarship Awards",
        workRights: "20 hrs/week during term time",
        entryUG: "HSC top grades / Foundation | IELTS 6.5",
        entryPG: "4-Year Bachelor with CGPA 3.0/4.0+ | IELTS 6.5",
        whyStudy: [
          "World Top 180 elite Russell Group research university.",
          "Generous postgraduate scholarships up to £8,000 – £10,000 for January and September intakes.",
          "Cardiff is consistently ranked as the UK's most cost-effective capital city for student living."
        ],
        costAndBank: {
          monthlyCost: "£750 – £1,000 / month",
          bankFundSingle: "~৳40 Lakh BDT held for 28 consecutive days",
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
          { name: "MSc Strategic Marketing & Analytics", level: "Master (1 Yr)", fee: "£25,500/yr" },
          { name: "MSc Data Science and Analytics", level: "Master (1 Yr)", fee: "£28,500/yr" },
          { name: "MSc Healthcare & Public Health", level: "Master (1 Yr)", fee: "£24,500/yr" }
        ]
      },
      {
        id: "cardiff-university",
        name: "Cardiff University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Prestigious Russell Group University",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "PG: £24,000 – £33,000/yr",
        tuitionPG: "£24,000 – £33,000/yr",
        scholarship: "Up to £8,000 – £10,000 Postgraduate Scholarship",
        workRights: "20 hours per week during term time",
        entryUG: "Bachelor 4-yr Honours with CGPA 3.0/4.0+; IELTS 6.5 (min 6.0) or 7.0; £45 check fee",
        entryPG: "Bachelor 4-yr Honours with CGPA 3.0/4.0+; IELTS 6.5 (min 6.0) or 7.0; £45 check fee",
        whyStudy: [
          "Prestigious Russell Group University",
          "QS World #=179",
          "world-class research",
          "affordable capital city living in Wales",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Bank statement: ~40 Lac BDT (28 days maturity outside London)",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Russell Group brand prestige; 2-year Graduate Route PSW; top UK employer links",
        partTimeJobs: "20 hours per week during term time",
        applicationSteps: [
          "Step 1: Apply via UCAS / Direct portal",
          "Step 2: Offer",
          "Step 3: CAS deposit",
          "Step 4: CAS",
          "Step 5: UKVI Visa. Timeline: Sept-Oct for Jan launch",
        ],
        programs: [
          { name: "BSc / MSc in 1 yr", level: "Undergraduate / Postgraduate", fee: "PG: £24,000 – £33,000/yr" },
        ]
      },
      {
        id: "bcu",
        name: "Birmingham City University (BCU)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Located in UK's 2nd largest city",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "PG: £16,500 – £19,500/yr",
        tuitionPG: "£16,500 – £19,500/yr",
        scholarship: "Up to £3,000 Scholarship based on Academic Score",
        workRights: "20 hours per week during term time",
        entryUG: "Bachelor CGPA 2.50/4.0 (UK 2:2 equivalent); IELTS 6.0-6.5 (min 5.5/6.0) or MOI accepted",
        entryPG: "Bachelor CGPA 2.50/4.0 (UK 2:2 equivalent); IELTS 6.0-6.5 (min 5.5/6.0) or MOI accepted",
        whyStudy: [
          "Located in UK's 2nd largest city",
          "accepts MOI from 28 Bangladeshi universities",
          "£500M campus investment",
          "mock law courtroom",
          "50+ accredited courses",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Bank statement: ~40 Lac BDT maintained for 28 consecutive days",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "50+ professional body accreditations; 2-year PSW permit; Birmingham corporate hub",
        partTimeJobs: "20 hours per week during term time",
        applicationSteps: [
          "Step 1: Direct application",
          "Step 2: Offer",
          "Step 3: Pre-CAS credibility interview",
          "Step 4: CAS deposit",
          "Step 5: Visa",
        ],
        programs: [
          { name: "UG & PG in Business & Management, Computing & Technology, En", level: "Bachelor / Master", fee: "PG: £16,500 – £19,500/yr" },
        ]
      },
      {
        id: "newcastle-university",
        name: "Newcastle University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Elite Russell Group institution",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "PG: £21,000 – £29,000/yr",
        tuitionPG: "£21,000 – £29,000/yr",
        scholarship: "£8,000 Master's Program Scholarship",
        workRights: "20 hours per week during term time",
        entryUG: "Bachelor's CGPA 2.80–3.00/4.0; IELTS 6.5 (no band < 6.0)",
        entryPG: "Bachelor's CGPA 2.80–3.00/4.0; IELTS 6.5 (no band < 6.0)",
        whyStudy: [
          "Elite Russell Group institution",
          "high graduate employability and global research ranking",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Bank statement: ~40 Lac BDT (28 days maturity)",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "2-year Graduate Route PSW; engineering and tech placement opportunities",
        partTimeJobs: "20 hours per week during term time",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Conditional offer",
          "Step 3: CAS deposit",
          "Step 4: CAS issuance",
          "Step 5: UKVI Visa application",
        ],
        programs: [
          { name: "Master's & Bachelor's in Computing, Advanced Engineering, Ar", level: "Bachelor / Master", fee: "PG: £21,000 – £29,000/yr" },
        ]
      },
      {
        id: "university-of-york",
        name: "University of York",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Prestigious Russell Group university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "PG: £22,000 – £30,000/yr",
        tuitionPG: "£22,000 – £30,000/yr",
        scholarship: "£8,000 Master's Program Scholarship",
        workRights: "20 hours per week during term time",
        entryUG: "Bachelor's CGPA 3.00/4.0; IELTS 6.5 (no band < 6.0)",
        entryPG: "Bachelor's CGPA 3.00/4.0; IELTS 6.5 (no band < 6.0)",
        whyStudy: [
          "Prestigious Russell Group university",
          "World Top 150",
          "historic collegiate campus",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Bank statement: ~40 Lac BDT maintained 28 days",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "2-year Graduate Route PSW; strong academic & industry recruitment networks",
        partTimeJobs: "20 hours per week during term time",
        applicationSteps: [
          "Step 1: UCAS/Direct portal",
          "Step 2: Offer",
          "Step 3: CAS deposit",
          "Step 4: CAS",
          "Step 5: UKVI Visa",
        ],
        programs: [
          { name: "Master's & Bachelor's in Computer Science & AI, Economics, M", level: "Bachelor / Master", fee: "PG: £22,000 – £30,000/yr" },
        ]
      },
      {
        id: "uel",
        name: "University of East London (UEL)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Prime London location",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "£15,000 – £17,500/yr",
        tuitionPG: "£15,000 – £17,500/yr",
        scholarship: "£1,000 – £3,000 early payment discount",
        workRights: "20 hours per week during term time",
        entryUG: "HSC GPA 3.5+ / Bachelor CGPA 2.50+; IELTS 6.0/6.5",
        entryPG: "HSC GPA 3.5+ / Bachelor CGPA 2.50+; IELTS 6.0/6.5",
        whyStudy: [
          "Prime London location",
          "career-first modern syllabus",
          "accommodates lower IELTS and study gaps",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Bank statement: ~40 Lac BDT maintained 28 days (£13,761 London living cost)",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Direct London employment and startup ecosystem; 2-year Graduate Route PSW",
        partTimeJobs: "20 hours per week during term time",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Pre-CAS assessment",
          "Step 3: CAS deposit (£1,000+)",
          "Step 4: CAS",
          "Step 5: UKVI Visa",
        ],
        programs: [
          { name: "UG & PG in Computer Science, FinTech, Construction Managemen", level: "Bachelor / Master", fee: "£15,000 – £17,500/yr" },
        ]
      },
      {
        id: "coventry-university",
        name: "Coventry University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Modern dynamic university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "£16,800 – £20,500/yr",
        tuitionPG: "£16,800 – £20,500/yr",
        scholarship: "Up to £3,000 merit scholarships",
        workRights: "20 hours per week during term time",
        entryUG: "HSC GPA 4.0+ / Bachelor CGPA 2.75+; IELTS 6.0/6.5",
        entryPG: "HSC GPA 4.0+ / Bachelor CGPA 2.75+; IELTS 6.0/6.5",
        whyStudy: [
          "Modern dynamic university",
          "high graduate employability",
          "industry links",
          "partner degree pathways",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Bank statement: ~40 Lac BDT maintained 28 days",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Midlands automotive and engineering sector employment; 2-year PSW permit",
        partTimeJobs: "20 hours per week during term time",
        applicationSteps: [
          "Step 1: Direct application",
          "Step 2: Pre-CAS check",
          "Step 3: CAS deposit",
          "Step 4: CAS",
          "Step 5: UKVI Visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Automotive Engineering, Software En", level: "Bachelor / Master", fee: "£16,800 – £20,500/yr" },
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
    usp: "Official Partner of UniSZA | 1st Year Cost Only ৳5.5 Lakh | UK & US Credit Transfers",
    highlights: [
      "Top 10 Public University (UniSZA): 1st year official cost only ৳5.5 Lakh BDT",
      "MILA University: Guaranteed 50% Flat Scholarship on entire degree",
      "Save 60%–80% compared with UK, USA, or Australia"
    ],
    livingCost: "RM 1,200 – RM 2,000 / month",
    institutionsCount: "6+ Listed",
    heroImg: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇲🇾 Top ASEAN Higher Education Hub",
    subBadge: "100% Medical Waivers • MILA 50% Flat • UniSZA ~৳5.5 Lakh",
    heroHeading: "Study in Malaysia: 100% Scholarships & Fast EMGS",
    heroDesc: "Earn accredited UK and Australian dual degrees at 70% lower budgets. Benefit from fast 3 to 4 week EMGS visa clearance, 100% tuition-free healthcare scholarships, and public university fees starting from only ~৳5.5 Lakh BDT for the first year.",
    tuition: "RM 10,500 – RM 18,000/yr",
    tuitionSub: "~৳3.12 Lakh BDT/yr (UniSZA Public)",
    living: "RM 1,200 – RM 1,800/mo",
    livingSub: "~৳30k – ৳45k BDT/mo",
    work: "Permitted on Vacations",
    workSub: "Semester break work allowed",
    psw: "Fast eVAL Clearance",
    pswSub: "3 to 4 week processing",
    whyStudy: [
      { icon: "🏥", title: "100% Medical & Healthcare Quota", desc: "Zero tuition fees for Bachelor, Master & PhD in Nursing, Physiotherapy, Pharmacy, and MBA Healthcare Management." },
      { icon: "🏛️", title: "UniSZA Public University Partner", desc: "Top 10 public university in Malaysia with total first-year official expenses of only ~৳5.5 Lakh BDT." },
      { icon: "🎓", title: "MILA 50% Flat Scholarship", desc: "Guaranteed 50% flat discount on entire course fees across all undergraduate and postgraduate degrees." }
    ],
    solvency: [
      { title: "Bank Statement Requirement", detail: "Very flexible: ~৳5 to ৳7 Lakh BDT proof of funds in student or parent account." },
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
      { q: "What is the total first-year budget for UniSZA?", a: "The total official first-year cost at UniSZA is approximately ~৳5.5 Lakh BDT." }
    ],
    universities: [
      {
        id: "unisza",
        name: "Universiti Sultan Zainal Abidin (UniSZA)",
        badge: "Official Direct Partner • Top 10 Public",
        type: "Prestigious Government Public University",
        tagline: "Subsidized government public university. 1st year total official expenses only ~৳5.5 Lakh BDT.",
        intakes: "September 2026, February 2027",
        deadlines: "Rolling admissions: ~2 months prior to intake start",
        tuitionUG: "RM 10,500 / year (~৳3.12 Lakh BDT/yr)",
        tuitionPG: "Master: RM 25,000 total | PhD: RM 27,000–RM 43,000 total",
        scholarship: "Subsidized Public University Fees & 100% EMGS Packages",
        workRights: "Permitted during semester breaks & vacations",
        entryUG: "HSC GPA 3.0+ | IELTS 5.5",
        entryPG: "Bachelor CGPA 2.50+ | IELTS 5.5 or MOI Accepted for Research Master's & PhD",
        whyStudy: [
          "Ranked among the Top 10 Public Universities in Malaysia (THE World University Rankings 2026).",
          "Official Direct Recruitment Partner: Study First Info Ltd. provides seamless end-to-end processing.",
          "1st year total official expenses only ৳5.5 Lakh BDT (includes Tuition, EMGS, Admin, Registration).",
          "Medium of Instruction (MOI) fully accepted for Research Master's and PhD programs."
        ],
        costAndBank: {
          monthlyCost: "RM 1,000 – RM 1,500 / month (~৳25,000 – ৳38,000 BDT)",
          bankFundSingle: "Very flexible: ~৳5 Lakh to ৳7 Lakh BDT proof of funds",
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
        tuitionUG: "RM 12,000 – RM 18,000 / year (Net)",
        tuitionPG: "RM 14,000 – RM 20,000 / year",
        scholarship: "50% Flat Scholarship on Entire Degree (100% waiver for GPA 75%+)",
        workRights: "Permitted during vacations",
        entryUG: "HSC pass | IELTS 5.0–5.5 or MOI accepted",
        entryPG: "Bachelor degree | MOI or IELTS 5.5",
        whyStudy: [
          "Guaranteed 50% FLAT scholarship across the entire program duration for UG & PG.",
          "100% Scholarship (Zero Tuition Fee) available for strong academic profiles (75%+ & IELTS 5.5).",
          "Fast graduation: complete a 3 to 3.5 year bachelor's degree."
        ],
        costAndBank: {
          monthlyCost: "RM 1,200 – RM 1,800 / month",
          bankFundSingle: "~৳5 Lakh to ৳6 Lakh BDT",
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
      },
      {
        id: "segi-university-kota-dama",
        name: "SEGi University (Kota Damansara)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "QS 5 Stars Plus",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Total 3-4 year programme fee: RM 58,570 to RM 134,170",
        tuitionPG: "Total 3-4 year programme fee: RM 58,570 to RM 134,170",
        scholarship: "40%–80% profile-based scholarships; up to 100% waivers for top academic profiles",
        workRights: "20 hrs/week during semester breaks",
        entryUG: "HSC GPA 3.0+ (Pharmacy/Health higher); IELTS 5.0-5.5 or MOI accepted",
        entryPG: "HSC GPA 3.0+ (Pharmacy/Health higher); IELTS 5.0-5.5 or MOI accepted",
        whyStudy: [
          "QS 5 Stars Plus",
          "Top 1.5% globally (#701-710)",
          "TWO degree certificates (SEGi + UK)",
          "90+ nationalities",
          "25+ global mobility partners (KMCU, Sunchon, HIT China)",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: RM 1,500–2,000/month",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "UK Dual Award degree recognized globally; international exchange & internships",
        partTimeJobs: "20 hrs/week during semester breaks",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer letter",
          "Step 3: EMGS approval",
          "Step 4: eVAL",
          "Step 5: Single entry visa",
        ],
        programs: [
          { name: "BSc / MSc in Univ of Greenwich & Chichester", level: "Undergraduate / Postgraduate", fee: "Total 3-4 year programme fee: RM 58,570 to RM 134,170" },
        ]
      },
      {
        id: "inti-international-univer",
        name: "INTI International University (Nilai / Subang / Penang)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Save 60-80% compared with UK/US/Australia",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "RM 20,000 – RM 35,000/yr (Fraction of UK/US costs)",
        tuitionPG: "RM 20,000 – RM 35,000/yr (Fraction of UK/US costs)",
        scholarship: "Merit Scholarship, Early Bird, Country Scholarship, and Progression Scholarship",
        workRights: "Permitted during semester breaks",
        entryUG: "HSC GPA 3.0+ / Bachelor CGPA 2.50+; IELTS 5.0-5.5 or MOI accepted",
        entryPG: "HSC GPA 3.0+ / Bachelor CGPA 2.50+; IELTS 5.0-5.5 or MOI accepted",
        whyStudy: [
          "Save 60-80% compared with UK/US/Australia",
          "transfer credits to hundreds of US/UK/Aus/European universities",
          "full residential campus",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: RM 1,200–1,800/month",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Direct credit transfer pathways; US/UK degrees without leaving Asia; high employability",
        partTimeJobs: "Permitted during semester breaks",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Offer letter",
          "Step 3: EMGS clearance",
          "Step 4: eVAL",
          "Step 5: Single Entry Visa",
        ],
        programs: [
          { name: "BSc / MSc in Hertfordshire", level: "Undergraduate / Postgraduate", fee: "RM 20,000 – RM 35,000/yr (Fraction of UK/US costs)" },
          { name: "BSc / MSc in Coventry", level: "Undergraduate / Postgraduate", fee: "RM 20,000 – RM 35,000/yr (Fraction of UK/US costs)" },
        ]
      },
      {
        id: "um",
        name: "Universiti Malaya (UM)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Malaysia's #1 ranked university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "RM 18,000 – RM 45,000/yr",
        tuitionPG: "RM 18,000 – RM 45,000/yr",
        scholarship: "Government and ASEAN research grants",
        workRights: "Restricted on-campus employment",
        entryUG: "HSC GPA 4.8+/5.0 or Bachelor CGPA 3.50+; IELTS 6.0",
        entryPG: "HSC GPA 4.8+/5.0 or Bachelor CGPA 3.50+; IELTS 6.0",
        whyStudy: [
          "Malaysia's #1 ranked university",
          "QS World Top 60",
          "premier research infrastructure",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: RM 1,500–2,200/month",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Top-tier global corporate employment; worldwide recognition",
        partTimeJobs: "Restricted on-campus employment",
        applicationSteps: [
          "Step 1: Direct portal",
          "Step 2: Faculty assessment",
          "Step 3: eVAL",
          "Step 4: Single Entry Visa",
        ],
        programs: [
          { name: "UG & PG in Engineering, Medicine, Computer Science, Business", level: "Bachelor / Master", fee: "RM 18,000 – RM 45,000/yr" },
        ]
      },
      {
        id: "apu",
        name: "Asia Pacific University (APU)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Premier technology university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "RM 25,000 – RM 35,000/yr",
        tuitionPG: "RM 25,000 – RM 35,000/yr",
        scholarship: "Merit-based tuition discounts ranging from 10% to 50%",
        workRights: "Permitted during vacations",
        entryUG: "HSC GPA 3.5+ / Bachelor CGPA 2.75+; IELTS 5.5 or MOI accepted",
        entryPG: "HSC GPA 3.5+ / Bachelor CGPA 2.75+; IELTS 5.5 or MOI accepted",
        whyStudy: [
          "Premier technology university",
          "100% employability rate",
          "UK dual degree with De Montfort University",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: RM 1,500–2,000/month",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "High demand in ASEAN tech corridors (KL, Singapore); global IT recruitment",
        partTimeJobs: "Permitted during vacations",
        applicationSteps: [
          "Step 1: Online application",
          "Step 2: Offer",
          "Step 3: EMGS",
          "Step 4: eVAL",
          "Step 5: Single Entry Visa",
        ],
        programs: [
          { name: "UG & PG in Artificial Intelligence, Cybersecurity, Software", level: "Bachelor / Master", fee: "RM 25,000 – RM 35,000/yr" },
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
    usp: "Starting Tuition €3,500/Year | European TRP Card | English-Taught Degrees",
    highlights: [
      "Affordable European Union degrees starting from only €3,500/year",
      "Temporary Residence Permit (TRP) with full European mobility",
      "Part-time legal work rights: 20 hours/week"
    ],
    livingCost: "€400 – €700 / month",
    institutionsCount: "7+ Listed",
    heroImg: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇱🇹 Affordable Schengen Destination",
    subBadge: "Tuition from €3,500/Yr • European TRP Residence Permit",
    heroHeading: "Study in Lithuania: Affordable Tuition & Full Schengen Rights",
    heroDesc: "Study in the vibrant Baltic tech and FinTech hub of Vilnius and Kaunas. Complete European Union accredited degrees starting from only €3,500 per year with legal 20 hours/week work rights and 29-country Schengen mobility.",
    tuition: "€3,500 – €4,500/yr",
    tuitionSub: "Affordable EU Degree",
    living: "€400 – €700/mo",
    livingSub: "Dormitories from €150/mo",
    work: "20 Hours / Week",
    workSub: "Legal work rights",
    psw: "1-Year Job Seeker TRP",
    pswSub: "EU residence extension",
    whyStudy: [
      { icon: "💵", title: "Low Tuition Rates", desc: "European Union recognized bachelor degrees starting from only €3,500 to €4,500 per year." },
      { icon: "🌍", title: "Schengen TRP Card", desc: "Temporary Residence Permit granting complete borderless mobility across 29 Schengen countries." }
    ],
    solvency: [
      { title: "Bank Solvency Proof", detail: "Proof of ~€7,000 to €9,000 in student or sponsor account." }
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
        tuitionUG: "€3,500 – €4,500 / year (3 Years)",
        tuitionPG: "N/A (Bachelor Specialist)",
        scholarship: "Institutional merit discounts & performance grants",
        workRights: "20 hrs/week legal work",
        entryUG: "Higher Secondary (12 years) GPA 4.5/5.0 or 3.5/4.0 | IELTS 5.5, PTE 59, or MOI",
        entryPG: "N/A",
        whyStudy: [
          "Lithuania's largest private college of applied sciences with modern campuses in Vilnius, Kaunas, and Klaipeda.",
          "Highly practical syllabus directly oriented toward European tech, game design, and business jobs.",
          "Affordable tuition starting from only €3,500 per year."
        ],
        costAndBank: {
          monthlyCost: "€400 – €700 / month (Dorms from €150/mo)",
          bankFundSingle: "~€7,000 – €9,000 in student or sponsor account",
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
          { name: "Information and Cyber Security", level: "Bachelor (3 Yrs)", fee: "€4,400/yr" },
          { name: "Programming and Multimedia", level: "Bachelor (3 Yrs)", fee: "€4,400/yr" },
          { name: "International Business", level: "Bachelor (3 Yrs)", fee: "€3,500/yr" }
        ]
      },
      {
        id: "vbc",
        name: "Vilnius Business College (VBC)",
        badge: "Verified Academic Institution",
        type: "Government Institute of Technology",
        tagline: "Focus on IT and digital entrepreneurship",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€3,800 – €4,500/yr (€1,900–€2,250/semester)",
        tuitionPG: "€3,800 – €4,500/yr (€1,900–€2,250/semester)",
        scholarship: "Performance grants and tuition waivers",
        workRights: "20 hours per week legal work rights",
        entryUG: "12-yr Higher Secondary GPA 4.5/5.0 or 3.5/4.0; IELTS 5.5 / PTE 59 / Duolingo 110",
        entryPG: "12-yr Higher Secondary GPA 4.5/5.0 or 3.5/4.0; IELTS 5.5 / PTE 59 / Duolingo 110",
        whyStudy: [
          "Focus on IT and digital entrepreneurship",
          "high graduate employment",
          "central Vilnius campus",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €400–€700/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "European tech startup ecosystem; TRP job seeker pathways",
        partTimeJobs: "20 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Interview",
          "Step 3: SKVC",
          "Step 4: TRP / National D Visa. Deadline: 30 Oct 2026 for Feb 2027 intake",
        ],
        programs: [
          { name: "BSc / MSc in 3 yrs", level: "Undergraduate / Postgraduate", fee: "€3,800 – €4,500/yr (€1,900–€2,250/semester)" },
        ]
      },
      {
        id: "ltvk",
        name: "Lithuania Business College (LTVK)",
        badge: "Verified Academic Institution",
        type: "Government Institute of Technology",
        tagline: "Ultra-affordable EU degree",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€3,500/yr (€1,750/semester)",
        tuitionPG: "€3,500/yr (€1,750/semester)",
        scholarship: "College fee concessions",
        workRights: "20 hours per week legal work rights",
        entryUG: "12-yr Higher Secondary Education; IELTS / PTE / Duolingo / Cambridge B2",
        entryPG: "12-yr Higher Secondary Education; IELTS / PTE / Duolingo / Cambridge B2",
        whyStudy: [
          "Ultra-affordable EU degree",
          "coastal city living in Klaipeda",
          "low application fee €130",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €350–€550/mo in Klaipeda",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Logistics, maritime, and IT employment across the Schengen area",
        partTimeJobs: "20 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply online (€130 fee)",
          "Step 2: Document verification",
          "Step 3: SKVC",
          "Step 4: National D Visa. Intake: Feb 2027",
        ],
        programs: [
          { name: "BSc / MSc in 3 yrs", level: "Undergraduate / Postgraduate", fee: "€3,500/yr (€1,750/semester)" },
        ]
      },
      {
        id: "vilnius-university",
        name: "Vilnius University",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Lithuania's oldest and highest-ranked university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "General: €2,500–€5,000/yr; Medicine: €10,000–€14,000/yr",
        tuitionPG: "General: €2,500–€5,000/yr; Medicine: €10,000–€14,000/yr",
        scholarship: "Lithuanian State Scholarships for international students",
        workRights: "20 hours per week legal work rights",
        entryUG: "HSC GPA 4.5+ / Bachelor CGPA 3.2+; IELTS 6.0 / PTE",
        entryPG: "HSC GPA 4.5+ / Bachelor CGPA 3.2+; IELTS 6.0 / PTE",
        whyStudy: [
          "Lithuania's oldest and highest-ranked university",
          "historical reputation",
          "comprehensive faculties",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €500–€700/mo in Vilnius",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Premier European research & corporate roles; TRP post-study permit",
        partTimeJobs: "20 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply via VU portal",
          "Step 2: SKVC recognition",
          "Step 3: Embassy National D Visa",
        ],
        programs: [
          { name: "BSc / MSc in €10", level: "Undergraduate / Postgraduate", fee: "General: €2,500–€5,000/yr; Medicine: €10,000–€14,000/yr" },
          { name: "BSc / MSc in 000–€14", level: "Undergraduate / Postgraduate", fee: "General: €2,500–€5,000/yr; Medicine: €10,000–€14,000/yr" },
          { name: "BSc / MSc in 000", level: "Undergraduate / Postgraduate", fee: "General: €2,500–€5,000/yr; Medicine: €10,000–€14,000/yr" },
        ]
      },
      {
        id: "ktu",
        name: "Kaunas University of Technology (KTU)",
        badge: "Applied Learning & STEM Focus",
        type: "Public Research University",
        tagline: "Lithuania's premier tech university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€2,400–€3,500/yr",
        tuitionPG: "€2,500–€4,500/yr",
        scholarship: "KTU Tuition Waiver Scholarships",
        workRights: "20 hours per week legal work rights",
        entryUG: "HSC GPA 4.0+ / Bachelor CGPA 2.8+; IELTS 5.5-6.0",
        entryPG: "HSC GPA 4.0+ / Bachelor CGPA 2.8+; IELTS 5.5-6.0",
        whyStudy: [
          "Lithuania's premier tech university",
          "top modern labs",
          "industry connections in Kaunas",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €400–€600/mo in Kaunas",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "High-demand engineering & IT jobs in the Baltics; Schengen residency",
        partTimeJobs: "20 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: SKVC assessment",
          "Step 3: National D Visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Engineering, IT, Business, Artifici", level: "Bachelor / Master", fee: "€2,400–€3,500/yr" },
        ]
      },
      {
        id: "vilnius-gediminas-technic",
        name: "Vilnius Gediminas Technical University (VILNIUS TECH)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Leader in engineering and architecture",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€2,800–€3,800/yr",
        tuitionPG: "€3,000–€4,500/yr",
        scholarship: "University fee waivers",
        workRights: "20 hours per week legal work rights",
        entryUG: "HSC / Bachelor in science/math; IELTS 5.5+",
        entryPG: "HSC / Bachelor in science/math; IELTS 5.5+",
        whyStudy: [
          "Leader in engineering and architecture",
          "modern innovation ecosystem",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €450–€650/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Engineering & construction careers across the European Union",
        partTimeJobs: "20 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply online",
          "Step 2: SKVC evaluation",
          "Step 3: National D Visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Civil Engineering, Architecture, Ro", level: "Bachelor / Master", fee: "€2,800–€3,800/yr" },
        ]
      },
      {
        id: "vmu",
        name: "Vytautas Magnus University (VMU)",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Liberal arts education model",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€2,150–€3,500/yr",
        tuitionPG: "€2,300–€4,000/yr",
        scholarship: "VMU international student scholarships",
        workRights: "20 hours per week legal work rights",
        entryUG: "HSC / Bachelor pass; IELTS 5.5",
        entryPG: "HSC / Bachelor pass; IELTS 5.5",
        whyStudy: [
          "Liberal arts education model",
          "vibrant multicultural student community in Kaunas",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €400–€600/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Social research, NGO, and European business careers",
        partTimeJobs: "20 hours per week legal work rights",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Online interview",
          "Step 3: SKVC",
          "Step 4: National D Visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Humanities, Social Sciences, Busine", level: "Bachelor / Master", fee: "€2,150–€3,500/yr" },
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
    usp: "Deposit Only €3,400 (~৳4.5 Lakh BDT) | 43% Flat Tuition Discount | MOI Accepted",
    highlights: [
      "Initial deposit only €3,400 (~4.5 Lakh BDT)",
      "Guaranteed 43% to 45% tuition discount for international applicants",
      "IELTS waiver possible with Medium of Instruction (MOI)"
    ],
    livingCost: "€350 – €550 / month",
    institutionsCount: "2+ Listed",
    heroImg: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇨🇾 Mediterranean Low Budget Hub",
    subBadge: "Deposit Only €3,400 (~৳4.5 Lakh BDT) • 43% Flat Waiver",
    heroHeading: "Study in Cyprus: 43% Flat Waiver & Low Deposit",
    heroDesc: "Study First Info holds a direct institutional contract with Cyprus International University (CIU). Fly to Europe with an initial deposit of only €3,400 (~4.5 Lakh BDT), guaranteed 43% flat tuition discounts, and IELTS 5.0 or MOI waivers.",
    tuition: "€3,000 – €4,200/yr",
    tuitionSub: "After 43% Flat Discount",
    living: "€350 – €500/mo",
    livingSub: "Affordable Mediterranean living",
    work: "20 Hours / Week",
    workSub: "In designated commercial sectors",
    psw: "Credit Mobility",
    pswSub: "Direct transfer to UK & Europe",
    whyStudy: [
      { icon: "💰", title: "43% Flat Tuition Scholarship", desc: "Exclusive direct contract with Cyprus International University saving nearly ~€4,300 across your entire degree." },
      { icon: "✈️", title: "Lowest Initial Deposit", desc: "Start your file and fly with an initial deposit of only €3,400 (~4.5 Lakh BDT). Pay remaining fees in easy installments." }
    ],
    solvency: [
      { title: "Initial Payable Deposit", detail: "Only €3,400 to obtain official university acceptance and immigration clearance." }
    ],
    roadmap: [
      "Step 01: Submit academic transcripts & passport copy to Study First Info.",
      "Step 02: University issues conditional offer letter with 43% flat scholarship in 3-5 days.",
      "Step 03: Pay initial deposit of €3,400 into official university escrow.",
      "Step 04: Immigration clearance and visa approval letter issued."
    ],
    faqs: [
      { q: "What is the initial deposit required for Cyprus?", a: "The initial deposit to obtain university acceptance and visa clearance is only €3,400 (approximately ~৳4.5 Lakh BDT)." }
    ],
    universities: [
      {
        id: "ciu",
        name: "Cyprus International University (CIU)",
        badge: "Direct Contract Partner • 43% Flat Discount",
        type: "International University",
        tagline: "Ultra-modern 300-acre Mediterranean campus. High visa issuance rate with minimal financial friction.",
        intakes: "September 2026, February 2027",
        deadlines: "Rolling monthly admissions",
        tuitionUG: "€3,000 – €4,200 / year (Net fee)",
        tuitionPG: "€3,500 – €5,000 / year",
        scholarship: "Guaranteed 43% Flat Scholarship (~€4,300 total value)",
        workRights: "20 hrs/week in designated sectors",
        entryUG: "HSC pass | IELTS 4.5–5.0 or MOI accepted",
        entryPG: "Bachelor pass | MOI or IELTS 5.0",
        whyStudy: [
          "Guaranteed 43% flat tuition scholarship on all undergraduate degrees.",
          "Lowest initial deposit in Europe: only €3,400 (~৳4.5 Lakh BDT) to process visa.",
          "Credit transfer options available to UK and European partner institutions."
        ],
        costAndBank: {
          monthlyCost: "€350 – €550 / month",
          bankFundSingle: "Very flexible: ~৳3.5 Lakh to ৳5 Lakh BDT",
          bankMaturity: "Recent 3 months bank statement",
          familyFund: "Student or parents account"
        },
        careerAndPsw: "Direct stepping stone to European hospitality, tourism, IT, and transfer to UK degrees.",
        partTimeJobs: "20 hours per week permitted in designated campus and hospitality services.",
        applicationSteps: [
          "Quick documentation check (MOI or basic IELTS)",
          "Offer letter issuance",
          "Pay initial deposit of €3,400",
          "Visa clearance confirmation"
        ],
        programs: [
          { name: "BSc in Computer Engineering & Software", level: "Bachelor (4 Yrs)", fee: "€3,500/yr" },
          { name: "BA in Business Administration", level: "Bachelor (4 Yrs)", fee: "€3,200/yr" },
          { name: "Master of Business Administration (MBA)", level: "Master (1.5 Yrs)", fee: "€3,800/yr" }
        ]
      },
      {
        id: "euc",
        name: "European University Cyprus (EUC)",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "Accredited European institution",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€4,500 – €8,000/yr",
        tuitionPG: "€4,500 – €8,000/yr",
        scholarship: "20%–40% merit scholarships",
        workRights: "20 hrs/week permitted",
        entryUG: "HSC pass / Bachelor; IELTS 5.0 or MOI accepted",
        entryPG: "HSC pass / Bachelor; IELTS 5.0 or MOI accepted",
        whyStudy: [
          "Accredited European institution",
          "official Microsoft innovation center on campus",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €400–€600/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "European career stepping stone; clinical & tech roles",
        partTimeJobs: "20 hrs/week permitted",
        applicationSteps: [
          "Step 1: Direct application",
          "Step 2: Document verification",
          "Step 3: Entry visa",
        ],
        programs: [
          { name: "UG & PG in Health Sciences, Medicine, Computing, Business", level: "Bachelor / Master", fee: "€4,500 – €8,000/yr" },
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
    livingCost: "€450 – €700 / month",
    institutionsCount: "3+ Listed",
    heroImg: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇬🇷 Pay Tuition After Visa Hub",
    subBadge: "90% Visa Ratio • Pay Fees After Visa Confirmation",
    heroHeading: "Study in Greece: Pay Fees After Visa & Schengen Rights",
    heroDesc: "Study in Greece with minimal financial risk: pay university tuition fees strictly after your Schengen visa is confirmed. Enjoy an exceptional 90% visa approval track record and complete borderless travel throughout 29 Schengen states.",
    tuition: "€3,500 – €6,500/yr",
    tuitionSub: "Pay strictly after visa",
    living: "€450 – €700/mo",
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
      { title: "Bank Solvency Amount", detail: "~€7,000 to €9,000 living expense proof in student or parent account." }
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
        tuitionUG: "€3,500 – €6,500 / year",
        tuitionPG: "€4,000 – €7,000 / year",
        scholarship: "University tuition discounts based on merit",
        workRights: "20 hrs/week legal employment",
        entryUG: "HSC / A-Level pass | IELTS 5.0–5.5 or MOI",
        entryPG: "Bachelor degree pass | MOI or IELTS 5.5",
        whyStudy: [
          "Pay tuition fees ONLY after your European visa is approved.",
          "High visa success rate (approx 90%) for Bangladeshi students.",
          "Full Schengen visa granting free movement across 29 European countries."
        ],
        costAndBank: {
          monthlyCost: "€450 – €700 / month",
          bankFundSingle: "~€7,000 – €9,000 living expense proof",
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
          { name: "BSc in Maritime Management & Shipping Logistics", level: "Bachelor (3 Yrs)", fee: "€4,500/yr" },
          { name: "BA in International Tourism & Hospitality", level: "Bachelor (3 Yrs)", fee: "€3,800/yr" },
          { name: "BSc in Business & Information Systems", level: "Bachelor (3 Yrs)", fee: "€3,900/yr" }
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
      "Official Blocked Account (€11,208 to €11,904) setup support"
    ],
    livingCost: "€850 – €1,000 / month",
    institutionsCount: "5+ Listed",
    heroImg: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇩🇪 100% Tuition-Free Public Universities",
    subBadge: "No Tuition Fees Across All 16 German Federal States",
    heroHeading: "Study in Germany: Zero Tuition Fees & High-Tech Careers",
    heroDesc: "Germany offers world-leading engineering, computing, and business degrees at 100% tuition-free public universities. Benefit from 20 hours/week part-time employment, an 18-month job seeker visa, and direct pathways to EU permanent residency.",
    tuition: "0€ (Tuition-Free)",
    tuitionSub: "Only minor semester contribution",
    living: "€850 – €1,000/mo",
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
      { title: "German Blocked Account (Sperrkonto)", detail: "Statutory amount of €11,208 to €11,904 deposited in verified escrow." }
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
        badge: "Top 50 QS World Ranked • Public University",
        type: "Public University",
        tagline: "Germany's top engineering university. Zero tuition fees with world-class artificial intelligence and robotics labs.",
        intakes: "Winter (October), Summer (April)",
        deadlines: "July 15 for Winter | Jan 15 for Summer",
        tuitionUG: "€0 Tuition Fee (~€150/sem contribution)",
        tuitionPG: "€0 Tuition Fee (~€150/sem contribution)",
        scholarship: "DAAD Merit Scholarships & Industrial Research Grants",
        workRights: "20 Hours / Week",
        entryUG: "13 years education (or Studienkolleg) | IELTS 6.5 or German B2",
        entryPG: "Bachelor CGPA 3.0+/4.0 | IELTS 6.5 or German B2/C1",
        whyStudy: [
          "100% tuition-free higher education at a global top 50 institution.",
          "World capital of automotive and mechanical engineering.",
          "Direct access to paid working-student (Werkstudent) jobs paying €14–€20/hr."
        ],
        costAndBank: {
          monthlyCost: "€850 – €1,050 / month",
          bankFundSingle: "€11,208 Blocked Account (Sperrkonto)",
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
          { name: "BSc in Informatics / Computer Science", level: "Bachelor (3 Yrs)", fee: "€0 Tuition" },
          { name: "MSc in Robotics, Cognition & Intelligence", level: "Master (2 Yrs)", fee: "€0 Tuition" },
          { name: "MSc in Mechanical & Automotive Engineering", level: "Master (2 Yrs)", fee: "€0 Tuition" }
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
      "Monthly living allowance from 2,500 to 3,500 RMB (~৳40k–৳55k BDT)"
    ],
    livingCost: "2,000 – 3,500 RMB / month",
    institutionsCount: "21+ Listed",
    heroImg: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇨🇳 100% CSC Full-Ride Hub",
    subBadge: "Zero Tuition • Free Dormitory • Monthly Cash Stipend",
    heroHeading: "Study in China: 100% Full-Ride Scholarships & Global Tech",
    heroDesc: "Study at world-class Chinese universities with comprehensive Chinese Government Scholarships (CSC) and provincial awards. Enjoy zero tuition fees, verified campus accommodation, and generous monthly cash allowances.",
    tuition: "100% Full Waiver (CSC)",
    tuitionSub: "Or 12,000–25,000 RMB self-funded",
    living: "Covered by Stipend",
    livingSub: "2,500–3,500 RMB monthly stipend",
    work: "Campus Research & Internships",
    workSub: "Permitted during study",
    psw: "High-Tech Z-Visa Route",
    pswSub: "Direct MNC recruitment",
    whyStudy: [
      { icon: "🎓", title: "100% Full-Ride Funding", desc: "CSC scholarships cover full tuition, campus housing, and monthly living stipends for bachelor, master, and doctoral scholars." },
      { icon: "⚡", title: "Global STEM & AI Leader", desc: "Top world-ranked labs in artificial intelligence, civil engineering, robotics, and international trade." }
    ],
    solvency: [
      { title: "Bank Solvency Proof", detail: "CSC Full-Ride scholars are exempt from large bank solvency requirements (~৳3 to ৳5 Lakh BDT statement sufficient)." }
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
          bankFundSingle: "Nominal: ~৳3 Lakh to ৳5 Lakh BDT",
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
      },
      {
        id: "hust",
        name: "Huazhong University of Science and Technology (HUST)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Located in Wuhan (Hubei)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Bachelor's (Chinese-taught Sci/Eng/Econ/Mgmt): 25,000 RMB/yr; Literature/Law/Edu: 18,000 RMB/yr; Medicine (Chinese): 33,000 RMB/yr; English-taught Engineering: 30,000 RMB/yr; MBBS (English): 40,000 RMB/yr; Pharmacy (English): 35,000 RMB/yr; Master's (Chinese-taught): 25,000-40,000 RMB/yr; Master's (English-taught): 33,000-48,000 RMB/yr; PhD: 30,000-50,000 RMB/yr.",
        tuitionPG: "Bachelor's (Chinese-taught Sci/Eng/Econ/Mgmt): 25,000 RMB/yr; Literature/Law/Edu: 18,000 RMB/yr; Medicine (Chinese): 33,000 RMB/yr; English-taught Engineering: 30,000 RMB/yr; MBBS (English): 40,000 RMB/yr; Pharmacy (English): 35,000 RMB/yr; Master's (Chinese-taught): 25,000-40,000 RMB/yr; Master's (English-taught): 33,000-48,000 RMB/yr; PhD: 30,000-50,000 RMB/yr.",
        scholarship: "Chinese Government Scholarship (CSC) [Full Tuition, Accommodation, Monthly Stipend, Medical Insurance]; HUST University Scholarship [Full/Partial Tuition]; Chinese University Program Scholarship [Tuition Support]; China Link Scholarship (exchange/research).",
        workRights: "On-campus student assistantships and university-approved internships under Chinese student visa regulations.",
        entryUG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV (PG), Medical Examination Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        entryPG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV (PG), Medical Examination Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        whyStudy: [
          "Located in Wuhan (Hubei)",
          "Top 10 in China, QS ~319",
          "Project 985/211/Double First-Class",
          "Internationally recognized for Engineering, Optics, Medicine (MBBS), AI & Mechanical Engineering",
          "beautiful forest campus",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "High graduate employability; Wuhan technology & optics hub ('Optics Valley') and top hospitals for medical graduates.",
        partTimeJobs: "On-campus student assistantships and university-approved internships under Chinese student visa regulations.",
        applicationSteps: [
          "Step 1: Apply via iso.hust.edu.cn",
          "Step 2: Submit passport, transcripts, study plan, medical report, recommendations",
          "Step 3: Review & interview",
          "Step 4: Admission notification & JW202",
          "Step 5: Chinese X1 visa filing.",
        ],
        programs: [
          { name: "BSc / MSc in MBBS", level: "Undergraduate / Postgraduate", fee: "Bachelor's (Chinese-taught Sci/Eng/Econ/Mgmt): 25,000 RMB/yr; Literature/Law/Edu: 18,000 RMB/yr; Medicine (Chinese): 33,000 RMB/yr; English-taught Engineering: 30,000 RMB/yr; MBBS (English): 40,000 RMB/yr; Pharmacy (English): 35,000 RMB/yr; Master's (Chinese-taught): 25,000-40,000 RMB/yr; Master's (English-taught): 33,000-48,000 RMB/yr; PhD: 30,000-50,000 RMB/yr." },
        ]
      },
      {
        id: "sjtu",
        name: "Shanghai Jiao Tong University (SJTU)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Shanghai",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Bachelor's (Arts & Humanities): 24,800 RMB/yr; Bachelor's (Sci & Eng): 28,900 RMB/yr; MBBS: 45,000 RMB/yr; Master's (Arts): 28,900 RMB/yr; Master's (Eng & Sci): 32,000-45,500 RMB/yr; MBA: Higher tuition (program-dependent); PhD: 36,000-45,500 RMB/yr; Chinese Language/Non-degree: 9,000-18,000 RMB.",
        tuitionPG: "Bachelor's (Arts & Humanities): 24,800 RMB/yr; Bachelor's (Sci & Eng): 28,900 RMB/yr; MBBS: 45,000 RMB/yr; Master's (Arts): 28,900 RMB/yr; Master's (Eng & Sci): 32,000-45,500 RMB/yr; MBA: Higher tuition (program-dependent); PhD: 36,000-45,500 RMB/yr; Chinese Language/Non-degree: 9,000-18,000 RMB.",
        scholarship: "Chinese Government Scholarship (CSC) [Full Tuition, Accommodation, Monthly Stipend, Medical Insurance]; Shanghai Government Scholarship (SGS) [Full Tuition, Accommodation, Living Allowance, Insurance]; SJTU Scholarship [Full/Partial Tuition]; Chinese University Program.",
        workRights: "Allowed for on-campus work-study and approved off-campus internships with university consent.",
        entryUG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV (PG), Medical Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        entryPG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV (PG), Medical Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        whyStudy: [
          "Shanghai",
          "Member of C9 League (China's Ivy League)",
          "QS ~47, China Top 5",
          "Project 985/211/Double First-Class",
          "Global prestige in Engineering, CS, AI, Business, Medicine",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-18,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "High global graduate employability; direct recruitment by multinational firms and tech giants in Shanghai and worldwide.",
        partTimeJobs: "Allowed for on-campus work-study and approved off-campus internships with university consent.",
        applicationSteps: [
          "Step 1: Direct SJTU application portal (global.sjtu.edu.cn)",
          "Step 2: Application fee",
          "Step 3: Academic review",
          "Step 4: Interview",
          "Step 5: Admission offer & JW202/Visa docs.",
        ],
        programs: [
          { name: "BSc / MSc in MBBS", level: "Undergraduate / Postgraduate", fee: "Bachelor's (Arts & Humanities): 24,800 RMB/yr; Bachelor's (Sci & Eng): 28,900 RMB/yr; MBBS: 45,000 RMB/yr; Master's (Arts): 28,900 RMB/yr; Master's (Eng & Sci): 32,000-45,500 RMB/yr; MBA: Higher tuition (program-dependent); PhD: 36,000-45,500 RMB/yr; Chinese Language/Non-degree: 9,000-18,000 RMB." },
        ]
      },
      {
        id: "scu",
        name: "Sichuan University (SCU)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Chengdu, Sichuan",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Bachelor's (Humanities/Econ/Mgmt): 17,500 RMB/yr; Bachelor's (Sci & Eng): 22,000 RMB/yr; Pharmacy/Public Health: 29,250 RMB/yr; Dentistry: 36,000 RMB/yr; MBBS: 45,000 RMB/yr; Master's: 25,000-40,000 RMB/yr; PhD: 30,000-45,000 RMB/yr; Chinese Language: 8,000-18,000 RMB.",
        tuitionPG: "Bachelor's (Humanities/Econ/Mgmt): 17,500 RMB/yr; Bachelor's (Sci & Eng): 22,000 RMB/yr; Pharmacy/Public Health: 29,250 RMB/yr; Dentistry: 36,000 RMB/yr; MBBS: 45,000 RMB/yr; Master's: 25,000-40,000 RMB/yr; PhD: 30,000-45,000 RMB/yr; Chinese Language: 8,000-18,000 RMB.",
        scholarship: "Chinese Government Scholarship (CSC); Chinese University Program Scholarship (Full); Sichuan Provincial Government Scholarship (Partial).",
        workRights: "Campus work-study opportunities permitted under local regulations.",
        entryUG: "Academic transcripts & certificates, Passport, English proficiency (IELTS 6.0-6.5/TOEFL) or HSK, Study Plan, Recommendation Letters (PG), CV, Medical Examination Form.",
        entryPG: "Academic transcripts & certificates, Passport, English proficiency (IELTS 6.0-6.5/TOEFL) or HSK, Study Plan, Recommendation Letters (PG), CV, Medical Examination Form.",
        whyStudy: [
          "Chengdu, Sichuan",
          "QS ~324, China Top 15",
          "Project 985/211/Double First-Class",
          "World-famous for Dentistry (Stomatology) & Medical Sciences",
          "located in Chengdu (one of China's most livable and affordable major cities)",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "Exceptional clinical & dental career tracks; biomedical industry pathways; regional tech and engineering hubs in southwest China.",
        partTimeJobs: "Campus work-study opportunities permitted under local regulations.",
        applicationSteps: [
          "Step 1: Apply via global.scu.edu.cn",
          "Step 2: Document upload & evaluation",
          "Step 3: Departmental assessment/interview",
          "Step 4: Admission letter & visa package.",
        ],
        programs: [
          { name: "BSc / MSc in MBBS", level: "Undergraduate / Postgraduate", fee: "Bachelor's (Humanities/Econ/Mgmt): 17,500 RMB/yr; Bachelor's (Sci & Eng): 22,000 RMB/yr; Pharmacy/Public Health: 29,250 RMB/yr; Dentistry: 36,000 RMB/yr; MBBS: 45,000 RMB/yr; Master's: 25,000-40,000 RMB/yr; PhD: 30,000-45,000 RMB/yr; Chinese Language: 8,000-18,000 RMB." },
        ]
      },
      {
        id: "seu",
        name: "Southeast University (SEU)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Nanjing, Jiangsu",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Bachelor's (Humanities & Mgmt): 18,000-22,000 RMB/yr; Bachelor's (Sci & Eng): 24,000-30,000 RMB/yr; Bachelor's (Architecture, 5 yrs): 30,000-34,000 RMB/yr; Master's: 30,000-36,000 RMB/yr; PhD: 34,000-40,000 RMB/yr; Chinese Language: 8,000-16,000 RMB.",
        tuitionPG: "Bachelor's (Humanities & Mgmt): 18,000-22,000 RMB/yr; Bachelor's (Sci & Eng): 24,000-30,000 RMB/yr; Bachelor's (Architecture, 5 yrs): 30,000-34,000 RMB/yr; Master's: 30,000-36,000 RMB/yr; PhD: 34,000-40,000 RMB/yr; Chinese Language: 8,000-16,000 RMB.",
        scholarship: "Chinese Government Scholarship (CSC) [Full Tuition, Accommodation, Monthly Stipend, Medical Insurance]; Southeast University Scholarship [Full/Partial Tuition]; Chinese University Program [Tuition Support]; Jiangsu Provincial Government Scholarship [Tuition Support].",
        workRights: "On-campus positions and permitted internship training.",
        entryUG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV (PG), Medical Examination Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        entryPG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV (PG), Medical Examination Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        whyStudy: [
          "Nanjing, Jiangsu",
          "QS ~392, China Top 20",
          "Project 985/211/Double First-Class",
          "One of China's oldest and most renowned engineering schools",
          "top-ranked nationwide for Architecture, Civil Engineering, and Transportation Engineering",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "High graduate employability in infrastructure, construction, tech, and engineering conglomerates; strong industry partnerships in Yangtze River Delta.",
        partTimeJobs: "On-campus positions and permitted internship training.",
        applicationSteps: [
          "Step 1: Apply online via cis.seu.edu.cn",
          "Step 2: Upload documents",
          "Step 3: Academic review",
          "Step 4: Offer & JW202",
          "Step 5: Apply for X1 visa.",
        ],
        programs: [
          { name: "Bachelor's: Architecture, Civil Engineering, CS & Technology", level: "Bachelor / Master", fee: "Bachelor's (Humanities & Mgmt): 18,000-22,000 RMB/yr; Bachelor's (Sci & Eng): 24,000-30,000 RMB/yr; Bachelor's (Architecture, 5 yrs): 30,000-34,000 RMB/yr; Master's: 30,000-36,000 RMB/yr; PhD: 34,000-40,000 RMB/yr; Chinese Language: 8,000-16,000 RMB." },
        ]
      },
      {
        id: "tongji-university",
        name: "Tongji University",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Shanghai",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Bachelor's (Science): 24,600 RMB/yr; Bachelor's (Arts/Humanities): 20,000 RMB/yr; Architecture/Design: 28,700 RMB/yr; Civil Engineering (English): 35,000 RMB/yr; MBBS (English): 45,000 RMB/yr; Master's (Science): 28,700 RMB/yr; Master's (Arts): 22,960 RMB/yr; Environmental/Software Engineering (English): 39,000 RMB/yr; PhD: starts ~28,700 RMB/yr.",
        tuitionPG: "Bachelor's (Science): 24,600 RMB/yr; Bachelor's (Arts/Humanities): 20,000 RMB/yr; Architecture/Design: 28,700 RMB/yr; Civil Engineering (English): 35,000 RMB/yr; MBBS (English): 45,000 RMB/yr; Master's (Science): 28,700 RMB/yr; Master's (Arts): 22,960 RMB/yr; Environmental/Software Engineering (English): 39,000 RMB/yr; PhD: starts ~28,700 RMB/yr.",
        scholarship: "Chinese Government Scholarship (CSC); Shanghai Municipal Government Scholarship (Full Tuition, Accom Category A, Stipend, Insurance); Tongji University International Student Excellence Scholarship (Full/Partial Tuition).",
        workRights: "On-campus student positions and authorized internships.",
        entryUG: "Academic transcripts & certificates, Passport, English proficiency (IELTS 6.0-6.5 / TOEFL) or HSK, Study Plan, Recommendation Letters (PG), CV, Medical Examination Form.",
        entryPG: "Academic transcripts & certificates, Passport, English proficiency (IELTS 6.0-6.5 / TOEFL) or HSK, Study Plan, Recommendation Letters (PG), CV, Medical Examination Form.",
        whyStudy: [
          "Shanghai",
          "QS ~177, China Top 15",
          "Project 985/211/Double First-Class",
          "Globally legendary reputation for Architecture, Civil Engineering, Urban Planning, and Design",
          "strong Sino-German cooperation and European partnerships",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "Exceptional career opportunities in urban construction, architectural firms, multinational engineering consultancies, and tech industries in Shanghai.",
        partTimeJobs: "On-campus student positions and authorized internships.",
        applicationSteps: [
          "Step 1: Apply through study.tongji.edu.cn",
          "Step 2: Academic assessment",
          "Step 3: Interview",
          "Step 4: Admission Notice & JW202",
          "Step 5: Student visa application.",
        ],
        programs: [
          { name: "BSc / MSc in English", level: "Undergraduate / Postgraduate", fee: "Bachelor's (Science): 24,600 RMB/yr; Bachelor's (Arts/Humanities): 20,000 RMB/yr; Architecture/Design: 28,700 RMB/yr; Civil Engineering (English): 35,000 RMB/yr; MBBS (English): 45,000 RMB/yr; Master's (Science): 28,700 RMB/yr; Master's (Arts): 22,960 RMB/yr; Environmental/Software Engineering (English): 39,000 RMB/yr; PhD: starts ~28,700 RMB/yr." },
        ]
      },
      {
        id: "whu",
        name: "Wuhan University (WHU)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Wuhan, Hubei",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Bachelor's: 20,000-40,000 RMB/yr; MBBS: approx. 40,000-45,000 RMB/yr; Master's: 25,000-45,000 RMB/yr; PhD: 30,000-50,000 RMB/yr; Chinese Language/Non-degree: 8,250-16,500 RMB.",
        tuitionPG: "Bachelor's: 20,000-40,000 RMB/yr; MBBS: approx. 40,000-45,000 RMB/yr; Master's: 25,000-45,000 RMB/yr; PhD: 30,000-50,000 RMB/yr; Chinese Language/Non-degree: 8,250-16,500 RMB.",
        scholarship: "Chinese Government Scholarship (CSC); Wuhan University Scholarship (Full/Partial Tuition); Chinese University Program (Full Scholarship); Hubei Provincial Government Scholarship (Partial); Confucius Institute Scholarship.",
        workRights: "Campus work-study permitted.",
        entryUG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV, Medical Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        entryPG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV, Medical Form; English: IELTS 6.0-6.5 / TOEFL 80-90 or HSK.",
        whyStudy: [
          "Wuhan, Hubei",
          "Established 1893",
          "QS ~194, China Top 10",
          "Project 985/211/Double First-Class",
          "World leader in Remote Sensing & Surveying",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "High graduate employability across Central China, national research institutes, geospatial/remote sensing firms, and international hospitals.",
        partTimeJobs: "Campus work-study permitted.",
        applicationSteps: [
          "Step 1: Apply online via en.whu.edu.cn",
          "Step 2: Document evaluation",
          "Step 3: Interview",
          "Step 4: Acceptance notice & JW202",
          "Step 5: Visa filing.",
        ],
        programs: [
          { name: "Bachelor's: CS, AI, Software Engineering, Electrical, Civil,", level: "Bachelor / Master", fee: "Bachelor's: 20,000-40,000 RMB/yr; MBBS: approx. 40,000-45,000 RMB/yr; Master's: 25,000-45,000 RMB/yr; PhD: 30,000-50,000 RMB/yr; Chinese Language/Non-degree: 8,250-16,500 RMB." },
        ]
      },
      {
        id: "zju",
        name: "Zhejiang University (ZJU)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Hangzhou, Zhejiang",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "CNY 20,000-50,000/year depending on program and degree level.",
        tuitionPG: "CNY 20,000-50,000/year depending on program and degree level.",
        scholarship: "Chinese Government Scholarship (CSC); Zhejiang University Scholarship; Chinese University Program; Zhejiang Provincial Government Scholarship; Confucius Institute Scholarship.",
        workRights: "Campus work-study and approved internship opportunities.",
        entryUG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV, Medical Form; English: IELTS 6.0-6.5 / TOEFL or HSK.",
        entryPG: "Academic transcripts & certificates, Passport, Study Plan, Recommendation Letters (PG), CV, Medical Form; English: IELTS 6.0-6.5 / TOEFL or HSK.",
        whyStudy: [
          "Hangzhou, Zhejiang",
          "QS ~44, China Top 5",
          "C9 League (China's Ivy League), Project 985/211/Double First-Class",
          "Known as China's entrepreneurship and AI capital (headquarters of Alibaba)",
          "world-class research power",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "Extraordinary tech ecosystem in Hangzhou (Alibaba, NetEase, AI startups); high graduate employability worldwide.",
        partTimeJobs: "Campus work-study and approved internship opportunities.",
        applicationSteps: [
          "Step 1: Apply via ZJU international application portal",
          "Step 2: Document screening",
          "Step 3: Online interview/test",
          "Step 4: JW202 issuance",
          "Step 5: Visa application.",
        ],
        programs: [
          { name: "Bachelor's, Master's, PhD in Computer Science, AI, Software", level: "Bachelor / Master", fee: "CNY 20,000-50,000/year depending on program and degree level." },
        ]
      },
      {
        id: "sysu",
        name: "Sun Yat-sen University (SYSU)",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Guangzhou, Zhuhai & Shenzhen, Guangdong Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Approximately 22,000-45,000 RMB/yr (Liberal Arts: ~22,000-26,000; Sci/Eng: ~26,000-35,000; MBBS: ~40,000-48,000; Master's/PhD: ~30,000-48,000 RMB/yr).",
        tuitionPG: "Approximately 22,000-45,000 RMB/yr (Liberal Arts: ~22,000-26,000; Sci/Eng: ~26,000-35,000; MBBS: ~40,000-48,000; Master's/PhD: ~30,000-48,000 RMB/yr).",
        scholarship: "Chinese Government Scholarship (CSC); Guangdong Provincial Government Scholarship; Sun Yat-sen University International Student Scholarship.",
        workRights: "Campus work-study permitted with university approval.",
        entryUG: "Passport, Academic transcripts & certificates, English proficiency (IELTS 6.0-6.5/TOEFL) or HSK, Study Plan, Recommendation Letters (PG), CV, Medical Examination Form.",
        entryPG: "Passport, Academic transcripts & certificates, English proficiency (IELTS 6.0-6.5/TOEFL) or HSK, Study Plan, Recommendation Letters (PG), CV, Medical Examination Form.",
        whyStudy: [
          "Guangzhou, Zhuhai & Shenzhen, Guangdong Province",
          "Major C9/Project 985/211/Double First-Class university",
          "Top 10 in China",
          "Located in Greater Bay Area (China's economic engine)",
          "world-class clinical medicine and medical affiliated hospital network",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Accommodation: CNY 8,000-16,000/yr",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living Cost: CNY 2,000-3,500/month"
        },
        careerAndPsw: "High employability across the Guangdong-Hong Kong-Macau Greater Bay Area; leading hospital residencies; technology and finance corridors.",
        partTimeJobs: "Campus work-study permitted with university approval.",
        applicationSteps: [
          "Step 1: Apply via SYSU international admission portal",
          "Step 2: Submit academic credentials, personal statement, medical report",
          "Step 3: Assessment/interview",
          "Step 4: Admission & JW202",
          "Step 5: Visa filing.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine/MBBS", level: "Undergraduate / Postgraduate", fee: "Approximately 22,000-45,000 RMB/yr (Liberal Arts: ~22,000-26,000; Sci/Eng: ~26,000-35,000; MBBS: ~40,000-48,000; Master's/PhD: ~30,000-48,000 RMB/yr)." },
        ]
      },
      {
        id: "jinan-university",
        name: "Jinan University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "Guangzhou, Guangdong Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 40,000 CNY/year.",
        tuitionPG: "MBBS: 40,000 CNY/year.",
        scholarship: "University scholarships and Guangdong provincial awards where applicable.",
        workRights: "Regulated under Chinese student visa laws (internships permitted).",
        entryUG: "SSC & HSC Certificates & Marksheets, Passport, Medical Report, Police Clearance Certificate, Bank Statement & Solvency Certificate, Parents NID & Contact Info; English proficiency.",
        entryPG: "SSC & HSC Certificates & Marksheets, Passport, Medical Report, Police Clearance Certificate, Bank Statement & Solvency Certificate, Parents NID & Contact Info; English proficiency.",
        whyStudy: [
          "Guangzhou, Guangdong Province",
          "Renowned as the \"Paramount Academy of Overseas Chinese\"",
          "highly diverse international community",
          "excellent clinical medical training",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 4,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: approx. 8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year clinical internship included; preparation for USMLE, PLAB, BMDC licensing examinations.",
        partTimeJobs: "Regulated under Chinese student visa laws (internships permitted).",
        applicationSteps: [
          "Step 1: Application form, Photo, Passport, SSC/HSC certificates/marks, Medical, Police clearance, Bank statement",
          "Step 2: Admission Offer",
          "Step 3: JW202 form",
          "Step 4: Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 40,000 CNY/year." },
          { name: "BSc / MSc in 6 Years: 5 yrs academic + 1 yr internship", level: "Undergraduate / Postgraduate", fee: "MBBS: 40,000 CNY/year." },
        ]
      },
      {
        id: "southern-medical-universi",
        name: "Southern Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Guangzhou, Guangdong Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 45,000 CNY/year.",
        tuitionPG: "MBBS: 45,000 CNY/year.",
        scholarship: "Chinese Government Scholarships, Guangdong Provincial Government Scholarships, University Merit Awards.",
        workRights: "Clinical rotations and on-campus hospital training.",
        entryUG: "SSC & HSC marksheets/certificates, Passport, Medical Report, Police Clearance, Bank statement & solvency certificate; pre-medical science background.",
        entryPG: "SSC & HSC marksheets/certificates, Passport, Medical Report, Police Clearance, Bank statement & solvency certificate; pre-medical science background.",
        whyStudy: [
          "Guangzhou, Guangdong Province",
          "Former First Military Medical University",
          "one of China's premier independent medical universities with extensive top-tier affiliated hospital networks",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 9,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year clinical hospital internship; recognized by WHO/WFME, eligible for international medical licensing (BMDC, USMLE, PLAB).",
        partTimeJobs: "Clinical rotations and on-campus hospital training.",
        applicationSteps: [
          "Step 1: Application form & documentation submission",
          "Step 2: Evaluation",
          "Step 3: Admission notice & JW202 form",
          "Step 4: Embassy Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 45,000 CNY/year." },
          { name: "BSc / MSc in 6 Years: 5 yrs study + 1 yr internship", level: "Undergraduate / Postgraduate", fee: "MBBS: 45,000 CNY/year." },
        ]
      },
      {
        id: "nanjing-medical-universit",
        name: "Nanjing Medical University",
        badge: "QS / Nationally Ranked",
        type: "State Medical University",
        tagline: "Nanjing, Jiangsu Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 34,000 CNY/year.",
        tuitionPG: "MBBS: 34,000 CNY/year.",
        scholarship: "Jiangsu Provincial Government Scholarship, Nanjing Municipal Scholarship, University Merit Scholarship.",
        workRights: "Permitted clinical rotations.",
        entryUG: "SSC & HSC Certificates & Marksheets, Passport, Medical Report, Police Clearance, Bank Statement & Solvency Certificate.",
        entryPG: "SSC & HSC Certificates & Marksheets, Passport, Medical Report, Police Clearance, Bank Statement & Solvency Certificate.",
        whyStudy: [
          "Nanjing, Jiangsu Province",
          "Top-ranked medical institution in China",
          "prestigious clinical faculty and modern teaching hospitals",
          "historic and safe city of Nanjing",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 6,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Living/food: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "Direct hospital clinical postings; international medical qualification recognition (BMDC, AMC, USMLE, PLAB).",
        partTimeJobs: "Permitted clinical rotations.",
        applicationSteps: [
          "Step 1: Application form",
          "Step 2: Submission of academic & medical documents",
          "Step 3: Verification",
          "Step 4: Admission letter & JW202 form",
          "Step 5: Student Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 34,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 34,000 CNY/year." },
        ]
      },
      {
        id: "southwest-medical-univers",
        name: "Southwest Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Chengdu / Luzhou, Sichuan Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 33,000 CNY/year.",
        tuitionPG: "MBBS: 33,000 CNY/year.",
        scholarship: "Sichuan Provincial Government Scholarship, University International Student Scholarship.",
        workRights: "Clinical electives.",
        entryUG: "SSC & HSC pass with good science grades, Passport, Medical Report, Police Clearance, Bank statement & solvency.",
        entryPG: "SSC & HSC pass with good science grades, Passport, Medical Report, Police Clearance, Bank statement & solvency.",
        whyStudy: [
          "Chengdu / Luzhou, Sichuan Province",
          "Renowned medical university in southwest China",
          "very affordable living and hostel costs",
          "comprehensive teaching hospitals",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 6,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: ~8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year clinical internship; worldwide medical licensing exam eligibility.",
        partTimeJobs: "Clinical electives.",
        applicationSteps: [
          "Step 1: Online application",
          "Step 2: Document screening",
          "Step 3: Offer letter & JW202",
          "Step 4: Chinese Embassy X1 visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 33,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 33,000 CNY/year." },
        ]
      },
      {
        id: "ningxia-medical-universit",
        name: "Ningxia Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Yinchuan, Ningxia",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 29,800 CNY/year.",
        tuitionPG: "MBBS: 29,800 CNY/year.",
        scholarship: "Ningxia Government Scholarship, Belt and Road Scholarship, University awards.",
        workRights: "Campus assistance.",
        entryUG: "SSC & HSC certificates/marksheets, Passport, Medical check report, Police clearance, Bank statement.",
        entryPG: "SSC & HSC certificates/marksheets, Passport, Medical check report, Police clearance, Bank statement.",
        whyStudy: [
          "Yinchuan, Ningxia",
          "Highly affordable tuition (under 30,000 CNY/yr)",
          "culturally welcoming",
          "well-established English-medium MBBS program for South Asian students",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 5,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: ~8,000-10,000 BDT/month"
        },
        careerAndPsw: "Medical internship at university affiliated hospitals; globally recognized for medical licensure exams.",
        partTimeJobs: "Campus assistance.",
        applicationSteps: [
          "Step 1: Document collection",
          "Step 2: Portal application",
          "Step 3: Screening",
          "Step 4: Admission confirmation",
          "Step 5: JW202",
          "Step 6: Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 29,800 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 29,800 CNY/year." },
        ]
      },
      {
        id: "zhengzhou-medical-univers",
        name: "Zhengzhou Medical University (Zhengzhou University)",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Zhengzhou, Henan Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 38,000 CNY/year.",
        tuitionPG: "MBBS: 38,000 CNY/year.",
        scholarship: "Henan Provincial Government Scholarship, Zhengzhou University President Scholarship, CSC.",
        workRights: "Hospital postings.",
        entryUG: "SSC & HSC certificates, Passport, Medical Report, Police Clearance, Bank statement & solvency certificate.",
        entryPG: "SSC & HSC certificates, Passport, Medical Report, Police Clearance, Bank statement & solvency certificate.",
        whyStudy: [
          "Zhengzhou, Henan Province",
          "Zhengzhou University First Affiliated Hospital is the largest hospital in the world by bed count",
          "unparalleled clinical exposure and case variety",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 4,500 / 6,500 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "Clinical rotations in the world's largest hospital; high practical clinical competence; international licensing pathways.",
        partTimeJobs: "Hospital postings.",
        applicationSteps: [
          "Step 1: Submission of educational documents",
          "Step 2: Academic evaluation",
          "Step 3: Admission letter & JW202",
          "Step 4: Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 38,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 38,000 CNY/year." },
        ]
      },
      {
        id: "capital-medical-universit",
        name: "Capital Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Beijing (Capital of China)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 50,000 CNY/year.",
        tuitionPG: "MBBS: 50,000 CNY/year.",
        scholarship: "Beijing Municipal Government Scholarship, Chinese Government Scholarship (CSC), University awards.",
        workRights: "Permitted clinical attachments.",
        entryUG: "High academic scores in SSC & HSC (Biology & Chemistry focus), Passport, Medical Report, Police Clearance, Bank statement.",
        entryPG: "High academic scores in SSC & HSC (Biology & Chemistry focus), Passport, Medical Report, Police Clearance, Bank statement.",
        whyStudy: [
          "Beijing (Capital of China)",
          "One of China's top medical academic institutions",
          "affiliated with numerous premier national hospitals in Beijing",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 7,500 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "Unrivaled clinical exposure in Beijing's national tertiary hospitals; high international licensing pass rates.",
        partTimeJobs: "Permitted clinical attachments.",
        applicationSteps: [
          "Step 1: Application dossier submission",
          "Step 2: Entrance review/interview",
          "Step 3: Offer",
          "Step 4: JW202",
          "Step 5: Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 50,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 50,000 CNY/year." },
        ]
      },
      {
        id: "hebei-medical-university",
        name: "Hebei Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Shijiazhuang, Hebei Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 44,000 CNY/year.",
        tuitionPG: "MBBS: 44,000 CNY/year.",
        scholarship: "Hebei Provincial Government Scholarship, University International Student Scholarship.",
        workRights: "Clinical clerkships.",
        entryUG: "SSC & HSC Certificates/Marksheets, Passport, Medical Certificate, Police Clearance, Bank Statement.",
        entryPG: "SSC & HSC Certificates/Marksheets, Passport, Medical Certificate, Police Clearance, Bank Statement.",
        whyStudy: [
          "Shijiazhuang, Hebei Province",
          "Close proximity to Beijing",
          "established in 1894",
          "one of the earliest institutions in China to admit international MBBS students",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 4,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year comprehensive internship; recognized by WHO, BMDC, ECFMG, GMC.",
        partTimeJobs: "Clinical clerkships.",
        applicationSteps: [
          "Step 1: Application submission",
          "Step 2: Evaluation",
          "Step 3: JW202 & Admission Notice",
          "Step 4: Visa lodgement.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 44,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 44,000 CNY/year." },
        ]
      },
      {
        id: "kunming-medical-universit",
        name: "Kunming Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Kunming, Yunnan Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 35,000 CNY/year.",
        tuitionPG: "MBBS: 35,000 CNY/year.",
        scholarship: "Yunnan Provincial Government Scholarship, Chinese Government Scholarship, University Merit Scholarship.",
        workRights: "Hospital training.",
        entryUG: "SSC & HSC pass with science subjects, Passport, Medical Examination, Police Clearance, Bank statement.",
        entryPG: "SSC & HSC pass with science subjects, Passport, Medical Examination, Police Clearance, Bank statement.",
        whyStudy: [
          "Kunming, Yunnan Province",
          "The \"City of Eternal Spring\" (mild, pleasant climate year-round)",
          "largest specialized medical university in Yunnan",
          "very popular among South Asian students",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 5,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year hospital internship; recognized by WHO, WFME, BMDC; career pathways across South Asia and abroad.",
        partTimeJobs: "Hospital training.",
        applicationSteps: [
          "Step 1: Portal application",
          "Step 2: Verification",
          "Step 3: Offer",
          "Step 4: JW202 form",
          "Step 5: Visa issuance.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 35,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 35,000 CNY/year." },
        ]
      },
      {
        id: "dalian-medical-university",
        name: "Dalian Medical University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Dalian, Liaoning Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 40,000 CNY/year.",
        tuitionPG: "MBBS: 40,000 CNY/year.",
        scholarship: "Liaoning Provincial Government Scholarship, Dalian Municipal Government Scholarship, CSC.",
        workRights: "Practical internships.",
        entryUG: "SSC & HSC marks (Biology/Chemistry), Passport, Medical Report, Police Clearance, Bank Statement & Solvency Certificate.",
        entryPG: "SSC & HSC marks (Biology/Chemistry), Passport, Medical Report, Police Clearance, Bank Statement & Solvency Certificate.",
        whyStudy: [
          "Dalian, Liaoning Province",
          "Beautiful coastal city campus",
          "leading medical school in Northeast China",
          "large international student body with excellent English-medium curriculum",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 4,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: ~8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year clinical rotation in coastal modern teaching hospitals; international qualification recognition.",
        partTimeJobs: "Practical internships.",
        applicationSteps: [
          "Step 1: Document evaluation",
          "Step 2: University acceptance",
          "Step 3: JW202 application",
          "Step 4: Chinese visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 40,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 40,000 CNY/year." },
        ]
      },
      {
        id: "cmu",
        name: "China Medical University (CMU)",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "State Medical University",
        tagline: "Shenyang, Liaoning Province",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 40,000 CNY/year.",
        tuitionPG: "MBBS: 40,000 CNY/year.",
        scholarship: "Liaoning Government Scholarship, CMU Outstanding Student Scholarship, CSC.",
        workRights: "Clinical rotations.",
        entryUG: "SSC & HSC certificates/marksheets, Passport, Medical Report, Police Clearance Certificate, Bank Statement.",
        entryPG: "SSC & HSC certificates/marksheets, Passport, Medical Report, Police Clearance Certificate, Bank Statement.",
        whyStudy: [
          "Shenyang, Liaoning Province",
          "Historical medical pioneer founded in 1931",
          "one of China's top medical universities",
          "highly acclaimed clinical teaching hospitals",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 6,000 CNY/year",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "1-year hospital internship; high success rate in USMLE, PLAB, and national licensing exams.",
        partTimeJobs: "Clinical rotations.",
        applicationSteps: [
          "Step 1: Online application",
          "Step 2: Document assessment",
          "Step 3: Admission Notice & JW202",
          "Step 4: Chinese Embassy Visa.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 40,000 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 40,000 CNY/year." },
        ]
      },
      {
        id: "soochow-university",
        name: "Soochow University",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "Suzhou, Jiangsu Province (close to Shanghai)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "MBBS: 32,500 CNY/year.",
        tuitionPG: "MBBS: 32,500 CNY/year.",
        scholarship: "Jiangsu Provincial Government Scholarship, Soochow University President Scholarship, CSC.",
        workRights: "Hospital training & campus roles.",
        entryUG: "SSC & HSC with strong science credentials, Passport, Medical Report, Police Clearance, Bank Statement & Solvency Certificate.",
        entryPG: "SSC & HSC with strong science credentials, Passport, Medical Report, Police Clearance, Bank Statement & Solvency Certificate.",
        whyStudy: [
          "Suzhou, Jiangsu Province (close to Shanghai)",
          "Double First-Class university",
          "beautiful classical campus in Suzhou (\"Venice of the East\")",
          "high medical education standards",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Hostel: 6,000 CNY/year (3-sharing)",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Food cost: 8,000-10,000 BDT/month"
        },
        careerAndPsw: "Clinical rotations in Suzhou's modern hospital system; close integration with Shanghai medical corridor.",
        partTimeJobs: "Hospital training & campus roles.",
        applicationSteps: [
          "Step 1: Document submission",
          "Step 2: Faculty assessment",
          "Step 3: Admission letter & JW202",
          "Step 4: Visa processing.",
        ],
        programs: [
          { name: "BSc / MSc in Clinical Medicine", level: "Undergraduate / Postgraduate", fee: "MBBS: 32,500 CNY/year." },
          { name: "BSc / MSc in 6 Years", level: "Undergraduate / Postgraduate", fee: "MBBS: 32,500 CNY/year." },
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
    livingCost: "$250 – $400 / month",
    institutionsCount: "10+ Listed",
    heroImg: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇷🇺 Pay After Visa Destination",
    subBadge: "Dhaka Embassy Visa • Pay Tuition Strictly After Visa",
    heroHeading: "Study in Russia: Pay Fees After Visa & State Quotas",
    heroDesc: "Study at premier Russian state universities with zero financial risk: pay university tuition fees strictly after receiving your visa sticker from the Russian Embassy in Dhaka.",
    tuition: "$1,800 – $4,500/yr",
    tuitionSub: "Pay strictly after visa",
    living: "$250 – $400/mo",
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
      { title: "Bank Solvency Proof", detail: "Very accessible: ~৳5 Lakh to ৳7 Lakh BDT bank balance." }
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
        tuitionUG: "$2,200 – $3,800 / year",
        tuitionPG: "$2,500 – $4,200 / year",
        scholarship: "Russian Government State Quota (100% Tuition + 15,000 Ruble Stipend)",
        workRights: "20 hours/week legal work permit",
        entryUG: "HSC 60%+ | English Medium or 1-Year Preparatory",
        entryPG: "Bachelor Degree | MOI accepted",
        whyStudy: ["Pay after visa security", "Low living expense ($250/mo)", "Globally recognized degree"],
        costAndBank: {
          monthlyCost: "$250 – $400 / month",
          bankFundSingle: "~৳5 Lakh to ৳7 Lakh BDT",
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
    tagline: "High-Tech Innovation, Global R&D & 50%–70% Guaranteed Scholarships",
    usp: "Samsung & LG Industry Partnerships | Global Korea Scholarship (GKS) | Fast E-Visa Processing",
    highlights: [
      "50% to 70% tuition scholarship guaranteed for international students",
      "GKS 100% full-ride government funding availability",
      "Fast E-visa processing directly from Seoul immigration"
    ],
    livingCost: "$ 500 – $ 850 / month",
    institutionsCount: "3+ Listed",
    heroImg: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇰🇷 High-Tech Asian Study Hub",
    subBadge: "50%–70% Scholarships • Global R&D & E-Visa",
    heroHeading: "Study in South Korea: Global Tech Powerhouse with Generous Scholarships",
    heroDesc: "Study in South Korea with globally ranked technical universities, cutting-edge semiconductor/AI labs, English-medium programs, and guaranteed scholarship funding up to 70%.",
    tuition: "$ 2,000 – $ 5,500/semester",
    tuitionSub: "After 30-70% scholarship deduction",
    living: "$ 500 – $ 850/mo",
    livingSub: "Including dorm & meals",
    work: "20–25 Hours / Week",
    workSub: "Permitted during term; unlimited in vacations",
    psw: "Up to 2-Year D-10 Job Search Visa",
    pswSub: "E-7 Skilled Worker Pathway",
    whyStudy: [
      {
        icon: "🔬",
        title: "Global Tech Powerhouse",
        desc: "World leaders in electronics, semiconductors, robotics, AI, and automotive engineering."
      },
      {
        icon: "🎓",
        title: "Guaranteed 50%-70% Scholarships",
        desc: "International student merit awards cover 30% to 70% of tuition automatically upon admission."
      },
      {
        icon: "⚡",
        title: "Streamlined E-Visa Process",
        desc: "Certified university sponsor issues direct E-Visa certificate confirmation."
      }
    ],
    solvency: [
      {
        title: "Bank Balance Certificate",
        detail: "$10,000 to $20,000 maintained in student or parent account."
      },
      {
        title: "Sponsor Relationship",
        detail: "Parents or legal sponsors with verified tax return / source of income."
      }
    ],
    roadmap: [
      "Step 01: Profile assessment and university shortlisting.",
      "Step 02: Submit application and portfolio/transcripts.",
      "Step 03: Receive Certificate of Admission (CoA) and scholarship letter.",
      "Step 04: Prepare bank balance certificate ($10k-$20k).",
      "Step 05: Apply for D-2 student visa or E-visa confirmation.",
      "Step 06: Fly to Seoul / Incheon / Busan."
    ],
    faqs: [
      {
        q: "Can I study in South Korea in English?",
        a: "Yes. Leading Korean universities offer 100% English-taught undergraduate and graduate degrees in Business, Engineering, Computer Science, and International Studies."
      },
      {
        q: "What scholarships are available?",
        a: "Almost all admitted international students receive 30% to 70% tuition fee reduction. The Korean Government Global Korea Scholarship (GKS) covers 100% tuition, airfare, and monthly stipend."
      }
    ],
    universities: [
      {
        id: "kmcu",
        name: "Keimyung College University (KMCU)",
        badge: "Verified Academic Institution",
        type: "Government Institute of Technology",
        tagline: "Mobility partner of SEGi",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "$3,000 – $4,500 / semester",
        tuitionPG: "$3,000 – $4,500 / semester",
        scholarship: "30%–50% international tuition waiver",
        workRights: "20 hrs/week permitted with work permit",
        entryUG: "HSC pass; IELTS 5.0-5.5 or TOPIK",
        entryPG: "HSC pass; IELTS 5.0-5.5 or TOPIK",
        whyStudy: [
          "Mobility partner of SEGi",
          "practical high-tech training",
          "affordable living and exchange",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: $500–$750/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Korean industrial tech training; multinational linkages",
        partTimeJobs: "20 hrs/week permitted with work permit",
        applicationSteps: [
          "Step 1: Direct application",
          "Step 2: Offer",
          "Step 3: Tuition deposit",
          "Step 4: E-visa issuance",
        ],
        programs: [
          { name: "Associate & Bachelor's in Business, IT, Engineering, Hospita", level: "Bachelor / Master", fee: "$3,000 – $4,500 / semester" },
        ]
      },
      {
        id: "sunchon-national-universi",
        name: "Sunchon National University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Renowned National university",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "$2,500 – $4,000 / semester (subsidized)",
        tuitionPG: "$2,500 – $4,000 / semester (subsidized)",
        scholarship: "Global Korea Scholarship (GKS - 100% funded) + University tuition waivers",
        workRights: "20 hrs/week permitted",
        entryUG: "HSC / Bachelor; IELTS 5.5 or TOPIK 3+",
        entryPG: "HSC / Bachelor; IELTS 5.5 or TOPIK 3+",
        whyStudy: [
          "Renowned National university",
          "substantial government R&D funding",
          "mobility partner of SEGi",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: $450–$650/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Research institutes, smart farming, and Korean manufacturing conglomerates",
        partTimeJobs: "20 hrs/week permitted",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Tuition deposit",
          "Step 3: E-visa confirmation",
          "Step 4: Fly",
        ],
        programs: [
          { name: "UG & PG in Agriculture, Engineering, Science, Business", level: "Bachelor / Master", fee: "$2,500 – $4,000 / semester (subsidized)" },
        ]
      },
      {
        id: "sookmyung-womens-universi",
        name: "Sookmyung Women's University / Gachon University",
        badge: "QS / Nationally Ranked",
        type: "Public Research University",
        tagline: "Top private universities in Seoul metropolitan area",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "$3,500 – $5,500 / semester",
        tuitionPG: "$3,500 – $5,500 / semester",
        scholarship: "50% to 70% tuition scholarship guaranteed for international students",
        workRights: "20–25 hrs/week permitted",
        entryUG: "HSC / Bachelor GPA 3.5+; IELTS 5.5+ or TOPIK",
        entryPG: "HSC / Bachelor GPA 3.5+; IELTS 5.5+ or TOPIK",
        whyStudy: [
          "Top private universities in Seoul metropolitan area",
          "50%-70% guaranteed scholarships",
          "E-visa processing",
          "career ties to Samsung, LG, Hyundai",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: $600–$850/mo in Seoul",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "D-10 job seeker visa; direct tech & corporate hiring (Samsung, LG, Hyundai)",
        partTimeJobs: "20–25 hrs/week permitted",
        applicationSteps: [
          "Step 1: Online application",
          "Step 2: Interview",
          "Step 3: E-visa issuance",
        ],
        programs: [
          { name: "UG & PG in AI, Global Business, Health Sciences, Software", level: "Bachelor / Master", fee: "$3,500 – $5,500 / semester" },
        ]
      }
    ]
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
  },

  "bulgaria": {
    id: "bulgaria",
    code: "BG",
    flag: "🇧🇬",
    name: "Bulgaria",
    regionCode: "europe",
    regionBadge: "EU / SCHENGEN",
    tagline: "Affordable European Degree & Direct Schengen Mobility",
    usp: "Lowest Tuition in EU | Low Cost of Living | Globally Recognized Degrees",
    highlights: [
      "Tuition from €2,500 – €4,000 / year",
      "Low bank solvency requirement (~৳12–15 Lac BDT)",
      "Full European Bologna system degree accreditation"
    ],
    livingCost: "€ 350 – € 550 / month",
    institutionsCount: "2+ Listed",
    heroImg: "https://images.unsplash.com/photo-1548625361-195fe61a0701?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇧🇬 Low Tuition European Route",
    subBadge: "Low Living Cost • Direct Embassy Submissions",
    heroHeading: "Study in Bulgaria: Affordable EU Degrees with Schengen Access",
    heroDesc: "Bulgaria offers accessible higher education within the European Higher Education Area (EHEA) with medical, engineering, and business faculties taught in English at very competitive tuition rates.",
    tuition: "€ 2,500 – € 7,500/yr",
    tuitionSub: "Among lowest in European Union",
    living: "€ 350 – € 550/mo",
    livingSub: "Very affordable student lifestyle",
    work: "20 Hours / Week",
    workSub: "Legal student work rights",
    psw: "Post-Study Residence Permit",
    pswSub: "Job seeking visas for graduates",
    whyStudy: [
      {
        icon: "💶",
        title: "Affordable Tuition",
        desc: "Standard undergraduate degrees starting from €2,500/year."
      },
      {
        icon: "🇪🇺",
        title: "EU Recognized Qualifications",
        desc: "Degrees fully compliant with EU Bologna standards and recognized worldwide."
      },
      {
        icon: "🏠",
        title: "Budget Student Life",
        desc: "Cost of living between €350–€550/month covers housing, food, and transport."
      },
      {
        icon: "🛂",
        title: "Schengen Integration",
        desc: "Travel freely across the Schengen zone during vacations and academic exchanges."
      }
    ],
    solvency: [
      {
        title: "Bank Fund Requirement",
        detail: "~12 to 15 Lac BDT bank statement required for student visa."
      },
      {
        title: "Account Maturity",
        detail: "3 to 6 months statement from student or immediate parents."
      }
    ],
    roadmap: [
      "Step 01: Academic credential assessment & document notarization.",
      "Step 02: University application & conditional admission release.",
      "Step 03: Ministry of Education certification (Nostrification).",
      "Step 04: Official unconditional certificate & fee deposit.",
      "Step 05: Visa application at Embassy of Bulgaria.",
      "Step 06: D-Type student visa stamped & flight to Sofia/Varna."
    ],
    faqs: [
      {
        q: "Are Bulgarian medical and technical degrees recognized globally?",
        a: "Yes, degrees from public universities like Sofia University and Varna Free University comply with EU directives and WHO/ECFMG standards."
      },
      {
        q: "Can international students work during studies?",
        a: "Yes, international students are permitted to work up to 20 hours per week during term time."
      }
    ],
    universities: [
      {
        id: "sofia-university-technica",
        name: "Sofia University / Technical University of Sofia",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "EU member state",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Starting from €1,000 to €3,500/yr (Medicine €8,000)",
        tuitionPG: "Starting from €1,000 to €3,500/yr (Medicine €8,000)",
        scholarship: "Ministry discounts & university bursaries",
        workRights: "Permitted under student status",
        entryUG: "HSC / Bachelor 62%+; English proficiency or MOI accepted",
        entryPG: "HSC / Bachelor 62%+; English proficiency or MOI accepted",
        whyStudy: [
          "EU member state",
          "starting tuition from €1,000/year",
          "pay tuition fee after visa option",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €350–€550/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "EU-recognized degree; European Schengen mobility",
        partTimeJobs: "Permitted under student status",
        applicationSteps: [
          "Step 1: Ministry of Education approval",
          "Step 2: Bulgarian D Visa",
          "Step 3: Pay tuition fee after visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Engineering, IT, Medicine, Business", level: "Bachelor / Master", fee: "Starting from €1,000 to €3,500/yr (Medicine €8,000)" },
        ]
      },
      {
        id: "varna-free-university",
        name: "varna free university",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "EU member state",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Starting from €1,000  to  €3,000/year",
        tuitionPG: "Starting from €1,000  to  €3,000/year",
        scholarship: "no scholarship opportunity  but low tution fee",
        workRights: "weekly 20 hours",
        entryUG: "HSC / Bachelor 60%+; English proficiency or ielts accepted",
        entryPG: "HSC / Bachelor 60%+; English proficiency or ielts accepted",
        whyStudy: [
          "EU member state",
          "starting tuition from €1,000/3000year",
          "low tuition fee",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "EUR 300-550/month Includes: •	Accommodation •	Food •	Transport •	Basic expenses",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "After completing the foundaion course  in bulgaria,they provide a bulgarian  language certificate, whice make it very  easy to get a job.",
        partTimeJobs: "weekly 20 hours",
        applicationSteps: [
          "Step 1: Ministry of Education  approval",
          "Step 2: Bulgarian D Visa",
          "Step 3: Pay tuition fee",
        ],
        programs: [
          { name: "Bachelor's & Master's in Engineering,  IT, Medicine, Busines", level: "Bachelor / Master", fee: "Starting from €1,000  to  €3,000/year" },
        ]
      }
    ]
  },

  "czech-republic": {
    id: "czech-republic",
    code: "CZ",
    flag: "🇨🇿",
    name: "Czech Republic",
    regionCode: "europe",
    regionBadge: "CENTRAL EUROPE",
    tagline: "Historic Universities & Free Czech-Taught Public Tracks",
    usp: "Zero Tuition for Czech-Taught Degrees | Moderate English Fees | Central EU Hub",
    highlights: [
      "Charles University: Founded in 1348 (Central Europe top rank)",
      "Zero tuition fee option on Czech-language programs",
      "High engineering & automotive job market in Prague/Brno"
    ],
    livingCost: "€ 450 – € 700 / month",
    institutionsCount: "1+ Listed",
    heroImg: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇨🇿 Prestigious Central European Hub",
    subBadge: "Historic Academics • Thriving Tech & Industry Hub",
    heroHeading: "Study in the Czech Republic: Excellence in Prague & Central Europe",
    heroDesc: "The Czech Republic offers world-renowned universities such as Charles University and Czech Technical University (CTU) with cutting-edge engineering, computing, and medical faculties in the heart of Europe.",
    tuition: "€ 3,000 – € 12,000/yr",
    tuitionSub: "Free for Czech-taught degree tracks",
    living: "€ 450 – € 700/mo",
    livingSub: "Balanced Central European living",
    work: "Part-time allowed",
    workSub: "No special work permit needed for full-time students",
    psw: "9-Month Post-Study Job Seeker Visa",
    pswSub: "Fast transition to Czech Employee Card",
    whyStudy: [
      {
        icon: "🏛️",
        title: "Historic Prestige",
        desc: "Home to Central Europe’s oldest higher learning institutions with global prestige."
      },
      {
        icon: "💼",
        title: "Strong Labor Market",
        desc: "One of the lowest unemployment rates in the EU with strong multinational presence."
      },
      {
        icon: "🚆",
        title: "Heart of Schengen",
        desc: "Direct rail links to Berlin, Vienna, Bratislava, and Budapest."
      },
      {
        icon: "🎯",
        title: "Low Tuition Burden",
        desc: "Zero tuition if studying in Czech; competitive fees in English-taught programs."
      }
    ],
    solvency: [
      {
        title: "Bank Fund Requirement",
        detail: "Approx. 130,000 to 160,000 CZK (~৳8–10 Lac BDT) in student personal bank account."
      },
      {
        title: "Payment Card Proof",
        detail: "International debit card linked to the account required for embassy verification."
      }
    ],
    roadmap: [
      "Step 01: Application submission and entrance exam / portfolio evaluation.",
      "Step 02: Educational document nostrification in Czech Republic.",
      "Step 03: Admission confirmation & accommodation contract.",
      "Step 04: Financial solvency document translation to Czech language.",
      "Step 05: Long-term student visa interview at Czech Embassy in New Delhi.",
      "Step 06: Visa approval & travel to Prague."
    ],
    faqs: [
      {
        q: "Do I need an entrance exam for Czech universities?",
        a: "Some technical and medical programs require entrance exams or nostrification tests, which Study First Info helps students prepare for."
      },
      {
        q: "Can students work while studying in Prague?",
        a: "Yes, accredited university students do not need a separate work permit to work part-time."
      }
    ],
    universities: [
      {
        id: "ctu",
        name: "Charles University / Czech Technical University (CTU)",
        badge: "WHO / PMDC Recognized Medical Track",
        type: "Public Research University",
        tagline: "Zero tuition fee options at public universities (in Czech / scholarship tracks)",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "Zero tuition fee in Czech; €3,000–€8,000/yr in English",
        tuitionPG: "Zero tuition fee in Czech; €3,000–€8,000/yr in English",
        scholarship: "Czech Government Scholarships for developing countries",
        workRights: "Permitted with student visa",
        entryUG: "HSC / Bachelor; Nostrification of certificates; English or Czech proficiency",
        entryPG: "HSC / Bachelor; Nostrification of certificates; English or Czech proficiency",
        whyStudy: [
          "Zero tuition fee options at public universities (in Czech / scholarship tracks)",
          "central Schengen hub",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €450–€700/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "High-tech & automotive hub in Central Europe; Schengen residency",
        partTimeJobs: "Permitted with student visa",
        applicationSteps: [
          "Step 1: Apply",
          "Step 2: Nostrification",
          "Step 3: Entrance exam",
          "Step 4: Embassy visa",
        ],
        programs: [
          { name: "Bachelor's & Master's in Engineering, Medicine, Computer Sci", level: "Bachelor / Master", fee: "Zero tuition fee in Czech; €3,000–€8,000/yr in English" },
        ]
      }
    ]
  },

  "denmark": {
    id: "denmark",
    code: "DK",
    flag: "🇩🇰",
    name: "Denmark",
    regionCode: "europe",
    regionBadge: "NORDIC EUROPE",
    tagline: "Nordic Innovation, High Quality of Life & Extended PSW",
    usp: "3-Year Post-Study Work Permit | Top Global Innovation Index | High Student Wages",
    highlights: [
      "3-Year Post-Study Work Visa after Master’s degree",
      "High minimum hourly wage for student part-time jobs",
      "World Top 100 universities (Copenhagen, Aarhus)"
    ],
    livingCost: "€ 850 – € 1,200 / month",
    institutionsCount: "1+ Listed",
    heroImg: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇩🇰 Premium Nordic Study Hub",
    subBadge: "3-Year Post Study Visa • High Earning Potential",
    heroHeading: "Study in Denmark: Nordic Innovation & World-Ranked Research",
    heroDesc: "Denmark provides an exceptional standard of living and forward-thinking research universities with collaborative teaching methodologies and extended post-study residence permits.",
    tuition: "€ 8,000 – € 16,000/yr",
    tuitionSub: "Premium academic faculties",
    living: "€ 850 – € 1,200/mo",
    livingSub: "High Nordic living standard",
    work: "20 Hours / Week",
    workSub: "Full-time during June, July & August",
    psw: "Up to 3-Year Post-Study Work Visa",
    pswSub: "Direct route to Danish green card",
    whyStudy: [
      {
        icon: "🌟",
        title: "Nordic Quality",
        desc: "University of Copenhagen & Aarhus rank consistently among Europe’s elite research bodies."
      },
      {
        icon: "💼",
        title: "3-Year Post-Study Visa",
        desc: "Master’s graduates automatically qualify for up to 3 years of post-study job seeking."
      },
      {
        icon: "💰",
        title: "High Hourly Pay",
        desc: "Students earn high hourly rates (€15–€20/hr) making living costs self-sustainable."
      },
      {
        icon: "🚲",
        title: "Sustainable & Safe",
        desc: "World leader in clean tech, green energy, and safety."
      }
    ],
    solvency: [
      {
        title: "Living Cost Fund",
        detail: "Approx. €8,000–€10,000 in student own account to cover first year living costs."
      },
      {
        title: "Tuition Prepayment",
        detail: "First semester or full-year tuition paid directly to university before visa."
      }
    ],
    roadmap: [
      "Step 01: Course selection and prerequisite subject matching.",
      "Step 02: Online application via Optagelse or direct portal.",
      "Step 03: Admission offer letter & tuition fee payment.",
      "Step 04: University initiates ST1 visa application online.",
      "Step 05: Biometrics submission at VFS Dhaka.",
      "Step 06: Danish residence permit card issued & flight to Copenhagen."
    ],
    faqs: [
      {
        q: "How long is the Danish Post-Study Work visa?",
        a: "Under current Danish immigration reforms, university graduates receive up to 3 years of post-study work rights."
      },
      {
        q: "Is English widely spoken in Denmark?",
        a: "Yes, over 95% of Danes speak fluent English, making daily life and student employment very accessible."
      }
    ],
    universities: [
      {
        id: "university-of-copenhagen-",
        name: "University of Copenhagen & Aarhus University",
        badge: "Verified Academic Institution",
        type: "Public Research University",
        tagline: "Admission = ~100% visa success rate",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€8,000 – €16,000/yr",
        tuitionPG: "€8,000 – €16,000/yr",
        scholarship: "Danish State Tuition Waivers",
        workRights: "20 hrs/week (full-time June-August)",
        entryUG: "HSC / 4-yr Bachelor with strong grades; IELTS 6.5 (no band < 6.0)",
        entryPG: "HSC / 4-yr Bachelor with strong grades; IELTS 6.5 (no band < 6.0)",
        whyStudy: [
          "Admission = ~100% visa success rate",
          "no student bank statement required",
          "no embassy interview",
          "spouse & children can fly together with full work rights",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €800–€1,200/mo (No student bank statement needed)",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "Danish Post-Study Work Permit & Green Card schemes; spouse full work rights",
        partTimeJobs: "20 hrs/week (full-time June-August)",
        applicationSteps: [
          "Step 1: Optagelse.dk / direct portal",
          "Step 2: ST1 visa application",
          "Step 3: VFS biometrics",
          "Step 4: Residence permit",
        ],
        programs: [
          { name: "Bachelor's & Master's in Engineering, Tech, Science, Economi", level: "Bachelor / Master", fee: "€8,000 – €16,000/yr" },
        ]
      }
    ]
  },

  "finland": {
    id: "finland",
    code: "FI",
    flag: "🇫🇮",
    name: "Finland",
    regionCode: "europe",
    regionBadge: "NORDIC SCHENGEN",
    tagline: "Happiest Country in the World & 30-Hour Student Work Rights",
    usp: "30 Hours / Week Legal Work | 2-Year Post-Study Job Seeker Visa | High Safety",
    highlights: [
      "30 Hours/week legal part-time work allowance",
      "2-Year Post-Study Work Visa after graduation",
      "Ranked #1 Happiest Country in the world for 7 consecutive years"
    ],
    livingCost: "€ 600 – € 850 / month",
    institutionsCount: "1+ Listed",
    heroImg: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1920&q=80",
    pillBadge: "🇫🇮 30-Hour Work Allowance Hub",
    subBadge: "2-Year PSW • Generous Part-Time Hours",
    heroHeading: "Study in Finland: Practical UAS Degrees with High Work Rights",
    heroDesc: "Finland is famous for its world-class education system, clean environment, and student-friendly policies including generous 30 hours per week working rights and 2-year post-study job seeker permits.",
    tuition: "€ 8,000 – € 12,000/yr",
    tuitionSub: "Substantial early-bird & merit waivers",
    living: "€ 600 – € 850/mo",
    livingSub: "Subsidized student housing & dining",
    work: "30 Hours / Week",
    workSub: "Highest student work hours in Europe",
    psw: "2-Year Post-Study Residence Permit",
    pswSub: "Direct path to Finnish PR",
    whyStudy: [
      {
        icon: "⏱️",
        title: "30-Hour Work Rights",
        desc: "Finland increased legal student working hours to 30 hours per week."
      },
      {
        icon: "🎓",
        title: "Applied Learning (UAS)",
        desc: "Hands-on curriculum directly integrated with Nordic tech and forestry industries."
      },
      {
        icon: "🛡️",
        title: "Unmatched Quality of Life",
        desc: "Consistently ranked the safest and happiest nation globally."
      },
      {
        icon: "🏅",
        title: "Generous Scholarships",
        desc: "Early-bird discounts and 50% tuition reduction for academic performance."
      }
    ],
    solvency: [
      {
        title: "Living Cost Requirement",
        detail: "€6,720 (~৳8.5 Lac BDT) per year held in student personal account."
      },
      {
        title: "Health Insurance",
        detail: "Private comprehensive student health insurance required."
      }
    ],
    roadmap: [
      "Step 01: Application via Studyinfo.fi portal with certified transcripts.",
      "Step 02: University of Applied Sciences online entrance exam / interview.",
      "Step 03: Admission offer & early-bird tuition fee discount payment.",
      "Step 04: Online residence permit application via Enter Finland.",
      "Step 05: Identity verification and biometrics at VFS.",
      "Step 06: Finnish residence permit card delivered & flight to Joensuu/Helsinki."
    ],
    faqs: [
      {
        q: "Can Bangladeshi students work 30 hours per week?",
        a: "Yes, the Finnish government updated the student visa regulations to allow up to 30 hours of work per week during study semesters."
      },
      {
        q: "What is the post-study work period?",
        a: "Graduates can apply for a 2-year post-study residence permit to seek employment or start a business."
      }
    ],
    universities: [
      {
        id: "karelia-university-of-app",
        name: "Karelia University of Applied Sciences",
        badge: "Applied Learning & STEM Focus",
        type: "Public Research University",
        tagline: "World's happiest country",
        intakes: "February / September Intakes",
        deadlines: "Rolling Admissions / Deadline as per Intake",
        tuitionUG: "€8,000 – €14,000/yr",
        tuitionPG: "€8,000 – €14,000/yr",
        scholarship: "Limited case-by-case fee reductions",
        workRights: "30 hrs/week during term; full-time during summer",
        entryUG: "60%+ marks in HSC/Bachelor; IELTS 6.0 (UG) / 6.5 (PG). Bank savings in student's own name (6 mo maturity)",
        entryPG: "60%+ marks in HSC/Bachelor; IELTS 6.0 (UG) / 6.5 (PG). Bank savings in student's own name (6 mo maturity)",
        whyStudy: [
          "World's happiest country",
          "high living standard",
          "spouse allowed (can travel after 3 months)",
          "2-year PSW permit",
        ],
        costAndBank: {
          monthlyCost: "Cost of living covered by student fund",
          bankFundSingle: "Living cost: €700–€900/mo",
          bankMaturity: "3 to 6 months bank statement or Fixed Deposit (FDR)",
          familyFund: "Dependent funds as per embassy criteria"
        },
        careerAndPsw: "2-year post-study work permit; strong demand in tech and nursing in Helsinki, Tampere, Karelia",
        partTimeJobs: "30 hrs/week during term; full-time during summer",
        applicationSteps: [
          "Step 1: Studyinfo.fi portal",
          "Step 2: Entrance exam / SAT",
          "Step 3: VFS New Delhi",
          "Step 4: Residence permit. Next intake: Jan 2027",
        ],
        programs: [
          { name: "Bachelor's & Master's in Technology, Business, Nursing", level: "Bachelor / Master", fee: "€8,000 – €14,000/yr" },
        ]
      }
    ]
  }
};
