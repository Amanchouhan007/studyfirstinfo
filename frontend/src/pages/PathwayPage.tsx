import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  ExternalLink,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Calendar,
  Award,
  ChevronRight
} from 'lucide-react';
import { pathways, getPathwayById, type RouteCard } from '../data/pathwaysData';

export default function PathwayPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const pathwayId = id || searchParams.get('id') || searchParams.get('route') || 'schengen';
  const currentPathway: RouteCard = getPathwayById(pathwayId);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathwayId]);

  // Fast-track form state
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    level: 'Bachelor',
    gpa: '',
    english: 'moi',
    office: 'banani'
  });

  // Toast notification state
  const [toast, setToast] = useState<{ title: string; message: string } | null>(null);

  const showToast = (title: string, message: string) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleCountryClick = (countryName: string) => {
    const raw = countryName.toLowerCase().trim();
    let countryKey = 'hungary';
    if (raw.includes('hungary')) countryKey = 'hungary';
    else if (raw.includes('uk') || raw.includes('england') || raw.includes('united kingdom') || raw.includes('wales') || raw.includes('london')) countryKey = 'united-kingdom';
    else if (raw.includes('malaysia') || raw.includes('unisza') || raw.includes('mila') || raw.includes('segi') || raw.includes('inti') || raw.includes('apu')) countryKey = 'malaysia';
    else if (raw.includes('zealand') || raw.includes('new zealand') || raw.includes('nz')) countryKey = 'new-zealand';
    else if (raw.includes('germany')) countryKey = 'germany';
    else if (raw.includes('cyprus')) countryKey = 'cyprus';
    else if (raw.includes('greece') || raw.includes('athens')) countryKey = 'greece';
    else if (raw.includes('lithuania') || raw.includes('smk')) countryKey = 'lithuania';
    else if (raw.includes('china')) countryKey = 'china';
    else if (raw.includes('russia')) countryKey = 'russia';
    else if (raw.includes('poland') || raw.includes('czech') || raw.includes('spain') || raw.includes('bulgaria') || raw.includes('malta')) countryKey = 'hungary';
    else {
      countryKey = encodeURIComponent(countryName);
    }

    navigate(`/countries?country=${countryKey}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast(
      'Profile Submitted Successfully',
      `Thank you ${formData.name}! Counselor assigned at ${formData.office.toUpperCase()} office will contact you via WhatsApp.`
    );
    setFormData({
      name: '',
      phone: '',
      email: '',
      level: 'Bachelor',
      gpa: '',
      english: 'moi',
      office: 'banani'
    });
  };

  const allPathwayList = Object.values(pathways);
  const otherPathways = allPathwayList.filter((p) => p.id !== currentPathway.id);

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0f172a] pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* TOP NAVIGATION & BREADCRUMBS                             */}
        {/* ======================================================== */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-400">Pathways</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-emerald-800 font-semibold">{currentPathway.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('routes-wrapper')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Back to Home Routes</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
              <span>📌 Route:</span>
              <span className="font-bold text-emerald-950">{currentPathway.details.countryTitle}</span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* QUICK PATHWAY SWITCHER PILLS                             */}
        {/* ======================================================== */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Switch Route:</span>
            {allPathwayList.map((p) => {
              const isActive = p.id === currentPathway.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => navigate(`/pathways/${p.id}`)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#006837] text-white border-[#006837] shadow-sm ring-2 ring-emerald-500/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  <span>{p.icon}</span>
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* PATHWAY DESTINATION SCOPE BANNER                         */}
        {/* ======================================================== */}
        <div className="mb-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-70" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Sparkles size={13} className="text-emerald-700" />
              Pathway Destination Scope
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              Official Embassy & University Linkages
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#053321] tracking-tight font-heading mb-3">
            {currentPathway.details.countryTitle}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
            {currentPathway.details.generalOverview}
          </p>

          {/* Clickable Countries Bar */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <span>Included Destinations (Click any country to view full admissions guide):</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {currentPathway.details.countriesIncluded.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => handleCountryClick(c.name)}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200 hover:border-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-xs cursor-pointer group"
                >
                  <span className="text-base">{c.flag}</span>
                  <span>{c.name}</span>
                  <ExternalLink size={12} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MAIN TWO-COLUMN CONTENT GRID                             */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic & Scholarship Intelligence (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hero Header Card */}
            <div className="bg-gradient-to-br from-[#063a25] to-[#032014] text-white p-7 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                <Award size={13} />
                <span>{currentPathway.details.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading mb-3 text-white">
                Key Pathway Advantages & Funding Schemes
              </h2>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
                {currentPathway.details.description}
              </p>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 border-t border-white/10 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-emerald-300/80 font-medium mb-1">
                    <Calendar size={13} />
                    <span>Next Intakes</span>
                  </div>
                  <p className="text-white font-bold text-sm">{currentPathway.details.intakes}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-emerald-300/80 font-medium mb-1">
                    <Briefcase size={13} />
                    <span>Work Rights</span>
                  </div>
                  <p className="text-white font-bold text-sm">{currentPathway.details.workRights}</p>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-emerald-300/80 font-medium mb-1">
                    <ShieldCheck size={13} />
                    <span>Language Route</span>
                  </div>
                  <p className="text-white font-bold text-sm">{currentPathway.details.english}</p>
                </div>
              </div>
            </div>

            {/* Module 1: Featured Universities & Program Details */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                    <Building2 size={18} />
                  </span>
                  Partner Universities & Fee Benchmarks
                </h3>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold border border-emerald-200">
                  Verified by Study First Info
                </span>
              </div>
              
              <div className="space-y-4">
                {currentPathway.details.universities.map((uni, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 transition-all hover:bg-slate-50/80">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{uni.name}</h4>
                        <button
                          type="button"
                          onClick={() => handleCountryClick(uni.country)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200 px-2.5 py-0.5 rounded-md mt-1 transition-colors cursor-pointer"
                        >
                          <span>📍 {uni.country}</span>
                          <ExternalLink size={10} />
                        </button>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="block text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {uni.tuition}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1.5">
                      <p><strong className="text-slate-800">Scholarship:</strong> {uni.scholarship}</p>
                      <p><strong className="text-slate-800">Admission Criteria:</strong> {uni.requirement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module 2: Available Scholarships & Funding Matrix */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">
                  <GraduationCap size={18} />
                </span>
                Scholarship Opportunities & Waivers
              </h3>
              <div className="space-y-3">
                {currentPathway.details.scholarships.map((sch, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm">
                    <span className="text-amber-600 text-lg flex-shrink-0">⭐</span>
                    <div>
                      <strong className="text-amber-950 font-bold block text-sm">{sch.name}</strong>
                      <span className="text-amber-900/90 leading-relaxed">{sch.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Module 3: Post Study Work & Living Solvency Summary */}
            <div className="bg-emerald-50/70 rounded-3xl border border-emerald-200/70 p-6 sm:p-7">
              <h3 className="text-base font-bold text-emerald-900 font-heading flex items-center gap-2 mb-3">
                <Briefcase size={20} className="text-emerald-800" />
                Work Permits, Bank Solvency & Family Rights
              </h3>
              <div className="text-sm text-emerald-950 space-y-2.5 leading-relaxed">
                {currentPathway.details.workRightsInfo.map((info, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    <span>{info}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Speak Directly with a Senior Pathway Counselor</h4>
                  <p className="text-xs text-slate-500">Get an instant document checklist and admission eligibility review on WhatsApp.</p>
                </div>
              </div>
              <a
                href="https://wa.me/8801713000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md flex-shrink-0"
              >
                <PhoneCall size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Student Evaluation & Lead Submission Form (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6">
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  Fast-Track Assessment
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-2">
                  Evaluate Your Eligibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out your details to receive an instant profile match for{' '}
                  <span className="font-bold text-emerald-700">{currentPathway.details.countryTitle}</span>.
                </p>
              </div>

              {/* Lead Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="lead-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mahfuzur Rahman"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    id="lead-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 01712345678"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lead-email" className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="lead-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. student@gmail.com"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50"
                  />
                </div>

                {/* Academic Level */}
                <div>
                  <label htmlFor="lead-level" className="block text-xs font-semibold text-slate-700 mb-1">Applying For *</label>
                  <select
                    id="lead-level"
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Bachelor">Bachelor Degree (Undergraduate)</option>
                    <option value="Master">Master's Degree (Postgraduate)</option>
                    <option value="Diploma">Diploma / Pre-Master Pathway</option>
                    <option value="PhD">PhD / Research Degree</option>
                  </select>
                </div>

                {/* Academic Result (Toggle GPA Scale) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="lead-gpa" className="text-xs font-semibold text-slate-700">Academic Score *</label>
                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
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
                        Scale 4.0 (CGPA)
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    id="lead-gpa"
                    required
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    placeholder={gpaScale === 5 ? 'e.g. 4.50 (out of 5.00)' : 'e.g. 3.25 (out of 4.00)'}
                    min="1.0"
                    max={gpaScale === 5 ? '5.00' : '4.00'}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                {/* English Proficiency Status */}
                <div>
                  <label htmlFor="lead-english" className="block text-xs font-semibold text-slate-700 mb-1">English Proficiency Test *</label>
                  <select
                    id="lead-english"
                    value={formData.english}
                    onChange={(e) => setFormData({ ...formData, english: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="moi">MOI (English Medium Instruction / Waiver)</option>
                    <option value="ielts_65">IELTS 6.5 or above (or PTE 60+)</option>
                    <option value="ielts_60">IELTS 6.0 (or PTE 52+)</option>
                    <option value="ielts_55">IELTS 5.5</option>
                    <option value="ielts_50">IELTS 5.0 or below 5.5</option>
                    <option value="planning">Planning to take test soon</option>
                  </select>
                </div>

                {/* Preferred Office Desk */}
                <div>
                  <label htmlFor="lead-office" className="block text-xs font-semibold text-slate-700 mb-1">Preferred Consultation Branch *</label>
                  <select
                    id="lead-office"
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="banani">Banani Head Office (Road 17, Block D)</option>
                    <option value="farmgate">Farmgate Branch (BTI Central Plaza, Green Road)</option>
                    <option value="sylhet">Sylhet Branch (Millennium Shopping Centre, Zindabazar)</option>
                    <option value="online">Online Video Consultation (Google Meet)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm transition-all shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit My Profile for Free Assessment</span>
                  <ArrowRight size={16} />
                </button>

                <p className="text-[11px] text-center text-slate-500 leading-tight">
                  🔒 Your data is protected by Study First Info Ltd. Counselor will contact via WhatsApp within 2 hours.
                </p>
              </form>

              {/* Success Box */}
              {formSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-center animate-in fade-in duration-300">
                  <span className="text-2xl">🎉</span>
                  <h4 className="text-sm font-bold text-emerald-900 mt-1">Application Submitted!</h4>
                  <p className="text-xs text-emerald-700 mt-1">
                    Thank you! Our senior country counselor will contact you via WhatsApp for the official document checklist.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM: EXPLORE OTHER HIGH-SUCCESS PATHWAYS              */}
        {/* ======================================================== */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-[#053321] font-heading">
              Explore Other High–Success Pathways
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Compare requirements, scholarships, and visa processing timelines across our full global network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPathways.map((card) => (
              <div
                key={card.id}
                className="bg-[#071f16] border border-[#12392b] hover:border-emerald-500/60 rounded-3xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{card.icon}</span>
                    <span className="text-[11px] font-bold tracking-widest text-emerald-300 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {card.regionCode}
                    </span>
                  </div>
                  <div className={`inline-block ${card.badgeClass} text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2`}>
                    {card.badge}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-xs text-emerald-300/80 mb-4 line-clamp-2">
                    {card.details.generalOverview}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    navigate(`/pathways/${card.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#112d22] hover:bg-[#184232] text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-emerald-700/40 group-hover:border-emerald-500 cursor-pointer"
                >
                  <span>Explore Pathway</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 max-w-sm bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-50 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="text-xl">✨</div>
          <div>
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{toast.title}</h5>
            <p className="text-xs text-slate-200 mt-0.5 leading-snug">{toast.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
