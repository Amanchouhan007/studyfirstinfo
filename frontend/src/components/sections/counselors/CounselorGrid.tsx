import { useState } from 'react';
import { Check, Calendar, MessageCircle, Star, RefreshCw, PhoneCall, ArrowRight } from 'lucide-react';
import { ALL_COUNSELORS, type Counselor } from '../../../data/counselorsData';

interface CounselorGridProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  onOpenBooking: (counselor: Counselor) => void;
  onOpenFeedback: (counselor: Counselor) => void;
}

export default function CounselorGrid({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  onOpenBooking,
  onOpenFeedback
}: CounselorGridProps) {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter counselors based on search term & country filter
  const filteredCounselors = ALL_COUNSELORS.filter((c) => {
    // 1. Country filter
    if (activeFilter !== 'All') {
      const filterLower = activeFilter.toLowerCase();
      const matchesCountryTag = c.tags.some(tag => tag.toLowerCase().includes(filterLower.replace(/[^a-z]/gi, '')));
      const matchesCountryKey = filterLower.includes(c.countryKey) || c.countryKey.includes(filterLower.replace(/[^a-z]/gi, ''));
      if (!matchesCountryTag && !matchesCountryKey) return false;
    }

    // 2. Search term filter
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      const matchName = c.name.toLowerCase().includes(q);
      const matchBio = c.bio.toLowerCase().includes(q);
      const matchBranch = c.branch.toLowerCase().includes(q);
      const matchTag = c.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchBio && !matchBranch && !matchTag) return false;
    }

    return true;
  });

  const displayedCounselors = filteredCounselors.slice(0, visibleCount);

  return (
    <section className="py-8 sm:py-12 bg-gray-50/70" id="counselors-grid-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="text-xs text-gray-500 font-semibold">
            Showing <strong className="text-primary">{displayedCounselors.length}</strong> of{' '}
            <strong className="text-primary">{filteredCounselors.length}</strong> qualified counselors
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Branch:</span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Banani &bull; Farmgate &bull; Sylhet
            </span>
          </div>
        </div>

        {/* Empty Search Result State */}
        {filteredCounselors.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-gray-200 shadow-sm max-w-xl mx-auto my-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center text-2xl font-bold">
              🔍
            </div>
            <h3 className="text-xl font-bold text-gray-900">No counselors match your search</h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
              We couldn&apos;t find anyone matching &quot;<strong>{searchTerm || activeFilter}</strong>&quot;. Reset your filters or let our smart system auto-match you.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
                className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-green-900 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw size={14} /> Reset Filters
              </button>
            </div>
          </div>
        ) : (
          /* Counselor Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedCounselors.map((counselor) => (
              <div 
                key={counselor.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/90 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Banner with Branch Location */}
                  <div className="h-12 bg-gradient-to-r from-primary via-emerald-800 to-green-900 w-full relative px-4 flex items-center justify-end">
                    <span className="text-[10px] text-emerald-200 font-extrabold uppercase tracking-wider">
                      {counselor.branch}
                    </span>
                  </div>
                  
                  <div className="px-6 pb-6 pt-0 relative flex flex-col items-center">
                    
                    {/* Circular Avatar */}
                    <div className="relative -mt-9 mb-2">
                      <img 
                        src={counselor.image} 
                        alt={counselor.name} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md bg-white"
                      />
                      {counselor.active && (
                        <div 
                          className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full ring-2 ring-emerald-200" 
                          title="Online at Desk"
                        />
                      )}
                    </div>

                    {/* Verified Badge */}
                    <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full mb-2 border border-emerald-200">
                      <Check size={12} strokeWidth={3} /> Verified SFI Counselor
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1 text-center font-heading">
                      {counselor.name}
                    </h3>
                    
                    {counselor.active ? (
                      <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5 mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        Available for Instant Call
                      </div>
                    ) : (
                      <div className="text-[11px] font-medium text-gray-400 mb-3">Desk Scheduled</div>
                    )}

                    {/* Specialty Tags */}
                    <div className="flex flex-wrap justify-center gap-1.5 mb-4 min-h-[3.25rem] items-center">
                      {counselor.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setSearchTerm(tag.replace(/[^a-zA-Z]/g, '').trim());
                          }}
                          className="text-[11px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-0.5 rounded-full hover:border-emerald-500 hover:text-emerald-700 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="w-full grid grid-cols-3 gap-2 bg-gray-50/80 rounded-2xl p-2.5 mb-4 border border-gray-100 text-center">
                      <div>
                        <div className="font-extrabold text-primary text-sm sm:text-base">{counselor.stats.exp}</div>
                        <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Experience</div>
                      </div>
                      <div className="border-x border-gray-200">
                        <div className="font-extrabold text-emerald-700 text-sm sm:text-base">{counselor.stats.success}</div>
                        <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Visa Success</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-primary text-sm sm:text-base">{counselor.stats.students}</div>
                        <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Placed</div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < counselor.rating ? "currentColor" : "none"} className={i >= counselor.rating ? "text-gray-300" : ""} />
                      ))}
                      <span className="text-xs font-bold text-gray-600 ml-1">5.0 / 5.0</span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-gray-600 text-center line-clamp-2 h-9 mb-5 leading-relaxed">
                      &ldquo;{counselor.bio}&rdquo;
                    </p>

                    {/* Action Buttons - Fully Working Interactive Triggers */}
                    <div className="w-full space-y-2 mb-3">
                      <button 
                        type="button"
                        onClick={() => onOpenBooking(counselor)}
                        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-green-700 text-white py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer hover:shadow-md active:scale-98"
                      >
                        <Calendar size={16} /> Book Appointment
                      </button>
                      <button 
                        type="button"
                        onClick={() => onOpenBooking(counselor)}
                        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer"
                      >
                        <MessageCircle size={16} /> WhatsApp Direct Message
                      </button>
                    </div>

                    <button 
                      type="button"
                      onClick={() => onOpenFeedback(counselor)}
                      className="text-xs font-bold text-accent hover:text-primary transition-colors cursor-pointer py-1"
                    >
                      View Student Reviews ({counselor.stats.students}) →
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Working Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gray-200 pt-8">
          {displayedCounselors.length < filteredCounselors.length && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="py-3 px-6 rounded-xl bg-white border border-gray-300 hover:border-accent text-gray-800 font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
            >
              <span>Load More Counselors</span>
              <ArrowRight size={15} />
            </button>
          )}

          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-[#006837] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall size={16} />
            <span>Direct Banani Hotline: +880 1712-345678</span>
          </a>
        </div>

      </div>
    </section>
  );
}
