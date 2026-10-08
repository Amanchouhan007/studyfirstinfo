import { ArrowRight, Medal, CheckCircle2 } from 'lucide-react';

export default function ScholarshipStatus() {
  return (
    <section className="bg-gradient-to-r from-primary to-[#104b3a] rounded-2xl p-6 md:p-8 shadow-lg text-white overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-full bg-accent/20 skew-x-12 translate-x-16"></div>
      
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-50">
          <span className="text-2xl">🏆</span> Scholarship Eligibility Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Score */}
          <div className="flex flex-col items-center justify-center md:border-r border-white/20 pb-6 md:pb-0">
            <div className="text-5xl font-extrabold text-white mb-1 tracking-tighter">97%</div>
            <div className="text-sm font-semibold text-green-200 uppercase tracking-widest">Eligibility Score</div>
          </div>

          {/* Middle: Progress Details */}
          <div className="flex flex-col justify-center space-y-3 md:px-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-100">SSC/HSC Grade:</span>
              <span className="text-sm font-bold flex items-center gap-1">A+ / A+ <CheckCircle2 size={14} className="text-accent" /></span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-100">IELTS:</span>
              <span className="text-sm font-bold flex items-center gap-1">6.5 <CheckCircle2 size={14} className="text-accent" /></span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-100">Target:</span>
              <span className="text-sm font-bold flex items-center gap-1">Germany <CheckCircle2 size={14} className="text-accent" /></span>
            </div>
          </div>

          {/* Right: Waiver & CTA */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-4">
            <div className="text-center md:text-right w-full">
              <div className="text-xs font-semibold text-green-200 uppercase tracking-wider mb-2">Merit Waiver Status</div>
              <div className="inline-flex items-center gap-1.5 bg-emphasis text-gray-900 font-bold text-sm px-3 py-1.5 rounded-lg shadow-sm">
                <Medal size={16} /> 100% Service Fee Waiver Approved
              </div>
            </div>
            
            <button className="w-full bg-accent hover:bg-green-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-2">
              View Full Report <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
