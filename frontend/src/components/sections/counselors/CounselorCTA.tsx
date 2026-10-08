import { Sparkles, ArrowRight } from 'lucide-react';

interface CounselorCTAProps {
  onOpenAutoMatch: () => void;
}

export default function CounselorCTA({ onOpenAutoMatch }: CounselorCTAProps) {
  return (
    <section className="bg-primary text-white py-10 sm:py-14 relative overflow-hidden">
      <div className="absolute -left-20 -top-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/15">
          <Sparkles size={13} className="text-amber-300" />
          <span>Smart Academic Allocation Engine</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
          Can&apos;t find the right counselor for your exact profile?
        </h2>
        
        <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Our intelligent routing system matches your GPA, budget, study gap, and target country with the most successful senior counselor at Banani, Farmgate, or Sylhet within 2 hours.
        </p>

        <div className="pt-2">
          <button 
            type="button"
            onClick={onOpenAutoMatch}
            className="bg-emphasis hover:bg-yellow-400 text-gray-950 font-black text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Get Auto-Matched Free</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="text-[11px] text-emerald-200/80 font-medium">
          Zero file opening fee &bull; 100% Free Initial Assessment &bull; Direct WhatsApp Follow-up
        </div>
      </div>
    </section>
  );
}
