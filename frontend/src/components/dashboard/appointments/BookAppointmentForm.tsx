import { useState, useEffect } from 'react';
import { Video, Phone, MessageSquare, CheckCircle, Sparkles, AlertCircle, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { appointmentService, COUNSELING_PAID_FEE_BDT, type Appointment } from '../../../services/api/appointments';
import { ALL_COUNSELORS } from '../../../data/counselorsData';

export default function BookAppointmentForm({ 
  defaultCounselor,
  onBookingSuccess
}: { 
  defaultCounselor?: string;
  onBookingSuccess?: (appointment: Appointment) => void;
}) {
  const [counselor, setCounselor] = useState(defaultCounselor || '');
  const [consultationType, setConsultationType] = useState<'FREE' | 'PAID'>('FREE');
  const [trxId, setTrxId] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('3PM');
  const [sessionType, setSessionType] = useState<'video' | 'phone' | 'whatsapp'>('video');
  const [topic, setTopic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [bookedAppointment, setBookedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    if (defaultCounselor) {
      setCounselor(defaultCounselor);
    }
  }, [defaultCounselor]);

  const times = ['10AM', '11AM', '2PM', '3PM', '4PM', '5PM'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!counselor || !counselor.trim()) {
      setErrorMessage('Please select a counselor.');
      return;
    }

    if (consultationType === 'PAID' && !trxId.trim()) {
      setErrorMessage('Please enter your bKash or Nagad Transaction ID (TrxID).');
      return;
    }

    try {
      setIsSubmitting(true);
      // Construct appointment date strictly in Bangladesh Standard Time (UTC+6)
      const hourMap: Record<string, string> = {
        '10AM': '10',
        '11AM': '11',
        '2PM': '14',
        '3PM': '15',
        '4PM': '16',
        '5PM': '17'
      };
      const hh = hourMap[selectedTime] || '15';
      const appointmentDate = new Date(`${selectedDate}T${hh}:00:00+06:00`);

      const created = await appointmentService.bookAppointment({
        counselorName: counselor,
        date: appointmentDate.toISOString(),
        type: consultationType,
        trxId: consultationType === 'PAID' ? trxId.trim() : undefined
      });

      setBookedAppointment(created);
      if (onBookingSuccess) {
        onBookingSuccess(created);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to book appointment. Please make sure you are logged in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setBookedAppointment(null);
    setTrxId('');
    setTopic('');
    setErrorMessage(null);
  };

  return (
    <div id="book-section" className="bg-[#F0FDF4] border border-accent/30 rounded-2xl p-4 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-accent/20">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-2.5 py-1 rounded-full border border-accent/20 shadow-xs">
            Book a New Consultation
          </span>
          <h2 className="text-2xl font-bold text-primary mt-2">Need help? Book a session</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Get personalized guidance for admissions, scholarship review, blocked account, or visa interview.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white/80 px-3 py-1.5 rounded-lg border border-accent/20">
          <Sparkles size={14} className="text-accent" />
          Free 15-min Discovery &bull; Paid 45-60 min In-Depth
        </div>
      </div>

      {bookedAppointment ? (
        <div className="bg-white rounded-xl p-6 sm:p-8 text-center max-w-xl mx-auto border border-accent/30 shadow-sm space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={36} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary">Appointment Successfully Booked!</h3>
            <p className="text-sm text-gray-600 mt-2">
              Your consultation with <strong className="text-primary">{bookedAppointment.counselor?.name || counselor}</strong> is set for{' '}
              <strong>{selectedDate}</strong> at <strong>{selectedTime} BST</strong> via{' '}
              <strong>{sessionType === 'video' ? 'Google Meet Video' : sessionType === 'phone' ? 'Phone Call' : 'WhatsApp'}</strong>.
            </p>
          </div>

          {bookedAppointment.type === 'PAID' ? (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
                <AlertCircle size={15} />
                Payment Status: {bookedAppointment.paymentStatus}
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                Thank you! We received your TrxID: <strong className="font-mono bg-white px-1.5 py-0.5 rounded border border-amber-200">{bookedAppointment.trxId || trxId}</strong> ({bookedAppointment.fee} BDT). An administrator will verify the payment and confirm your 45-60 min extended session.
              </p>
            </div>
          ) : (
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 py-2.5 px-4 rounded-lg flex items-center justify-center gap-2">
              <ShieldCheck size={16} />
              Free 15-min discovery session confirmed! No payment required.
            </div>
          )}

          {/* ITEM 8: Upgrade to Premium Service Card after successful PAID booking */}
          {bookedAppointment.type === 'PAID' && (
            <div className="bg-linear-to-br from-slate-900 to-primary text-white rounded-2xl p-5 sm:p-6 text-left shadow-md border border-slate-700 relative overflow-hidden mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-accent/20 text-emerald-300 border border-accent/40 px-2.5 py-0.5 rounded-full">
                  All-in-One Guidance
                </span>
                <span className="text-xs text-slate-300 font-medium">Study First Premium</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                Upgrade to Premium Service
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Supercharge your study abroad journey with dedicated 1-on-1 mentorship from application to arrival:
              </p>
              <ul className="space-y-2 text-xs text-slate-200 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>End-to-end application support:</strong> University shortlisting, SOP &amp; CV vetting, direct portal submission.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>Visa filing support:</strong> Embassy appointment booking, financial documentation checks, blocked account setup.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>Embassy interview preparation:</strong> Rigorous 1-on-1 mock interviews with senior visa experts.</span>
                </li>
              </ul>
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/80">
                <span className="text-xs text-slate-300 font-medium">Ready for comprehensive assistance?</span>
                <a
                  href="https://wa.me/8801700000000?text=Hello%20Study%20First%20Team%2C%20I%20want%20to%20upgrade%20to%20Premium%20Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-xs"
                >
                  Contact Premium Desk <ArrowRight size={13} />
                </a>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={handleReset}
              className="text-xs font-bold text-accent hover:underline inline-block cursor-pointer"
            >
              Book another session &rarr;
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="bg-red-50 border border-red-300 text-red-800 p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-xs">
              <AlertCircle size={18} className="text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* ITEM 7: Consultation Type Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary uppercase tracking-wider">
              Consultation Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConsultationType('FREE')}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  consultationType === 'FREE'
                    ? 'bg-white border-accent ring-2 ring-accent/30 shadow-sm'
                    : 'bg-white/70 border-gray-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-primary">Free Session</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    0 BDT
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  15 minutes &bull; Initial profile overview, basic country suggestions &amp; eligibility check.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setConsultationType('PAID')}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  consultationType === 'PAID'
                    ? 'bg-white border-accent ring-2 ring-accent/30 shadow-sm'
                    : 'bg-white/70 border-gray-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-primary">Paid In-Depth Session</span>
                  <span className="text-xs font-bold text-accent bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {COUNSELING_PAID_FEE_BDT} BDT
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  45&ndash;60 minutes &bull; In-depth university roadmap, SOP feedback &amp; visa guidance.
                </p>
              </button>
            </div>
          </div>

          {/* ITEM 7: Manual Payment Instructions & TrxID when PAID is selected */}
          {consultationType === 'PAID' && (
            <div className="bg-white rounded-xl p-5 border border-emerald-300 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <CreditCard size={18} className="text-accent" />
                <span>Manual Payment via bKash / Nagad</span>
              </div>
              <div className="text-xs text-gray-600 bg-emerald-50/70 p-3.5 rounded-lg border border-emerald-100 space-y-1.5">
                <p className="font-semibold text-emerald-900">
                  Please send <strong>{COUNSELING_PAID_FEE_BDT} BDT</strong> via "Send Money" to any of the numbers below:
                </p>
                <ul className="list-disc list-inside font-mono text-gray-700 space-y-0.5 pt-1">
                  <li>bKash Personal: <strong>01712-345678</strong></li>
                  <li>Nagad Personal: <strong>01812-345678</strong></li>
                </ul>
                <p className="text-[11px] text-gray-500 pt-1">
                  After completing the transfer, enter the Transaction ID (TrxID) below. Your booking status will remain <strong>PENDING</strong> until an admin verifies the payment.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  bKash / Nagad Transaction ID (TrxID) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                  placeholder="E.g., 9J4K8L7M2N"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-mono placeholder:font-sans focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: Select Counselor */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                Select Counselor
              </label>
              <select
                value={counselor}
                onChange={(e) => setCounselor(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                <option value="">Select a counselor</option>
                {ALL_COUNSELORS.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name} ({c.branch})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Date */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                Select Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Select Time */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary uppercase tracking-wider">
              Select Time Slot (BST)
            </label>
            <div className="flex flex-wrap gap-2.5">
              {times.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedTime === time
                      ? 'bg-accent text-white shadow-sm ring-2 ring-accent/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {time} BST
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Session Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary uppercase tracking-wider">
              Session Format
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSessionType('video')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  sessionType === 'video'
                    ? 'bg-white border-accent text-accent shadow-xs ring-2 ring-accent/20'
                    : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white'
                }`}
              >
                <Video size={16} /> 🎥 Video Call
              </button>
              <button
                type="button"
                onClick={() => setSessionType('phone')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  sessionType === 'phone'
                    ? 'bg-white border-accent text-accent shadow-xs ring-2 ring-accent/20'
                    : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white'
                }`}
              >
                <Phone size={16} /> 📞 Phone
              </button>
              <button
                type="button"
                onClick={() => setSessionType('whatsapp')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  sessionType === 'whatsapp'
                    ? 'bg-white border-accent text-accent shadow-xs ring-2 ring-accent/20'
                    : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-white'
                }`}
              >
                <MessageSquare size={16} /> 💬 WhatsApp
              </button>
            </div>
          </div>

          {/* Topic / Notes */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary uppercase tracking-wider">
              Topic / Notes (Optional)
            </label>
            <textarea
              rows={3}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="E.g., Reviewing German university selection and blocked account requirements..."
              className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? 'Booking Session...' : consultationType === 'PAID' ? `Confirm Paid Booking (${COUNSELING_PAID_FEE_BDT} BDT)` : 'Confirm Free 15-min Booking'}
            </button>
            <p className="text-center text-xs font-semibold text-emerald-800">
              ✅ Session details recorded securely on your student dashboard
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
