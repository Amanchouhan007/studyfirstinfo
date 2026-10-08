import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Star, 
  GraduationCap, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight,
  ChevronLeft,
  Flame,
  Building2,
  ExternalLink
} from 'lucide-react';

interface AlertTicker {
  tag: string;
  title: string;
  sub: string;
}

const LIVE_ALERTS: AlertTicker[] = [
  {
    tag: '2026 Admissions Open',
    title: 'Fully Funded Scholarships Open for Feb & Sept 2026/27',
    sub: 'Direct university quotas with zero embassy interview risk'
  },
  {
    tag: 'Hungary Schengen Corridor',
    title: 'Direct Dhaka Embassy Submission (No New Delhi VFS Trip)',
    sub: '100% Stipendium Hungaricum + monthly living allowances'
  },
  {
    tag: 'UK 1-Year Fast Masters',
    title: 'Up to £10,000 International Merit Waivers',
    sub: 'Save 50% tuition & living + 2-Year Graduate Route PSW'
  },
  {
    tag: 'Malaysia Public & Dual',
    title: '1st Year Total Official Expenses from ~৳5.5 Lakh BDT',
    sub: 'UniSZA & MILA 50% flat scholarship across whole degree'
  },
  {
    tag: 'Zero Advance Safeguard',
    title: '0 BDT Advance Consultancy Fees Policy',
    sub: 'Pay tuition after visa confirmation for Greece & New Zealand'
  }
];

const RECENT_MATCHES = [
  { name: 'Tanvir A.', city: 'Dhaka', uni: 'Budapest Metropolitan (METU)', waiver: '100% Waiver' },
  { name: 'Nafisa K.', city: 'Chittagong', uni: 'UniSZA Public University', waiver: 'RM 10,500/yr' },
  { name: 'Mahmud H.', city: 'Sylhet', uni: 'Cardiff University (Russell Group)', waiver: '£8,000 Award' },
  { name: 'Farhana R.', city: 'Rajshahi', uni: 'Harbin Institute of Tech (CSC)', waiver: 'Full Ride + Dorm' }
];

const DESTINATIONS = [
  {
    id: 'europe',
    code: 'EU',
    title: 'Schengen Europe (Germany, Hungary, Spain & More)',
    desc: 'Tuition-free & low-cost public universities, 18-mo stayback visa',
    badge: 'Popular'
  },
  {
    id: 'china',
    code: 'CN',
    title: 'China Scholarships (CSC Scheme)',
    desc: '100% tuition + free campus accommodation + monthly stipend',
    badge: 'Fully Funded'
  },
  {
    id: 'malaysia',
    code: 'MY',
    title: 'Malaysia Branch Campuses',
    desc: 'British/Aus degrees, fast 3-week visa processing, ~৳5.5L 1st yr',
    badge: 'Budget Friendly'
  },
  {
    id: 'uk',
    code: 'UK',
    title: 'United Kingdom & Russell Group',
    desc: '1-Year intensive Master’s, £3,000–£10,000 merit scholarships, 2-yr PSW',
    badge: '1-Yr Masters'
  },
  {
    id: 'others',
    code: '🌍',
    title: 'Other Countries',
    desc: 'New Zealand, Ireland, South Korea, Cyprus & More',
    badge: ''
  }
];

// Human student slide showcase for dynamic sliding experience
const HERO_VISUAL_SLIDES = [
  {
    tag: '🇭🇺 Hungary & Schengen Europe',
    badge: 'Dhaka Embassy Submission',
    title: 'Stipendium Hungaricum & Top Public Unis',
    desc: '500+ student visas processed with zero India travel requirement.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop'
  },
  {
    tag: '🇬🇧 United Kingdom',
    badge: 'Up to £10,000 Merit Grants',
    title: 'Fast-Track CAS & 2-Year PSW',
    desc: 'Official representation for Cardiff, Hertfordshire, and Russell Group.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop'
  },
  {
    tag: '🇳🇿 New Zealand & 🇲🇾 Malaysia',
    badge: 'Pay Tuition After Visa',
    title: 'Spouse Work Rights & Dual Awards',
    desc: 'Official partner for UniSZA & MILA with family accompany benefits.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Hero() {
  // Dynamic ticker slide index
  const [activeAlertIdx, setActiveAlertIdx] = useState(0);

  // Dynamic rotating destination highlight in headline
  const [highlightWordIdx, setHighlightWordIdx] = useState(0);
  const highlightWords = ['Europe', 'China', 'Malaysia', 'the UK', 'Germany'];

  // Multi-Step Scholarship Wizard state
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDest, setSelectedDest] = useState('europe');
  const [degree, setDegree] = useState('HSC / Alim / Equivalent');
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
  const [gpa, setGpa] = useState<number>(4.85);
  const [english, setEnglish] = useState('ielts_60_65');
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadOffice, setLeadOffice] = useState('banani');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Recent ticker match index
  const [liveMatchIdx, setLiveMatchIdx] = useState(0);

  // Visual Slider index
  const [visualSlideIdx, setVisualSlideIdx] = useState(0);

  // Auto-cycle top alert ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlertIdx((prev) => (prev + 1) % LIVE_ALERTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle headline highlight word
  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightWordIdx((prev) => (prev + 1) % highlightWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle live match ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveMatchIdx((prev) => (prev + 1) % RECENT_MATCHES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle visual slide
  useEffect(() => {
    const timer = setInterval(() => {
      setVisualSlideIdx((prev) => (prev + 1) % HERO_VISUAL_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNextAlert = () => {
    setActiveAlertIdx((prev) => (prev + 1) % LIVE_ALERTS.length);
  };

  const handlePrevAlert = () => {
    setActiveAlertIdx((prev) => (prev - 1 + LIVE_ALERTS.length) % LIVE_ALERTS.length);
  };

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetWizard = () => {
    setIsSubmitted(false);
    setStep(1);
    setLeadName('');
    setLeadPhone('');
    setLeadEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf6f0] via-[#f2faf5] to-[#f8faf9] text-[#0f172a] pt-6 sm:pt-10 pb-16 border-b border-emerald-900/10">
      
      {/* Subtle decorative glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* DYNAMIC TOP ALERT TICKER BAR                             */}
        {/* ======================================================== */}
        <div className="mb-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 border border-emerald-200/90 shadow-xs backdrop-blur-md transition-all duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
              {LIVE_ALERTS[activeAlertIdx].tag}
            </span>
            <div className="text-xs sm:text-sm text-slate-700 font-medium truncate">
              <strong>{LIVE_ALERTS[activeAlertIdx].title}</strong>
              <span className="hidden md:inline text-slate-500 ml-2">— {LIVE_ALERTS[activeAlertIdx].sub}</span>
            </div>
            
            <div className="flex items-center gap-1 ml-auto pl-2 border-l border-slate-200 shrink-0">
              <button
                type="button"
                onClick={handlePrevAlert}
                aria-label="Previous alert"
                className="w-5 h-5 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <ChevronLeft size={13} />
              </button>
              <button
                type="button"
                onClick={handleNextAlert}
                aria-label="Next alert"
                className="w-5 h-5 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MAIN TWO-COLUMN HERO ARCHITECTURE                        */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: VALUE PROPOSITION, SLIDER & STATS (7 Cols)*/}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Primary Headline with Dynamic Rotating Target Word */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>STUDY FIRST INFO LTD. • 98.4% Visa Approval Rate</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#053321] tracking-tight font-heading leading-[1.12]">
                Study in{' '}
                <span className="inline-block relative text-[#006837] border-b-4 border-emerald-400 pb-0.5 transition-all duration-300">
                  {highlightWords[highlightWordIdx]}
                </span>{' '}
                <span className="text-[#053321]">with</span>{' '}
                <span className="text-[#006837]">Full Scholarships.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                Zero advance consultancy fees. Direct authorized admissions for European public universities (Germany, Hungary, etc.), China CSC & Malaysian campuses with complete visa support.
              </p>
            </div>

            {/* DYNAMIC SLIDE-LIKE SHOWCASE CAROUSEL (Fulfilling Client's Request) */}
            <div className="relative w-full h-[220px] sm:h-[250px] rounded-2xl overflow-hidden border border-emerald-800/15 shadow-md group">
              {HERO_VISUAL_SLIDES.map((slide, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    idx === visualSlideIdx 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 pointer-events-none z-0'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052618] via-[#052618]/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#052618]/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                    <div className="flex items-center gap-2 text-xs font-semibold mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 backdrop-blur-sm">
                        {slide.tag}
                      </span>
                      <span className="hidden sm:inline px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                        {slide.badge}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-sm">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5 line-clamp-1">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Slider Arrows */}
              <button 
                onClick={() => setVisualSlideIdx((prev) => (prev - 1 + HERO_VISUAL_SLIDES.length) % HERO_VISUAL_SLIDES.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-emerald-600 text-white backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => setVisualSlideIdx((prev) => (prev + 1) % HERO_VISUAL_SLIDES.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-emerald-600 text-white backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>

              {/* Slider Dots */}
              <div className="absolute bottom-3 right-4 z-30 flex items-center gap-1.5">
                {HERO_VISUAL_SLIDES.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setVisualSlideIdx(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === visualSlideIdx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/50'
                    }`}
                    aria-label={`Slide dot ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* 3 Proof Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
              
              {/* Card 1: Placed */}
              <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  <GraduationCap size={14} className="text-emerald-700" />
                  <span>Placed</span>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#053321] tracking-tight font-heading">
                  5,000+
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  Enrolled Scholars
                </div>
              </div>

              {/* Card 2: Visas */}
              <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  <TrendingUp size={14} className="text-emerald-700" />
                  <span>Visas</span>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#053321] tracking-tight font-heading">
                  98.4%
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  Embassy Success
                </div>
              </div>

              {/* Card 3: Advance */}
              <div className="bg-white/95 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck size={14} className="text-emerald-700" />
                  <span>Advance</span>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#053321] tracking-tight font-heading">
                  0 BDT
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                  100% Safeguard
                </div>
              </div>

            </div>

            {/* Social Proof Trust Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Student scholar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Student scholar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Student scholar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Student scholar"
                />
              </div>

              <div className="text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-900 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-slate-500 text-xs font-medium">
                  Trusted by <strong>1,240+ students</strong> across Germany, Hungary, China & Malaysia
                </p>
              </div>
            </div>

            {/* Dynamic Real-Time Match Pill (Animated Slide-in) */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-950/5 border border-emerald-800/10 text-xs text-slate-700 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="text-emerald-800 font-bold flex items-center gap-1">
                <Flame size={12} className="text-amber-500" /> Live Match:
              </span>
              <span>
                <strong>{RECENT_MATCHES[liveMatchIdx].name}</strong> ({RECENT_MATCHES[liveMatchIdx].city}) secured{' '}
                <span className="text-emerald-800 font-semibold">{RECENT_MATCHES[liveMatchIdx].uni}</span> ({RECENT_MATCHES[liveMatchIdx].waiver})
              </span>
            </div>

          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: 3-STEP SCHOLARSHIP WIZARD (5 Cols)       */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#071f16] border border-[#12392b] rounded-3xl p-6 sm:p-7 shadow-2xl text-white relative overflow-hidden transition-all duration-300">
              
              {/* Background ambient glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              {!isSubmitted ? (
                <>
                  {/* Step Header & Progress */}
                  <div className="mb-5 relative z-10">
                    <div className="flex items-center justify-between text-xs font-bold tracking-wider uppercase mb-2">
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Scholarship Wizard
                      </span>
                      <span className="text-slate-400 font-mono">
                        Step {step} of 3
                      </span>
                    </div>

                    {/* Progress Bar 3 segments */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                      <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                      <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-emerald-500' : 'bg-white/10'}`} />
                    </div>
                  </div>

                  {/* ------------------------------------------------ */}
                  {/* STEP 1: DESTINATION SELECTION                    */}
                  {/* ------------------------------------------------ */}
                  {step === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-200 relative z-10">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                          Where do you want to study?
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-200/70 mt-1">
                          Select your preferred study destination to unlock targeted funding.
                        </p>
                      </div>

                      {/* Destination Options */}
                      <div className="space-y-2.5">
                        {DESTINATIONS.map((dest) => {
                          const isSelected = selectedDest === dest.id;
                          return (
                            <button
                              key={dest.id}
                              type="button"
                              onClick={() => setSelectedDest(dest.id)}
                              className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-3 relative ${
                                isSelected
                                  ? 'bg-emerald-900/40 border-emerald-500 ring-1 ring-emerald-500/50'
                                  : 'bg-white/5 border-white/10 hover:border-emerald-500/40 hover:bg-white/10'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                isSelected ? 'bg-emerald-500 text-white' : 'bg-white/10 text-emerald-300'
                              }`}>
                                {dest.code}
                              </div>

                              <div className="flex-1 pr-6">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-sm text-white">{dest.title}</span>
                                  {dest.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                      {dest.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-emerald-200/70 mt-0.5 leading-snug">
                                  {dest.desc}
                                </p>
                              </div>

                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                                isSelected ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-white/30 bg-transparent'
                              }`}>
                                {isSelected && <Check size={12} className="stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Continue Button */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Continue to Academics</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* STEP 2: ACADEMIC CREDENTIALS & GPA SLIDER        */}
                  {/* ------------------------------------------------ */}
                  {step === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-200 relative z-10 text-left">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                          Your Academic Credentials
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-200/70 mt-1">
                          Used to calculate tuition waivers & scholarship eligibility tier.
                        </p>
                      </div>

                      {/* Degree Qualification Dropdown */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-200/90 mb-1.5 uppercase tracking-wider">
                          Last Degree Qualification
                        </label>
                        <select
                          value={degree}
                          onChange={(e) => setDegree(e.target.value)}
                          className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-white/20 bg-slate-900/80 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                        >
                          <option value="HSC / Alim / Equivalent">HSC / Alim / Equivalent</option>
                          <option value="Bachelor Degree">Bachelor Degree (Undergraduate Completed)</option>
                          <option value="Master's Degree">Master's Degree (Postgraduate Completed)</option>
                          <option value="O-Level / A-Level">O-Level / A-Level (British Curriculum)</option>
                          <option value="Diploma">Diploma / Pre-Master Pathway</option>
                        </select>
                      </div>

                      {/* GPA / CGPA with Scale Toggle & Interactive Slider */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-semibold text-emerald-200/90 uppercase tracking-wider">
                            Your Last GPA / CGPA
                          </label>
                          <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-lg text-[10px] font-bold">
                            <button
                              type="button"
                              onClick={() => {
                                setGpaScale(5);
                                setGpa(4.85);
                              }}
                              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                                gpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                              }`}
                            >
                              Scale 5.0 (HSC)
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setGpaScale(4);
                                setGpa(3.5);
                              }}
                              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                                gpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
                              }`}
                            >
                              Scale 4.0 (CGPA)
                            </button>
                          </div>
                        </div>

                        {/* Slider Display */}
                        <div className="flex items-center justify-between text-sm font-bold text-emerald-400 mb-1">
                          <span>Score:</span>
                          <span className="text-base text-emerald-300">
                            {gpa.toFixed(2)} / {gpaScale === 5 ? '5.00' : '4.00'}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={gpaScale === 5 ? 2.5 : 2.0}
                          max={gpaScale === 5 ? 5.0 : 4.0}
                          step="0.05"
                          value={gpa}
                          onChange={(e) => setGpa(parseFloat(e.target.value))}
                          className="w-full accent-emerald-500 cursor-pointer h-2 bg-white/20 rounded-lg appearance-none"
                        />
                      </div>

                      {/* English Test Status Dropdown */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-200/90 mb-1.5 uppercase tracking-wider">
                          English Test Status
                        </label>
                        <select
                          value={english}
                          onChange={(e) => setEnglish(e.target.value)}
                          className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-white/20 bg-slate-900/80 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                        >
                          <option value="ielts_65_plus">IELTS 6.5 or above (or PTE 60+)</option>
                          <option value="ielts_60_65">IELTS 6.0 – 6.5</option>
                          <option value="ielts_55_60">IELTS 5.5 – 6.0</option>
                          <option value="ielts_50_55">IELTS 5.0 – 5.5</option>
                          <option value="ielts_below_55">IELTS Score &lt; 5.5 (Foundation / Language Pathway)</option>
                          <option value="moi_accepted">Medium of Instruction (MOI Accepted)</option>
                          <option value="planning">Planning to take test soon</option>
                        </select>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="py-3 px-4 rounded-xl border border-white/20 hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <ArrowLeft size={14} />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Final Step</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ------------------------------------------------ */}
                  {/* STEP 3: LEAD INFORMATION & MATCHING REVEAL       */}
                  {/* ------------------------------------------------ */}
                  {step === 3 && (
                    <form onSubmit={handleWizardSubmit} className="space-y-3.5 animate-in fade-in duration-200 relative z-10 text-left">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                          Unlock Matching Options
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-200/70 mt-1">
                          Our dynamic system calculates matches and notifies your path counselor.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="e.g. Tanvir Ahmed"
                          className="w-full text-sm px-3.5 py-2 rounded-xl border border-white/20 bg-slate-900/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      {/* WhatsApp Mobile */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                          WhatsApp Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="e.g. 01712345678"
                          className="w-full text-sm px-3.5 py-2 rounded-xl border border-white/20 bg-slate-900/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="e.g. tanvir@gmail.com"
                          className="w-full text-sm px-3.5 py-2 rounded-xl border border-white/20 bg-slate-900/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>

                      {/* Consultation Branch */}
                      <div>
                        <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                          Preferred Office Desk
                        </label>
                        <select
                          value={leadOffice}
                          onChange={(e) => setLeadOffice(e.target.value)}
                          className="w-full text-sm px-3.5 py-2 rounded-xl border border-white/20 bg-slate-900/80 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="banani">Banani Head Office (Road 17, Block D)</option>
                          <option value="farmgate">Farmgate Branch (Green Road)</option>
                          <option value="sylhet">Sylhet Branch (Zindabazar)</option>
                          <option value="online">Online Video Consultation</option>
                        </select>
                      </div>

                      {/* Navigation & Submit */}
                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="py-3 px-4 rounded-xl border border-white/20 hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <ArrowLeft size={14} />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Check Matching Pathways</span>
                          <Sparkles size={15} />
                        </button>
                      </div>

                      <p className="text-[11px] text-center text-emerald-300/70 pt-1 leading-snug">
                        🔒 Zero advance fees guarantee. WhatsApp checklist dispatched within 15 minutes.
                      </p>
                    </form>
                  )}
                </>
              ) : (
                /* -------------------------------------------------- */
                /* SUCCESS MATCH REVEALED SCREEN                      */
                /* -------------------------------------------------- */
                <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-300 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl font-bold">
                    🎉
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-700/50">
                      Profile Assessment Unlocked
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white mt-2">
                      Great news, {leadName || 'Student'}!
                    </h3>
                    <p className="text-xs text-emerald-200/80 mt-1 max-w-sm mx-auto">
                      Based on your GPA <strong>{gpa.toFixed(2)}</strong>, we identified <strong>3 high-probability admission pathways</strong> with up to 100% scholarship.
                    </p>
                  </div>

                  {/* University Quick Matches */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-left space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <Building2 size={13} className="text-emerald-400" /> Top Matched Route:
                      </span>
                      <span className="text-emerald-300 font-bold uppercase">
                        {selectedDest.toUpperCase()}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Budapest Metropolitan / Partner</div>
                        <div className="text-[11px] text-emerald-200/80">Stipendium / 100% Tuition Waiver</div>
                      </div>
                      <span className="text-emerald-400 font-bold">98% Match</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">UniSZA / MILA Dual Award</div>
                        <div className="text-[11px] text-emerald-200/80">50% Flat Scholarship Across Degree</div>
                      </div>
                      <span className="text-emerald-400 font-bold">95% Match</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Callout */}
                  <div className="pt-1 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/8801713000000?text=${encodeURIComponent(
                        `Hi Study First Info! I just checked my eligibility for ${selectedDest.toUpperCase()} with GPA ${gpa.toFixed(2)}. Please share my university shortlist.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <span>Receive Shortlist on WhatsApp</span>
                      <ExternalLink size={15} />
                    </a>

                    <button
                      type="button"
                      onClick={resetWizard}
                      className="text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer pt-1"
                    >
                      Check another profile
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
