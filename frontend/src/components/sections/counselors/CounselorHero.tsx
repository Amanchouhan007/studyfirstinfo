import { Search, X } from 'lucide-react';

interface CounselorHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  totalFound: number;
}

export default function CounselorHero({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  totalFound
}: CounselorHeroProps) {
  const filters = [
    'All',
    '🇩🇪 Germany',
    '🇭🇺 Hungary',
    '🇬🇧 UK',
    '🇳🇿 New Zealand',
    '🇲🇾 Malaysia',
    '🇨🇳 China',
    '🇸🇪 Sweden',
    '🇷🇺 Russia',
    'Others'
  ];

  return (
    <section className="bg-light-mint pt-8 pb-8 sm:pt-10 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-semibold text-gray-500 mb-2">
          <span className="hover:text-primary cursor-pointer transition-colors">Home</span> &gt; <span className="text-primary font-bold">Counselors</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-2 tracking-tight">
          Find Your Expert Counselor
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          Connect with destination specialists — verified, experienced, and ready to guide you to your dream university with honest advice.
        </p>
        
        {/* Working Search Bar */}
        <div className="max-w-2xl mx-auto mb-5 sm:mb-6 relative shadow-md rounded-full">
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, country (e.g. Hungary, Germany), or specialty (e.g. DAAD, CSC)..." 
            className="w-full bg-white rounded-full py-2.5 sm:py-3.5 pl-5 sm:pl-6 pr-24 sm:pr-32 text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent border border-gray-100 shadow-inner"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-20 sm:right-28 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full cursor-pointer"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
          <button 
            type="button"
            className="absolute right-1 sm:right-1.5 top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 bg-accent hover:bg-green-700 text-white rounded-full px-4 sm:px-6 text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1 sm:gap-1.5 cursor-pointer active:scale-95 shadow-sm"
          >
            <Search size={14} className="shrink-0" /> 
            <span>Search</span>
          </button>
        </div>

        {/* Filter Pills with Active Counts */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  isActive 
                    ? 'bg-accent text-white border-accent shadow-md scale-105' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-accent hover:text-accent shadow-2xs'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Live Search Status Bar */}
        {(searchTerm || activeFilter !== 'All') && (
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 bg-white/80 rounded-full border border-emerald-200 text-xs font-semibold text-emerald-800 animate-in fade-in">
            <span>Filtering: <strong>{activeFilter !== 'All' ? activeFilter : 'All'}</strong></span>
            {searchTerm && <span>&bull; Query: &quot;<strong>{searchTerm}</strong>&quot;</span>}
            <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full text-[10px] font-black">
              {totalFound} counselor{totalFound !== 1 ? 's' : ''} found
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All');
              }}
              className="text-rose-600 hover:text-rose-800 ml-1 text-[11px] underline cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
