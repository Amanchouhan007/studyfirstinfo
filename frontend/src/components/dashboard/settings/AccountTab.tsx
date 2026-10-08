import { useState } from 'react';
import { Camera, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function AccountTab() {
  const [fullName, setFullName] = useState('Rahul Ahmed');
  const [email] = useState('rahul@gmail.com');
  const [whatsapp, setWhatsapp] = useState('+880 1712345678');
  const [dob, setDob] = useState('2002-01-15');
  const [nationality, setNationality] = useState('Bangladeshi');

  const [isDiyTrack, setIsDiyTrack] = useState(false);
  const [showDiyWarning, setShowDiyWarning] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleTrackToggle = () => {
    if (!isDiyTrack) {
      setShowDiyWarning(true);
    } else {
      setIsDiyTrack(false);
    }
  };

  const confirmSwitchToDiy = () => {
    setIsDiyTrack(true);
    setShowDiyWarning(false);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Profile Photo Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <h3 className="text-base font-bold text-primary mb-4 pb-2 border-b border-gray-100">
          Profile Photo
        </h3>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center font-bold text-3xl shadow-md border-4 border-emerald-50">
              RA
            </div>
            <label className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full hover:bg-emerald-900 cursor-pointer shadow-md transition-transform hover:scale-105">
              <Camera size={14} />
              <input type="file" className="hidden" accept="image/png, image/jpeg" />
            </label>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <button
                type="button"
                className="bg-accent hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
              >
                Change Photo
              </button>
              <button
                type="button"
                className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline"
              >
                Remove
              </button>
            </div>
            <p className="text-xs text-gray-400">Accepted: JPG, PNG | Max 2MB</p>
          </div>
        </div>
      </div>

      {/* Personal Details Form */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h3 className="text-base font-bold text-primary">Personal Details</h3>
          {savedSuccess && (
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1 border border-emerald-200">
              <CheckCircle2 size={13} className="text-accent" /> Updated Successfully!
            </span>
          )}
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  disabled
                  value={email}
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-500 cursor-not-allowed pr-24"
                />
                <span className="absolute right-3 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Verified ✅
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                WhatsApp / Phone
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Nationality
              </label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="bg-accent hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-xs active:scale-95"
            >
              Update Details
            </button>
          </div>
        </form>
      </div>

      {/* Study Track Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <h3 className="text-base font-bold text-primary mb-2">Study Track Mode</h3>
        <p className="text-xs text-gray-500 mb-4">
          Choose whether you want end-to-end counselor assistance or independent application tools.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50 gap-4">
          <div>
            <div className="text-sm font-bold text-primary">
              Current Track: {isDiyTrack ? '🛠️ Self-Applicant (DIY)' : '🤝 Agency-Assisted Track'}
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              {isDiyTrack
                ? 'Applying independently using portal tools & checklists.'
                : 'Dedicated Senior Counselor (M. Imran Hossain Rony) handling applications.'}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-gray-600">
              {isDiyTrack ? 'Self-Applicant (DIY)' : 'Agency-Assisted'}
            </span>
            <button
              type="button"
              onClick={handleTrackToggle}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                isDiyTrack ? 'bg-amber-500 justify-end' : 'bg-accent justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
            </button>
          </div>
        </div>

        {showDiyWarning && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
            <div className="flex items-start gap-2 text-xs font-semibold text-amber-900">
              <ShieldAlert size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <span>
                Warning: Switching track will unassign your current counselor (M. Imran Hossain Rony). You will need to manage university portal filings independently. Confirm?
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={confirmSwitchToDiy}
                className="text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 rounded-lg transition-colors"
              >
                Yes, Switch to DIY Track
              </button>
              <button
                onClick={() => setShowDiyWarning(false)}
                className="text-xs font-bold text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
