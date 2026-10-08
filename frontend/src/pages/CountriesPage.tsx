import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Check, 
  Sparkles, 
  Star, 
  Clock, 
  Briefcase, 
  Award, 
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

import { COUNTRIES_DB as LOCAL_DB, FLAG_MAP } from '../data/countriesData';
import type { CountryRecord } from '../data/countriesData';
import { fetchCountries } from '../services/api/catalog';
export default function CountriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalog, setCatalog] = useState<Record<string, CountryRecord>>(LOCAL_DB);
  const [, setIsLoadingCatalog] = useState(true);

  React.useEffect(() => {
    fetchCountries().then(data => {
      setCatalog(data);
      setIsLoadingCatalog(false);
    });
  }, []);

  // Region Filter in Level 1
  const [activeRegion, setActiveRegion] = useState<'all' | 'europe' | 'uk' | 'oceania' | 'asia'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ accordion state
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Forms GPA Scale
  const [landingGpaScale, setLandingGpaScale] = useState<5 | 4>(5);
  const [progGpaScale, setProgGpaScale] = useState<5 | 4>(5);

  // Form values
  const [selectedProgramTarget, setSelectedProgramTarget] = useState<string>('Select any program below');

  // Floating Toast
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

  // Derive current view & selection from URL parameters with full alias normalization
  const rawCountryParam = searchParams.get('country');
  const uniParam = searchParams.get('uni');

  const resolveCountryKey = (raw: string | null): string | null => {
    if (!raw) return null;
    const lower = raw.toLowerCase().trim().replace(/%20|\+/g, '-').replace(/\s+/g, '-');
    if (catalog[lower]) return lower;
    if (lower === 'uk' || lower === 'united-kingdom' || lower.includes('england') || lower.includes('britain')) return 'united-kingdom';
    if (lower === 'nz' || lower === 'new-zealand' || lower.includes('zealand')) return 'new-zealand';
    if (lower.includes('hungary')) return 'hungary';
    if (lower.includes('malaysia') || lower.includes('unisza') || lower.includes('mila')) return 'malaysia';
    if (lower.includes('germany')) return 'germany';
    if (lower.includes('greece') || lower.includes('athens')) return 'greece';
    if (lower.includes('cyprus')) return 'cyprus';
    if (lower.includes('lithuania')) return 'lithuania';
    if (lower.includes('china')) return 'china';
    if (lower.includes('russia')) return 'russia';
    return null;
  };

  const resolvedCountryKey = resolveCountryKey(rawCountryParam);
  const activeCountry = resolvedCountryKey ? catalog[resolvedCountryKey] || null : null;
  const activeUni = activeCountry && uniParam ? activeCountry.universities.find((u) => u.id === uniParam) || null : null;
  const currentView: 'home' | 'country' | 'university' = activeUni ? 'university' : activeCountry ? 'country' : 'home';

  // Navigation handlers
  const navigateToLevel1 = () => {
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCountryLanding = (countryId: string) => {
    if (catalog[countryId]) {
      setSearchParams({ country: countryId });
      setExpandedFaqIndex(null);
      setSelectedProgramTarget('Select any university below');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openUniversityProgram = (countryId: string, uniId: string, programName?: string) => {
    setSearchParams({ country: countryId, uni: uniId });
    if (programName) {
      setSelectedProgramTarget(programName);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToCountryLanding = () => {
    if (activeCountry) {
      setSearchParams({ country: activeCountry.id });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigateToLevel1();
    }
  };

  const scrollToHeroLeadForm = () => {
    const el = document.getElementById('country-cards-container');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault();
    const targetTitle = formType === 'landing' ? activeCountry?.name : activeUni?.name;
    showToast(
      "Profile Submitted Successfully!",
      `Thank you! Your academic profile for ${targetTitle} has been allocated to a Senior Counselor.`
    );
    (e.target as HTMLFormElement).reset();
  };

  const countryKeys = Object.keys(catalog);

  // Level 1 filter
  const filteredCountryKeys = countryKeys.filter((key) => {
    const c = catalog[key];
    const matchesRegion = activeRegion === 'all' || c.regionCode === activeRegion;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q) || c.usp.toLowerCase().includes(q);
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* ============================================================ */}
        {/* LEVEL 1: ALL COUNTRIES GRID VIEW                            */}
        {/* ============================================================ */}
        {currentView === 'home' && (
          <div className="space-y-8 sm:space-y-12 transition-all duration-300">
            
            {/* TOP HERO BANNER SECTION */}
            <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#070e1b] via-[#091426] to-[#040b16] text-white p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl">
              {/* Subtle Tech Grid Overlay & Ambient Glowing Orbs */}
              <div 
                className="absolute inset-0 opacity-35 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                  backgroundSize: '36px 36px'
                }}
              />
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                
                {/* Left Column (7 cols): Main Headline, Paragraph, Actions & Metrics */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  
                  {/* Top Tag Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 text-[11px] sm:text-xs font-bold tracking-wider uppercase border border-white/15 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#ff5e57] animate-ping" />
                    INTERNATIONAL STUDY DESTINATIONS
                  </div>

                  {/* Main Heading with Red-Coral Highlight */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                    Find the Right Country for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e57] via-[#ff7675] to-[#f39c12] underline decoration-[#ff5e57] decoration-2 underline-offset-8">Study Abroad</span> Journey
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal max-w-2xl">
                    Explore international study destinations for Bangladeshi students and compare admission requirements, tuition fees, scholarships, student visa information, and future career opportunities before making your decision.
                  </p>

                  {/* Dual CTA Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <a 
                      href="#country-cards-container" 
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff5e57] to-[#e84118] hover:from-[#e84118] hover:to-[#c23616] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-rose-900/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Explore Countries</span>
                      <ArrowDown className="w-4 h-4" />
                    </a>
                    <button 
                      onClick={scrollToHeroLeadForm} 
                      className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Fast Metrics Bar at Bottom of Hero */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
                    <div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white block">24+</span>
                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium block mt-0.5">Study Destinations</span>
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-emerald-400 block">Admission</span>
                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium block mt-0.5">Entry &amp; Document Guidance</span>
                    </div>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-amber-400 block">Visa</span>
                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium block mt-0.5">Country-Specific Information</span>
                    </div>
                  </div>

                </div>

                {/* Right Column (5 cols): Visual Radar with Interactive Country Badges */}
                <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
                  
                  {/* Planetary Radar Circle Wrapper */}
                  <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
                    {/* Outer Orbit Ring */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-slate-700/60 animate-spin" style={{ animationDuration: '40s' }} />
                    
                    {/* Middle Orbit Ring */}
                    <div className="absolute inset-6 rounded-full border border-slate-700/40" />
                    
                    {/* Center Glowing Red/Coral Core */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#ff3838] to-[#ff6b6b] flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(255,56,56,0.5)] z-10 animate-pulse">
                      <span className="text-xs font-black uppercase tracking-widest text-white/90">SFI</span>
                      <span className="text-[11px] font-extrabold text-white leading-tight uppercase px-2">Study Abroad</span>
                    </div>

                    {/* Floating Orbital Badge 1: Compare Destinations */}
                    <div className="absolute -top-2 left-2 bg-[#121c2d]/90 border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs">
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">âœ“</span>
                      <span className="font-bold text-slate-200">Compare Destinations</span>
                    </div>

                    {/* Floating Orbital Badge 2: Plan Your Journey */}
                    <div className="absolute -bottom-2 right-2 bg-[#121c2d]/90 border border-slate-700/80 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-bold text-slate-200">Plan Your Journey</span>
                    </div>

                    {/* Floating Orbital Badge 3: 100% Scholarships */}
                    <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-[#121c2d]/90 border border-slate-700/80 rounded-xl px-2.5 py-1 shadow-xl backdrop-blur-md items-center gap-1.5 text-[11px] hidden sm:flex">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-amber-300">100% Scholarships</span>
                    </div>
                  </div>

                  {/* All Destination Countries Clickable Tags Cloud */}
                  <div className="mt-5 w-full bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-md">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2 text-center">
                      Click Any Country to Explore Pathways Directly:
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      <button type="button" onClick={() => openCountryLanding('hungary')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['hungary']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Hungary</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('united-kingdom')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['united-kingdom']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>United Kingdom</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('new-zealand')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['new-zealand']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>New Zealand</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('malaysia')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['malaysia']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Malaysia</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('germany')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['germany']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Germany</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('cyprus')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['cyprus']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Cyprus</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('greece')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['greece']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Greece</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('lithuania')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['lithuania']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Lithuania</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('china')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['china']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>China</span>
                      </button>
                      <button type="button" onClick={() => openCountryLanding('russia')} className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#006837] text-white text-[11px] font-bold transition-all border border-white/10 cursor-pointer flex items-center gap-1.5">
                        <img src={FLAG_MAP['russia']} alt="" className="w-4 h-3 object-cover rounded-xs" />
                        <span>Russia</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* Top Title & Filter Bar */}
            <div className="text-center max-w-4xl mx-auto space-y-4 pt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider border border-emerald-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006837] animate-ping" />
                Study First Info Verified Global Network
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Select Your Study Destination
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                Explore curated study abroad pathways where Bangladeshi students secure 100% scholarships, tuition waivers, and high visa approval rates.
              </p>

              {/* Country Search Bar */}
              <div className="max-w-md mx-auto pt-4 pb-2">
                <input 
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search countries, universities, or keywords..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm shadow-sm"
                />
              </div>

              {/* Quick Region Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button 
                  onClick={() => setActiveRegion('all')} 
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeRegion === 'all' ? 'bg-[#006837] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'}`}
                >
                  All Countries ({countryKeys.length})
                </button>
                <button 
                  onClick={() => setActiveRegion('europe')} 
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeRegion === 'europe' ? 'bg-[#006837] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'}`}
                >
                  🇪🇺 Schengen Europe
                </button>
                <button 
                  onClick={() => setActiveRegion('uk')} 
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeRegion === 'uk' ? 'bg-[#006837] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'}`}
                >
                  🇬🇧 United Kingdom
                </button>
                <button 
                  onClick={() => setActiveRegion('oceania')} 
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeRegion === 'oceania' ? 'bg-[#006837] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'}`}
                >
                  🇳🇿 New Zealand
                </button>
                <button 
                  onClick={() => setActiveRegion('asia')} 
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeRegion === 'asia' ? 'bg-[#006837] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'}`}
                >
                  🇲🇾 Malaysia &amp; Asia
                </button>
              </div>
            </div>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="country-cards-container">
              {filteredCountryKeys.map((key) => {
                const country = catalog[key];
                return (
                  <div 
                    key={country.id}
                    className="country-item-card bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 text-left group"
                  >
                    <div>
                      {/* Top Header: Official National Flag Badge & Region Pill Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-10 rounded-xl bg-white border border-slate-200/90 shadow-xs overflow-hidden flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-emerald-500 transition-all p-0.5">
                            <img
                              src={FLAG_MAP[country.id] || `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                              alt={`${country.name} National Flag`}
                              className="w-full h-full object-cover rounded-lg"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-slate-400 block uppercase tracking-wider">{country.code}</span>
                            <h3 
                              onClick={() => openCountryLanding(country.id)}
                              className="text-xl sm:text-2xl font-black text-slate-900 hover:text-[#006837] transition-colors cursor-pointer leading-tight font-heading"
                            >
                              {country.name}
                            </h3>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                          {country.regionBadge}
                        </span>
                      </div>

                      {/* Tagline */}
                      <p className="text-xs text-slate-500 font-medium mb-4">
                        {country.tagline}
                      </p>

                      {/* Star Highlight Banner */}
                      <div className="p-3.5 rounded-2xl bg-[#fffbeb] border border-amber-200/80 mb-5 flex items-start gap-2.5">
                        <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 fill-amber-400" />
                        <p className="text-xs font-bold text-amber-950 leading-snug">
                          {country.usp}
                        </p>
                      </div>

                      {/* Checklist */}
                      <ul className="space-y-2.5 mb-6">
                        {country.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Metadata & Button */}
                    <div className="pt-4 border-t border-slate-100 space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <div>
                          <span className="text-[10px] font-bold uppercase text-slate-400 block">Living Cost:</span>
                          <span className="font-bold text-slate-800">{country.livingCost}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-bold uppercase text-slate-400 block">Institutions:</span>
                          <span className="font-bold text-emerald-700">{country.institutionsCount}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => openCountryLanding(country.id)}
                        className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-[#006837] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-[#006837] transition-all shadow-md cursor-pointer"
                      >
                        <span>Explore {country.name} Pathways</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* LEVEL 2: DYNAMIC COUNTRY LANDING PAGE                        */}
        {/* ============================================================ */}
        {currentView === 'country' && activeCountry && (
          <div className="space-y-8 sm:space-y-12 transition-all duration-300">
            
            {/* Top Breadcrumb & Switcher Navigation Bar */}
            <nav className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <button 
                  onClick={navigateToLevel1}
                  className="font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition-all cursor-pointer"
                >
                  <span>â† All Destinations</span>
                </button>
                <span className="text-slate-400">/</span>
                <span className="font-bold text-slate-900 flex items-center gap-2">
                  <img src={FLAG_MAP[activeCountry.id] || ''} alt="" className="w-5 h-3.5 object-cover rounded-xs shadow-2xs" />
                  <span>{activeCountry.name} Study Guide</span>
                </span>
              </div>

              {/* Quick Switcher Tabs between countries with Flags */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {countryKeys.map((key) => {
                  const c = catalog[key];
                  const isActive = c.id === activeCountry.id;
                  return (
                    <button 
                      key={c.id}
                      onClick={() => openCountryLanding(c.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive 
                          ? 'bg-[#006837] text-white border-[#006837] shadow-sm' 
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <img src={FLAG_MAP[c.id] || ''} alt="" className="w-4 h-3 object-cover rounded-xs" />
                      <span>{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Dynamic Country Hero Banner with actual photographic overlay */}
            <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/60 min-h-[460px] sm:min-h-[500px] flex flex-col justify-end text-white">
              <img 
                src={activeCountry.heroImg} 
                alt={`${activeCountry.name} Campus`} 
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(7, 31, 22, 0.45) 0%, rgba(4, 47, 26, 0.85) 60%, rgba(2, 23, 14, 0.98) 100%)'
                }}
              />

              <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-6 text-left">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <img src={FLAG_MAP[activeCountry.id] || ''} alt="" className="w-4 h-3 object-cover rounded-xs" />
                    <span>{activeCountry.pillBadge.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '').trim()}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-200 text-xs font-semibold border border-white/20">
                    {activeCountry.subBadge}
                  </span>
                  <span className="text-xs text-slate-300 font-medium hidden sm:inline-block">Study First Info Certified Desk</span>
                </div>

                <div className="max-w-4xl space-y-3">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    {activeCountry.heroHeading}
                  </h2>
                  <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium max-w-3xl">
                    {activeCountry.heroDesc}
                  </p>
                </div>

                {/* Fast Metric Cards Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm">
                  <div className="bg-black/35 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15">
                    <span className="text-[10px] sm:text-xs text-emerald-300 font-bold uppercase tracking-wider block">Tuition Fees</span>
                    <span className="text-base sm:text-lg font-black text-white block mt-0.5">{activeCountry.tuition}</span>
                    <span className="text-[10px] text-slate-300 block">{activeCountry.tuitionSub}</span>
                  </div>
                  <div className="bg-black/35 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15">
                    <span className="text-[10px] sm:text-xs text-emerald-300 font-bold uppercase tracking-wider block">Monthly Living Cost</span>
                    <span className="text-base sm:text-lg font-black text-white block mt-0.5">{activeCountry.living}</span>
                    <span className="text-[10px] text-slate-300 block">{activeCountry.livingSub}</span>
                  </div>
                  <div className="bg-black/35 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15">
                    <span className="text-[10px] sm:text-xs text-emerald-300 font-bold uppercase tracking-wider block">Part-Time Work</span>
                    <span className="text-base sm:text-lg font-black text-emerald-400 block mt-0.5">{activeCountry.work}</span>
                    <span className="text-[10px] text-slate-300 block">{activeCountry.workSub}</span>
                  </div>
                  <div className="bg-black/35 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15">
                    <span className="text-[10px] sm:text-xs text-emerald-300 font-bold uppercase tracking-wider block">Post-Study Work</span>
                    <span className="text-base sm:text-lg font-black text-amber-300 block mt-0.5">{activeCountry.psw}</span>
                    <span className="text-[10px] text-slate-300 block">{activeCountry.pswSub}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Two-Column Country Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left 8 Columns: Why Study, Universities & Programs, Solvency, Roadmap, FAQs */}
              <div className="lg:col-span-8 space-y-10 text-left">
                
                {/* Section 1: Why Study In This Country */}
                <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                      🌟
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        Why Study in {activeCountry.name}?
                      </h3>
                      <p className="text-xs text-slate-500">Key strategic benefits for Bangladeshi students.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeCountry.whyStudy.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 2: Top Universities & Program Directory (Gateway to Level 3) */}
                <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                        🏛️
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                          Top Universities &amp; Program Directory
                        </h3>
                        <p className="text-xs text-slate-500">Click on any university or program to view its complete 9-module detailed guide.</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 w-fit">
                      Official Direct Partner
                    </span>
                  </div>

                  <div className="space-y-6">
                    {activeCountry.universities.map((uni) => (
                      <div key={uni.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-all space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                                {uni.badge}
                              </span>
                              <span className="text-xs text-slate-500 font-medium">â€¢ {uni.type}</span>
                            </div>
                            <h4 
                              onClick={() => openUniversityProgram(activeCountry.id, uni.id)}
                              className="text-xl font-extrabold text-slate-900 hover:text-[#006837] transition-colors cursor-pointer"
                            >
                              {uni.name}
                            </h4>
                            <p className="text-xs text-slate-600 mt-1">{uni.tagline}</p>
                          </div>
                          
                          <button 
                            onClick={() => openUniversityProgram(activeCountry.id, uni.id)}
                            className="px-4 py-2 rounded-xl bg-[#006837] hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                          >
                            <span>View 9-Module Guide</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Program Chips */}
                        <div>
                          <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-2">
                            Featured Programs (Click to inspect):
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {uni.programs.map((prog, pidx) => (
                              <button 
                                key={pidx}
                                onClick={() => openUniversityProgram(activeCountry.id, uni.id, prog.name)}
                                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-800 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                              >
                                <span>{prog.name}</span>
                                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                                  {prog.fee}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 3: Cost of Living & Bank Solvency Guidelines */}
                <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                      💵
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        Living Cost &amp; Embassy Bank Solvency Guidelines
                      </h3>
                      <p className="text-xs text-slate-500">Transparent financial prerequisites to avoid embassy refusals.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    {activeCountry.solvency.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                        <span className="font-bold text-slate-900 block">{item.title}</span>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 4: Step-by-Step Departure Roadmap */}
                <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                      🚀
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        Step-by-Step Roadmap to Departure
                      </h3>
                      <p className="text-xs text-slate-500">Our calculated workflow from academic screening to European arrival.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {activeCountry.roadmap.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <span className="w-6 h-6 rounded-full bg-[#006837] text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="text-slate-800 font-medium mt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 5: Country FAQs (Collapsible Accordion) */}
                <section className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                      â“
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        Frequently Asked Questions (FAQ)
                      </h3>
                      <p className="text-xs text-slate-500">Verified answers directly from Senior Admissions Counselors.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {activeCountry.faqs.map((faq, idx) => {
                      const isExpanded = expandedFaqIndex === idx;
                      return (
                        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-colors">
                          <button 
                            type="button"
                            onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                            className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>

              {/* Right 4 Columns: Sticky Quick Evaluation Form */}
              <div className="lg:col-span-4 sticky top-6">
                <div className="bg-white border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 text-left">
                  <div>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Direct Counselor Desk
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                      Evaluate Your Profile
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Targeting: <strong className="text-emerald-700">{activeCountry.name}</strong>
                    </p>
                  </div>

                  <form onSubmit={(e) => handleLeadSubmit(e, 'landing')} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Target University / Subject</label>
                      <input 
                        type="text" 
                        readOnly 
                        value={selectedProgramTarget} 
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50/50 font-semibold text-emerald-950"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input type="text" required placeholder="e.g. Mahfuzur Rahman" className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                      <input type="tel" required placeholder="017xxxxxxxx" className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Applying Degree Level *</label>
                      <select className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                        <option value="Bachelor">Bachelor's Degree (Undergraduate)</option>
                        <option value="Master">Master's Degree (Postgraduate)</option>
                        <option value="PhD">Doctor of Philosophy (PhD)</option>
                        <option value="Diploma">Diploma / Foundation Pathway</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-slate-700">Academic Score (GPA/CGPA) *</label>
                        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[9px] font-bold">
                          <button 
                            type="button" 
                            onClick={() => setLandingGpaScale(5)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${landingGpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                          >
                            Scale 5.0 (HSC)
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setLandingGpaScale(4)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${landingGpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                          >
                            Scale 4.0 (Bachelor)
                          </button>
                        </div>
                      </div>
                      <input 
                        type="number" 
                        step="0.01" 
                        required 
                        placeholder={landingGpaScale === 5 ? "e.g. 4.75 (out of 5.0)" : "e.g. 3.40 (out of 4.0)"} 
                        min="1.0" 
                        max={landingGpaScale === 5 ? "5.00" : "4.00"} 
                        className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">English Proficiency / MOI Status *</label>
                      <select className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                        <option value="MOI Eligible">Medium of Instruction (MOI Waiver Eligible)</option>
                        <option value="IELTS 6.0+">IELTS 6.0 or above (or PTE 52+)</option>
                        <option value="IELTS 5.5">IELTS 5.5 (Europe &amp; Malaysia eligible)</option>
                        <option value="IELTS 5.0">IELTS 5.0 (Low-IELTS / Nursing)</option>
                        <option value="Planning Exam">Preparing to sit for exam soon</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Select Consultation Desk *</label>
                      <select className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                        <option value="Banani Head Office">Banani Head Office (Rosa Bella, Road 17)</option>
                        <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza)</option>
                        <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                        <option value="Online Video Meeting">Online Video Consultation</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs tracking-wide shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Profile for Free Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ============================================================ */}
        {/* LEVEL 3: SUBJECT & UNIVERSITY DEEP DIVE (THE 9 MODULES)      */}
        {/* ============================================================ */}
        {currentView === 'university' && activeCountry && activeUni && (
          <div className="space-y-8 sm:space-y-12 transition-all duration-300">
            
            {/* Top Action Navigation */}
            <nav className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <button onClick={navigateToLevel1} className="font-semibold text-slate-500 hover:text-emerald-700 cursor-pointer">
                  All Countries
                </button>
                <span className="text-slate-400">/</span>
                <button onClick={backToCountryLanding} className="font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 cursor-pointer">
                  <img src={FLAG_MAP[activeCountry.id] || ''} alt="" className="w-4 h-3 object-cover rounded-xs" />
                  <span>{activeCountry.name}</span>
                </button>
                <span className="text-slate-400">/</span>
                <span className="font-bold text-slate-900">{activeUni.name}</span>
              </div>

              <button 
                onClick={backToCountryLanding}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>â† Back to Country Guide</span>
              </button>
            </nav>

            {/* University Master Banner Header */}
            <section className="bg-gradient-to-br from-[#06301d] via-[#042517] to-[#02170e] text-white p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-emerald-800/60">
              <div className="max-w-4xl space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                    {activeUni.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                    {activeUni.type}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {activeUni.name}
                </h2>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
                  {activeUni.tagline}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-emerald-300 font-medium block">Upcoming Intakes:</span>
                    <span className="font-bold text-white block mt-0.5">{activeUni.intakes}</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 font-medium block">Tuition Range:</span>
                    <span className="font-bold text-white block mt-0.5">{activeUni.tuitionUG}</span>
                  </div>
                  <div>
                    <span className="text-emerald-300 font-medium block">Scholarship Scope:</span>
                    <span className="font-bold text-amber-300 block mt-0.5">{activeUni.scholarship}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* The 9 Comprehensive Modules Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left 8 Columns: 9 Modules */}
              <div className="lg:col-span-8 space-y-8 text-left">

                {/* Module 1: Program Name & Degree Levels */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Program Name &amp; Degree Levels</h3>
                      <p className="text-xs text-slate-500">Pick any program below to evaluate your eligibility.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeUni.programs.map((prog, idx) => (
                      <div key={idx} className="flex flex-col gap-1.5">
                        <div 
                          onClick={() => setSelectedProgramTarget(prog.name)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                            selectedProgramTarget === prog.name 
                              ? 'bg-emerald-50 border-emerald-500 shadow-xs' 
                              : 'bg-slate-50 border-slate-200 hover:border-emerald-300'
                          }`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded inline-block mb-1">
                            {prog.level}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 leading-snug">{prog.name}</h4>
                          <span className="text-[11px] font-extrabold text-emerald-700 block mt-1">{prog.fee}</span>
                        </div>
                        {selectedProgramTarget === prog.name && (
                          <div className="p-4 bg-white border border-emerald-100 rounded-2xl text-xs text-slate-600 mt-0.5 animate-in slide-in-from-top-1 fade-in duration-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                            <span className="font-bold text-slate-800 block mb-1.5 flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                              Course Overview
                            </span>
                            <p className="leading-relaxed">
                              {prog.description || 'Detailed course curriculum, module breakdown, and subject overview will be provided by your assigned counselor. Please complete the profile form to request the full syllabus.'}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module 2: Why Study There & Highlights */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Why Study There &amp; Key Highlights</h3>
                      <p className="text-xs text-slate-500">Key institutional advantages and regional reputation.</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {activeUni.whyStudy.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs text-slate-800 font-medium">
                        <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 fill-amber-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module 3: Entry Requirements (Academic & English) */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Entry Requirements (Academic &amp; English)</h3>
                      <p className="text-xs text-slate-500">Academic criteria, minimum GPA, and test waiver rules.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-900 block mb-1">Undergraduate / Bachelor's:</span>
                      <p className="text-slate-600 leading-relaxed">{activeUni.entryUG}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-900 block mb-1">Postgraduate / Master's:</span>
                      <p className="text-slate-600 leading-relaxed">{activeUni.entryPG}</p>
                    </div>
                  </div>
                </div>

                {/* Module 4: Tuition Fees Structure */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Tuition Fees Structure</h3>
                      <p className="text-xs text-slate-500">Official annual and program fee estimates.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                      <span className="font-bold text-blue-900 block">Undergraduate Tuition:</span>
                      <span className="text-sm font-extrabold text-blue-950 block mt-1">{activeUni.tuitionUG}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                      <span className="font-bold text-blue-900 block">Postgraduate Tuition:</span>
                      <span className="text-sm font-extrabold text-blue-950 block mt-1">{activeUni.tuitionPG}</span>
                    </div>
                  </div>
                </div>

                {/* Module 5: Cost of Living & Bank Fund Requirements */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm">5</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Cost of Living &amp; Bank Fund Solvency</h3>
                      <p className="text-xs text-slate-500">Accommodation, meals, and embassy statement maturity.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-700 block">Monthly Living Cost:</span>
                      <span className="text-sm font-bold text-slate-900 block mt-0.5">{activeUni.costAndBank.monthlyCost}</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-700 block">Bank Solvency Requirement:</span>
                      <span className="text-sm font-bold text-emerald-800 block mt-0.5">{activeUni.costAndBank.bankFundSingle}</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{activeUni.costAndBank.bankMaturity}</span>
                    </div>
                  </div>
                </div>

                {/* Module 6: Available Scholarship Opportunity */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm">6</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Available Scholarship Opportunities</h3>
                      <p className="text-xs text-slate-500">Full-ride waivers, state quotas, and institutional grants.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-100 text-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Award className="w-4 h-4 text-amber-500" />
                      <h4 className="text-sm font-bold text-slate-900">{activeUni.scholarship}</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Applicants through Study First Info receive direct profile matching for maximum academic waiver eligibility.
                    </p>
                  </div>
                </div>

                {/* Module 7: Jobs & Career Opportunity */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm">7</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Jobs &amp; Career Opportunities (PSW &amp; PR)</h3>
                      <p className="text-xs text-slate-500">Post-Study Work Permit duration and market demand.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    {activeUni.careerAndPsw}
                  </div>
                </div>

                {/* Module 8: Part-Time Job Opportunity */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">8</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Part-Time Job Opportunities</h3>
                      <p className="text-xs text-slate-500">Legal weekly work hours during study and vacation periods.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-teal-700 shrink-0" />
                    <span>{activeUni.partTimeJobs}</span>
                  </div>
                </div>

                {/* Module 9: Application Process & Deadlines */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">9</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Application Process &amp; Deadlines</h3>
                      <p className="text-xs text-slate-500">Step-by-step roadmap from profile screening to visa stamp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Deadline Notice:</strong> {activeUni.deadlines}</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeUni.applicationSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#006837] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="mt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right 4 Columns: Sticky University Evaluation Form */}
              <div className="lg:col-span-4 sticky top-6">
                <div className="bg-white border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 text-left">
                  <div>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Direct Evaluation Desk
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                      Evaluate Your Eligibility
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Applying for: <strong className="text-emerald-700">{activeUni.name}</strong>
                    </p>
                  </div>

                  <form onSubmit={(e) => handleLeadSubmit(e, 'program')} className="space-y-3.5 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Selected Degree / Program *</label>
                      <input 
                        type="text" 
                        readOnly 
                        value={selectedProgramTarget} 
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50/50 font-semibold text-emerald-950"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input type="text" required placeholder="e.g. Mahfuzur Rahman" className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                      <input type="tel" required placeholder="017xxxxxxxx" className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input type="email" required placeholder="name@email.com" className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="font-bold text-slate-700">Academic Score (GPA / CGPA) *</label>
                        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[9px] font-bold">
                          <button 
                            type="button" 
                            onClick={() => setProgGpaScale(5)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${progGpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                          >
                            Scale 5.0 (HSC)
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setProgGpaScale(4)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${progGpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-600'}`}
                          >
                            Scale 4.0 (Bachelor)
                          </button>
                        </div>
                      </div>
                      <input 
                        type="number" 
                        step="0.01" 
                        required 
                        placeholder={progGpaScale === 5 ? "e.g. 4.75 (out of 5.0)" : "e.g. 3.40 (out of 4.0)"} 
                        min="1.0" 
                        max={progGpaScale === 5 ? "5.00" : "4.00"} 
                        className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">English Test / MOI Status *</label>
                      <select className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                        <option value="MOI Eligible">Medium of Instruction (MOI Waiver Eligible)</option>
                        <option value="IELTS 6.0+">IELTS 6.0 or above (or PTE 52+)</option>
                        <option value="IELTS 5.5">IELTS 5.5</option>
                        <option value="IELTS 5.0">IELTS 5.0</option>
                        <option value="Planning Exam">Preparing to sit for exam soon</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Select Consultation Desk *</label>
                      <select className="w-full text-xs px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                        <option value="Banani Head Office">Banani Head Office (Rosa Bella, Road 17)</option>
                        <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza)</option>
                        <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                        <option value="Online Video Meeting">Online Video Consultation</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs tracking-wide shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Profile for Evaluation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

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

