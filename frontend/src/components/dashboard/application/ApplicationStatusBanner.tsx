import { RefreshCw, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApplicationStatusBanner() {
  return (
    <div className="bg-white rounded-2xl border-l-[6px] border-l-accent border border-gray-100 shadow-sm p-6 mb-8 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
              Application ID
            </span>
            <span className="font-mono font-bold text-primary text-lg">
              #SF-2026-001247
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
              <RefreshCw size={13} className="animate-spin text-emerald-600" />
              Under Counselor Review
            </span>
          </div>

          <p className="text-sm text-gray-600">
            Assigned Senior Counselor: <strong className="text-primary font-semibold">M. Imran Hossain Rony</strong> (Germany Destination Lead)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:gap-8 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
          <div>
            <div className="text-xs text-gray-400">Submitted</div>
            <div className="text-sm font-semibold text-gray-700">Sep 5, 2026</div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200"></div>

          <div>
            <div className="text-xs text-gray-400">Last Updated</div>
            <div className="text-sm font-semibold text-gray-700 flex items-center gap-1">
              Sep 8, 2026 <span className="text-xs text-accent font-medium">(2 days ago)</span>
            </div>
          </div>

          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors border border-primary/10"
          >
            <MessageSquare size={16} className="text-accent" />
            Contact Counselor &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
