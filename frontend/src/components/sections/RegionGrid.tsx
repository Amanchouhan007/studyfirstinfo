import { useState, useRef, useEffect, useCallback } from 'react';
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
  Award,
  Calendar,
  Briefcase,
  Languages
} from 'lucide-react';
import { pathways } from '../../data/pathwaysData';

export default function RegionGrid() {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const [activeFilter, setActiveFilter] = useState<'all' | 'europe' | 'russia' | 'asia' | 'commonwealth'>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Mouse drag to scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const cardList = Object.values(pathways);
  const filteredCards = activeFilter === 'all' 
    ? cardList 
    : cardList.filter((card) => card.category === activeFilter);

  // Check scroll position to toggle navigation buttons & progress
  const checkScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);

    // Calculate which card is currently most in view
    const cards = el.querySelectorAll<HTMLElement>('.pathway-card-item');
    if (cards.length > 0) {
      let closestIdx = 0;
      let minDistance = Infinity;
      const containerLeft = el.getBoundingClientRect().left;

      cards.forEach((card, idx) => {
        const cardLeft = card.getBoundingClientRect().left;
        const distance = Math.abs(cardLeft - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });
      setActiveCardIndex(closestIdx);
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('resize', checkScrollState);
    
    // Initial check
    const timer = setTimeout(checkScrollState, 150);

    return () => {
      el.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('resize', checkScrollState);
      clearTimeout(timer);
    };
  }, [filteredCards, checkScrollState]);

  // Reset scroll position on filter change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    setActiveCardIndex(0);
    setTimeout(checkScrollState, 200);
  }, [activeFilter, checkScrollState]);

  // Navigate to specific index
  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>('.pathway-card-item');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  // Step scroll left/right
  const scroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>('.pathway-card-item');
    if (cards.length === 0) return;

    let targetIndex = direction === 'left' ? activeCardIndex - 1 : activeCardIndex + 1;
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex >= cards.length) targetIndex = cards.length - 1;

    scrollToIndex(targetIndex);
  };

  // Mouse Drag to Scroll Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setTimeout(() => setHasMoved(false), 50);
  };

  const handleOpenPathway = (key: string) => {
    if (hasMoved) return;
    navigate(`/pathways/${key}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountryClick = (e: React.MouseEvent, countryName: string) => {
    e.stopPropagation();
    if (hasMoved) return;
    const raw = countryName.toLowerCase().trim();
    let countryKey = 'hungary';
    if (raw.includes('hungary')) countryKey = 'hungary';
    else if (raw.includes('uk') || raw.includes('england') || raw.includes('united kingdom') || raw.includes('wales') || raw.includes('london')) countryKey = 'united-kingdom';
    else if (raw.includes('malaysia') || raw.includes('unisza') || raw.includes('mila') || raw.includes('segi') || raw.includes('inti') || raw.includes('apu')) countryKey = 'malaysia';
    else if (raw.includes('zealand') || raw.includes('new zealand') || raw.includes('nz')) countryKey = 'new-zealand';
    else if (raw.includes('germany') || raw.includes('munich') || raw.includes('berlin') || raw.includes('tum')) countryKey = 'germany';
    else if (raw.includes('ireland') || raw.includes('dublin') || raw.includes('ucd') || raw.includes('trinity') || raw.includes('nci')) countryKey = 'ireland';
    else if (raw.includes('thailand') || raw.includes('bangkok') || raw.includes('ait') || raw.includes('stamford')) countryKey = 'thailand';
    else if (raw.includes('korea') || raw.includes('sookmyung') || raw.includes('gachon') || raw.includes('kmcu')) countryKey = 'south-korea';
    else if (raw.includes('cyprus')) countryKey = 'cyprus';
    else if (raw.includes('greece') || raw.includes('athens')) countryKey = 'greece';
    else if (raw.includes('lithuania') || raw.includes('smk')) countryKey = 'lithuania';
    else if (raw.includes('china') || raw.includes('hit') || raw.includes('zhejiang')) countryKey = 'china';
    else if (raw.includes('russia') || raw.includes('novosibirsk') || raw.includes('moscow')) countryKey = 'russia';
    else if (raw.includes('poland') || raw.includes('czech') || raw.includes('spain') || raw.includes('bulgaria') || raw.includes('malta')) countryKey = 'hungary';
    else {
      countryKey = encodeURIComponent(countryName);
    }

    navigate(`/countries?country=${countryKey}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="routes-wrapper" className="pt-12 pb-20 scroll-mt-16 bg-[#f8faf9] text-[#0f172a] relative overflow-hidden select-none">
      
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
              <div className="text-xs font-bold font-mono tracking-widest text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs flex items-center gap-1.5">
                <span className="text-emerald-800 font-extrabold text-sm">{String(activeCardIndex + 1).padStart(2, '0')}</span>
                <span className="text-slate-300 font-normal">/</span>
                <span className="text-slate-500">{String(filteredCards.length).padStart(2, '0')}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  aria-label="Previous pathway"
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer border ${
                    canScrollLeft
                      ? 'bg-white hover:bg-emerald-700 text-slate-800 hover:text-white border-slate-300/90 shadow-sm hover:shadow-md hover:border-emerald-700 active:scale-95'
                      : 'bg-slate-100 text-slate-300 border-slate-200/60 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ChevronLeft size={22} className="stroke-[2.5]" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  aria-label="Next pathway"
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer border ${
                    canScrollRight
                      ? 'bg-white hover:bg-emerald-700 text-slate-800 hover:text-white border-slate-300/90 shadow-sm hover:shadow-md hover:border-emerald-700 active:scale-95'
                      : 'bg-slate-100 text-slate-300 border-slate-200/60 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ChevronRight size={22} className="stroke-[2.5]" />
                </button>
              </div>
            </div>
            
            <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
              Swipe, drag or click arrows to browse
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
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20 scale-[1.02]'
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
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20 scale-[1.02]'
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
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20 scale-[1.02]'
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
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20 scale-[1.02]'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-500 hover:text-emerald-700 shadow-xs'
            }`}
          >
            🌏 Asia (China, Korea, Thai & MY)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('commonwealth')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              activeFilter === 'commonwealth'
                ? 'bg-[#006837] text-white border-[#006837] shadow-md shadow-emerald-950/20 scale-[1.02]'
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
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border bg-white hover:bg-[#006837] text-slate-800 hover:text-white border-slate-300/90 hover:border-[#006837] hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={26} className="stroke-[2.5]" />
            </button>
          )}

          <div 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-6 sm:gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="pathway-card-item snap-start w-[88vw] sm:w-[370px] md:w-[390px] lg:w-[410px] shrink-0 bg-gradient-to-b from-[#0a2f21] via-[#051c14] to-[#02100a] border border-emerald-500/20 hover:border-emerald-400/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_36px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden text-white group"
              >
                {/* Metallic top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                
                {/* Corner ambient radial glow */}
                <div className={`absolute -right-20 -top-20 w-48 h-48 ${card.glowColor} rounded-full blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-125`} />

                <div className="relative z-10">
                  
                  {/* Top Row: Luxury Icon Tile + Region Code */}
                  <div className="flex items-center justify-between mb-4">
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
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full ${card.badgeClass} shadow-xs border border-current/20`}>
                      <Award size={13} className="shrink-0" />
                      <span>{card.badge}</span>
                    </span>
                  </div>

                  {/* Pathway Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading mb-3 group-hover:text-emerald-200 transition-colors">
                    {card.title}
                  </h3>

                  {/* Quick High-Value Info Pills (Intakes, Work Rights, Language) */}
                  <div className="grid grid-cols-2 gap-2 mb-4 bg-white/[0.04] p-3 rounded-2xl border border-white/5 text-[11px]">
                    <div className="flex items-center gap-1.5 text-emerald-200">
                      <Calendar size={13} className="text-emerald-400 shrink-0" />
                      <span className="truncate font-semibold">{card.details.intakes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-200">
                      <Briefcase size={13} className="text-emerald-400 shrink-0" />
                      <span className="truncate font-semibold">{card.details.workRights}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1.5 text-emerald-300/90 pt-1 border-t border-white/5">
                      <Languages size={13} className="text-emerald-400 shrink-0" />
                      <span className="truncate font-medium">{card.details.english}</span>
                    </div>
                  </div>

                  {/* Clickable Destination Tags */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-emerald-300/70 uppercase tracking-wider block mb-1.5">
                      Included Destinations ({card.countries.length}):
                    </span>
                    <div className="text-xs font-medium flex flex-wrap items-center gap-1.5 max-h-24 overflow-y-auto pr-1">
                      {card.countries.map((country) => (
                        <button
                          key={country}
                          type="button"
                          onClick={(e) => handleCountryClick(e, country)}
                          className="country-link hover:text-white cursor-pointer transition-all bg-white/[0.07] hover:bg-emerald-500/30 text-emerald-200 px-2.5 py-1 rounded-lg border border-emerald-500/20 hover:border-emerald-400/50 text-[11px] font-semibold flex items-center gap-1 shadow-2xs"
                        >
                          <span>{country}</span>
                          <ArrowUpRight size={10} className="text-emerald-400 opacity-70" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* High-Intent Feature Bullet Points */}
                  <ul className="space-y-2.5 mb-5 text-xs sm:text-[13px] text-emerald-100/90 leading-snug pt-3 border-t border-white/[0.08]">
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
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border bg-white hover:bg-[#006837] text-slate-800 hover:text-white border-slate-300/90 hover:border-[#006837] hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight size={26} className="stroke-[2.5]" />
            </button>
          )}

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
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === idx 
                    ? 'w-9 bg-[#006837]' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Micro Helper Note */}
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-800 font-semibold">
              <ShieldCheck size={15} className="text-emerald-700" />
              <span>Zero Advance File Opening Fees</span>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Compass size={15} className="text-emerald-700" />
              <span>Click country tag for detailed dossier</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
