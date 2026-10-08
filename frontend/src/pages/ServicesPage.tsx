import { useState } from 'react';
import { 
  Building2, 
  Check, 
  ArrowRight, 
  Volume2, 
  Heart, 
  X, 
  Play, 
  Sparkles,
  Clock,
  Phone,
  CreditCard,
  Languages,
  BookOpen
} from 'lucide-react';

interface RoadmapStep {
  step: number;
  shortTitle: string;
  phasePill: string;
  heading: string;
  desc: string;
  timeline: string;
  officeNote: string;
  deliverables: string[];
}

const roadmapSteps: Record<number, RoadmapStep> = {
  1: {
    step: 1,
    shortTitle: "Profile Audit",
    phasePill: "Phase 1 • Initial Screening",
    heading: "1. 100% Free Profile Assessment & Risk Evaluation",
    desc: "We conduct a thorough, honest audit of your academic transcripts (SSC, HSC, Bachelor CGPA), test scores (or MOI eligibility), study gaps, and budget. Unlike dishonest agencies that promise 100% guaranteed visas, we outline real embassy approval probabilities before opening a file.",
    timeline: "Instant / 24 Hours",
    officeNote: "Available at Banani Head Office, Farmgate, Sylhet, or via online video assessment.",
    deliverables: [
      "Dual scale score calculation (Scale 5.00 vs 4.00)",
      "Study gap justification & work certificate audit",
      "Assessment of genuine financial solvency requirements",
      "Honest risk analysis before committing any funds"
    ]
  },
  2: {
    step: 2,
    shortTitle: "Shortlisting",
    phasePill: "Phase 2 • Academic Matching",
    heading: "2. Strategic Course, Country & University Shortlisting",
    desc: "Based on your verified grades and career goals, our admissions panel matches you with high-approval destination countries and accredited institutions where your chance of visa issuance is highest.",
    timeline: "2 to 3 Days",
    officeNote: "Direct institutional tie-ups across Hungary, UK, Malaysia, Russia, and New Zealand.",
    deliverables: [
      "Direct Diamond Partner representation (METU, UniSZA, MILA)",
      "Identification of 100% scholarship quotas (Stipendium Hungaricum, CSC, State Quotas)",
      "Accreditation check ensuring post-study work & credit mobility",
      "Total living cost vs. tuition fee feasibility comparison"
    ]
  },
  3: {
    step: 3,
    shortTitle: "SOP & Docs",
    phasePill: "Phase 3 • Application Preparation",
    heading: "3. Document Preparation, Certified Translations & SOP Mentorship",
    desc: "A generic Statement of Purpose (SOP) is the #1 reason for embassy refusals. Our editorial desk provides personalized 1-on-1 drafting support so your motivation letter aligns directly with your Bangladeshi career prospects.",
    timeline: "3 to 5 Days",
    officeNote: "Strict anti-plagiarism checks and notarization review.",
    deliverables: [
      "Personalized, original Statement of Purpose (SOP) crafting",
      "Certified translation and foreign ministry apostille advisory",
      "Academic reference letter (LOR) formats for teachers & employers",
      "Medium of Instruction (MOI) verification certificates"
    ]
  },
  4: {
    step: 4,
    shortTitle: "Offer Letter",
    phasePill: "Phase 4 • Institutional Clearance",
    heading: "4. University Application Submission & Offer Letter Issuance",
    desc: "We submit applications directly through secure university agent portals. This bypasses slow third-party aggregators and unlocks priority processing, conditional offer letters, and institutional tuition fee waiver grants.",
    timeline: "1 to 3 Weeks",
    officeNote: "Express conditional letters generated in as little as 3-5 working days.",
    deliverables: [
      "Direct agent submission with application fee waiver perks",
      "Conditional & unconditional offer letter confirmation",
      "Scholarship award documentation (e.g. £3,000–£10,000 UK awards, 50% MILA flat fee)",
      "Clear breakdown of university enrollment and refund policies"
    ]
  },
  5: {
    step: 5,
    shortTitle: "Bank Solvency",
    phasePill: "Phase 5 • Financial Mastery",
    heading: "5. Bank Solvency Guidance & Legal Source-of-Funds Audit",
    desc: "Over 90% of Bangladeshi visa refusals stem from poorly audited bank statements or unexplained sudden deposits. We structure bank statements strictly according to sovereign immigration compliance rules.",
    timeline: "1 to 2 Weeks",
    officeNote: "Full legal tax audit and sponsor affidavit verification.",
    deliverables: [
      "UK 28-day consecutive holding rule audit (~40 Lakh BDT)",
      "New Zealand 4-6 months FDR/Savings maturity calculation",
      "Tax identification (TIN), trade license, and sponsor declarations",
      "Pay tuition fee AFTER visa options (Greece, Bulgaria, Russia, New Zealand)"
    ]
  },
  6: {
    step: 6,
    shortTitle: "Embassy Drill",
    phasePill: "Phase 6 • Embassy Protocol",
    heading: "6. Visa File Submission & 1-to-1 Embassy Mock Interview Drills",
    desc: "We prepare you for the exact questions visa officers ask. Our senior counselors simulate high-pressure embassy interviews, grooming your body language, course clarity, and financial justifications.",
    timeline: "2 to 4 Weeks",
    officeNote: "Direct Dhaka Embassy submission for Hungary; no India travel required.",
    deliverables: [
      "Direct Dhaka Hungarian Embassy appointment & submission without India trip",
      "Intensive 1-on-1 oral mock interview training sessions",
      "Refusal recovery protocols (expert auditing for previous refusal cases)",
      "VFS Global appointment booking and biometrics file pack"
    ]
  },
  7: {
    step: 7,
    shortTitle: "Fly & Settle",
    phasePill: "Phase 7 • Arrival & Onboarding",
    heading: "7. Pre-Departure Briefing, Airport Reception & European Landing",
    desc: "Our responsibility does not end when your visa sticker arrives. We ensure smooth travel with student forex cards, air ticket bookings, airport reception, and onboarding by our senior team in Europe.",
    timeline: "Flight Week",
    officeNote: "Active Bangladeshi student networks in Budapest, London, and Kuala Lumpur.",
    deliverables: [
      "Discounted student air ticketing & excess baggage allowances",
      "Airport pickup and verified university dormitory/private accommodation",
      "On-arrival greeting by our leadership team (including CEO Md Jubed Miah in Europe)",
      "Temporary Resident Permit (TRP/Pink Card) registration support"
    ]
  }
};

interface ReelData {
  id: number;
  studentName: string;
  university: string;
  badge: string;
  country: 'hungary' | 'uk' | 'malaysia' | 'russia';
  likes: string;
  timing: string;
  tag: string;
  quote: string;
  viewCount: string;
  accentColor: string;
  tagColor: string;
}

const reelsData: ReelData[] = [
  {
    id: 0,
    studentName: 'Fahim Alom Bappy',
    university: 'Széchenyi István University (Győr), Hungary',
    badge: 'Hungary Visa Success',
    country: 'hungary',
    likes: '18.4K',
    viewCount: '18.4K',
    timing: 'Sept 2026 Intake',
    tag: 'University of Győr',
    accentColor: 'from-slate-950 via-slate-900/60 to-emerald-950/40',
    tagColor: 'bg-emerald-600/90 text-white',
    quote: '“Study First Info Ltd. টিমকে অসংখ্য ধন্যবাদ তাদের সঠিক গাইডলাইনের জন্য! প্রসেসিং চলাকালীন আমার প্রতিটি মেসেজ ও প্রশ্নের তাৎক্ষণিক (Instant Reply) উত্তর দিয়েছেন। কোনো দ্বিধা ছাড়া হাঙ্গেরি স্টুডেন্ট ভিসার জন্য তারা শতভাগ বিশ্বস্ত।”'
  },
  {
    id: 1,
    studentName: 'Chaytee Das',
    university: 'Central European Schengen Route, Hungary',
    badge: '2nd Attempt Triumph',
    country: 'hungary',
    likes: '24.2K',
    viewCount: '24.2K',
    timing: 'Submission: Aug 9 • Stamp: Aug 6',
    tag: 'Rejection Resolved',
    accentColor: 'from-slate-950 via-slate-900/60 to-rose-950/40',
    tagColor: 'bg-rose-600 text-white',
    quote: '“প্রথমবার অন্য জায়গা থেকে ফাইল করে রিজেক্ট হওয়ার পর মানসিকভাবে ভেঙে পড়েছিলাম। Study First Info Ltd.-এর ১-টু-১ এম্বাসি ইন্টারভিউ গ্রুমিং আর ডকুমেন্টেশনের নিখুঁত সমন্বয়ে আমি দ্বিতীয়বারে সফলভাবে হাঙ্গেরির ভিসা হাতে পেয়েছি।”'
  },
  {
    id: 2,
    studentName: 'Sheikh Sulaiman & Amit',
    university: 'University of Győr, Hungary',
    badge: 'Double Visa in Same Week',
    country: 'hungary',
    likes: '41.8K',
    viewCount: '41.8K',
    timing: 'Approved Together',
    tag: 'BSc Tourism & Catering',
    accentColor: 'from-slate-950 via-slate-900/60 to-emerald-950/40',
    tagColor: 'bg-amber-500 text-slate-950',
    quote: '“১০ মিনিট কান্না করছি আমরা! যখন একই সাথে আমাদের দুজনের ভিসার মেসেজ এলো, তখন আনন্দাশ্রু ধরে রাখতে পারিনি। Study First Info আমাদের ছোট ভাইয়ের মতো অভিভাবকত্ব দিয়ে পুরো ফাইল তৈরি করে দিয়েছিল।”'
  },
  {
    id: 3,
    studentName: 'Monirul Islam',
    university: 'University of Pannonia, Hungary',
    badge: 'Data Science in Business',
    country: 'hungary',
    likes: '15.1K',
    viewCount: '15.1K',
    timing: 'Submission: 27 July • Ready: 2 Sept',
    tag: 'GPA 5.00 / 5.00',
    accentColor: 'from-slate-950 via-slate-900/60 to-blue-950/40',
    tagColor: 'bg-blue-600 text-white',
    quote: '“আমার এসএসসি এবং এইচএসসিতে জিপিএ ৫.০০ ছিল। আমি চেয়েছিলাম ইউরোপের বিশ্বমানের ডেটা সায়েন্সে পড়তে। স্টাডি ফার্স্ট ইনফোর এক্সপার্ট টিম মাত্র ৩৬ দিনে আমার পুরো ফাইল হাঙ্গেরি এম্বাসি থেকে নিশ্চিত করেছে।”'
  },
  {
    id: 4,
    studentName: 'Cardiff MSc Excellence',
    university: 'Cardiff University (Russell Group), UK',
    badge: '£8,000 Scholarship',
    country: 'uk',
    likes: '29.5K',
    viewCount: '29.5K',
    timing: "1-Year Master's Course",
    tag: '2-Year PSW Route',
    accentColor: 'from-slate-950 via-slate-900/60 to-purple-950/40',
    tagColor: 'bg-purple-600 text-white',
    quote: '“UK January Intake এ সাশ্রয়ী খরচে কার্ডিফের মতো রাসেল গ্রুপ ইউনিভার্সিটিতে ভর্তি এবং ৮,০০০ পাউন্ড স্কলারশিপ পাওয়া এক বড় মাইলফলক ছিল। Study First Info Ltd.-এর দ্রুত CAS লেটার প্রসেসিং সত্যিই তুলনাহীন।”'
  },
  {
    id: 5,
    studentName: 'Sultan Jahan Abedin',
    university: 'UniSZA Public University, Malaysia',
    badge: 'Fast EMGS Pass (~3 Wks)',
    country: 'malaysia',
    likes: '12.7K',
    viewCount: '12.7K',
    timing: '1st Yr Budget: ~5.5 Lakh BDT',
    tag: 'Official UniSZA Partner',
    accentColor: 'from-slate-950 via-slate-900/60 to-cyan-950/40',
    tagColor: 'bg-cyan-600 text-white',
    quote: '“মালয়েশিয়ার টপ পাবলিক বিশ্ববিদ্যালয় UniSZA-তে এত কম বাজেটে পড়তে পারবো ভাবিনি। Study First Info তাদের অফিশিয়াল রিপ্রেজেন্টেটিভ হওয়ায় কোনো থার্ড পার্টি ঝামেলা ছাড়াই খুব দ্রুত ভিসা পেয়েছি।”'
  },
  {
    id: 6,
    studentName: 'Md Jahidul Islam',
    university: 'Novosibirsk State University, Russia',
    badge: 'State Quota + 15k Stipend',
    country: 'russia',
    likes: '19.3K',
    viewCount: '19.3K',
    timing: 'Dhaka Embassy Visa',
    tag: 'Pay Tuition After Visa',
    accentColor: 'from-slate-950 via-slate-900/60 to-red-950/40',
    tagColor: 'bg-red-600 text-white',
    quote: '“ভিসা হওয়ার আগে কোনো ইউনিভার্সিটির টিউশন ফি দিতে হয়নি—সব ফি দিয়েছি ভিসা পাওয়ার পর। সাথে প্রতি মাসে ১৫,০০০ রুবল সরকারি ভাতা পাচ্ছি। রাশিয়ার স্টেট কোটা পাওয়ার সেরা মাধ্যম Study First Info।”'
  },
  {
    id: 7,
    studentName: 'Syeda Sumaya Zannat & Batch',
    university: 'University of Győr, Hungary',
    badge: 'Airport Departure with CEO',
    country: 'hungary',
    likes: '52.3K',
    viewCount: '52.3K',
    timing: 'BSc Agricultural Eng.',
    tag: 'On-Arrival Reception',
    accentColor: 'from-slate-950 via-slate-900/60 to-emerald-950/40',
    tagColor: 'bg-emerald-500 text-slate-950',
    quote: '“শুধু ভিসা করিয়েই তারা দায়িত্ব শেষ করেননি। ঢাকা এয়ারপোর্টে আমাদের পুরো ব্যাচকে বিদায় জানানো থেকে শুরু করে বুদাপেস্টে সিইও জনাব জুবের মিয়া স্যারের অভ্যর্থনা আমাদের প্রবাসে এক আপন পরিবার এনে দিয়েছে।”'
  }
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [reelFilter, setReelFilter] = useState<'all' | 'hungary' | 'uk' | 'malaysia' | 'russia'>('all');
  const [selectedReel, setSelectedReel] = useState<ReelData | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceName, setBookingServiceName] = useState('General Consultation');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
  
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Hungary',
    level: 'Bachelor',
    gpa: '',
    branch: 'Banani Head Office'
  });

  const [toast, setToast] = useState<{ title: string; desc: string } | null>(null);

  const showToast = (title: string, desc: string) => {
    setToast({ title, desc });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const openBookingModal = (serviceTitle: string) => {
    setBookingServiceName(serviceTitle);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    showToast(
      'Consultation Scheduled',
      `Thank you ${bookingForm.name}! Counselor from ${bookingForm.branch} will contact you on WhatsApp regarding your ${bookingForm.country} application.`
    );
    setTimeout(() => {
      setBookingModalOpen(false);
      setBookingSuccess(false);
      setBookingForm({
        name: '',
        phone: '',
        email: '',
        country: 'Hungary',
        level: 'Bachelor',
        gpa: '',
        branch: 'Banani Head Office'
      });
    }, 2500);
  };

  const handleReelConsultation = () => {
    if (!selectedReel) return;
    const name = selectedReel.studentName;
    const tag = selectedReel.tag;
    setSelectedReel(null);
    openBookingModal(`Visa Case: ${name} (${tag})`);
  };

  const filteredReels = reelFilter === 'all' 
    ? reelsData 
    : reelsData.filter(r => r.country === reelFilter);

  const currentStepData = roadmapSteps[activeStep];

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 sm:space-y-24">

        {/* ======================================================== */}
        {/* HERO HEADER SECTION (LUCRATIVE & COMPREHENSIVE)          */}
        {/* ======================================================== */}
        <header className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#042416] via-[#06301d] to-[#02180e] text-white p-6 sm:p-12 lg:p-14 border border-emerald-800/60 shadow-2xl">
          {/* Ambient Glowing Orbs */}
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-white/15 backdrop-blur-md shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles size={14} className="text-amber-300" />
              Comprehensive Academic Solutions &bull; Official University Agency
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-[1.15]">
              Empowering Global Dreams with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 underline decoration-amber-400 decoration-wavy decoration-2">
                Transparent, End-to-End
              </span>{' '}
              Excellence
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-emerald-100/90 font-normal leading-relaxed max-w-3xl mx-auto">
              Studying abroad requires more than just an offer letter. From <strong>100% free profile screening</strong> to <strong>Study Loan assistance</strong>, <strong>German language training</strong>, upcoming <strong>IELTS prep</strong>, bank solvency auditing, 1-on-1 embassy mock drills, and on-arrival European reception — Study First Info Ltd. guarantees total integrity.
            </p>

            {/* 3 Hot New Capabilities Showcase Ticker */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto pt-2 text-left">
              <div 
                onClick={() => openBookingModal('Study Loan Assistance')}
                className="bg-white/10 hover:bg-white/15 border border-emerald-400/30 rounded-2xl p-4 backdrop-blur-md transition-all cursor-pointer group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <CreditCard size={13} />
                    1. Study Loan Support
                  </span>
                  <span className="text-[10px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded-full font-bold">Available Now</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">We Provide Student Loans</div>
                <div className="text-[11px] text-emerald-100/80 mt-0.5">Low-interest study loans &amp; solvency support for verified students.</div>
              </div>

              <div 
                onClick={() => openBookingModal('German Language Course (A1-B2)')}
                className="bg-white/10 hover:bg-white/15 border border-emerald-400/30 rounded-2xl p-4 backdrop-blur-md transition-all cursor-pointer group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                    <Languages size={13} />
                    2. German Language Course
                  </span>
                  <span className="text-[10px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded-full font-bold">In-House Academy</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">A1 to B2 Batches Enrolling</div>
                <div className="text-[11px] text-emerald-100/80 mt-0.5">Direct tuition-free Germany university admissions &amp; Ausbildung.</div>
              </div>

              <div 
                onClick={() => openBookingModal('IELTS Course (Pre-Register)')}
                className="bg-white/10 hover:bg-white/15 border border-amber-400/40 rounded-2xl p-4 backdrop-blur-md transition-all cursor-pointer group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <BookOpen size={13} />
                    3. IELTS Course (Upcoming)
                  </span>
                  <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full font-black">Launching Soon</span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">Target Band 7.5+ Mentorship</div>
                <div className="text-[11px] text-emerald-100/80 mt-0.5">Specialized IELTS coaching launching at Banani &amp; Sylhet.</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#services-grid-section"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All 9 Services</span>
                <ArrowRight size={16} />
              </a>
              <button
                type="button"
                onClick={() => openBookingModal('General Profile Assessment')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all backdrop-blur-sm cursor-pointer"
              >
                Book Free Assessment Desk
              </button>
            </div>

            {/* Key Trust Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">98.6%</div>
                <div className="text-[11px] text-slate-300 font-medium">Visa Approval Rate</div>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-white">500+</div>
                <div className="text-[11px] text-emerald-300 font-medium">Hungary Visas Delivered</div>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-amber-300">BDT 0</div>
                <div className="text-[11px] text-slate-300 font-medium">Initial File Opening Charge</div>
              </div>
              <div className="p-2 sm:p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">45+</div>
                <div className="text-[11px] text-slate-300 font-medium">Direct University Portals</div>
              </div>
            </div>

          </div>
        </header>

        {/* ======================================================== */}
        {/* SECTION 1: INTERACTIVE STEP-BY-STEP ADMISSION ROADMAP    */}
        {/* ======================================================== */}
        <section id="step-by-step-roadmap" className="scroll-mt-12 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300 shadow-sm">
                Roadmap to Success
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#042f1a] font-heading mt-3">
                Our 7-Step Clear &amp; Structured Process
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Every file is strictly audited at each milestone. Click through the phases below to see what happens behind the scenes.
            </p>
          </div>

          {/* Roadmap Milestone Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {Object.values(roadmapSteps).map((stepItem) => {
              const isActive = activeStep === stepItem.step;
              return (
                <button
                  key={stepItem.step}
                  type="button"
                  onClick={() => setActiveStep(stepItem.step)}
                  className={`px-3 py-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50'
                  }`}
                >
                  <span className={`text-[10px] font-bold block uppercase tracking-wider ${isActive ? 'opacity-80' : 'text-slate-400'}`}>
                    Step 0{stepItem.step}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold block">
                    {stepItem.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Milestone Detail Display Card */}
          <div className="bg-gradient-to-br from-[#06301d] via-[#042517] to-[#02170e] text-white rounded-3xl p-6 sm:p-9 shadow-xl border border-emerald-800/60 relative overflow-hidden transition-all duration-300">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                  {currentStepData.phasePill}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {currentStepData.heading}
                </h3>

                <p className="text-emerald-100/90 text-sm leading-relaxed">
                  {currentStepData.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  {currentStepData.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center gap-2.5">
                      <span className="text-emerald-400 font-bold text-base">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 border border-white/15 backdrop-blur-md rounded-2xl p-6 text-center space-y-4">
                <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Estimated Turnaround</div>
                <div className="text-3xl font-black text-amber-300 font-mono">{currentStepData.timeline}</div>
                <p className="text-xs text-slate-300 leading-snug">
                  {currentStepData.officeNote}
                </p>
                <button
                  type="button"
                  onClick={() => openBookingModal(`Step 0${currentStepData.step}: ${currentStepData.shortTitle}`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book This Step For Free</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          </div>

        </section>

        {/* ======================================================== */}
        {/* SECTION 2: OUR 6-STEP COMPREHENSIVE SERVICES             */}
        {/* ======================================================== */}
        <section id="services-grid-section" className="scroll-mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Dedicated Services Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#042f1a] font-heading mt-2">
                End-To-End Academic Solutions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Structured across certified counselors, compliance officers, and university liaison managers to eliminate filing flaws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Service 1: Profile Assessment */}
            <div className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#006837]/10 text-[#006837] border border-[#006837]/20 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  📋
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Step 01 • 100% Free
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  Comprehensive Profile Evaluation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Deep, honest analysis of your academic background (SSC, HSC, Bachelor CGPA), study gaps, and budget. We match you strictly with high-approval destination countries and universities where you meet the criteria.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Dual grading scale assessment (Scale 5.00 &amp; 4.00)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Realistic chances without false guarantees
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Low-IELTS &amp; MOI alternative options
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('Profile Assessment')}
                  className="text-xs font-bold text-[#006837] hover:text-[#042f1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Book Assessment Desk</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 2: University Admissions */}
            <div className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#006837]/10 text-[#006837] border border-[#006837]/20 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  🏛️
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Step 02 • Direct Agency
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  University Admission Processing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  As official representatives and Diamond Partners (Budapest Metropolitan, UniSZA, MILA), we facilitate express offer letter issuance directly through institutional portals without 3rd-party delays.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Guaranteed fast-track conditional offer letters
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Direct application submission with waiver perks
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Credit transfer pathways to USA/UK/Australia
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('University Admission')}
                  className="text-xs font-bold text-[#006837] hover:text-[#042f1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Select Universities</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 3: Scholarship Guidance */}
            <div className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#006837]/10 text-[#006837] border border-[#006837]/20 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Step 03 • Up to 100% Waivers
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  Scholarship &amp; Funding Advisory
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Maximize your savings with specialized counseling for government &amp; university schemes including Hungary Stipendium Hungaricum, China CSC full-ride, Russian quotas, and MILA 50% flat fee discounts.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Full tuition waiver + accommodation + monthly stipend
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> UK merit grants ranging from £3,000 to £10,000
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Motivation letter (SOP) crafting and proofreading
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('Scholarship Guidance')}
                  className="text-xs font-bold text-[#006837] hover:text-[#042f1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Scholarships</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 4: Visa Filing & Bank Solvency */}
            <div className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#006837]/10 text-[#006837] border border-[#006837]/20 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  🛂
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Step 04 • 100% Precise
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  Visa Filing &amp; Bank Solvency
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  90% of visa refusals occur due to imperfect bank documentation or source of funds. We provide legally compliant bank statement guidance, tax audits, sponsor declarations, and embassy checklists.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Pay tuition fee AFTER visa options (Greece, NZ, Russia)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> FDR and Savings account maturity calculation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Notary, apostille, and ministry attestation handling
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('Visa & Bank Solvency')}
                  className="text-xs font-bold text-[#006837] hover:text-[#042f1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Check Solvency Plan</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 5: 1-to-1 Interview Prep */}
            <div className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#006837]/10 text-[#006837] border border-[#006837]/20 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Step 05 • Real Confidence
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  1-to-1 Embassy Mock Interview Prep
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Personalized mock interview sessions simulating real visa officer interviews (Hungary Dhaka Embassy, VFS, and University oral entry exams). We train you to articulate your career goals confidently.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Rigorous Q&amp;A practice on course relevance &amp; intent
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Resolving study gap justifications smoothly
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Dedicated support for students who had previous refusals
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('Interview Preparation')}
                  className="text-xs font-bold text-[#006837] hover:text-[#042f1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Schedule Mock Session</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 6: Post-Visa & Airport Reception */}
            <div className="group bg-white rounded-3xl p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#006837]/10 text-[#006837] border border-[#006837]/20 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  ✈️
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Step 06 • Full Journey
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  Pre-Departure &amp; Airport Reception
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Our responsibility doesn't end with a visa sticker. We arrange air ticketing, student forex cards, pre-departure orientation, and our leadership team (including CEO Md Jubed Miah) personally greets and supports students upon arrival!
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> On-arrival airport pickup &amp; accommodation assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Resident permit (TRP / Pink Card) registration guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Active Bangladeshi student community in Budapest &amp; Europe
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('Post-Visa Support')}
                  className="text-xs font-bold text-[#006837] hover:text-[#042f1a] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View Student Community</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 7: Study Loan Assistance (NEW OFFERING) */}
            <div className="group bg-white rounded-3xl p-7 border-2 border-emerald-500/40 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-100/60 rounded-full blur-xl group-hover:bg-emerald-200 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  💳
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-black tracking-wider uppercase text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                    Step 07 • Financial Backing
                  </span>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full">
                    We Provide Loans
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  Student Study Loan Assistance
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Lack of immediate liquid funds should never stop a deserving scholar. In partnership with recognized commercial banks and financial institutions, we provide low-interest student study loans and bank solvency support tailored to embassy visa guidelines.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Fast loan sanction for tuition fees &amp; 1st-year living expenses
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Legally audited bank solvency certificates accepted by European &amp; UK embassies
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Flexible repayment terms with post-study grace period options
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('Study Loan Assistance')}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Apply for Study Loan</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 8: German Language Course (NEW OFFERING) */}
            <div className="group bg-white rounded-3xl p-7 border-2 border-emerald-500/40 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-emerald-100/60 rounded-full blur-xl group-hover:bg-emerald-200 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  🇩🇪
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-black tracking-wider uppercase text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
                    In-House Academy
                  </span>
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                    A1 to B2 Batches
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-[#006837] transition-colors">
                  German Language Course (Goethe / Telc)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Unlock tuition-free education at German public universities and high-stipend Ausbildung vocational programs. We provide structured A1, A2, B1, and B2 language coaching with native-level Bangladeshi instructors and Goethe-Institut certified curriculum.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Interactive small batches with speech audio labs &amp; mock exams
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Direct admission matching for Germany public universities upon B1/B2 completion
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 stroke-[3]" /> Complete blocked account (Expatrio / Fintiba) setup assistance
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('German Language Course (A1-B2)')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#006837] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Enroll in German Academy</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Service 9: IELTS Preparation Course (FUTURE / UPCOMING OFFERING) */}
            <div className="group bg-white rounded-3xl p-7 border-2 border-dashed border-amber-400 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-amber-50 rounded-full blur-xl group-hover:bg-amber-100 transition-all" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-black tracking-wider uppercase text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
                    Upcoming Offering
                  </span>
                  <span className="text-[10px] font-black uppercase bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse">
                    Launching Soon
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-3 group-hover:text-amber-700 transition-colors">
                  IELTS Preparation Course (Target Band 7.5+)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  Launching soon at our Banani Head Office and Sylhet premises! An intensive, test-proven IELTS masterclass crafted by certified British Council &amp; IDP trained mentors, featuring full-length computer-based mock drills and 1-on-1 speaking room sessions.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-600 stroke-[3]" /> 8-week intensive score booster for Academic &amp; General modules
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-600 stroke-[3]" /> Weekly personalized speaking &amp; writing analytical feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-amber-600 stroke-[3]" /> Early-bird pre-registration discounts &amp; priority seat reservation
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => openBookingModal('IELTS Preparation Course (Waitlist)')}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Join IELTS Waitlist / Pre-Register</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================== */}
        {/* SECTION 3: WHY CHOOSE STUDY FIRST INFO LTD.              */}
        {/* ======================================================== */}
        <section id="why-choose-us-section" className="bg-gradient-to-br from-[#06301d] via-[#042416] to-[#02180e] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-emerald-900/50">
          
          {/* Background Ambient Glow */}
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <span>🌟 Verified Institutional Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white mb-4">
              Why Study First Info Ltd.?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-medium">
              Studying abroad isn't about blind promises. It’s about calculated strategy, flawless documentation, and working with verified partner agencies that know embassy requirements inside out.
            </p>
          </div>

          {/* Live Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">14,750+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Visas Processed</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">500+</div>
              <div className="text-xs sm:text-sm text-emerald-300 font-medium mt-1">Hungary Visa Approvals</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">96%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Verified Success Ratio</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">14+</div>
              <div className="text-xs sm:text-sm text-emerald-300 font-medium mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Comparison Matrix: Study First Info vs Ordinary Agencies */}
          <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-md mb-14">
            <h3 className="text-xl font-bold text-white font-heading mb-6 text-center sm:text-left flex items-center justify-between flex-wrap gap-2">
              <span>What Sets Our Guidelines Apart</span>
              <span className="text-xs text-emerald-400 font-sans font-medium">100% Student-First Code of Conduct</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-emerald-300/80">
                    <th className="py-3 px-3 font-semibold">Key Aspect</th>
                    <th className="py-3 px-3 font-bold text-white bg-emerald-900/40 rounded-t-xl">Study First Info Ltd.</th>
                    <th className="py-3 px-3 font-medium text-slate-400">Ordinary Unverified Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  <tr>
                    <td className="py-3.5 px-3 font-medium">Visa Guarantee Claim</td>
                    <td className="py-3.5 px-3 font-bold text-emerald-300 bg-emerald-900/20">❌ Never false guarantees; honest risk assessment</td>
                    <td className="py-3.5 px-3 text-slate-400">Give 100% fake guarantees leading to bans</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-medium">University Partnerships</td>
                    <td className="py-3.5 px-3 font-bold text-emerald-300 bg-emerald-900/20">Direct Diamond Partner (METU), UniSZA Official Agent</td>
                    <td className="py-3.5 px-3 text-slate-400">Third-party middlemen with delayed offers</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-medium">Fee Payment Security</td>
                    <td className="py-3.5 px-3 font-bold text-emerald-300 bg-emerald-900/20">Pay tuition fee AFTER visa options in Greece, Russia, NZ</td>
                    <td className="py-3.5 px-3 text-slate-400">Upfront high fees with massive refund deductions</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-medium">Embassy Preparation</td>
                    <td className="py-3.5 px-3 font-bold text-emerald-300 bg-emerald-900/20">Rigorous 1-on-1 personalized mock interview drills</td>
                    <td className="py-3.5 px-3 text-slate-400">Only hand over a sheet of basic question papers</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-3 font-medium">Low IELTS &amp; MOI Solutions</td>
                    <td className="py-3.5 px-3 font-bold text-emerald-300 bg-emerald-900/20">Legally recognized university waivers for Bangladeshi alumni</td>
                    <td className="py-3.5 px-3 text-slate-400">Force unwanted foundation programs with extra fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3 Physical Branches Showcase */}
          <div className="relative z-10">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4 text-center">
              Visit Us In-Person (Saturday to Thursday: 10:00 AM – 6:30 PM)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-emerald-400 transition-colors">
                <div className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Building2 size={16} className="text-emerald-400" />
                  <span>Banani (Head Office)</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Rosa Bella Apartment, House 3, Level 2, Block D, Road 17, Banani C/A, Dhaka-1213
                </p>
                <p className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                  <Phone size={12} /> 01898 833034 | 01898 833033
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-emerald-400 transition-colors">
                <div className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Building2 size={16} className="text-emerald-400" />
                  <span>Farmgate Branch</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  7th Floor (Lift-6), BTI Central Plaza (opposite Ananda Cinema Hall), Green Road, Dhaka 1215
                </p>
                <p className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                  <Phone size={12} /> 01898 833035 | +8809613752752
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-emerald-400 transition-colors">
                <div className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Building2 size={16} className="text-emerald-400" />
                  <span>Sylhet Branch</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  Sylhet Millennium Shopping Centre, Lift 10, Room 907, Jallarpar Road, Zindabazar, Sylhet 3100
                </p>
                <p className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                  <Phone size={12} /> 01898 833036
                </p>
              </div>

            </div>
          </div>

        </section>

        {/* ======================================================== */}
        {/* SECTION 4: STUDENT VISA SUCCESS REELS SHOWCASE           */}
        {/* ======================================================== */}
        <section id="visa-reels-section" className="scroll-mt-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-200">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              Real Emotional Student Moments
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#042f1a] font-heading tracking-tight mb-4">
              Student Visa Success Reels
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Watch real authentic moments when our students receive their approved passport, collect their visa stickers, or land at European airports with our CEO.
            </p>
          </div>

          {/* Reel Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            <button
              type="button"
              onClick={() => setReelFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                reelFilter === 'all'
                  ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              All Reels (12+)
            </button>
            <button
              type="button"
              onClick={() => setReelFilter('hungary')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                reelFilter === 'hungary'
                  ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              🇭🇺 Hungary (500+ Record)
            </button>
            <button
              type="button"
              onClick={() => setReelFilter('uk')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                reelFilter === 'uk'
                  ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              🇬🇧 UK &amp; Russell Group
            </button>
            <button
              type="button"
              onClick={() => setReelFilter('malaysia')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                reelFilter === 'malaysia'
                  ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              🇲🇾 Malaysia Dual Degree
            </button>
            <button
              type="button"
              onClick={() => setReelFilter('russia')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                reelFilter === 'russia'
                  ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              🇷🇺 Russia Quotas
            </button>
          </div>

          {/* Reels Video Grid (Vertical 9:16 mobile format) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setSelectedReel(reel)}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-slate-800"
              >
                {/* Thumbnail Background */}
                <div 
                  className={`w-full relative bg-gradient-to-t ${reel.accentColor} p-5 flex flex-col justify-between`}
                  style={{ aspectRatio: '9 / 16' }}
                >
                  {/* Top Tags */}
                  <div className="flex items-center justify-between z-10">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm ${reel.tagColor}`}>
                      {reel.badge}
                    </span>
                    <span className="text-white text-xs font-semibold bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1">
                      <span>👁️</span> {reel.viewCount}
                    </span>
                  </div>

                  {/* Center Play Reel Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white text-2xl group-hover:scale-125 group-hover:bg-emerald-600 transition-all duration-300 shadow-xl pl-1">
                      <Play size={22} className="fill-white" />
                    </div>
                  </div>

                  {/* Bottom Student Bio */}
                  <div className="z-10 text-left">
                    <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded mb-2">
                      {reel.tag}
                    </span>
                    <h4 className="text-white font-bold font-heading text-lg leading-tight">
                      {reel.studentName}
                    </h4>
                    <p className="text-emerald-300 text-xs font-medium">{reel.university}</p>
                    <div className="mt-2 text-[11px] text-slate-300 border-t border-white/10 pt-2 flex items-center justify-between">
                      <span>{reel.timing}</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Check size={12} className="stroke-[3]" /> Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Floating Callout */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl flex-shrink-0">
                🎬
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base sm:text-lg">Want to be our next visa success story?</h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  Bring your certificates to Banani, Farmgate, or Sylhet offices for an immediate, confidential profile assessment.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => openBookingModal('General Consultation')}
              className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm shadow-md hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply With Study First Info</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </section>

      </main>

      {/* ======================================================== */}
      {/* MODAL 1: REEL VIDEO PLAYER MODAL                         */}
      {/* ======================================================== */}
      {selectedReel && (
        <div 
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedReel(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setSelectedReel(null)}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-rose-600 flex items-center justify-center text-sm font-bold backdrop-blur-md transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Simulated Phone Reel Video Screen */}
            <div className="relative bg-black w-full" style={{ aspectRatio: '9 / 16' }}>
              
              {/* Video Header Gradient */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                    SF
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Study First Info Ltd.</p>
                    <p className="text-[10px] text-emerald-400">@studyfirstinfo.official</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950">
                  {selectedReel.badge}
                </span>
              </div>

              {/* Simulated Video Media Player Mockup */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-emerald-950/40 to-slate-950">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-3xl mb-4 animate-pulse">
                  <Volume2 size={32} />
                </div>

                <span className="text-xs text-emerald-300 uppercase tracking-widest font-mono mb-1">
                  Authentic Student Testimonial
                </span>
                <h3 className="text-2xl font-extrabold text-white font-heading mb-1">
                  {selectedReel.studentName}
                </h3>
                <p className="text-xs font-semibold text-emerald-300 mb-4">
                  {selectedReel.university}
                </p>

                {/* Quote Box */}
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 leading-relaxed italic text-left max-h-40 overflow-y-auto">
                  {selectedReel.quote}
                </div>

                {/* Quick Stats Pill */}
                <div className="mt-4 flex items-center justify-center gap-3 text-[11px] font-semibold text-slate-300">
                  <span className="bg-black/40 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
                    <Clock size={12} /> {selectedReel.timing}
                  </span>
                  <span className="bg-emerald-900/60 text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    {selectedReel.tag}
                  </span>
                </div>
              </div>

              {/* Video Bottom Controls / CTA */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-10 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Heart size={14} className="text-rose-500 fill-rose-500" />
                    <span>{selectedReel.likes}</span> Likes
                  </span>
                  <span className="text-[11px] text-slate-400">Verified Visa Holder</span>
                </div>

                <button
                  type="button"
                  onClick={handleReelConsultation}
                  className="w-full py-3 rounded-xl bg-[#006837] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <span>Consult For This Country</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: STUDENT PROFILE ASSESSMENT FORM                 */}
      {/* ======================================================== */}
      {bookingModalOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setBookingModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mb-5 text-left">
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                Official Assessment Desk
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mt-2">
                Request Service Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Service requested: <strong className="text-emerald-700">{bookingServiceName}</strong>
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="svc-choice" className="block text-xs font-semibold text-slate-700 mb-1">Select Service Offering *</label>
                <select
                  id="svc-choice"
                  value={bookingServiceName}
                  onChange={(e) => setBookingServiceName(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50/40 font-semibold text-emerald-950"
                >
                  <option value="Study Loan Assistance">💳 Student Study Loan Assistance</option>
                  <option value="German Language Course (A1-B2)">🇩🇪 German Language Course (Goethe / Telc A1-B2)</option>
                  <option value="IELTS Preparation Course (Waitlist)">🎯 IELTS Preparation Course (Upcoming - Band 7.5+)</option>
                  <option value="Profile Assessment">📋 100% Free Profile Assessment & Audit</option>
                  <option value="University Admission">🏛️ University Admission Processing (Direct Agency)</option>
                  <option value="Scholarship Guidance">🎓 100% Scholarship & Funding Advisory</option>
                  <option value="Visa & Bank Solvency">🛂 Visa Filing & Bank Solvency Guidance</option>
                  <option value="Interview Preparation">🎯 1-to-1 Embassy Mock Interview Drills</option>
                  <option value="Post-Visa Support">✈️ Pre-Departure & European Airport Reception</option>
                </select>
              </div>

              <div>
                <label htmlFor="svc-name" className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="svc-name"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  placeholder="e.g. Tanvir Hossain"
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="svc-phone" className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="svc-phone"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="017xxxxxxxx"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label htmlFor="svc-email" className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="svc-email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="svc-country" className="block text-xs font-semibold text-slate-700 mb-1">Target Destination *</label>
                  <select
                    id="svc-country"
                    value={bookingForm.country}
                    onChange={(e) => setBookingForm({ ...bookingForm, country: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Hungary">Hungary 🇭🇺</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧</option>
                    <option value="Malaysia">Malaysia 🇲🇾</option>
                    <option value="Russia">Russia 🇷🇺</option>
                    <option value="Cyprus">Cyprus 🇨🇾</option>
                    <option value="Greece">Greece 🇬🇷</option>
                    <option value="New Zealand">New Zealand 🇳🇿</option>
                    <option value="Not Sure">Need Counselor Suggestion</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="svc-level" className="block text-xs font-semibold text-slate-700 mb-1">Desired Degree Level *</label>
                  <select
                    id="svc-level"
                    value={bookingForm.level}
                    onChange={(e) => setBookingForm({ ...bookingForm, level: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Bachelor">Bachelor Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="Pre-Master">Diploma / Foundation</option>
                  </select>
                </div>
              </div>

              {/* Academic GPA with Scale Toggle */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="svc-gpa" className="text-xs font-semibold text-slate-700">Academic Score (GPA / CGPA) *</label>
                  <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                    <button 
                      type="button" 
                      onClick={() => setGpaScale(5)} 
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${gpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      Scale 5.0 (HSC)
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setGpaScale(4)} 
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${gpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      Scale 4.0 (Bachelor)
                    </button>
                  </div>
                </div>
                <input
                  type="number"
                  step="0.01"
                  id="svc-gpa"
                  required
                  value={bookingForm.gpa}
                  onChange={(e) => setBookingForm({ ...bookingForm, gpa: e.target.value })}
                  placeholder={gpaScale === 5 ? "e.g. 4.75 (out of 5.00)" : "e.g. 3.40 (out of 4.00)"}
                  min="1.0"
                  max={gpaScale === 5 ? "5.00" : "4.00"}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label htmlFor="svc-branch" className="block text-xs font-semibold text-slate-700 mb-1">Preferred Consultation Branch *</label>
                <select
                  id="svc-branch"
                  value={bookingForm.branch}
                  onChange={(e) => setBookingForm({ ...bookingForm, branch: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Banani Head Office">Banani Head Office (Road 17, Block D)</option>
                  <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza)</option>
                  <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                  <option value="Online Video Call">Online Video Consultation (WhatsApp / Meet)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Consultation Request</span>
                <ArrowRight size={16} />
              </button>

              <p className="text-[11px] text-center text-slate-500">
                🔒 Study First Info Ltd. protects your privacy. A certified counselor will message you on WhatsApp within 2 hours.
              </p>
            </form>

            {/* Confirmation Toast inside Form */}
            {bookingSuccess && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-center animate-in fade-in duration-300">
                <span className="text-2xl">🎉</span>
                <h4 className="text-sm font-bold text-emerald-950 mt-1">Consultation Request Booked!</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Thank you! An expert counselor has been assigned. Please keep your WhatsApp active.
                </p>
              </div>
            )}

          </div>
        </div>
      )}

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
