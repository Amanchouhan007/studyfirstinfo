import { Calendar, Video, Clock, User, ArrowRight, X, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import type { Appointment } from '../../../services/api/appointments';

export default function UpcomingHighlightCard({ 
  appointment,
  onReschedule
}: { 
  appointment?: Appointment | null;
  onReschedule?: () => void;
}) {
  const [isCancelled, setIsCancelled] = useState(false);
  const [showReschedule, setShowReschedule] = useState(false);

  if (!appointment) {
    return null;
  }

  const aptDate = new Date(appointment.date);
  const formattedDate = isNaN(aptDate.getTime()) 
    ? 'Scheduled Date' 
    : aptDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  const formattedTime = isNaN(aptDate.getTime())
    ? 'Scheduled Time'
    : aptDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) + ' BST';

  if (isCancelled) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 text-amber-800 text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span>The upcoming appointment on {formattedDate} has been hidden.</span>
        <button
          onClick={() => setIsCancelled(false)}
          className="text-xs font-bold text-primary underline ml-0 sm:ml-4 self-start sm:self-auto cursor-pointer"
        >
          Undo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-accent shadow-sm p-4 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden">
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
              {appointment.type === 'PAID' ? 'Paid In-Depth (45-60 min)' : 'Free Discovery (15 min)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setShowReschedule(true);
                if (onReschedule) onReschedule();
              }}
              className="text-xs font-semibold text-gray-600 hover:text-primary bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw size={13} />
              Reschedule
            </button>
            <button
              onClick={() => setIsCancelled(true)}
              className="text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <X size={13} />
              Dismiss
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {/* Date & Time */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Date &amp; Time</div>
            <div className="text-base font-bold text-primary flex items-center gap-1.5">
              <Calendar size={16} className="text-accent" />
              {formattedDate}
            </div>
            <div className="text-xs font-medium text-gray-600 flex items-center gap-1">
              <Clock size={13} className="text-gray-400" />
              {formattedTime}
            </div>
          </div>

          {/* Counselor */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Counselor</div>
            <div className="text-base font-bold text-primary flex items-center gap-1.5">
              <User size={16} className="text-accent" />
              {appointment.counselor?.name || 'Assigned Lead Counselor'}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              {appointment.counselor?.specializations?.join(', ') || 'Higher Education Specialist'}
            </div>
          </div>

          {/* Session Details */}
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Session Details</div>
            <div className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
              <Video size={16} className="text-emerald-600" />
              Video Call &mdash; Google Meet
            </div>
            <div className="text-xs text-gray-600 font-medium">
              {appointment.type === 'PAID' ? `Paid Counseling (${appointment.fee} BDT - ${appointment.paymentStatus})` : 'Free Discovery Session (15m)'}
            </div>
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
              className="font-bold underline text-emerald-800 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
