import { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail,
  Check, 
  Send,
  Building2,
  ShieldCheck,
  FileCheck,
  GraduationCap,
  HeartHandshake,
  Compass,
  Target
} from 'lucide-react';

export default function AboutPage() {
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
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
    }, 5000);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Profile Submitted Successfully!',
      `Thank you ${leadForm.name}! A senior counselor from our ${leadForm.branch} desk will message your WhatsApp (${leadForm.phone}) within 2 hours regarding your ${leadForm.country} application.`
    );
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
  };

  const scrollToLeadForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('about-lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-20">

        {/* ============================================================ */}
        {/* SECTION 1: HERO HEADER (MISSION & STATS SPOTLIGHT)           */}
        {/* ============================================================ */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062615] via-[#041c10] to-[#02110a] text-white p-6 sm:p-12 lg:p-16 border border-emerald-900/50 shadow-2xl">
          {/* Ambient Orbs & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-white/15 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles size={13} className="text-emerald-300" />
              Study First Info Ltd. • Official Educational Agency
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
              Empowering Bangladeshi Students with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 underline decoration-emerald-400 decoration-wavy decoration-2">
                Transparent, World-Class
              </span>{' '}
              Global Education
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-3xl mx-auto">
              Founded on the principle that genuine educational consulting is a solemn responsibility, not a business of false promises. For over 14 years, we have guided thousands of scholars from Dhaka, Sylhet, and beyond to accredited universities across Europe, the UK, Oceania, and Asia.
            </p>

            {/* Official Tagline Badge */}
            <div className="pt-2">
              <span className="inline-block px-5 py-2 rounded-2xl bg-amber-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg">
                ⭐ Leading Your Dream With Our Guidelines
              </span>
            </div>

            {/* 4 Verified Performance Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/15 text-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading block">14,750+</span>
                <span className="text-xs text-slate-300 font-medium block mt-1">Visas Processed</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-heading block">500+</span>
                <span className="text-xs text-emerald-300 font-medium block mt-1">Hungary Visa Approvals</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-heading block">96%</span>
                <span className="text-xs text-slate-300 font-medium block mt-1">Verified Success Ratio</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading block">14+</span>
                <span className="text-xs text-slate-300 font-medium block mt-1">Years of Excellence</span>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: WHO WE ARE & OUR CORE MISSION                     */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 7 cols: Brand Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Building2 size={14} className="text-emerald-800" />
              <span>About Our Organization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Who We Are &amp; What Drives Us
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Study First Info Ltd.</strong> is a premier, government-registered international student recruitment agency and educational consultancy firm based in Bangladesh. With established operations across <strong className="text-slate-900">Banani (Head Office)</strong>, <strong className="text-slate-900">Farmgate</strong>, and <strong className="text-slate-900">Sylhet</strong>, alongside liaison representation in Germany and Europe, we bridge the gap between ambitious Bangladeshi students and accredited global institutions.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Over <strong className="text-slate-900">90% of student visa refusals in Bangladesh</strong> occur because students fall victim to inaccurate financial advice, generic Statement of Purpose (SOP) letters, and false guarantees from unaccredited middlemen. We built Study First Info Ltd. to eliminate this culture of exploitation. Every student walking through our doors receives a rigorous, honest risk audit, tax-compliant financial structuring, and direct institutional representation.
            </p>

            {/* Mission / Vision Dual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                  <Target size={22} className="text-emerald-800" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide uncompromised, 100% transparent academic admissions, scholarship mentoring, and embassy compliance counseling that empowers students to thrive globally.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl font-bold">
                  <Compass size={22} className="text-amber-800" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be South Asia&apos;s most trusted global education gateway, renowned for authentic partner representations, zero deceptive guarantees, and lifelong student welfare.
                </p>
              </div>
            </div>

          </div>

          {/* Right 5 cols: Highlights Card & Visual Proof Banner */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#06301d] via-[#042416] to-[#02180e] rounded-3xl p-7 sm:p-9 text-white border border-emerald-900/60 shadow-xl space-y-6 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                Institutional Standing
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-white mt-3">
                Why Our Approach is Different
              </h3>
              <p className="text-xs text-emerald-100/90 mt-1">
                Core commitments we guarantee to every prospective student and parent:
              </p>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base mt-0.5"><Check size={16} /></span>
                <div>
                  <strong className="text-white block font-bold">Zero False Guarantees:</strong>
                  <span className="text-slate-300">Sovereign embassies make visa determinations. We provide rock-solid, tax-audited documentation to maximize your approval probability honestly.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base mt-0.5"><Check size={16} /></span>
                <div>
                  <strong className="text-white block font-bold">Direct Institutional Representation:</strong>
                  <span className="text-slate-300">Diamond Partner of Budapest Metropolitan University (METU), Official Agent of UniSZA, and verified UK &amp; New Zealand portals.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base mt-0.5"><Check size={16} /></span>
                <div>
                  <strong className="text-white block font-bold">Pay Tuition Fee After Visa Security:</strong>
                  <span className="text-slate-300">Zero upfront tuition loss risks in New Zealand (AIP), Greece, and Russia.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-bold text-base mt-0.5"><Check size={16} /></span>
                <div>
                  <strong className="text-white block font-bold">1-to-1 Embassy Mock Drills:</strong>
                  <span className="text-slate-300">Comprehensive oral interview coaching simulating real embassy consular desks in Dhaka and New Delhi.</span>
                </div>
              </li>
            </ul>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={scrollToLeadForm}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                <span>Speak With a Senior Counselor Today</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </section>

        {/* ============================================================ */}
        {/* SECTION 3: CEO MESSAGE & LEADERSHIP PROFILE                   */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 4 cols: CEO Bio Card */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-4">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#006837] to-emerald-500 mx-auto flex items-center justify-center text-white text-4xl font-extrabold shadow-lg border-4 border-white">
                JM
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                  Md Jubed Miah
                </h3>
                <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mt-0.5">
                  Chief Executive Officer (CEO)
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Study First Info Ltd. • Global Education Strategist
                </p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                ✈️ <strong>Personally Greets Students in Europe:</strong> Receives arriving student batches at European airports and facilitates local accommodation &amp; registration.
              </div>
            </div>

            {/* Right 8 cols: Executive Statement */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
                <span>💬 Leadership Perspective</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                &ldquo;Your International Journey Deserves Integrity, Not Empty Promises.&rdquo;
              </h3>

              <div className="text-sm sm:text-base text-slate-600 space-y-3.5 leading-relaxed italic border-l-4 border-emerald-600 pl-4">
                <p>
                  &ldquo;When a student decides to study abroad, they are not simply purchasing an air ticket or an admission letter. Their parents are investing years of hard-earned life savings, and the student is placing their entire future in our hands.&rdquo;
                </p>
                <p>
                  &ldquo;That is why at Study First Info Ltd., we strictly reject the dishonest practices that plague our industry. We don&apos;t promise 100% fake visas to collect non-refundable file fees. If a student&apos;s profile has gaps, low IELTS scores, or financial complexities, we address them head-on with legal bank solvency structuring, recognized MOI options, and intensive 1-on-1 interview drills.&rdquo;
                </p>
                <p>
                  &ldquo;Our responsibility does not end when your visa is stamped in Dhaka. Whether greeting our students at Budapest airports or connecting them with alumni networks in London and Kuala Lumpur, we stand with our scholars as an extended family.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-semibold">
                <span>• Direct Partner: Budapest Metropolitan University (Diamond Agent)</span>
                <span>• Direct Representative: UniSZA (Malaysia Top 10 Public)</span>
                <span>• Verified Russell Group UK Pathways</span>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: THE 4 CORE VALUES THAT DEFINE US                  */}
        {/* ============================================================ */}
        <section className="space-y-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              The 4 Pillars Behind Our 96% Visa Success
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How we systematically eliminate risk, avoid common refusal traps, and protect student futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Value 1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                <ShieldCheck size={24} className="text-emerald-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Complete Transparency</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No hidden costs, no surprise file deduction penalties. We disclose exact tuition fees, embassy charges, living expenses, and bank solvency maturity rules before any paperwork begins.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center text-2xl font-bold">
                <FileCheck size={24} className="text-blue-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Meticulous Documentation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every bank statement, sponsor affidavit, tax certificate, and motivation letter undergoes a 3-tier pre-submission audit by senior compliance officers to eliminate red flags.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold">
                <GraduationCap size={24} className="text-amber-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Scholarship Maximization</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We actively match students with 100% full-ride funding (Hungary Stipendium Hungaricum, China CSC, Russia State Quotas) and flat institutional waivers (MILA 50% discount).
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center text-2xl font-bold">
                <HeartHandshake size={24} className="text-rose-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">On-Arrival Reception</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our responsibility extends all the way to European landings. We arrange student airport pickups, verified dorm bookings, and residency registration (TRP) assistance.
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: GLOBAL DIRECT UNIVERSITY PARTNERSHIPS             */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm space-y-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Direct Representation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Institutional Alliances Across 25+ Countries
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Applying through an authorized partner ensures fast-track offer letters, tuition discounts, and direct portal access.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 w-fit">
              500+ Universities Worldwide
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
            
            {/* Partner 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Budapest Metropolitan University (METU)</span>
                <span className="text-[10px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded">DIAMOND AGENT</span>
              </div>
              <p className="text-slate-600">Hungary • Central Budapest modern business campus. 100% MOI English waiver recognized directly from Bangladesh.</p>
            </div>

            {/* Partner 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Universiti Sultan Zainal Abidin (UniSZA)</span>
                <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">OFFICIAL PARTNER</span>
              </div>
              <p className="text-slate-600">Malaysia • Top 10 Government Public University. 1st year total official expenses starting from only ~৳5.5 Lakh BDT.</p>
            </div>

            {/* Partner 3 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">University of Hertfordshire &amp; Cardiff</span>
                <span className="text-[10px] font-black text-purple-800 bg-purple-100 px-2 py-0.5 rounded">RUSSELL GROUP &amp; UK</span>
              </div>
              <p className="text-slate-600">United Kingdom • Fast 1-Year Master&apos;s degrees, £3,000–£10,000 scholarships, and 2-Year Graduate Route PSW.</p>
            </div>

            {/* Partner 4 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">University of Auckland &amp; Wintec</span>
                <span className="text-[10px] font-black text-teal-800 bg-teal-100 px-2 py-0.5 rounded">NEW ZEALAND</span>
              </div>
              <p className="text-slate-600">New Zealand • Pay tuition strictly after visa Approval in Principle (AIP). Spouse flies with full open work rights.</p>
            </div>

            {/* Partner 5 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Cyprus International University (CIU)</span>
                <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded">43% FLAT DISCOUNT</span>
              </div>
              <p className="text-slate-600">Cyprus • Low initial deposit of only €3,400 (~4.5 Lakh BDT), guaranteed 43% fee waiver, and UK credit transfer.</p>
            </div>

            {/* Partner 6 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">Novosibirsk State &amp; Russian Quotas</span>
                <span className="text-[10px] font-black text-blue-800 bg-blue-100 px-2 py-0.5 rounded">PAY AFTER VISA</span>
              </div>
              <p className="text-slate-600">Russia • 100% State Quota tuition waiver + 15,000 Ruble stipend. Direct visa processing at the Russian Embassy in Dhaka.</p>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: PHYSICAL BRANCH OFFICES (NATIONWIDE PRESENCE)     */}
        {/* ============================================================ */}
        <section className="space-y-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Visit Us In Person
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Our 3 Official Counseling Desks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Open Saturday through Thursday (10:00 AM – 6:30 PM). Bring your academic transcripts for on-the-spot profile screening!
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
              <a 
                href="mailto:inquiry@studyfirstinfo.com" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 hover:text-emerald-950 transition-colors shadow-2xs"
              >
                <Mail size={14} className="text-emerald-700" />
                <span>Official Admissions Inquiries: inquiry@studyfirstinfo.com</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Banani Head Office */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                  <Building2 size={24} className="text-emerald-800" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">Head Office</span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">Banani Campus</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                <MapPin size={14} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>Rosa Bella Apartment, House: 3, Level: 2, Block: D, Road: 17, Banani C/A, Dhaka-1213</span>
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-bold text-emerald-800 space-y-1 font-mono">
                <a href="tel:+8801898833034" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +8809613752752
                </a>
              </div>
            </div>

            {/* Farmgate Branch */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                  <Building2 size={24} className="text-emerald-800" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">Central Hub</span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">Farmgate Branch</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                <MapPin size={14} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>7th Floor (Lift-6), BTI Central Plaza (opposite Ananda Cinema Hall), Green Road, Farmgate, Dhaka 1215</span>
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-bold text-emerald-800 space-y-1 font-mono">
                <a href="tel:+8801806971441" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1806-971441
                </a>
                <a href="tel:+8801898833034" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +8809613752752
                </a>
              </div>
            </div>

            {/* Sylhet Branch */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                  <Building2 size={24} className="text-emerald-800" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">Regional Branch</span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">Sylhet Branch</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                <MapPin size={14} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>Sylhet Millennium Shopping Centre, Lift: 10, Room No: 907, Jallarpar Road, Zindabazar, Sylhet-3100</span>
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-bold text-emerald-800 space-y-1 font-mono">
                <a href="tel:+8801898383120" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1898-383120
                </a>
                <a href="tel:+8801898833034" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +8809613752752
                </a>
              </div>
            </div>

            {/* Chittagong Branch */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                  <Building2 size={24} className="text-emerald-800" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">Port City Hub</span>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">Chittagong Branch</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-1.5">
                <MapPin size={14} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>Sanmar Ocean City, Level 5, GEC Circle, Chittagong</span>
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-bold text-emerald-800 space-y-1 font-mono">
                <a href="tel:+8801806971443" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1806-971443
                </a>
                <a href="tel:+8801898833034" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="flex items-center gap-1.5 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded">
                  <Phone size={12} /> +8809613752752
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7: PROFILE ASSESSMENT LEAD CAPTURE FORM              */}
        {/* ============================================================ */}
        <section id="about-lead-form" className="bg-gradient-to-br from-[#06301d] via-[#042517] to-[#02170e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/60 text-left scroll-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 cols: Value Proposition */}
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                100% Free Confidential Assessment
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug">
                Ready to Plan Your Study Abroad Journey with Total Peace of Mind?
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">
                Submit your profile details below. A Senior Admission Counselor from our Banani, Farmgate, or Sylhet desk will review your credentials and contact you directly via WhatsApp within 2 hours with an honest eligibility report.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <p className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Direct university portal submission</p>
                <p className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> Tax-audited bank solvency planning</p>
                <p className="flex items-center gap-2"><span className="text-emerald-400 font-bold">✓</span> 1-on-1 embassy mock interview coaching</p>
              </div>
            </div>

            {/* Right 6 cols: Submission Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 text-slate-900 shadow-xl border border-slate-100">
              <form onSubmit={handleLeadSubmit} className="space-y-3.5 text-xs text-left">
                <div>
                  <label htmlFor="lead-name" className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="lead-name"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="e.g. Mahbubul Alam"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="lead-phone" className="block font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      id="lead-phone"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      placeholder="017xxxxxxxx"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="lead-email"
                      required
                      value={leadForm.email}
                      onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="lead-country" className="block font-bold text-slate-700 mb-1">Target Country *</label>
                    <select
                      id="lead-country"
                      value={leadForm.country}
                      onChange={(e) => setLeadForm({ ...leadForm, country: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Hungary">Hungary 🇭🇺 (Direct Dhaka Embassy)</option>
                      <option value="Malaysia">Malaysia 🇲🇾 (UniSZA / 100% Medical)</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧 (1-Year Masters)</option>
                      <option value="New Zealand">New Zealand 🇳🇿 (Spouse Work Rights)</option>
                      <option value="Russia">Russia 🇷🇺 (Pay Tuition After Visa)</option>
                      <option value="Cyprus">Cyprus 🇨🇾 (43% Flat Discount)</option>
                      <option value="Czech Republic">Czech Republic 🇨🇿 (Zero Tuition)</option>
                      <option value="Germany">Germany 🇩🇪 (Public Free Tuition)</option>
                      <option value="Other">Need Counselor Advice</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="lead-level" className="block font-bold text-slate-700 mb-1">Applying Level *</label>
                    <select
                      id="lead-level"
                      value={leadForm.level}
                      onChange={(e) => setLeadForm({ ...leadForm, level: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Bachelor">Bachelor Degree (Undergraduate)</option>
                      <option value="Master">Master&apos;s Degree (Postgraduate)</option>
                      <option value="PhD">Doctor of Philosophy (PhD)</option>
                      <option value="Diploma">Diploma / Foundation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="lead-gpa" className="font-bold text-slate-700">Academic Score (GPA / CGPA) *</label>
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[11px] font-bold">
                      <button
                        type="button"
                        onClick={() => setGpaScale(5)}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                          gpaScale === 5 ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Scale 5.0 (HSC)
                      </button>
                      <button
                        type="button"
                        onClick={() => setGpaScale(4)}
                        className={`px-3 py-1 rounded-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                          gpaScale === 4 ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Scale 4.0 (Bachelor)
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    id="lead-gpa"
                    required
                    value={leadForm.gpa}
                    onChange={(e) => setLeadForm({ ...leadForm, gpa: e.target.value })}
                    placeholder={gpaScale === 5 ? "e.g. 4.75 (out of 5.00)" : "e.g. 3.40 (out of 4.00)"}
                    min="1.0"
                    max={gpaScale === 5 ? "5.00" : "4.00"}
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="lead-english" className="block font-bold text-slate-700 mb-1">English Proficiency / MOI *</label>
                  <select
                    id="lead-english"
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

                <div>
                  <label htmlFor="lead-branch" className="block font-bold text-slate-700 mb-1">Select Preferred Branch *</label>
                  <select
                    id="lead-branch"
                    value={leadForm.branch}
                    onChange={(e) => setLeadForm({ ...leadForm, branch: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Banani Head Office">Banani Head Office (Rosa Bella, Road 17)</option>
                    <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza)</option>
                    <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                      <option value="Chittagong Branch">Chittagong Branch (Sanmar Ocean City, GEC)</option>
                    <option value="Online Video Meeting">Online Video Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Free Profile Assessment</span>
                  <Send size={14} />
                </button>

                <p className="text-[10px] text-center text-slate-400">
                  🔒 Strict data privacy maintained. A certified counselor will message you directly on WhatsApp.
                </p>
              </form>
            </div>

          </div>
        </section>

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
