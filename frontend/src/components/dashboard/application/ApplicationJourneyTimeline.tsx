import { CheckCircle2, RefreshCw, Clock, MessageSquare, Plane, Building2, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApplicationJourneyTimeline() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-primary">Full Application Journey</h2>
          <p className="text-sm text-gray-500 mt-1">End-to-end milestone tracker for your Germany study pathway</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200/60 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Step 3 of 8 in progress
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-gray-200 ml-4 sm:ml-6 space-y-10">
        {/* Step 1 */}
        <div className="relative group">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md ring-4 ring-emerald-50">
            <CheckCircle2 size={18} />
          </div>
          <div className="bg-gray-50/70 hover:bg-gray-50 p-5 rounded-xl border border-gray-100 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Step 1 &bull; Completed
              </span>
              <span className="text-xs font-medium text-gray-400">Sep 1, 2026</span>
            </div>
            <h3 className="font-bold text-primary text-base">Profile Submitted</h3>
            <p className="text-sm text-gray-600 mt-1">Profile created and submitted for review.</p>
            <div className="mt-3">
              <Link to="/profile" className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">
                View Profile &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative group">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md ring-4 ring-emerald-50">
            <CheckCircle2 size={18} />
          </div>
          <div className="bg-gray-50/70 hover:bg-gray-50 p-5 rounded-xl border border-gray-100 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Step 2 &bull; Completed
              </span>
              <span className="text-xs font-medium text-gray-400">Sep 5, 2026</span>
            </div>
            <h3 className="font-bold text-primary text-base">Documents Verified</h3>
            <p className="text-sm text-gray-600 mt-1">All documents verified by counselor.</p>
            <p className="text-xs font-medium text-gray-500 mt-0.5 bg-white px-2.5 py-1 rounded inline-block border border-gray-200/60">
              SSC, HSC, IELTS, Passport &mdash; all approved
            </p>
            <div className="mt-3">
              <Link to="/documents" className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline">
                View Documents &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Step 3 - Current */}
        <div className="relative">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shadow-lg ring-4 ring-accent/20 animate-bounce">
            <RefreshCw size={16} className="animate-spin" />
          </div>
          <div className="bg-[#F0FDF4] border-2 border-accent/40 p-6 rounded-2xl shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-2.5 py-1 rounded-full border border-accent/30 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                Step 3 &bull; CURRENT STEP
              </span>
              <span className="text-xs font-semibold text-emerald-700">Sep 8, 2026 &mdash; ongoing</span>
            </div>
            <h3 className="font-bold text-primary text-lg">Counselor Review</h3>
            <p className="text-sm text-gray-700 mt-1">
              Your counselor is evaluating your profile against Germany university requirements and prerequisite criteria.
            </p>

            <div className="mt-4 bg-white/90 p-4 rounded-xl border border-accent/20 space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-gray-600 font-semibold">Evaluation Stage</span>
                <span className="text-accent font-bold">60% Complete</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-accent h-full rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
              </div>
              <div className="text-xs text-gray-500 flex items-center justify-between pt-1">
                <span>Verification &amp; Eligibility Audit</span>
                <span className="font-medium text-gray-700">Expected completion: <strong className="text-primary">Sep 12, 2026</strong></span>
              </div>
            </div>

            <div className="mt-5">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 bg-accent hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageSquare size={16} />
                Chat with Counselor &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative opacity-90">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center ring-4 ring-gray-100">
            <Clock size={16} />
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                Step 4 &bull; Upcoming
              </span>
              <span className="text-xs font-medium text-gray-400">Expected: Sep 15, 2026</span>
            </div>
            <h3 className="font-bold text-gray-800 text-base">University Applications</h3>
            <p className="text-sm text-gray-600 mt-1">Counselor will apply to 3 matched universities with finalized dossiers.</p>
            
            <div className="mt-3 space-y-1.5">
              <div className="text-xs font-semibold text-gray-500">Target Universities (Queued):</div>
              <div className="grid sm:grid-cols-3 gap-2">
                <div className="bg-gray-50 p-2 rounded-lg text-xs font-medium text-gray-500 border border-gray-200/60">
                  <div className="font-bold text-gray-700">TU Munich</div>
                  <div>Masters CS</div>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg text-xs font-medium text-gray-500 border border-gray-200/60">
                  <div className="font-bold text-gray-700">Univ. of Stuttgart</div>
                  <div>Masters AI</div>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg text-xs font-medium text-gray-500 border border-gray-200/60">
                  <div className="font-bold text-gray-700">Heidelberg University</div>
                  <div>Masters CS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative opacity-75">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center ring-4 ring-gray-100">
            <Mail size={16} />
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                Step 5
              </span>
              <span className="text-xs font-medium text-gray-400">Expected: Oct &ndash; Nov 2026</span>
            </div>
            <h3 className="font-bold text-gray-700 text-base">Offer Letter</h3>
            <p className="text-sm text-gray-500 mt-1">Receive admission offer letters and university enrollment conditions.</p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="relative opacity-75">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center ring-4 ring-gray-100">
            <Building2 size={16} />
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                Step 6
              </span>
              <span className="text-xs font-medium text-gray-400">Expected: Nov 2026</span>
            </div>
            <h3 className="font-bold text-gray-700 text-base">Blocked Account Setup</h3>
            <p className="text-sm text-gray-500 mt-1">Setup German Blocked Account (&euro;11,208) with expedited verification.</p>
            <div className="mt-2 text-xs font-medium text-accent bg-accent/5 px-2.5 py-1 rounded inline-block">
              Fintiba partner assistance &amp; zero surcharge guarantee
            </div>
          </div>
        </div>

        {/* Step 7 */}
        <div className="relative opacity-75">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center ring-4 ring-gray-100">
            <ShieldCheck size={16} />
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                Step 7
              </span>
              <span className="text-xs font-medium text-gray-400">Expected: Dec 2026</span>
            </div>
            <h3 className="font-bold text-gray-700 text-base">Visa Application</h3>
            <p className="text-sm text-gray-500 mt-1">German student visa application filing &amp; Embassy interview preparation.</p>
          </div>
        </div>

        {/* Step 8 */}
        <div className="relative opacity-75">
          <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center ring-4 ring-gray-100">
            <Plane size={16} />
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                Step 8 &bull; Final Milestone
              </span>
              <span className="text-xs font-medium text-gray-400">Expected: Feb 2027</span>
            </div>
            <h3 className="font-bold text-gray-700 text-base">&euro; Departure to Germany</h3>
            <p className="text-sm text-gray-500 mt-1">Pre-departure briefing + flight booking + German SIM &amp; housing handover.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
