import { useState } from 'react';
import { Calendar, Video, Phone, CheckCircle2, Star, Clock, FileText } from 'lucide-react';

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
}

export default function AppointmentsList({ onBookFollowup }: { onBookFollowup?: (counselor: string) => void }) {
  const [activeTab, setActiveTab] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('All');
  const [selectedNotes, setSelectedNotes] = useState<string | null>(null);

  const appointments: AppointmentItem[] = [
    {
      id: 'apt-1',
      status: 'upcoming',
      date: 'Sep 15, 2026',
      time: '3:00 PM BST',
      type: 'video',
      counselor: 'M. Imran Hossain Rony',
      topic: 'Germany University Application Review',
    },
    {
      id: 'apt-2',
      status: 'upcoming',
      date: 'Sep 25, 2026',
      time: '11:00 AM BST',
      type: 'phone',
      counselor: 'Dr. Sarah Rahman',
      topic: 'China Backup Options & CSC Application',
    },
    {
      id: 'apt-3',
      status: 'completed',
      date: 'Sep 3, 2026',
      time: '2:00 PM BST',
      type: 'video',
      counselor: 'M. Imran Hossain Rony',
      topic: 'Initial Counseling Session',
      duration: '45 minutes',
      rating: 5,
      notes: 'Reviewed student qualifications. Confirmed dual A+ SSC and HSC eligibility for 100% service fee waiver. Advised on IELTS score submission.',
    },
    {
      id: 'apt-4',
      status: 'completed',
      date: 'Aug 28, 2026',
      time: '4:00 PM BST',
      type: 'video',
      counselor: 'M. Imran Hossain Rony',
      topic: 'Document Review Session',
      duration: '30 minutes',
      rating: 5,
      notes: 'Preliminary checks on passport scan, academic transcripts, and draft CV completed.',
    },
  ];

  const filteredAppointments = appointments.filter((apt) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Upcoming') return apt.status === 'upcoming';
    if (activeTab === 'Completed') return apt.status === 'completed';
    if (activeTab === 'Cancelled') return apt.status === 'cancelled';
    return true;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-primary">Appointment History &amp; Schedule</h2>
          <p className="text-xs text-gray-500 mt-0.5">Track your ongoing, upcoming, and past sessions</p>
        </div>

        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
          {(['All', 'Upcoming', 'Completed', 'Cancelled'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
        {filteredAppointments.length === 0 ? (
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

                  {apt.rating && (
                    <div className="flex items-center gap-1 pt-0.5">
                      <span className="text-xs text-gray-400 font-medium">Your Rating:</span>
                      <div className="flex items-center text-amber-400">
                        {[...Array(apt.rating)].map((_, i) => (
                          <Star key={i} size={13} className="fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 md:self-center">
                {apt.status === 'upcoming' ? (
                  <>
                    <a
                      href="https://meet.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold bg-accent text-white px-3.5 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Join Meeting &rarr;
                    </a>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    {apt.notes && (
                      <button
                        onClick={() => setSelectedNotes(selectedNotes === apt.notes ? null : (apt.notes || null))}
                        className="text-xs font-semibold text-primary bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <FileText size={13} />
                        View Notes &rarr;
                      </button>
                    )}
                    <button
                      onClick={() => onBookFollowup && onBookFollowup(apt.counselor)}
                      className="text-xs font-semibold text-accent bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Book Follow-up &rarr;
                    </button>
                  </div>
                )}
              </div>

              {selectedNotes === apt.notes && (
                <div className="w-full mt-2 p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
                  <div className="font-bold text-primary mb-1">Session Summary Notes:</div>
                  <p>{apt.notes}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
