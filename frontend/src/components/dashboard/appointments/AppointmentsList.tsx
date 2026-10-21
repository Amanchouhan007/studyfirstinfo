import { useState, useEffect } from 'react';
import { Calendar, Video, Phone, CheckCircle2, Clock, Plus } from 'lucide-react';
import { appointmentService, type Appointment } from '../../../services/api/appointments';

interface AppointmentItem {
  id: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  date: string;
  time: string;
  type: 'video' | 'phone' | 'whatsapp';
  counselor: string;
  topic: string;
  duration?: string;
  rating?: number;
  notes?: string;
  paymentStatus?: string;
  fee?: number;
  typeTag?: 'FREE' | 'PAID';
}

export default function AppointmentsList({ 
  onBookFollowup,
  refreshTrigger 
}: { 
  onBookFollowup?: (counselor: string) => void;
  refreshTrigger?: number;
}) {
  const [activeTab, setActiveTab] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('All');
  const [dbAppointments, setDbAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appointmentService.getMyAppointments()
      .then((data) => {
        if (Array.isArray(data)) {
          setDbAppointments(data);
        }
      })
      .catch((err) => {
        console.warn('Failed to load appointments:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [refreshTrigger]);

  const appointments: AppointmentItem[] = dbAppointments.map((apt) => {
    const aptDate = new Date(apt.date);
    const isPast = aptDate.getTime() < Date.now();
    let status: 'upcoming' | 'completed' | 'cancelled' = 'upcoming';
    if (apt.status === 'COMPLETED' || (apt.status === 'CONFIRMED' && isPast)) {
      status = 'completed';
    } else if (apt.status === 'CANCELLED' || apt.status === 'PAYMENT_REJECTED') {
      status = 'cancelled';
    }

    return {
      id: apt.id,
      status,
      date: isNaN(aptDate.getTime()) ? 'Flexible Date' : aptDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: isNaN(aptDate.getTime()) ? 'Flexible Time' : aptDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      type: 'video',
      counselor: apt.counselor?.name || 'Assigned Lead Counselor',
      topic: `${apt.type === 'PAID' ? 'Paid In-Depth' : 'Free Discovery'} Consultation`,
      duration: `${apt.durationMinutes} minutes`,
      paymentStatus: apt.paymentStatus,
      fee: apt.fee,
      typeTag: apt.type
    };
  });

  const filteredAppointments = appointments.filter((apt) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Upcoming') return apt.status === 'upcoming';
    if (activeTab === 'Completed') return apt.status === 'completed';
    if (activeTab === 'Cancelled') return apt.status === 'cancelled';
    return true;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-primary">Appointment History &amp; Schedule</h2>
          <p className="text-xs text-gray-500 mt-0.5">Track your ongoing, upcoming, and past sessions</p>
        </div>

        <div className="flex flex-wrap items-center gap-1 bg-gray-100 p-1 rounded-xl">
          {(['All', 'Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Appointment Cards */}
      <div className="divide-y divide-gray-100 mt-2">
        {loading ? (
          <div className="text-center py-10 text-xs text-gray-400">Loading appointments...</div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-12 px-4 space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-accent rounded-full flex items-center justify-center mx-auto">
              <Calendar size={22} />
            </div>
            <h3 className="text-sm font-bold text-primary">No Scheduled Appointments</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              You haven't scheduled any counseling appointments yet. Book a free 15-minute discovery or a 45-60 min in-depth session below!
            </p>
            <button
              onClick={() => onBookFollowup && onBookFollowup('')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-colors cursor-pointer"
            >
              <Plus size={14} /> Book Consultation Below
            </button>
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-sm">
            No appointments found under <span className="font-semibold text-gray-600">{activeTab}</span>.
          </div>
        ) : (
          filteredAppointments.map((apt) => (
            <div key={apt.id} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    apt.status === 'upcoming'
                      ? 'bg-emerald-50 text-accent border border-emerald-200'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {apt.type === 'video' ? <Video size={22} /> : <Phone size={22} />}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-primary text-base">{apt.topic}</h3>
                    {apt.status === 'upcoming' ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Scheduled
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={11} className="text-emerald-600" /> Completed
                      </span>
                    )}

                    {apt.typeTag === 'PAID' ? (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        apt.paymentStatus === 'PAID'
                          ? 'bg-emerald-100 text-emerald-800'
                          : apt.paymentStatus === 'REJECTED'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {apt.paymentStatus === 'PAID' ? 'Paid & Verified' : apt.paymentStatus === 'REJECTED' ? 'Payment Rejected' : 'Payment PENDING'}
                      </span>
                    ) : (
                      <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Free (0 BDT)
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1 font-medium text-gray-700">
                      <Calendar size={13} className="text-accent" />
                      {apt.date} &bull; {apt.time}
                    </span>
                    <span>Counselor: <strong className="text-primary">{apt.counselor}</strong></span>
                    {apt.duration && (
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {apt.duration}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 self-start md:self-center">
                {apt.status === 'upcoming' ? (
                  <a
                    href="https://meet.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-accent text-white px-3.5 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Join Meeting &rarr;
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onBookFollowup && onBookFollowup(apt.counselor)}
                      className="text-xs font-semibold text-accent bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Book Follow-up &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
