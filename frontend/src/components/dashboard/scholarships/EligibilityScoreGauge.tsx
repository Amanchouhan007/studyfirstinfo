import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EligibilityScoreGauge() {
  return (
    <div className="bg-[#F0FDF4] border border-accent/20 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Circular gauge */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left shrink-0">
          <div className="flex items-center gap-6">
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Circular SVG Gauge */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="text-emerald-100"
                  strokeWidth="9"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  className="text-accent transition-all duration-1000 ease-out"
                  strokeWidth="9"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - 0.97)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-primary">97%</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">Your Scholarship Eligibility Score</h3>
              <p className="text-xs text-gray-600 mt-1 max-w-xs">
                Calculated from verified transcripts, language proficiency test, and destination country alignment.
              </p>
              <span className="inline-block mt-2 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Tier 1 Candidate
              </span>
            </div>
          </div>
        </div>

        {/* Right: Breakdown */}
        <div className="w-full lg:max-w-lg bg-white/90 p-5 rounded-xl border border-accent/15 space-y-3">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
            Points Breakdown
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-gray-600 flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" /> Academic (5.0/5.0)
              </span>
              <span className="font-bold text-primary">+40 pts</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-gray-600 flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" /> English (6.5 IELTS)
              </span>
              <span className="font-bold text-primary">+25 pts</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
              <span className="text-gray-600 flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={14} className="text-emerald-600" /> Target Country (DE)
              </span>
              <span className="font-bold text-primary">+20 pts</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/60">
              <span className="text-amber-800 flex items-center gap-1.5 font-medium">
                <AlertTriangle size={14} className="text-amber-600" /> Profile Complete (85%)
              </span>
              <span className="font-bold text-amber-900">+12 pts</span>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-amber-800 font-medium flex items-center gap-1">
              ⚠️ Upload missing docs to reach 100%
            </span>
            <Link to="/documents" className="text-accent font-bold hover:underline flex items-center gap-1">
              Complete Documents <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
