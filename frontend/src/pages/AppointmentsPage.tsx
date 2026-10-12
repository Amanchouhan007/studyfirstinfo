import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  MessageSquare, 
  Calendar, 
  Star, 
  X, 
  Check 
} from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import UpcomingHighlightCard from '../components/dashboard/appointments/UpcomingHighlightCard';
import AppointmentsList from '../components/dashboard/appointments/AppointmentsList';
import BookAppointmentForm from '../components/dashboard/appointments/BookAppointmentForm';
import { ALL_COUNSELORS, type Counselor } from '../data/counselorsData';

export default function AppointmentsPage() {
  const navigate = useNavigate();
  const [targetCounselor, setTargetCounselor] = useState<string | undefined>(undefined);
  const [counselorSearch, setCounselorSearch] = useState('');
  
  // Modals state
  const [selectedProfile, setSelectedProfile] = useState<Counselor | null>(null);
  const [feedbackCounselor, setFeedbackCounselor] = useState<Counselor | null>(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState('');

  const scrollToBooking = (counselorName?: string) => {
    if (counselorName) {
      setTargetCounselor(counselorName);
    }
    const element = document.getElementById('book-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMessageCounselor = (counselorName: string) => {
    navigate(`/messages?counselor=${encodeURIComponent(counselorName)}`);
  };

  const filteredCounselors = useMemo(() => {
    const q = counselorSearch.toLowerCase().trim();
    if (!q) return ALL_COUNSELORS;
    return ALL_COUNSELORS.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q)) ||
      c.branch.toLowerCase().includes(q)
    );
  }, [counselorSearch]);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackCounselor(null);
      setFeedbackComment('');
    }, 2000);
  };

  return (
    <DashboardLayout>
      {/* Top Header & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">My Appointments &amp; Mentors</h1>
          <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
            <span>&gt;</span>
            <span className="text-primary font-semibold">Consultations &amp; Mentors</span>
          </div>
        </div>

        <button
          onClick={() => scrollToBooking()}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-95 self-start sm:self-auto cursor-pointer"
        >
          <Plus size={18} />
          Book Consultation
        </button>
      </div>

      {/* Upcoming Highlight Card */}
      <UpcomingHighlightCard />

      {/* Appointments List with Tabs */}
      <AppointmentsList onBookFollowup={(c) => scrollToBooking(c)} />

      {/* ============================================================ */}
      {/* COUNSELOR DISCOVERY & BOOKING SECTION (SCREENSHOT 2)         */}
      {/* ============================================================ */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                Mentor Directory
              </span>
              <span className="text-xs text-slate-500 font-medium">
                • {ALL_COUNSELORS.length} Certified Advisors
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Discover Mentors &amp; Schedule Consultations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Choose an expert counselor for personalized guidance on visa filings, scholarships, and university admissions.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={counselorSearch}
                onChange={(e) => setCounselorSearch(e.target.value)}
                placeholder="Search mentors by name..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* Counselors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCounselors.map((counselor) => (
            <div 
              key={counselor.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-5 flex flex-col justify-between relative group"
            >
              {/* Active Badge at Top Right */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active</span>
              </div>

              <div>
                {/* Counselor Avatar */}
                <div className="relative w-16 h-16 mb-3.5">
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                  {counselor.name}
                </h3>

                {/* Role / Specialty */}
                <p className="text-xs text-slate-500 leading-snug mt-1 min-h-[32px]">
                  Student Visa/Permanent Residence(PR)Dependent Visa(Spouse Visa)
                </p>

                {/* View Profile Link */}
                <div className="mt-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedProfile(counselor)}
                    className="text-[11px] font-bold text-rose-600 hover:text-rose-700 uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <span>VIEW PROFILE</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleMessageCounselor(counselor.name)}
                    className="w-full py-2 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <MessageSquare size={13} className="text-slate-500" />
                    <span>Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToBooking(counselor.name)}
                    className="w-full py-2 px-3 rounded-xl bg-[#ff4d4f] hover:bg-rose-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    <Calendar size={13} />
                    <span>Appointment</span>
                  </button>
                </div>

                {/* Bottom Bar: Give Feedback + 5 Gold Stars */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => setFeedbackCounselor(counselor)}
                    className="text-slate-500 hover:text-slate-800 text-[11px] font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <Star size={12} className="text-slate-400" />
                    <span>Give Feedback</span>
                  </button>

                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book New Consultation Section */}
      <BookAppointmentForm defaultCounselor={targetCounselor} />

      {/* ============================================================ */}
      {/* COUNSELOR PROFILE MODAL                                      */}
      {/* ============================================================ */}
      {selectedProfile && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedProfile(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProfile(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-rose-500 shadow-xs"
              />
              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {selectedProfile.branch}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {selectedProfile.name}
                </h3>
                <p className="text-xs text-rose-600 font-semibold">
                  {selectedProfile.stats.success} Visa Success &bull; {selectedProfile.stats.students} Placed
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-600 border-t border-slate-100 pt-3.5">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Biography &amp; Expertise</h4>
                <p className="leading-relaxed">{selectedProfile.bio}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Specialized Tracks</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProfile.tags.map((tag, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const c = selectedProfile.name;
                    setSelectedProfile(null);
                    handleMessageCounselor(c);
                  }}
                  className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={14} /> Send Message
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const c = selectedProfile.name;
                    setSelectedProfile(null);
                    scrollToBooking(c);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#ff4d4f] hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar size={14} /> Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* GIVE FEEDBACK MODAL                                          */}
      {/* ============================================================ */}
      {feedbackCounselor && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setFeedbackCounselor(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFeedbackCounselor(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 cursor-pointer"
            >
              <X size={18} />
            </button>

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Feedback for {feedbackCounselor.name}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Help us maintain counseling quality and celebrate great mentorship.
            </p>

            {feedbackSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-500">Your review was recorded for this session.</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFeedbackRating(star)}
                        className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star size={22} fill={star <= feedbackRating ? 'currentColor' : 'none'} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Comments</label>
                  <textarea
                    rows={3}
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    placeholder="Share your consultation experience..."
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
