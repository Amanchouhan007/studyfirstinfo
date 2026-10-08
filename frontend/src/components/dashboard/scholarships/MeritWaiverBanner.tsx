import { Award, Download, CheckCircle2 } from 'lucide-react';

export default function MeritWaiverBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 rounded-2xl p-6 sm:p-7 shadow-sm text-gray-900 mb-8 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-15 pointer-events-none">
        <Award size={180} />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-black/10 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-primary">
            <span>🏅</span> YOU QUALIFY &mdash; 100% Service Fee Waiver
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 leading-tight">
            Study First Info Merit Excellence Honor
          </h2>
          <p className="text-sm font-medium text-gray-800 leading-relaxed">
            Your dual A+ SSC &amp; HSC grades automatically qualify you for a complete service fee waiver.
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs font-bold text-gray-900">
            <CheckCircle2 size={15} className="text-emerald-900" />
            Approved by Admin ✅ &bull; Sep 8, 2026
          </div>
        </div>

        <div className="shrink-0">
          <button
            onClick={() => alert('Downloading official Merit Waiver Certificate (PDF)...')}
            className="inline-flex items-center gap-2 bg-accent hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md active:scale-95"
          >
            <Download size={16} />
            Download Waiver Certificate &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
