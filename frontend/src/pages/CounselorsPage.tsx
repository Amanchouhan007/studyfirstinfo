import { useState, useMemo } from 'react';
import CounselorHero from '../components/sections/counselors/CounselorHero';
import CounselorStats from '../components/sections/counselors/CounselorStats';
import CounselorGrid from '../components/sections/counselors/CounselorGrid';
import { ALL_COUNSELORS, type Counselor } from '../data/counselorsData';
import HowBookingWorks from '../components/sections/counselors/HowBookingWorks';
import CounselorCTA from '../components/sections/counselors/CounselorCTA';
import { X, Check, Star, Calendar, Sparkles } from 'lucide-react';

export default function CounselorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackCounselor, setFeedbackCounselor] = useState<Counselor | null>(null);

  const [autoMatchModalOpen, setAutoMatchModalOpen] = useState(false);

  // Form states
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Hungary',
    date: '',
    time: '11:00 AM',
    mode: 'In-Person (Banani)'
  });

  const [autoMatchForm, setAutoMatchForm] = useState({
    name: '',
    phone: '',
    targetCountry: 'Hungary',
    gpa: '',
    level: 'Bachelor'
  });

  const [toast, setToast] = useState<{ title: string; message: string } | null>(null);

  const showToast = (title: string, message: string) => {
    setToast({ title, message });
    setTimeout(() => setToast(null), 4500);
  };

  // Count matching counselors
  const totalFound = useMemo(() => {
    return ALL_COUNSELORS.filter((c) => {
      if (activeFilter !== 'All') {
        const filterLower = activeFilter.toLowerCase();
        const matchesCountryTag = c.tags.some(tag => tag.toLowerCase().includes(filterLower.replace(/[^a-z]/gi, '')));
        const matchesCountryKey = filterLower.includes(c.countryKey) || c.countryKey.includes(filterLower.replace(/[^a-z]/gi, ''));
        if (!matchesCountryTag && !matchesCountryKey) return false;
      }
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim();
        const matchName = c.name.toLowerCase().includes(q);
        const matchBio = c.bio.toLowerCase().includes(q);
        const matchBranch = c.branch.toLowerCase().includes(q);
        const matchTag = c.tags.some(t => t.toLowerCase().includes(q));
        if (!matchName && !matchBio && !matchBranch && !matchTag) return false;
      }
      return true;
    }).length;
  }, [searchTerm, activeFilter]);

  const handleOpenBooking = (counselor: Counselor) => {
    setSelectedCounselor(counselor);
    setAppointmentForm((prev) => ({
      ...prev,
      mode: `In-Person (${counselor.branch.replace(' Branch', '').replace(' Head Office', '')})`
    }));
    setBookingModalOpen(true);
  };

  const handleOpenFeedback = (counselor: Counselor) => {
    setFeedbackCounselor(counselor);
    setFeedbackModalOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingModalOpen(false);
    showToast(
      'Session Booked Successfully!',
      `Confirmed appointment with ${selectedCounselor?.name} for ${appointmentForm.name}. A WhatsApp reminder has been dispatched to ${appointmentForm.phone}.`
    );
    setAppointmentForm({
      name: '',
      phone: '',
      email: '',
      country: 'Hungary',
      date: '',
      time: '11:00 AM',
      mode: 'In-Person (Banani)'
    });
  };

  const handleAutoMatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAutoMatchModalOpen(false);
    showToast(
      'Counselor Match Found!',
      `Thank you ${autoMatchForm.name}! Our Chief Counselor for ${autoMatchForm.targetCountry} will message your WhatsApp (${autoMatchForm.phone}) within 60 minutes.`
    );
    setAutoMatchForm({
      name: '',
      phone: '',
      targetCountry: 'Hungary',
      gpa: '',
      level: 'Bachelor'
    });
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      <CounselorHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        totalFound={totalFound}
      />
      
      <CounselorStats />
      
      <CounselorGrid
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onOpenBooking={handleOpenBooking}
        onOpenFeedback={handleOpenFeedback}
      />
      
      <HowBookingWorks />
      
      <CounselorCTA 
        onOpenAutoMatch={() => setAutoMatchModalOpen(true)}
      />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#042416] text-white p-4 rounded-2xl shadow-2xl border border-emerald-500/50 max-w-sm flex items-start gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0 mt-0.5">
            <Check size={18} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-sm text-emerald-300">{toast.title}</h4>
            <p className="text-xs text-slate-200 mt-0.5 leading-snug">{toast.message}</p>
          </div>
          <button 
            type="button"
            onClick={() => setToast(null)}
            className="text-slate-400 hover:text-white ml-auto"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Booking Appointment Modal */}
      {bookingModalOpen && selectedCounselor && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setBookingModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full bg-gray-100"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4 text-left">
              <img 
                src={selectedCounselor.image} 
                alt={selectedCounselor.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500"
              />
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {selectedCounselor.branch}
                </span>
                <h3 className="text-lg font-bold text-gray-900 font-heading">
                  {selectedCounselor.name}
                </h3>
                <p className="text-xs text-emerald-700 font-semibold">
                  {selectedCounselor.stats.success} Visa Success &bull; {selectedCounselor.stats.students} Placed
                </p>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mahfuzur Rahman"
                  value={appointmentForm.name}
                  onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp No *</label>
                  <input
                    type="tel"
                    required
                    placeholder="017xxxxxxxx"
                    value={appointmentForm.phone}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={appointmentForm.email}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={appointmentForm.date}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Session Mode *</label>
                  <select
                    value={appointmentForm.mode}
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, mode: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="In-Person (Banani)">In-Person (Banani Head Office)</option>
                    <option value="In-Person (Farmgate)">In-Person (Farmgate Branch)</option>
                    <option value="In-Person (Sylhet)">In-Person (Sylhet Branch)</option>
                    <option value="Online Video Call">Online Zoom / Google Meet</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-accent hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Calendar size={16} /> Confirm Free Appointment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Auto Match Modal */}
      {autoMatchModalOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setAutoMatchModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAutoMatchModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full bg-gray-100"
            >
              <X size={18} />
            </button>

            <div className="mb-4 text-left">
              <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                Smart Algorithm Match
              </span>
              <h3 className="text-xl font-bold text-gray-900 font-heading mt-1">
                Auto-Match Me With Best Counselor
              </h3>
              <p className="text-xs text-gray-500">
                Tell us your target destination and score. We&apos;ll link you to the senior specialist with highest visa approval for that pathway.
              </p>
            </div>

            <form onSubmit={handleAutoMatchSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shakil Ahmed"
                  value={autoMatchForm.name}
                  onChange={(e) => setAutoMatchForm({ ...autoMatchForm, name: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="017xxxxxxxx"
                  value={autoMatchForm.phone}
                  onChange={(e) => setAutoMatchForm({ ...autoMatchForm, phone: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Target Country *</label>
                  <select
                    value={autoMatchForm.targetCountry}
                    onChange={(e) => setAutoMatchForm({ ...autoMatchForm, targetCountry: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Hungary">Hungary 🇭🇺</option>
                    <option value="Germany">Germany 🇩🇪</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧</option>
                    <option value="New Zealand">New Zealand 🇳🇿</option>
                    <option value="Malaysia">Malaysia 🇲🇾</option>
                    <option value="China">China 🇨🇳</option>
                    <option value="Sweden">Sweden 🇸🇪</option>
                    <option value="Russia">Russia 🇷🇺</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Degree Level *</label>
                  <select
                    value={autoMatchForm.level}
                    onChange={(e) => setAutoMatchForm({ ...autoMatchForm, level: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Bachelor">Bachelor Degree</option>
                    <option value="Master">Master Degree</option>
                    <option value="PhD">PhD / Research</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your GPA / CGPA *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 4.75 or 3.25"
                  value={autoMatchForm.gpa}
                  onChange={(e) => setAutoMatchForm({ ...autoMatchForm, gpa: e.target.value })}
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emphasis hover:bg-yellow-400 text-gray-950 font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Sparkles size={16} /> Instant Counselor Match
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Counselor Feedback Reviews Modal */}
      {feedbackModalOpen && feedbackCounselor && (
        <div 
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setFeedbackModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFeedbackModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full bg-gray-100"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-5 text-left border-b border-gray-100 pb-4">
              <img 
                src={feedbackCounselor.image} 
                alt={feedbackCounselor.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">
                  Student Reviews for {feedbackCounselor.name}
                </h3>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span className="text-gray-700 ml-1">5.0 / 5.0 ({feedbackCounselor.stats.students} reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-gray-900 font-bold">Farhan Tanvir &bull; Visa Granted (METU Hungary)</strong>
                  <span className="text-amber-500 font-bold">★★★★★</span>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;{feedbackCounselor.name} groomed me for the Hungarian Embassy interview so well that the consular officer asked exactly the questions we practiced! 100% recommended.&rdquo;
                </p>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-gray-900 font-bold">Nafis Iqbal &bull; MSc UniSZA Malaysia</strong>
                  <span className="text-amber-500 font-bold">★★★★★</span>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  &ldquo;Bank statement and tax guidance was flawless. Never experienced any hidden fees. My EMGS pass arrived in just 22 days.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setFeedbackModalOpen(false);
                  handleOpenBooking(feedbackCounselor);
                }}
                className="w-full py-2.5 rounded-xl bg-accent text-white font-bold text-xs hover:bg-green-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar size={14} /> Book Session with {feedbackCounselor.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
