import { useState } from 'react';
import { Mail, MessageSquare, Smartphone, Bell, Check } from 'lucide-react';

export default function NotificationPreferencesCard() {
  const [preferences, setPreferences] = useState({
    email: true,
    whatsapp: true,
    sms: true,
    browser: false,
  });
  const [saved, setSaved] = useState(false);

  const toggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-primary">Notification Preferences</h2>
          <p className="text-xs text-gray-500 mt-0.5">Control through which channels Study First Info alerts you</p>
        </div>
        {saved && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
            <Check size={14} className="text-accent" /> Preferences Saved!
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div>
              <div className="font-bold text-primary text-sm">📧 Email Notifications</div>
              <div className="text-xs text-gray-500">Official counselor notes &amp; offer updates</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggle('email')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
              preferences.email ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
          </button>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageSquare size={18} />
            </div>
            <div>
              <div className="font-bold text-primary text-sm">💬 WhatsApp Notifications</div>
              <div className="text-xs text-gray-500">Fast alerts for appointment calls &amp; urgent actions</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggle('whatsapp')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
              preferences.whatsapp ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
          </button>
        </div>

        {/* SMS */}
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Smartphone size={18} />
            </div>
            <div>
              <div className="font-bold text-primary text-sm">📱 SMS Notifications</div>
              <div className="text-xs text-gray-500">Security OTPs and appointment reminders</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggle('sms')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
              preferences.sms ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
          </button>
        </div>

        {/* Browser */}
        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Bell size={18} />
            </div>
            <div>
              <div className="font-bold text-primary text-sm">🔔 Browser Notifications</div>
              <div className="text-xs text-gray-500">Instant desktop push messages</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggle('browser')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
              preferences.browser ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
          </button>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
        <button
          onClick={handleSave}
          className="bg-accent hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-95"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
