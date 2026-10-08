import { useState } from 'react';
import { Video, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

export default function BookAppointmentForm({ defaultCounselor }: { defaultCounselor?: string }) {
  const [counselor, setCounselor] = useState(defaultCounselor || 'M. Imran Hossain Rony (Germany Lead)');
  const [selectedDate, setSelectedDate] = useState('2026-09-18');
  const [selectedTime, setSelectedTime] = useState('3PM');
  const [sessionType, setSessionType] = useState<'video' | 'phone' | 'whatsapp'>('video');
  const [topic, setTopic] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const times = ['10AM', '11AM', '2PM', '3PM', '4PM', '5PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div id="book-section" className="bg-[#F0FDF4] border border-accent/30 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-accent/20">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-white px-2.5 py-1 rounded-full border border-accent/20 shadow-xs">
            Book a New Consultation
          </span>
          <h2 className="text-2xl font-bold text-primary mt-2">Need help? Book a session</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Get personalized guidance for your admissions, blocked account, or visa interview.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white/80 px-3 py-1.5 rounded-lg border border-accent/20">
          <Sparkles size={14} className="text-accent" />
          100% Free for Merit Students
        </div>
      </div>

      {isBooked ? (
        <div className="bg-white rounded-xl p-8 text-center max-w-lg mx-auto border border-accent/30 shadow-sm space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-accent rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={36} />
          </div>
          <h3 className="text-xl font-bold text-primary">Appointment Successfully Booked!</h3>
          <p className="text-sm text-gray-600">
            Your appointment with <strong className="text-primary">{counselor}</strong> is set for{' '}
            <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> via{' '}
            <strong>{sessionType === 'video' ? 'Google Meet Video' : sessionType === 'phone' ? 'Phone Call' : 'WhatsApp'}</strong>.
          </p>
          <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 py-2.5 px-4 rounded-lg">
            ✅ SMS + Email confirmation sent instantly
          </div>
          <button
            onClick={() => {
              setIsBooked(false);
              setTopic('');
            }}
            className="text-xs font-bold text-accent hover:underline pt-2 inline-block"
          >
            Book another session &rarr;
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1: Select Counselor */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                Step 1: Select Counselor
              </label>
              <select
                value={counselor}
                onChange={(e) => setCounselor(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              >
                <option value="M. Imran Hossain Rony (Germany Lead)">M. Imran Hossain Rony (Germany Lead)</option>
                <option value="Dr. Sarah Rahman (China &amp; CSC Lead)">Dr. Sarah Rahman (China &amp; CSC Lead)</option>
                <option value="Nadia Sultana (Schengen Europe)">Nadia Sultana (Schengen Europe)</option>
                <option value="Tanvir Hasan (Malaysia Track)">Tanvir Hasan (Malaysia Track)</option>
              </select>
            </div>

            {/* Step 2: Select Date */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                Step 2: Select Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-09-11"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Select Time */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary uppercase tracking-wider">
              Step 3: Select Time Slot (BST)
            </label>
            <div className="flex flex-wrap gap-2.5">
              {times.map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    selectedTime === time
                      ? 'bg-accent text-white shadow-sm ring-2 ring-accent/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Session Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-primary uppercase tracking-wider">
              Step 4: Session Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSessionType('video')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
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
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
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
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
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
              placeholder="E.g., Reviewing German university selection and Fintiba blocked account steps..."
              className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-sm hover:shadow active:scale-[0.99]"
            >
              Confirm Booking
            </button>
            <p className="text-center text-xs font-semibold text-emerald-800">
              ✅ SMS + Email confirmation sent instantly
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
