import { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  Plus, 
  Minus, 
  Send,
  MessageSquare
} from 'lucide-react';

interface ArticleFaq {
  q: string;
  a: string;
}

interface BlogArticle {
  id: number;
  title: string;
  category: 'schengen' | 'scholarship' | 'visa' | 'asia';
  categoryLabel: string;
  readTime: string;
  author: string;
  date: string;
  summary: string;
  pill: string;
  renderContent: () => React.JSX.Element;
  faqs: ArticleFaq[];
}

const blogArticles: BlogArticle[] = [
  {
    id: 0,
    title: "Why 90% of Bangladeshi Student Visas Get Refused & How to Avoid Common Documentation Traps",
    category: "visa",
    categoryLabel: "Visa & Solvency Strategy",
    readTime: "8 Min Read",
    author: "Md Jubed Miah (CEO) & Senior Legal Panel",
    date: "September 2026",
    summary: "No agency can give a genuine 100% visa guarantee. Over 90% of refusals stem from poorly audited sponsor documentation, unexplained bank transactions, and generic SOPs.",
    pill: "CRITICAL AUDIT GUIDE",
    renderContent: () => (
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          The Hard Truth About Student Visa Approvals
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Every year, thousands of hopeful Bangladeshi students face devastating visa refusals. The reality in the international student education sector is straightforward: <strong className="text-slate-900">no agency on earth can legally guarantee an embassy visa approval</strong>. Embassies and visa officers evaluate applications based on strict risk criteria, economic credibility, and genuine academic intent.
        </p>
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-medium text-sm leading-relaxed">
          ⚠️ <strong>Common Myth:</strong> Many students believe that getting an official University Offer Letter equals guaranteed visa approval. In reality, the offer letter is only 30% of the battle; the remaining 70% hinges entirely on bank solvency, source-of-fund legitimacy, and interview confidence.
        </div>
        <h4 className="text-lg font-bold text-slate-900 font-heading">
          Top 4 Traps Leading to Refusals:
        </h4>
        <ol className="list-decimal pl-5 space-y-2.5 text-slate-700 text-sm">
          <li><strong>Unexplained &quot;Sudden Cash Deposits&quot;:</strong> Depositing 20–30 Lakh BDT into an account right before printing bank statements triggers immediate financial suspicion under anti-money laundering filters.</li>
          <li><strong>Disconnected Sponsor Profiles:</strong> Using third-party distant relatives without formal affidavits of financial guardianship.</li>
          <li><strong>Copy-Pasted Statement of Purpose (SOP):</strong> Submitting generic AI-generated motivation letters that fail to link the applicant&apos;s prior Bangladeshi coursework to their future career prospects back home.</li>
          <li><strong>Poor Interview Delivery:</strong> Failing to explain course modules, tuition refund conditions, or living expense figures during the embassy oral test.</li>
        </ol>
        <div className="p-5 rounded-2xl bg-[#071f16] text-white space-y-2">
          <h5 className="font-bold text-emerald-400 uppercase tracking-wider text-xs">
            The Study First Info Verification Protocol
          </h5>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            At Study First Info Ltd., we conduct complete 3-tier pre-submission audits for every student: tax documentation verification, 1-on-1 personalized embassy mock drills, and structured financial solvency planning.
          </p>
        </div>
      </div>
    ),
    faqs: [
      {
        q: "Can any agency give a 100% guarantee for a student visa?",
        a: "No. Any agency claiming 100% guaranteed visa issuance is acting unethically. Visa decisions are made solely by sovereign immigration officers. What Study First Info provides is 100% transparent documentation, tax-audited bank solvency planning, and rigorous 1-to-1 interview coaching to maximize your chances."
      },
      {
        q: "How many months must bank funds be maintained before visa submission?",
        a: "This depends strictly on the country. The UK requires funds held for exactly 28 consecutive days. New Zealand requires 4 to 6 months maturity for Savings or FDR accounts. Schengen embassies like Hungary look at 6 months of steady transaction history proving legitimate source of income."
      },
      {
        q: "Can I re-apply if I had a previous visa refusal from another agency?",
        a: "Yes! At Study First Info, we have resolved dozens of previous refusals (including cases like Chaytee Das for Hungary). We audit your previous refusal letter, identify the exact reason cited by the visa officer, and submit an airtight appeal or fresh application."
      }
    ]
  },
  {
    id: 1,
    title: "Complete Guide to Hungary Student Visa from Dhaka: Stipendium Hungaricum, MOI Waivers & Embassy Mock Prep",
    category: "schengen",
    categoryLabel: "Schengen Europe",
    readTime: "7 Min Read",
    author: "Arif Sayed & European Desk",
    date: "September 2026",
    summary: "Over 500+ successful Hungary visas handled. Learn why Hungary is the number one Schengen study destination with direct embassy submission in Dhaka without India travel.",
    pill: "500+ VISA RECORD",
    renderContent: () => (
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          Why Hungary is the Gateway to European Schengen Residency
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Hungary has cemented itself as the top choice for Bangladeshi students looking for high-quality, globally accredited European degrees. With over <strong className="text-slate-900">500+ successful Hungary visas</strong> processed by Study First Info Ltd., our students are thriving across Budapest, Debrecen, Pécs, Győr, and Szeged.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h5 className="font-bold text-emerald-800 text-xs uppercase mb-1">Direct Dhaka Embassy</h5>
            <p className="text-xs text-slate-600">Students submit their visa files directly at the Embassy of Hungary in Dhaka. Zero third-country travel to New Delhi required!</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h5 className="font-bold text-emerald-800 text-xs uppercase mb-1">Full Work &amp; Travel Rights</h5>
            <p className="text-xs text-slate-600">Legal 24 hours/week part-time work rights and free borderless mobility throughout 29 Schengen member countries.</p>
          </div>
        </div>
        <h4 className="text-lg font-bold text-slate-900 font-heading">
          Stipendium Hungaricum Scheme Breakdown:
        </h4>
        <p className="text-slate-700 text-sm leading-relaxed">
          The Hungarian Government&apos;s flagship scholarship program covers <strong className="text-slate-900">100% tuition fees</strong>, provides free dormitory accommodation (or a housing allowance), monthly living stipends (€110 to €380/mo), and comprehensive health insurance across 65+ universities.
        </p>
      </div>
    ),
    faqs: [
      {
        q: "Is an IELTS score mandatory for Hungary universities?",
        a: "Not for all universities! Institutions like Budapest Metropolitan University (METU), John von Neumann, and University of Győr accept Medium of Instruction (MOI) certificates from accredited Bangladeshi universities for eligible bachelor and master programs."
      },
      {
        q: "Where do I submit my Hungary visa file?",
        a: "You submit your visa application directly at the Embassy of Hungary in Dhaka (Madani Avenue, Baridhara). You do not need to travel to India for biometrics or interview."
      },
      {
        q: "What is the typical visa processing timeline for Hungary?",
        a: "Following your embassy interview in Dhaka, decisions are generally rendered within 4 to 6 weeks. Our students routinely receive approvals in approximately 28 to 36 days."
      }
    ]
  },
  {
    id: 2,
    title: "Study in Malaysia: 100% Medical & Healthcare Scholarships, MILA 50% Flat Discounts & UniSZA Public Fees",
    category: "asia",
    categoryLabel: "Asia & East Asia",
    readTime: "6 Min Read",
    author: "Noor Athirah & Asian Admissions",
    date: "September 2026",
    summary: "Zero tuition fees for Nursing, Pharmacy & Healthcare programs. Discover dual British and Australian awards at 70% lower budgets with fast 3-4 week EMGS clearance.",
    pill: "100% MEDICAL QUOTA",
    renderContent: () => (
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          World-Class Education Without Draining Your Life Savings
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Malaysia has transformed into an international education powerhouse. As an official representative of <strong className="text-slate-900">Universiti Sultan Zainal Abidin (UniSZA)</strong> and <strong className="text-slate-900">MILA University</strong>, Study First Info Ltd. connects students with 100% full-ride medical scholarships and subsidized public university programs starting from just ~৳5.5 Lakh BDT for the first year.
        </p>
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium text-sm leading-relaxed">
          🎯 <strong>Spotlight Offer:</strong> 100% Full Tuition Waiver for Bachelor&apos;s, Master&apos;s, and PhD programs in Nursing, Physiotherapy, Pharmacy, and MBA Healthcare Management. Candidates scoring 85/100 on the composite matrix pay zero tuition fees for their entire study period!
        </div>
        <h4 className="text-lg font-bold text-slate-900 font-heading">
          Key Financial &amp; Visa Highlights:
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
          <li><strong>Fast EMGS Processing:</strong> Electronic Visa Approval Letters (eVAL) are cleared seamlessly in 3 to 4 weeks.</li>
          <li><strong>Dual Degree Qualifications:</strong> Earn accredited UK degrees (University of Hertfordshire, Greenwich) right in Malaysia.</li>
          <li><strong>Low Initial Deposit:</strong> Minimum security deposit of 5,000 BDT or passport submission (fully refundable on visa).</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        q: "What is the minimum IELTS requirement for the Malaysian 100% Scholarship?",
        a: "Clinical programs like Nursing require IELTS 5.5. Physiotherapy, Pharmacy, and Occupational Therapy require IELTS 5.0. MBA in Healthcare Management requires IELTS 6.0."
      },
      {
        q: "How does the 85/100 evaluation matrix work?",
        a: "The scholarship committee weights academic scores at 45%, interview readiness at 25%, program motivation at 10%, leadership at 10%, and financial viability at 10%. Achieving 85 points unlocks the 100% tuition waiver."
      },
      {
        q: "What are the initial payable fees after getting the offer letter?",
        a: "The EMGS processing fee is approximately ~6,000 RM, international student fee is 3,000 RM, and seat service charge is 3,000 RM. The 100% tuition fees remain completely waived throughout the whole course."
      }
    ]
  },
  {
    id: 3,
    title: "UK January Intake Blueprint: £3,000–£10,000 Merit Grants, MOI Eligibility & 2-Year Graduate PSW",
    category: "scholarship",
    categoryLabel: "United Kingdom",
    readTime: "7 Min Read",
    author: "Ferdous Reza & UK Compliance Desk",
    date: "September 2026",
    summary: "1-Year Master's degrees in the UK save a full year of living and tuition costs. Learn which 28 Bangladeshi universities qualify for MOI waivers at Hertfordshire and Cardiff.",
    pill: "UP TO £10,000 AWARDS",
    renderContent: () => (
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          Fast-Tracking Your Career in the UK
        </h3>
        <p className="text-slate-700 leading-relaxed">
          The UK January Intake remains one of the most popular application windows for Bangladeshi graduates. A 1-Year Master&apos;s program in the UK cuts your living and tuition expenses in half compared to 2-year programs elsewhere, while giving you the full <strong className="text-slate-900">2-Year Graduate Route Post-Study Work Permit (PSW)</strong>.
        </p>
        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 font-medium text-sm leading-relaxed">
          🇬🇧 <strong>Prestigious Partnerships:</strong> Guaranteed £3,000 scholarships at University of Hertfordshire (Hatfield Campus, 25 mins to London), and up to £8,000–£10,000 at Cardiff University (Russell Group).
        </div>
        <h4 className="text-lg font-bold text-slate-900 font-heading">
          Key Compliance Checks for Bangladeshi Applicants:
        </h4>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700 text-sm">
          <li><strong>Bank Solvency (28-Day Rule):</strong> The UK Home Office requires approximately ~40 Lakh BDT held untouched for 28 consecutive days in an approved bank.</li>
          <li><strong>MOI English Waiver:</strong> Graduates from 28+ leading private and public universities in Bangladesh can waive IELTS with an official Medium of Instruction letter.</li>
          <li><strong>Study Gap Acceptance:</strong> Study First Info regularly clears genuine career study gaps of 3 to 7 years with verified job experience certificates.</li>
        </ol>
      </div>
    ),
    faqs: [
      {
        q: "Can I apply to UK universities without IELTS?",
        a: "Yes. Many of our partner universities—including University of Hertfordshire and Birmingham City University (BCU)—accept an official Medium of Instruction (MOI) certificate from 28+ recognized Bangladeshi universities."
      },
      {
        q: "What is the 28-day bank statement requirement?",
        a: "You must hold the remaining first-year tuition fee plus living expenses (£9,207 outside London or £13,761 inside London) for at least 28 consecutive days before applying for your CAS/Visa."
      },
      {
        q: "Can my spouse join me in the UK?",
        a: "Under current UK immigration rules, dependants are permitted if the main applicant is enrolled in a postgraduate research course (PhD or research-based Master's) or a government-sponsored program."
      }
    ]
  },
  {
    id: 4,
    title: "New Zealand & Pay Tuition After Visa: Spouse Full-Time Work Rights & Free Child Schooling",
    category: "scholarship",
    categoryLabel: "Oceania & Commonwealth",
    readTime: "8 Min Read",
    author: "Senior Australasia Counselors",
    date: "September 2026",
    summary: "Arguably the world's most family-friendly immigration framework: pay tuition only after Approval in Principle (AIP) on your visa. Spouse travels with open work rights.",
    pill: "PAY AFTER VISA (AIP)",
    renderContent: () => (
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          Zero Tuition Risk: Pay After Approval in Principle
        </h3>
        <p className="text-slate-700 leading-relaxed">
          For married students and families, New Zealand provides an unmatched study abroad pathway. Unlike other western nations where you must pay thousands of dollars in tuition upfront, New Zealand operating rules allow international students to <strong className="text-slate-900">pay tuition fees only after receiving official Approval in Principle (AIP) on their visa</strong>.
        </p>
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium text-sm leading-relaxed">
          🥝 <strong>Family Privileges:</strong> When the main applicant enrolls in an eligible Green List or Master&apos;s qualification, their spouse receives open full-time work rights and children are entitled to 100% free domestic schooling!
        </div>
        <h4 className="text-lg font-bold text-slate-900 font-heading">
          Key Academic &amp; Financial Pillars:
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
          <li><strong>Institutions Represented:</strong> University of Auckland, AUT, Waikato, Massey, Wintec, SIT, and Ara Institute.</li>
          <li><strong>Scholarships:</strong> Partial merit bursaries of NZ$2,500 to major competitive awards of NZ$25,000+.</li>
          <li><strong>Bank Fund Requirements:</strong> Both Savings and Fixed Deposit (FDR) accounts are accepted with 4 to 6 months of maturity.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        q: "What does 'Pay Tuition After Visa (AIP)' mean?",
        a: "It means you do not pay your university tuition fee until Immigration New Zealand (INZ) has thoroughly verified your profile and issued an 'Approval in Principle' (AIP) letter confirming your visa is ready upon fee payment."
      },
      {
        q: "Can my spouse work full-time in New Zealand?",
        a: "Yes! If you are enrolled in an eligible Master's degree (Level 9) or a qualification on the New Zealand Green List, your spouse is eligible for an open work visa with no hourly restrictions."
      },
      {
        q: "Is public schooling free for children in New Zealand?",
        a: "Yes. Dependent children of eligible international postgraduate students study in New Zealand domestic state schools free of domestic tuition fees."
      }
    ]
  },
  {
    id: 5,
    title: "Budget Europe: Cyprus 43% Flat Waiver & Low Initial Deposit (~৳4.5 Lakh BDT)",
    category: "schengen",
    categoryLabel: "Low Budget Europe",
    readTime: "5 Min Read",
    author: "Mohammad Hasan Imam & European Team",
    date: "September 2026",
    summary: "Fly to Europe with an initial deposit of only €3,400 with IELTS 4.5–5.0 or MOI certificates. Direct contract partnership saving nearly ~€4,300 on tuition fees.",
    pill: "43% FLAT WAIVER",
    renderContent: () => (
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
          Affordable European Higher Education
        </h3>
        <p className="text-slate-700 leading-relaxed">
          If you want to study in Europe on an affordable budget, Cyprus offers one of the highest visa approval rates with minimal financial friction. Through Study First Info&apos;s direct partnership with <strong className="text-slate-900">Cyprus International University (CIU)</strong>, students receive a guaranteed <strong className="text-slate-900">43% flat tuition fee reduction</strong>.
        </p>
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 font-medium text-sm leading-relaxed">
          🇨🇾 <strong>Low Financial Barrier:</strong> You can start your file and obtain your visa clearance with an initial deposit of only €3,400 (~4.5 Lakh BDT). The remaining tuition balance is payable in easy installments after arriving on campus!
        </div>
        <h4 className="text-lg font-bold text-slate-900 font-heading">
          Why Choose Cyprus:
        </h4>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
          <li><strong>Flexible Language Criteria:</strong> IELTS 4.5–5.0 or official MOI certificate accepted.</li>
          <li><strong>Credit Mobility:</strong> Seamless credit transfer agreements with universities in the UK, USA, and Continental Europe.</li>
          <li><strong>Part-Time Work:</strong> Legal permission to work 20 hours/week in designated commercial sectors.</li>
        </ul>
      </div>
    ),
    faqs: [
      {
        q: "What is the initial deposit required for Cyprus?",
        a: "The initial deposit to obtain university acceptance and visa clearance is only €3,400 (approximately ~৳4.5 Lakh BDT)."
      },
      {
        q: "Is IELTS mandatory for studying in Cyprus?",
        a: "No. Students with an IELTS score of 4.5–5.0 or an official Medium of Instruction (MOI) certificate from their previous institution are fully eligible."
      },
      {
        q: "Can I transfer credits to the UK or Europe later?",
        a: "Yes. CIU and European University Cyprus have formal 2+2 and 3+1 credit mobility pathways with UK and European partner institutions."
      }
    ]
  }
];

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'schengen' | 'scholarship' | 'visa' | 'asia'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqIndices, setExpandedFaqIndices] = useState<number[]>([]);
  
  // Lead form state
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Hungary',
    level: 'Bachelor',
    gpa: '',
    english: 'MOI Eligible',
    branch: 'Banani Head Office'
  });

  const [toast, setToast] = useState<{ title: string; desc: string } | null>(null);

  const showToast = (title: string, desc: string) => {
    setToast({ title, desc });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenArticle = (art: BlogArticle) => {
    setSelectedArticle(art);
    setExpandedFaqIndices([0]); // Open first FAQ by default
    setFormSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast(
      "Profile Received!",
      `Thank you ${leadForm.name}! Counselor assigned at ${leadForm.branch} will contact you on WhatsApp regarding your ${leadForm.country} application.`
    );
    setTimeout(() => {
      setLeadForm({
        name: '',
        phone: '',
        email: '',
        country: 'Hungary',
        level: 'Bachelor',
        gpa: '',
        english: 'MOI Eligible',
        branch: 'Banani Head Office'
      });
    }, 3000);
  };

  // Filtered Articles for directory
  const filteredArticles = blogArticles.filter(art => {
    const matchesCategory = activeCategory === 'all' || art.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const spotlightArticle = blogArticles[0];

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* ============================================================ */}
        {/* VIEW 1: BLOG DIRECTORY & POST GRID LISTING                   */}
        {/* ============================================================ */}
        {!selectedArticle ? (
          <div className="space-y-14 transition-all duration-300">

            {/* Header Banner */}
            <header className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-5 border border-emerald-300 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006837] animate-ping" />
                <Sparkles size={13} className="text-emerald-800" />
                Authoritative Study Abroad Insights
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#042f1a] tracking-tight font-heading leading-tight mb-5">
                Knowledge, Strategy &amp;{' '}
                <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy decoration-2">
                  Visa Guidelines
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                Overcoming visa hurdles is not about luck—it is about calculated documentation, choosing the right intake, and understanding embassy compliance. Explore expert articles curated by Senior Counselors at Study First Info Ltd.
              </p>

              {/* Search Bar */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics (e.g., Hungary, Bank Solvency, MOI, UK, Malaysia)..."
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm text-sm"
                  />
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  All Articles ({blogArticles.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('schengen')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    activeCategory === 'schengen'
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  🇪🇺 Schengen &amp; Europe
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('scholarship')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    activeCategory === 'scholarship'
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  🎓 100% Scholarships
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('visa')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    activeCategory === 'visa'
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  🛂 Visa &amp; Documentation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('asia')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    activeCategory === 'asia'
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  🌏 Asia &amp; Commonwealth
                </button>
              </div>
            </header>

            {/* FEATURED SPOTLIGHT ARTICLE (HERO CARD) */}
            {searchQuery === '' && (activeCategory === 'all' || activeCategory === spotlightArticle.category) && (
              <section
                onClick={() => handleOpenArticle(spotlightArticle)}
                className="bg-gradient-to-br from-[#06321e] via-[#042517] to-[#02170e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/60 cursor-pointer group"
              >
                <div className="absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider">
                        🔥 EDITOR&apos;S MUST-READ
                      </span>
                      <span className="text-xs text-emerald-300 font-medium">
                        {spotlightArticle.readTime} • Visa Strategy
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight group-hover:text-emerald-300 transition-colors">
                      {spotlightArticle.title}
                    </h2>

                    <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                      {spotlightArticle.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                          SF
                        </div>
                        <span>By {spotlightArticle.author}</span>
                      </div>
                      <span>•</span>
                      <span>Updated {spotlightArticle.date}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-6 text-center space-y-4">
                    <div className="text-4xl">🛡️</div>
                    <h4 className="text-base font-bold text-white">Full Case Study &amp; FAQ Available</h4>
                    <p className="text-xs text-emerald-200">
                      Includes actual bank statement checklists, sponsor declaration formats, and embassy interview guidelines.
                    </p>
                    <button
                      type="button"
                      className="w-full py-3 px-5 rounded-xl bg-[#dc2626] group-hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Read Full Article &amp; View FAQ</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {/* REGULAR BLOG POSTS GRID */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => handleOpenArticle(art)}
                    className="bg-white rounded-3xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
                  >
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full">
                          {art.categoryLabel}
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          <Clock size={12} /> {art.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading mb-3 leading-snug group-hover:text-[#006837] transition-colors">
                        {art.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {art.summary}
                      </p>

                      <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                        <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px]">
                          SF
                        </div>
                        <span className="font-medium truncate">{art.author}</span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3 text-xs font-bold text-emerald-800 group-hover:bg-emerald-50 transition-colors">
                      <span>Read Full Article &amp; FAQ</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        ) : (
          /* ============================================================ */
          /* VIEW 2: DYNAMIC BLOG ARTICLE DETAIL VIEW                     */
          /* ============================================================ */
          <div className="space-y-12 transition-all duration-300">
            
            {/* Top Navigation & Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <button
                type="button"
                onClick={handleBackToList}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Back to All Articles</span>
              </button>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <span>📌 Category:</span>
                <span className="font-bold text-emerald-950">{selectedArticle.categoryLabel}</span>
              </div>
            </div>

            {/* Article Header Card */}
            <div className="bg-gradient-to-br from-[#06301d] via-[#042517] to-[#02170e] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800/60 relative overflow-hidden">
              <div className="max-w-4xl space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-emerald-500/30">
                    {selectedArticle.pill}
                  </span>
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                    <Clock size={12} /> {selectedArticle.readTime}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center gap-4 text-xs text-emerald-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      SFI
                    </span>
                    <span className="font-bold text-white">{selectedArticle.author}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                </div>
              </div>
            </div>

            {/* Two-Column Article Body & Sticky Profile Evaluation Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left 8 Columns: Article Content & Dedicated FAQ Section */}
              <div className="lg:col-span-8 space-y-10 text-left">
                
                {/* Article Dynamic Narrative Content */}
                <article className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm text-slate-800 space-y-6 leading-relaxed text-sm sm:text-base">
                  {selectedArticle.renderContent()}
                </article>

                {/* DEDICATED ARTICLE FAQ SECTION */}
                <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                      <HelpCircle size={22} className="text-emerald-800" />
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                        Frequently Asked Questions (FAQ)
                      </h3>
                      <p className="text-xs text-slate-500">
                        Detailed answers regarding this destination, visa rules, and compliance.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Accordion Container */}
                  <div className="space-y-3">
                    {selectedArticle.faqs.map((faq, fIndex) => {
                      const isExpanded = expandedFaqIndices.includes(fIndex);
                      return (
                        <div key={fIndex} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all">
                          <button
                            type="button"
                            onClick={() => toggleFaq(fIndex)}
                            className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3 hover:text-emerald-800 transition-colors cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <span className="text-base font-mono text-emerald-700 font-bold">
                              {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                              <div className="pt-3">{faq.a}</div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Branch Walk-In Notice */}
                <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-3xl text-xs sm:text-sm text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-emerald-900 text-base">Want 1-to-1 Evaluation for This Topic?</h4>
                    <p className="text-slate-600 text-xs">
                      Visit Banani Head Office, Farmgate, or Sylhet with your transcripts for instant on-spot scoring.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/8801898833034?text=Hello%20Study%20First%20Info,%20I%20have%20questions%20regarding%20the%20article."
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#006837] hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap shadow-md transition-all flex items-center gap-1.5"
                  >
                    <MessageSquare size={14} />
                    <span>Chat on WhatsApp →</span>
                  </a>
                </div>

              </div>

              {/* Right 4 Columns: Sticky Student Profile Evaluation Form */}
              <div className="lg:col-span-4 sticky top-6">
                <div className="bg-white border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
                  
                  <div className="text-left">
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Instant Lead Desk
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading mt-2">
                      Evaluate Your Profile
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Receive free counselor feedback regarding <strong className="text-emerald-700">{selectedArticle.title}</strong> within 2 hours.
                    </p>
                  </div>

                  {/* Profile Submission Form */}
                  <form onSubmit={handleLeadSubmit} className="space-y-3.5 text-left text-xs">
                    
                    {/* Full Name */}
                    <div>
                      <label htmlFor="art-name" className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="art-name"
                        required
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="e.g. Shakil Mahmud"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label htmlFor="art-phone" className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        id="art-phone"
                        required
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="017xxxxxxxx"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="art-email" className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="art-email"
                        required
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    {/* Target Destination Country */}
                    <div>
                      <label htmlFor="art-country" className="block font-bold text-slate-700 mb-1">Target Study Destination *</label>
                      <select
                        id="art-country"
                        value={leadForm.country}
                        onChange={(e) => setLeadForm({ ...leadForm, country: e.target.value })}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Hungary">Hungary 🇭🇺 (Direct Dhaka Embassy)</option>
                        <option value="Malaysia">Malaysia 🇲🇾 (100% / 50% Flat Waivers)</option>
                        <option value="United Kingdom">United Kingdom 🇬🇧 (£3,000–£10,000 Grants)</option>
                        <option value="Czech Republic">Czech Republic 🇨🇿 (Zero Tuition + Stipend)</option>
                        <option value="Russia">Russia 🇷🇺 (Pay Tuition After Visa)</option>
                        <option value="Cyprus">Cyprus 🇨🇾 (43% Flat Discount)</option>
                        <option value="New Zealand">New Zealand 🇳🇿 (Spouse Work Rights)</option>
                        <option value="Other">Need Counselor Advice</option>
                      </select>
                    </div>

                    {/* Desired Degree Level */}
                    <div>
                      <label htmlFor="art-level" className="block font-bold text-slate-700 mb-1">Applying Program Level *</label>
                      <select
                        id="art-level"
                        value={leadForm.level}
                        onChange={(e) => setLeadForm({ ...leadForm, level: e.target.value })}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Bachelor">Bachelor Degree (Undergraduate)</option>
                        <option value="Master">Master&apos;s Degree (Postgraduate)</option>
                        <option value="PhD">Doctor of Philosophy (PhD)</option>
                        <option value="Diploma">Diploma / Pre-Master Pathway</option>
                      </select>
                    </div>

                    {/* GPA with Scale Toggle (5.0 vs 4.0) */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label htmlFor="art-gpa" className="font-bold text-slate-700">Academic Score *</label>
                        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[9px] font-bold">
                          <button
                            type="button"
                            onClick={() => setGpaScale(5)}
                            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                              gpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Scale 5.0 (HSC)
                          </button>
                          <button
                            type="button"
                            onClick={() => setGpaScale(4)}
                            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                              gpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            Scale 4.0 (Bachelor)
                          </button>
                        </div>
                      </div>
                      <input
                        type="number"
                        step="0.01"
                        id="art-gpa"
                        required
                        value={leadForm.gpa}
                        onChange={(e) => setLeadForm({ ...leadForm, gpa: e.target.value })}
                        placeholder={gpaScale === 5 ? "e.g. 4.75" : "e.g. 3.40"}
                        min="1.0"
                        max={gpaScale === 5 ? "5.00" : "4.00"}
                        className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    {/* English Proficiency Status */}
                    <div>
                      <label htmlFor="art-english" className="block font-bold text-slate-700 mb-1">English Test / Waiver Status *</label>
                      <select
                        id="art-english"
                        value={leadForm.english}
                        onChange={(e) => setLeadForm({ ...leadForm, english: e.target.value })}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="MOI Eligible">Medium of Instruction (MOI Waiver Eligible)</option>
                        <option value="IELTS 6.0+">IELTS 6.0 or above (or PTE 52+)</option>
                        <option value="IELTS 5.5">IELTS 5.5 (Eligible for Europe &amp; Malaysia)</option>
                        <option value="IELTS 5.0">IELTS 5.0 (Low-IELTS / Nursing options)</option>
                        <option value="Planning Exam">Preparing to sit for exam soon</option>
                      </select>
                    </div>

                    {/* Preferred Branch Desk */}
                    <div>
                      <label htmlFor="art-branch" className="block font-bold text-slate-700 mb-1">Select Branch for Counseling *</label>
                      <select
                        id="art-branch"
                        value={leadForm.branch}
                        onChange={(e) => setLeadForm({ ...leadForm, branch: e.target.value })}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Banani Head Office">Banani Head Office (Rosa Bella, Road 17)</option>
                        <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza)</option>
                        <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                        <option value="Online Video Meeting">Online Video Consultation</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Free Profile Assessment</span>
                      <Send size={14} />
                    </button>

                    <p className="text-[10px] text-center text-slate-400">
                      🔒 Strict data privacy maintained. A certified counselor will message you directly.
                    </p>
                  </form>

                  {/* Success Box */}
                  {formSubmitted && (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-center animate-in fade-in duration-300">
                      <span className="text-2xl">🎉</span>
                      <h4 className="text-xs font-bold text-emerald-950 mt-1">Profile Submitted!</h4>
                      <p className="text-[11px] text-emerald-800 mt-1">
                        Your profile has been forwarded to our admissions desk. Please keep WhatsApp active.
                      </p>
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* FLOATING NOTIFICATION TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 max-w-sm bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-50 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="text-xl">✨</div>
          <div>
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{toast.title}</h5>
            <p className="text-xs text-slate-200 mt-0.5 leading-snug">{toast.desc}</p>
          </div>
        </div>
      )}

    </div>
  );
}
