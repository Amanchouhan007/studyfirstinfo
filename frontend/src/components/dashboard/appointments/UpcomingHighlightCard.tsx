import { Calendar, Video, Clock, User, ArrowRight, X, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function UpcomingHighlightCard() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [showReschedule, setShowReschedule] = useState(false);

  if (isCancelled) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-amber-800 text-sm flex items-center justify-between">
        <span>The upcoming appointment on September 15 has been cancelled.</span>
        <button
          onClick={() => setIsCancelled(false)}
          className="text-xs font-bold text-primary underline ml-4"
        >
          Undo Cancellation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-accent shadow-sm p-6 sm:p-8 mb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full pointer-events-none -z-0"></div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              📅 UPCOMING
            </span>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              5 days remaining
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowReschedule(true)}
              className="text-xs font-semibold text-gray-600 hover:text-primary bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
            >
              <RotateCcw size={13} />
              Reschedule
            </button>
            <button
              onClick={() => setIsCancelled(true)}
              className="text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
            >
              <X size={13} />
              Cancel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {/* Date & Time */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Date &amp; Time</div>
            <div className="text-base font-bold text-primary flex items-center gap-1.5">
              <Calendar size={16} className="text-accent" />
              Monday, Sep 15, 2026
            </div>
            <div className="text-xs font-medium text-gray-600 flex items-center gap-1">
              <Clock size={13} className="text-gray-400" />
              3:00 PM BST (Bangladesh Standard Time)
            </div>
          </div>

          {/* Counselor */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Counselor</div>
            <div className="text-base font-bold text-primary flex items-center gap-1.5">
              <User size={16} className="text-accent" />
              M. Imran Hossain Rony
            </div>
            <div className="text-xs text-gray-500 font-medium">Head of Germany Applications</div>
          </div>

          {/* Session Type & Topic */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Session Details</div>
            <div className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
              <Video size={16} className="text-emerald-600" />
              Video Call &mdash; Google Meet
            </div>
            <div className="text-xs text-gray-600 font-medium">Topic: Germany University Application Review</div>
          </div>

          {/* CTA Link */}
          <div className="flex md:justify-end">
            <a
              href="https://meet.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-transform active:scale-95"
            >
              Join Meeting <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {showReschedule && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <span>To reschedule, pick an alternate slot in the <strong>Book a New Consultation</strong> section below.</span>
            <button
              onClick={() => setShowReschedule(false)}
              className="font-bold underline text-emerald-800"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
