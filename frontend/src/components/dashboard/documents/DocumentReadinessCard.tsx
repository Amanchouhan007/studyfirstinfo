import { FileCheck, AlertCircle } from 'lucide-react';

export default function DocumentReadinessCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
            <FileCheck size={22} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary">Document Readiness</h2>
            <p className="text-xs text-gray-500">Essential papers for German university applications &amp; visa</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-accent">75%</span>
          <span className="text-xs font-semibold text-gray-500">complete</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-3">
        <div className="bg-accent h-full rounded-full transition-all duration-700" style={{ width: '75%' }}></div>
      </div>

      <div className="flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
        <span className="font-semibold text-primary">
          6 of 8 required documents uploaded
        </span>
        <span className="inline-flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 font-medium">
          <AlertCircle size={13} />
          Upload remaining 2 to complete your profile
        </span>
      </div>
    </div>
  );
}
