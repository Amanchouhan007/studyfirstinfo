import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { pathways } from '../../data/pathwaysData';

export default function RegionGrid() {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [activeFilter, setActiveFilter] = useState<'all' | 'europe' | 'russia' | 'asia' | 'commonwealth'>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cardList = Object.values(pathways);
  const filteredCards = activeFilter === 'all' 
    ? cardList 
    : cardList.filter((card) => card.category === activeFilter);

  // Check scroll position to toggle navigation buttons & progress
  const checkScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);

    // Approximate active card index
    const cardWidth = 390 + 24;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveCardIndex(Math.min(Math.max(0, index), filteredCards.length - 1));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollState);
    checkScrollState();
    return () => el.removeEventListener('scroll', checkScrollState);
  }, [filteredCards]);

  // Reset scroll position on filter change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardStep = carouselRef.current.clientWidth < 640 ? 320 + 24 : 390 + 28;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -cardStep : cardStep,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = 390 + 24;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  const handleOpenPathway = (key: string) => {
    navigate(`/pathways/${key}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <section id="routes-wrapper" className="pt-12 pb-20 scroll-mt-16 bg-[#f8faf9] text-[#0f172a] relative overflow-hidden">
      
      {/* Premium ambient backdrop lighting */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-emerald-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* HEADER: LUXURY TYPOGRAPHY + CAROUSEL NAVIGATION CONTROLS */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3.5 border border-emerald-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <Sparkles size={13} className="text-emerald-700" />
              Study First Info Verified Corridors
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#053321] tracking-tight font-heading leading-tight">
              Optimized Routes for High–Value Success
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mt-2">
              Browse our curated regional pathways where Bangladeshi students secure 100% scholarships, free tuition, and verified visa approval frameworks.
            </p>
          </div>

          {/* Luxury Carousel Controls Bar */}
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="flex items-center gap-3">
              <div className="text-xs font-bold font-mono tracking-widest text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-emerald-800 font-extrabold">{String(activeCardIndex + 1).padStart(2, '0')}</span>
                <span className="text-slate-400 mx-1">/</span>
                <span>{String(filteredCards.length).padStart(2, '0')}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Previous slide"
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer border ${
                    canScrollLeft
                      ? 'bg-white hover:bg-emerald-600 hover:text-white text-slate-800 border-slate-300/80 shadow-sm hover:shadow-md hover:border-emerald-600 active:scale-95'
                      : 'bg-slate-100 text-slate-300 border-slate-200/60 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Next slide"
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer border ${
                    canScrollRight
                      ? 'bg-white hover:bg-emerald-600 hover:text-white text-slate-800 border-slate-300/80 shadow-sm hover:shadow-md hover:border-emerald-600 active:scale-95'
                      : 'bg-slate-100 text-slate-300 border-slate-200/60 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
              Swipe or click to slide
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ELEVATED CATEGORY PILL FILTER BAR                        */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-500 hover:text-emerald-700 shadow-xs'
            }`}
          >
            All Pathways ({cardList.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('europe')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              activeFilter === 'europe'
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-500 hover:text-emerald-700 shadow-xs'
            }`}
          >
            🇪🇺 Schengen & Europe
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('russia')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              activeFilter === 'russia'
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-500 hover:text-emerald-700 shadow-xs'
            }`}
          >
            🇷🇺 Russia & Eurasia
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('asia')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              activeFilter === 'asia'
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-500 hover:text-emerald-700 shadow-xs'
            }`}
          >
            🌏 Asia (China & Korea)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('commonwealth')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              activeFilter === 'commonwealth'
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-500 hover:text-emerald-700 shadow-xs'
            }`}
          >
            🇬🇧 UK & Oceania (NZ)
          </button>
        </div>

        {/* ======================================================== */}
        {/* LUXURY CAROUSEL TRACK: HORIZONTAL SCROLL WITH SNAP        */}
        {/* ======================================================== */}
        <div className="relative group/carousel">
          {/* Floating Left Arrow Navigation Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute -left-3 sm:-left-5 lg:-left-6 top-[45%] -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border cursor-pointer ${
              canScrollLeft
                ? 'bg-white hover:bg-[#006837] text-slate-800 hover:text-white border-slate-300/90 hover:border-[#006837] hover:scale-110 active:scale-95'
                : 'bg-white/70 text-slate-300 border-slate-200/60 cursor-not-allowed opacity-0 sm:opacity-30'
            }`}
          >
            <ChevronLeft size={26} className="stroke-[2.5]" />
          </button>

          <div 
            ref={carouselRef}
            className="flex gap-6 sm:gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="snap-start w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[400px] shrink-0 bg-gradient-to-b from-[#0a2f21] via-[#051c14] to-[#02100a] border border-emerald-500/20 hover:border-emerald-400/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden text-white group"
              >
                {/* Metallic top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                
                {/* Corner ambient radial glow */}
                <div className={`absolute -right-20 -top-20 w-48 h-48 ${card.glowColor} rounded-full blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-125`} />

                <div className="relative z-10">
                  
                  {/* Top Row: Luxury Icon Tile + Region Code */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white/[0.08] border border-emerald-400/30 flex items-center justify-center text-emerald-300 text-2xl font-bold backdrop-blur-md shadow-inner shadow-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                      {card.icon}
                    </div>
                    
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold tracking-widest text-emerald-300 uppercase">
                        {card.regionCode}
                      </span>
                    </div>
                  </div>

                  {/* Micro-Pill Badge */}
                  <div className="mb-3">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full ${card.badgeClass} shadow-xs border border-current/20`}>
                      <Award size={12} className="shrink-0" />
                      <span>{card.badge}</span>
                    </span>
                  </div>

                  {/* Pathway Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading mb-3 group-hover:text-emerald-200 transition-colors">
                    {card.title}
                  </h3>

                  {/* Clickable Destination Tags */}
                  <div className="mb-5">
                    <span className="text-[10px] font-bold text-emerald-300/60 uppercase tracking-wider block mb-1.5">
                      Included Destinations:
                    </span>
                    <div className="text-xs font-medium flex flex-wrap items-center gap-1.5">
                      {card.countries.map((country) => (
                        <button
                          key={country}
                          type="button"
                          onClick={() => handleCountryClick(country)}
                          className="country-link hover:text-white cursor-pointer transition-all bg-white/[0.06] hover:bg-emerald-500/30 text-emerald-200 px-2.5 py-0.5 rounded-lg border border-emerald-500/20 hover:border-emerald-400/50 text-[11px] font-semibold flex items-center gap-1 shadow-2xs"
                        >
                          <span>{country}</span>
                          <ArrowUpRight size={10} className="text-emerald-400 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* High-Intent Feature Bullet Points */}
                  <ul className="space-y-3 mb-6 text-xs sm:text-sm text-emerald-100/90 leading-snug pt-3 border-t border-white/[0.08]">
                    {card.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5 shadow-2xs">
                          <Check size={10} className="stroke-[3]" />
                        </span>
                        <span>
                          {pt.prefix && <strong className="text-white font-bold">{pt.prefix}</strong>}
                          {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Action Button: High-End Gradient CTA */}
                <div className="relative z-10 pt-4 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => handleOpenPathway(card.id)}
                    className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-[#00703c] to-[#005a2f] hover:from-emerald-500 hover:to-emerald-600 text-white border border-emerald-400/30 text-xs sm:text-sm font-bold flex items-center justify-between transition-all duration-300 shadow-lg shadow-emerald-950/60 hover:shadow-emerald-500/30 cursor-pointer group/btn active:scale-98"
                  >
                    <span className="tracking-wide">Explore This Pathway</span>
                    <div className="w-7 h-7 rounded-xl bg-white/15 flex items-center justify-center group-hover/btn:translate-x-1 group-hover/btn:bg-white/25 transition-all">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Floating Right Arrow Navigation Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute -right-3 sm:-right-5 lg:-right-6 top-[45%] -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border cursor-pointer ${
              canScrollRight
                ? 'bg-white hover:bg-[#006837] text-slate-800 hover:text-white border-slate-300/90 hover:border-[#006837] hover:scale-110 active:scale-95'
                : 'bg-white/70 text-slate-300 border-slate-200/60 cursor-not-allowed opacity-0 sm:opacity-30'
            }`}
          >
            <ChevronRight size={26} className="stroke-[2.5]" />
          </button>

          {/* Subtle fade hint on right side on desktop when scroll is available */}
          {canScrollRight && (
            <div className="hidden xl:block pointer-events-none absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-[#f8faf9]/80 to-transparent z-10" />
          )}
        </div>

        {/* Carousel Pagination Progress Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-2">
          
          {/* Dots Track */}
          <div className="flex items-center gap-2">
            {filteredCards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Jump to ${card.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === idx 
                    ? 'w-8 bg-[#006837]' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Micro Helper Note */}
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <ShieldCheck size={14} className="text-emerald-700" />
              <span>Zero Advance File Opening Fees</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Compass size={14} className="text-emerald-700" />
              <span>Click country tag for detailed dossier</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
