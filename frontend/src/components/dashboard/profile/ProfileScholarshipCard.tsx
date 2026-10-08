import { Medal, CheckCircle2 } from 'lucide-react';

export default function ProfileScholarshipCard() {
  return (
    <div className="bg-primary rounded-2xl p-6 shadow-sm text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-full bg-accent/20 skew-x-12 translate-x-8"></div>
      
      <div className="relative z-10">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-green-50">
          <span className="text-xl">🏆</span> Merit Waiver Status
        </h2>

        <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
          <p className="text-sm font-bold text-white mb-2">Dual A+ detected — Auto-flagged</p>
          <div className="inline-flex items-center gap-1.5 bg-emphasis text-gray-900 font-bold text-sm px-3 py-1.5 rounded-lg shadow-sm">
            <Medal size={16} /> 100% Service Fee Waiver
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-bold text-green-300">
          Approved by Admin <CheckCircle2 size={16} />
        </div>
      </div>
    </div>
  );
}
