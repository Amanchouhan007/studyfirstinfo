import { useState } from 'react';
import { Globe, CheckCircle2 } from 'lucide-react';

export default function LanguageTab() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [timeZone, setTimeZone] = useState('Asia/Dhaka');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <Globe size={18} className="text-accent" />
          <h3 className="text-base font-bold text-primary">Language &amp; Regional Settings</h3>
        </div>
        {saved && (
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1 border border-emerald-200">
            <CheckCircle2 size={13} className="text-accent" /> Regional Settings Saved!
          </span>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-xl">
        {/* Language Selection */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Display Language
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`p-4 rounded-xl border text-left transition-all ${
                language === 'en'
                  ? 'border-accent bg-emerald-50/50 ring-2 ring-accent/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-bold text-sm text-primary">English (Default)</div>
              <div className="text-xs text-gray-500 mt-0.5">International standard</div>
            </button>

            <button
              type="button"
              onClick={() => setLanguage('bn')}
              className={`p-4 rounded-xl border text-left transition-all ${
                language === 'bn'
                  ? 'border-accent bg-emerald-50/50 ring-2 ring-accent/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-bold text-sm text-primary">বাংলা (Bengali)</div>
              <div className="text-xs text-gray-500 mt-0.5">বাংলাদেশি শিক্ষার্থীদের জন্য</div>
            </button>
          </div>
        </div>

        {/* Time Zone */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
            Time Zone
          </label>
          <div className="relative">
            <select
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              <option value="Asia/Dhaka">Asia/Dhaka (GMT+6) — Bangladesh Standard Time</option>
              <option value="Europe/Berlin">Europe/Berlin (GMT+1 / GMT+2 DST) — Germany</option>
              <option value="Asia/Shanghai">Asia/Shanghai (GMT+8) — China</option>
              <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur (GMT+8) — Malaysia</option>
              <option value="UTC">UTC (Coordinated Universal Time)</option>
            </select>
          </div>
        </div>

        {/* Date Format */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
            Date Format
          </label>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          >
            <option value="DD/MM/YYYY">DD/MM/YYYY (e.g. 10/09/2026)</option>
            <option value="MM/DD/YYYY">MM/DD/YYYY (e.g. 09/10/2026)</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD (e.g. 2026-09-10)</option>
          </select>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-accent hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-xs active:scale-95"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
