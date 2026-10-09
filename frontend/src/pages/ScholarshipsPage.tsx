import React, { useState } from 'react';
import { 
  GraduationCap, 
  FileText, 
  Banknote, 
  Zap, 
  Flame, 
  Check, 
  ArrowRight, 
  X, 
  Download, 
  Phone, 
  Building2, 
  Sparkles, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

interface ScholarshipItem {
  id: string;
  country: string;
  flag: string;
  region: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  universities: string;
  features: string[];
  intakeNote: string;
  schemeName: string;
  categories: string[]; // 'all', 'fullride', 'europe', 'asia', 'commonwealth'
}

const SCHOLARSHIPS_DATA: ScholarshipItem[] = [
  {
    id: 'hungary',
    country: 'Hungary',
    flag: '🇭🇺',
    region: 'Schengen Zone',
    badge: '100% Full-Ride',
    badgeColor: 'text-rose-800 bg-rose-100/90 border border-rose-200',
    title: 'Hungary: Stipendium Hungaricum Scheme',
    description: 'Prestigious Hungarian state scholarship covering 100% tuition, free university dormitory accommodation, monthly stipend (€110–€380/mo), and medical insurance across 65+ universities.',
    universities: 'METU, Debrecen, Pécs, Szeged, ELTE, Miskolc, Győr',
    features: [
      'Coverage: 100% Tuition + Dorm + Monthly Stipend',
      'Language: IELTS 5.5–6.5 or MOI Accepted',
      'Visa Route: Apply directly at Dhaka Embassy',
      'Work Rights: Legal 24 hrs/week part-time work'
    ],
    intakeNote: 'Next Intake: Feb / Sept',
    schemeName: 'Stipendium Hungaricum',
    categories: ['fullride', 'europe']
  },
  {
    id: 'czech',
    country: 'Czech Republic',
    flag: '🇨🇿',
    region: 'Central Europe',
    badge: 'Zero Tuition',
    badgeColor: 'text-blue-800 bg-blue-100/90 border border-blue-200',
    title: 'Czechia: Public Zero Tuition & State Grants',
    description: 'Study at Charles University or CTU with zero tuition fees on accredited Czech and special developing country tracks, accompanied by monthly living stipends up to 70,000–80,000 BDT!',
    universities: 'Charles University, Czech Technical University (CTU), Masaryk',
    features: [
      'Coverage: Zero Tuition Fee + 70–80k BDT/mo Stipend',
      'Requirement: Certificate Nostrification & Test',
      'Status: Applications actively open',
      'Work Rights: Full Schengen part-time rights'
    ],
    intakeNote: 'Free PDF Guide Ready',
    schemeName: 'Czech Republic State Scheme',
    categories: ['fullride', 'europe']
  },
  {
    id: 'russia',
    country: 'Russia',
    flag: '🇷🇺',
    region: 'Eurasia',
    badge: '100% Quota + Stipend',
    badgeColor: 'text-red-800 bg-red-100/90 border border-red-200',
    title: 'Russia: Government State Quota & NSU',
    description: 'Complete 100% tuition waiver from the Russian Federation plus a monthly 15,000 Ruble state stipend. Select programs feature a zero financial risk "Pay Tuition After Visa" policy.',
    universities: 'Novosibirsk State (NSU), Moscow State Partners, Technical Inst.',
    features: [
      'Coverage: 100% Tuition Waiver + 15,000 Ruble Stipend',
      'Security: Pay Tuition Fee After Visa Confirmation',
      'Language: English Medium or Preparatory Year',
      'Visa: Direct Dhaka Russian Embassy issuance'
    ],
    intakeNote: 'State Quota Active',
    schemeName: 'Russian State Quota',
    categories: ['fullride', 'europe']
  },
  {
    id: 'china',
    country: 'China',
    flag: '🇨🇳',
    region: 'East Asia',
    badge: '100% CSC Full-Ride',
    badgeColor: 'text-amber-800 bg-amber-100/90 border border-amber-200',
    title: 'China: CSC Government & Belt and Road',
    description: 'Fully funded Chinese Government Scholarship (CSC Type A & B). Complete tuition waiver, free single or double room on campus, and a 2,500 to 3,500 RMB/month living stipend!',
    universities: 'Harbin Institute of Tech (HIT), Zhejiang, Tsinghua, Peking (C9 League)',
    features: [
      'Coverage: 100% Tuition + Free Dorm + 3,500 RMB/mo',
      'Benchmark: 75%+ GPA in HSC/Honours, IELTS 5.5 / MOI',
      'Visa: JW202 Form + Direct Dhaka Visa Clearance',
      'Rankings: Top 100 QS World Ranked Campuses'
    ],
    intakeNote: 'March & Sept Intakes',
    schemeName: 'China CSC Full-Ride',
    categories: ['fullride', 'asia']
  },
  {
    id: 'korea',
    country: 'South Korea',
    flag: '🇰🇷',
    region: 'Seoul & Busan',
    badge: '50%–70% Waivers',
    badgeColor: 'text-teal-800 bg-teal-100/90 border border-teal-200',
    title: 'South Korea: Seoul Merit & GKS Scheme',
    description: 'Fast electronic E-Visa with zero physical interview hurdles. Receive 50% to 70% automatic tuition fee reductions or full GKS scholarships with direct pathways to Korean corporate giants.',
    universities: "Sookmyung Women's Univ, Gachon, Kyungsung, KMCU, Sunchon",
    features: [
      'Waiver: 50% to 70% Automatic Tuition Reduction',
      'Full-Ride: GKS (Global Korea Scholarship - 100%)',
      'Visa Speed: Electronic E-Visa Confirmation',
      'Post-Grad: D-10 Job Seeker Visa with Samsung & Hyundai'
    ],
    intakeNote: 'IELTS 5.5 / TOPIK',
    schemeName: 'South Korea GKS & Merit',
    categories: ['asia']
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    region: "1-Year Master's",
    badge: 'Up to £10,000 Off',
    badgeColor: 'text-purple-800 bg-purple-100/90 border border-purple-200',
    title: 'UK: Russell Group & Guaranteed Grants',
    description: "Fast-track 1-Year Master's degrees in the UK saving a full year of living and tuition costs. Guaranteed £3,000 scholarships at Hertfordshire and up to £8,000–£10,000 at Cardiff Russell Group.",
    universities: 'Cardiff (Russell Group), Hertfordshire (London 25 mins), BCU, York',
    features: [
      'Waiver: £3,000 guaranteed to £10,000 merit grants',
      'English: MOI accepted from 28+ Bangladeshi universities',
      'Work: 2-Year Graduate Route Post-Study Work Permit',
      "Duration: 1-Year intensive Master's programs"
    ],
    intakeNote: 'Jan & Sept Intakes',
    schemeName: 'UK Postgraduate Merit Grants',
    categories: ['commonwealth']
  },
  {
    id: 'cyprus',
    country: 'Cyprus',
    flag: '🇨🇾',
    region: 'Low Budget Europe',
    badge: '43% Flat Discount',
    badgeColor: 'text-amber-800 bg-amber-100/90 border border-amber-200',
    title: 'Cyprus: 43% Flat Waiver & Low Deposit',
    description: 'Direct contract partnership saving nearly ~€4,300 on tuition. Fly to Europe with an initial deposit of only €3,400 (~4.5 Lakh BDT) with IELTS 4.5–5.0 or MOI certificates!',
    universities: 'Cyprus International University (CIU), European Univ Cyprus',
    features: [
      'Discount: 43% Flat Tuition Waiver (~€4,300 value)',
      'Deposit: Initial deposit only €3,400 to start file',
      'Language: IELTS 5.0 or MOI Accepted',
      'Mobility: Seamless credit transfers to UK & Europe'
    ],
    intakeNote: '~৳4.5 Lakh Initial',
    schemeName: 'Cyprus 43% Flat Waiver',
    categories: ['europe']
  },
  {
    id: 'germany',
    country: 'Germany',
    flag: '🇩🇪',
    region: 'Western Europe',
    badge: '100% Zero Tuition',
    badgeColor: 'text-emerald-800 bg-emerald-100/90 border border-emerald-200',
    title: 'Germany: DAAD & Public Zero Tuition',
    description: 'World-class education at public research universities with 0€ tuition fees. Combine with DAAD scholarships or monthly student assistantships across Berlin, Munich, Aachen, and Heidelberg.',
    universities: 'TU Munich, RWTH Aachen, Heidelberg, Freie Univ Berlin, IU International',
    features: [
      'Coverage: 100% Free Tuition at Public Universities',
      'Requirement: APS Certificate + IELTS 6.0–6.5 or MOI',
      'Blocked Account: €11,904/yr (Assisted via Fintiba/Coracle)',
      'Work Rights: 140 full days / 280 half days legal work'
    ],
    intakeNote: 'Winter & Summer Intakes',
    schemeName: 'Germany DAAD & Public Zero Tuition',
    categories: ['fullride', 'europe']
  },
  {
    id: 'ireland',
    country: 'Ireland',
    flag: '🇮🇪',
    region: 'Western Europe',
    badge: 'Up to €10,000 Off',
    badgeColor: 'text-emerald-800 bg-emerald-100/90 border border-emerald-200',
    title: 'Ireland: Government & University Merit Scholarships',
    description: 'Generous merit scholarships up to €10,000 at top Dublin and Galway universities. Benefit from 2-year post-study work rights (Stamp 1G) in Europe’s premier Silicon Docks tech hub.',
    universities: 'Trinity College Dublin (TCD), UCD, Univ of Galway, DCU, Griffith College',
    features: [
      'Scholarship: €3,000 to €10,000 merit awards + GOI-IES',
      'Language: IELTS 6.0–6.5 or Duolingo 110+ accepted',
      'Work: 2-Year Graduate Scheme (Stamp 1G)',
      'Career: European HQ hub for Google, Meta, Pfizer'
    ],
    intakeNote: 'Sept & Jan Intakes',
    schemeName: 'Ireland Government & Merit Awards',
    categories: ['europe']
  },
  {
    id: 'thailand',
    country: 'Thailand',
    flag: '🇹🇭',
    region: 'Southeast Asia',
    badge: 'Low Tuition & Royal Grants',
    badgeColor: 'text-teal-800 bg-teal-100/90 border border-teal-200',
    title: 'Thailand: Affordable International Degrees & Royal Waivers',
    description: 'High quality English-medium education in Bangkok at ultra-affordable tuition fees ($1,800–$3,500/yr). Royal Thai Government and AIT merit waivers available with high visa track records.',
    universities: 'Asian Institute of Technology (AIT), Mahidol, Chulalongkorn, Assumption (ABAC)',
    features: [
      'Tuition: Ultra-low from $1,800 to $3,500/year',
      'Waivers: 50% to 100% Royal Thai & AIT Grants',
      'Visa Track Record: Consistently high approval rate with direct embassy filing',
      'Mobility: Fast gateway to ASEAN regional careers'
    ],
    intakeNote: 'Aug & Jan Intakes',
    schemeName: 'Thailand Royal & AIT Scholarships',
    categories: ['asia']
  },
  {
    id: 'nz',
    country: 'New Zealand',
    flag: '🇳🇿',
    region: 'Oceania',
    badge: 'Up to NZ$25,000',
    badgeColor: 'text-emerald-800 bg-emerald-100/90 border border-emerald-200',
    title: 'New Zealand: Excellence & Pay After Visa',
    description: 'Pay tuition fees only after visa Approval in Principle (AIP). Partial awards of NZ$2,500 to major competitive awards of NZ$25,000+. Spouse flies together with open full-time work rights!',
    universities: 'Univ of Auckland, AUT, Waikato, Massey, Wintec, SIT',
    features: [
      'Scholarship: NZ$2,500 to NZ$25,000+ High-Achievement',
      'Security: Pay Tuition Fee AFTER Visa AIP',
      'Family: Spouse travels with full work permit',
      'Children: 100% Free domestic school education'
    ],
    intakeNote: 'AIP Post-Visa Payment',
    schemeName: 'New Zealand International Excellence',
    categories: ['commonwealth']
  }
];

export default function ScholarshipsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState('Malaysia 100% Scholarship');
  const [selectedCountry, setSelectedCountry] = useState('Malaysia');
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Malaysia',
    degree: 'Bachelor',
    gpa: '',
    english: 'IELTS 5.5'
  });

  const [unlockedInfo, setUnlockedInfo] = useState({
    docId: '',
    name: '',
    track: '',
    waLink: ''
  });

  // Floating Toast State
  const [toast, setToast] = useState<{ show: boolean; title: string; message: string }>({
    show: false,
    title: '',
    message: ''
  });

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleOpenModal = (scheme: string, country: string) => {
    setSelectedScheme(scheme);
    setSelectedCountry(country);
    setFormData((prev) => ({ ...prev, country }));
    setIsUnlocked(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIsUnlocked(false);
  };

  const handleGpaScaleChange = (scale: 5 | 4) => {
    setGpaScale(scale);
    setFormData((prev) => ({ ...prev, gpa: '' }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const docId = `DOC #SFI-SCH-${randomCode}`;
    const track = `${formData.country} (${formData.degree}, Score: ${formData.gpa})`;
    const waText = encodeURIComponent(
      `Hello Study First Info, I unlocked the official guideline for ${selectedScheme} (${formData.country}). My name is ${formData.name} (Phone: ${formData.phone}). I want to proceed with my scholarship file.`
    );
    const waLink = `https://wa.me/8801898833034?text=${waText}`;

    setUnlockedInfo({
      docId,
      name: formData.name,
      track,
      waLink
    });

    setIsUnlocked(true);
    showToast(
      'Guideline Unlocked!',
      `Congratulations ${formData.name}! You can now download the complete scholarship guideline for ${formData.country}.`
    );
  };

  const handlePrint = () => {
    showToast(
      'Downloading PDF...',
      `Generating official guideline PDF for "${selectedScheme}". Please review your checklist.`
    );
    setTimeout(() => {
      window.print();
    }, 600);
  };

  const filteredScholarships = SCHOLARSHIPS_DATA.filter((sch) => {
    if (activeFilter === 'all') return true;
    return sch.categories.includes(activeFilter);
  });

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
      
      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">

        {/* HEADER SECTION */}
        <header className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-5 border border-emerald-300 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006837] animate-ping"></span>
            Zero Tuition & Merit Scholarships 2026–2027
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#042f1a] tracking-tight leading-tight mb-5">
            Explore <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy decoration-2">100% Scholarships</span> & Download Official Guidelines
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Studying abroad does not have to drain your life savings. We partner directly with leading universities and state scholarship boards across Malaysia, Hungary, Czech Republic, Russia, China, and the UK. Unlock official PDF guidelines below by submitting your basic academic profile.
          </p>

          {/* Trust Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>100% Tuition Waivers Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Downloadable Official PDF Guides</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <Banknote className="w-4 h-4 text-emerald-600" />
              <span>Monthly Government Stipends</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>1-on-1 Profile Screening Desk</span>
            </div>
          </div>
        </header>

        {/* FEATURED SPOTLIGHT: MALAYSIA 100% SCHOLARSHIP */}
        <section className="bg-gradient-to-br from-[#06321e] via-[#042517] to-[#02170e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/60">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols: In-Depth Program Details */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current text-slate-950" />
                <span>PREMIER HEALTHCARE & MANAGEMENT QUOTA</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                100% Full Scholarship at Malaysian Renowned University
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Zero tuition fees for Bachelor's, Master's & Doctoral programs in healthcare and business management. Eligible candidates pay <strong className="text-white">zero course fees</strong> across all qualifying semester modules for the entire study period!
              </p>

              {/* Academic Offerings & IELTS Standards Grid */}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5 backdrop-blur-md space-y-3">
                <h4 className="text-xs font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Available Degree Programs & Minimum IELTS Standards:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-white block">Clinical & Therapy</span>
                    <p className="text-emerald-200 text-[11px]">• Nursing (Hons) - IELTS 5.5</p>
                    <p className="text-emerald-200 text-[11px]">• Physiotherapy - IELTS 5.0</p>
                    <p className="text-emerald-200 text-[11px]">• Occupational Therapy - IELTS 5.0</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-white block">Pharmaceutical & Diagnostic</span>
                    <p className="text-emerald-200 text-[11px]">• Pharmacy (Hons) - IELTS 5.0</p>
                    <p className="text-emerald-200 text-[11px]">• Pharmaceutical Sci - IELTS 5.0</p>
                    <p className="text-emerald-200 text-[11px]">• Medical Imaging - IELTS 5.0</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-white block">Postgrad & Management</span>
                    <p className="text-emerald-200 text-[11px]">• MBA Healthcare - IELTS 6.0</p>
                    <p className="text-emerald-200 text-[11px]">• Business Mgmt - IELTS 5.5</p>
                    <p className="text-emerald-200 text-[11px]">• PhD in Nursing / Pharmacy</p>
                  </div>
                </div>
              </div>

              {/* Financial Transparency Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">EMGS Processing Fees</span>
                  <span className="font-bold text-emerald-300 text-sm">~6,000 RM</span>
                  <p className="text-[10px] text-slate-300">Payable after offer letter</p>
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">International Student Fees</span>
                  <span className="font-bold text-emerald-300 text-sm">3,000 RM</span>
                  <p className="text-[10px] text-slate-300">University enrollment fee</p>
                </div>
                <div className="bg-black/30 p-3 rounded-xl border border-white/10">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Seat Service Charge</span>
                  <span className="font-bold text-emerald-300 text-sm">3,000 RM</span>
                  <p className="text-[10px] text-slate-300">Considerable & negotiable</p>
                </div>
              </div>

              <p className="text-[11px] text-emerald-200/80 italic">
                *Note: 100% Tuition Fees remain completely waived throughout the whole course duration. Minimum security deposit 5,000 BDT or passport submission (refundable on visa).
              </p>
            </div>

            {/* Right 5 cols: Evaluation Matrix & Action Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-7 text-center space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold block mb-1">Evaluation Matrix</span>
                <div className="text-3xl font-extrabold text-white">Minimum Benchmark: <span className="text-amber-400">85/100</span></div>
                <p className="text-xs text-slate-300 mt-1">Candidates must achieve 85% composite score for the 100% tuition award</p>
              </div>

              {/* Scoring Weight Breakdown Progress */}
              <div className="space-y-3 text-left text-xs text-slate-200">
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Academic Performance</span>
                    <span className="text-amber-300">45% Weight</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Interview Readiness</span>
                    <span className="text-emerald-300">25% Weight</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Motivation & Fit</span>
                    <span className="text-emerald-300">10% Weight</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span>Leadership & Financial Viability</span>
                    <span className="text-emerald-300">20% Weight</span>
                  </div>
                  <div className="w-full bg-black/40 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>

              {/* Gated Download Trigger Button */}
              <button 
                onClick={() => handleOpenModal('Malaysia 100% Scholarship', 'Malaysia')}
                className="w-full py-4 px-6 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>📥 Download 100% Scholarship Guideline (PDF)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-[11px] text-slate-400">
                🔒 Instant PDF Guideline unlocked after submitting your basic academic profile.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: GLOBAL SCHOLARSHIPS DIRECTORY */}
        <section id="scholarships-grid-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                Full-Ride & Merit Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#042f1a] mt-2">
                Scholarship Schemes Across All Destinations
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer min-h-[36px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeFilter === 'all' 
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                All Destinations ({SCHOLARSHIPS_DATA.length})
              </button>
              <button 
                onClick={() => setActiveFilter('fullride')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer min-h-[36px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeFilter === 'fullride' 
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                100% Full-Ride
              </button>
              <button 
                onClick={() => setActiveFilter('europe')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer min-h-[36px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeFilter === 'europe' 
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                🇪🇺 Europe & Schengen
              </button>
              <button 
                onClick={() => setActiveFilter('asia')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer min-h-[36px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeFilter === 'asia' 
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                🌏 Asia & East Asia
              </button>
              <button 
                onClick={() => setActiveFilter('commonwealth')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all cursor-pointer min-h-[36px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeFilter === 'commonwealth' 
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                🇬🇧 UK & Oceania
              </button>
            </div>
          </div>

          {/* SCHOLARSHIPS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredScholarships.map((sch) => (
              <div 
                key={sch.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${sch.badgeColor}`}>
                      {sch.flag} {sch.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {sch.region}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#006837] transition-colors">
                    {sch.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {sch.description}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 mb-4 space-y-1 text-xs">
                    <p className="font-bold text-slate-800">Participating Universities:</p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{sch.universities}</p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {sch.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 sm:p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-emerald-800">
                    {sch.intakeNote}
                  </span>
                  <button 
                    onClick={() => handleOpenModal(sch.schemeName, sch.country)}
                    className="px-4 py-2 rounded-xl bg-[#006837] hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Guide</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PHYSICAL BRANCH OFFICE LOCATOR */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Free 1-to-1 Document Evaluation
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#042f1a] mt-3 mb-2">
            Visit Study First Info Desks for On-Spot Scholarship Screening
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8">
            Bring your SSC, HSC, or Bachelor academic transcripts and certificates to any of our 3 official branches. Our senior evaluators will calculate your composite score on the spot!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Banani Head Office */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <Building2 className="w-5 h-5 text-emerald-700" />
                <span>Banani (Head Office)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Rosa Bella Apartment, House 3, Level 2, Block D, Road 17, Banani C/A, Dhaka-1213
              </p>
              <div className="text-xs text-emerald-700 font-bold space-y-1">
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 01898 833034</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +8809613752752</p>
              </div>
            </div>

            {/* Farmgate Branch */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <Building2 className="w-5 h-5 text-emerald-700" />
                <span>Farmgate Branch</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                7th Floor (Lift-6), BTI Central Plaza (opposite Ananda Cinema Hall), Green Road, Dhaka 1215
              </p>
              <div className="text-xs text-emerald-700 font-bold space-y-1">
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 01898 833035</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +8809613752752</p>
              </div>
            </div>

            {/* Sylhet Branch */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <Building2 className="w-5 h-5 text-emerald-700" />
                <span>Sylhet Branch</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Sylhet Millennium Shopping Centre, Lift 10, Room 907, Jallarpar Road, Zindabazar, Sylhet 3100
              </p>
              <div className="text-xs text-emerald-700 font-bold space-y-1">
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 01898 833036</p>
                <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 01898 833034</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* GATED LEAD CAPTURE & GUIDELINE DOWNLOAD MODAL */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-5 text-left">
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                Official Guideline Download Desk
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Unlock Scholarship PDF Guideline
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Accessing official guideline for: <strong className="text-emerald-700">{selectedScheme} ({selectedCountry})</strong>
              </p>
            </div>

            {/* Lead Capture Form */}
            {!isUnlocked ? (
              <form onSubmit={handleSubmitForm} className="space-y-4 text-left">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mahbubul Alam" 
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017xxxxxxxx" 
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com" 
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Target Destination & Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Country *</label>
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Malaysia">Malaysia 🇲🇾 (100% / 50% Flat)</option>
                      <option value="Hungary">Hungary 🇭🇺 (Stipendium Hungaricum)</option>
                      <option value="Czech Republic">Czech Republic 🇨🇿 (Zero Tuition + Stipend)</option>
                      <option value="Russia">Russia 🇷🇺 (100% State Quota)</option>
                      <option value="China">China 🇨🇳 (100% CSC Full-Ride)</option>
                      <option value="South Korea">South Korea 🇰🇷 (50%–70% Waivers)</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧 (£3,000–£10,000)</option>
                      <option value="Cyprus">Cyprus 🇨🇾 (43% Flat Discount)</option>
                      <option value="New Zealand">New Zealand 🇳🇿 (Up to NZ$25,000)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Applying Degree *</label>
                    <select 
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Bachelor">Bachelor Degree (Honours)</option>
                      <option value="Master">Master's Degree (Postgraduate)</option>
                      <option value="PhD">Doctor of Philosophy (PhD)</option>
                      <option value="Diploma">Diploma / Pre-Master</option>
                    </select>
                  </div>
                </div>

                {/* Academic GPA with Dual-Scale Switcher */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">Academic Score (GPA / CGPA) *</label>
                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                      <button 
                        type="button" 
                        onClick={() => handleGpaScaleChange(5)}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer ${gpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        Scale 5.0 (HSC/Alim)
                      </button>
                      <button 
                        type="button" 
                        onClick={() => handleGpaScaleChange(4)}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer ${gpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        Scale 4.0 (Bachelor)
                      </button>
                    </div>
                  </div>
                  <input 
                    type="number" 
                    step="0.01" 
                    required 
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    placeholder={gpaScale === 5 ? 'e.g. 4.75 (out of 5.00)' : 'e.g. 3.40 (out of 4.00)'}
                    min="1.0" 
                    max={gpaScale === 5 ? '5.00' : '4.00'}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                {/* English Proficiency */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">English Proficiency Qualification *</label>
                  <select 
                    value={formData.english}
                    onChange={(e) => setFormData({ ...formData, english: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="IELTS 5.5">IELTS 5.5 (Eligible for most full scholarships)</option>
                    <option value="IELTS 6.0">IELTS 6.0 (or PTE 52+)</option>
                    <option value="IELTS 6.5+">IELTS 6.5 or higher (High Priority)</option>
                    <option value="IELTS 5.0">IELTS 5.0 (Eligible for select medical/nursing)</option>
                    <option value="MOI Eligible">Medium of Instruction (MOI Waiver)</option>
                    <option value="Planning Exam">Currently preparing for exam</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Verify Profile & Unlock Official PDF</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Study First Info Ltd. maintains strict data privacy. The official PDF roadmap will appear immediately.
                </p>
              </form>
            ) : (
              /* UNLOCKED DOWNLOAD & GUIDELINE VIEW (SHOWN AFTER SUBMIT) */
              <div className="space-y-4 text-left">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#06301d] to-[#031d12] text-white border border-emerald-500/50 shadow-xl">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-6 h-6 text-emerald-400" />
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{selectedScheme} Official Guideline</h4>
                        <p className="text-[10px] text-emerald-300 font-mono">{unlockedInfo.docId}</p>
                      </div>
                    </div>
                    <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded">
                      UNLOCKED
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-emerald-100/90 mb-4">
                    <p><strong className="text-white">Eligible Candidate:</strong> <span>{unlockedInfo.name}</span></p>
                    <p><strong className="text-white">Calculated Fit:</strong> <span>{unlockedInfo.track}</span></p>
                    <p><strong className="text-white">Guideline Scope:</strong> <span>Complete application steps, fee waivers, conditions & embassy checklist.</span></p>
                  </div>

                  {/* Document Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button 
                      onClick={handlePrint}
                      className="w-full py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-100 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-emerald-900" />
                      <span>Download PDF Document</span>
                    </button>
                    <a 
                      href={unlockedInfo.waLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Counselor</span>
                    </a>
                  </div>

                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 leading-relaxed flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Fast-Track Desk Assigned:</strong> A copy of this scholarship dossier and profile checklist has been forwarded to our senior admissions counseling desk.
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* FLOATING NOTIFICATION TOAST */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 max-w-sm bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-50 transition-all duration-300 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{toast.title}</h5>
            <p className="text-xs text-slate-200 mt-0.5 leading-snug">{toast.message}</p>
          </div>
        </div>
      )}

    </div>
  );
}
