import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function AdminSettingsDesk() {
  const [activeBranch, setActiveBranch] = useState<'dhaka' | 'chittagong'>('dhaka');
  const [autoRouting, setAutoRouting] = useState(true);
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [blockedAccountLock, setBlockedAccountLock] = useState(true);
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Toast */}
      {savedToast && (
        <div className="bg-emerald-600 text-white p-3.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2 animate-in slide-in-from-top-2">
          <CheckCircle2 size={16} />
          <span>Branch configuration &amp; allocation rules updated successfully!</span>
        </div>
      )}

      {/* Physical Branches Roster */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div>
            <h3 className="text-base font-bold text-primary">Physical Advisory Branches</h3>
            <p className="text-xs text-gray-500">Official consultancy offices registered under Study First Info Ltd.</p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            2 Physical Centers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => setActiveBranch('dhaka')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              activeBranch === 'dhaka'
                ? 'border-accent bg-emerald-50/20 shadow-xs'
                : 'border-gray-100 bg-gray-50/50 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-accent bg-white px-2.5 py-0.5 rounded-md border border-emerald-200">
                Headquarters
              </span>
              {activeBranch === 'dhaka' && <CheckCircle2 size={16} className="text-accent" />}
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Dhaka Banani Branch</h4>
            <p className="text-xs text-gray-600 mb-3 flex items-start gap-1.5">
              <MapPin size={14} className="shrink-0 mt-0.5 text-accent" />
              House 42, Road 11, Block D, Banani, Dhaka-1213
            </p>
            <div className="text-[11px] text-gray-500 space-y-1">
              <p className="flex items-center gap-1.5"><Phone size={12} /> +880 1712-345678</p>
              <p className="flex items-center gap-1.5"><Mail size={12} /> dhaka@studyfirstinfo.com</p>
            </div>
          </div>

          <div
            onClick={() => setActiveBranch('chittagong')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              activeBranch === 'chittagong'
                ? 'border-accent bg-emerald-50/20 shadow-xs'
                : 'border-gray-100 bg-gray-50/50 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-600 bg-white px-2.5 py-0.5 rounded-md border border-blue-200">
                Port City Center
              </span>
              {activeBranch === 'chittagong' && <CheckCircle2 size={16} className="text-accent" />}
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-1">Chittagong GEC Branch</h4>
            <p className="text-xs text-gray-600 mb-3 flex items-start gap-1.5">
              <MapPin size={14} className="shrink-0 mt-0.5 text-accent" />
              Sanmar Ocean City, Level 5, GEC Circle, Chittagong
            </p>
            <div className="text-[11px] text-gray-500 space-y-1">
              <p className="flex items-center gap-1.5"><Phone size={12} /> +880 1823-456789</p>
              <p className="flex items-center gap-1.5"><Mail size={12} /> ctg@studyfirstinfo.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Rules & Automation Triggers */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-primary pb-3 border-b border-gray-100">
          Lead Automation &amp; Compliance Rules
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
            <div>
              <p className="text-xs font-bold text-gray-900">Round-Robin Counselor Allocation</p>
              <p className="text-[11px] text-gray-500">Automatically balance incoming leads equally across active mentors.</p>
            </div>
            <input
              type="checkbox"
              checked={autoRouting}
              onChange={() => setAutoRouting(!autoRouting)}
              className="w-4 h-4 accent-accent cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
            <div>
              <p className="text-xs font-bold text-gray-900">Instant WhatsApp Lead Push</p>
              <p className="text-[11px] text-gray-500">Alert counselor phone within 15 seconds of website form submission.</p>
            </div>
            <input
              type="checkbox"
              checked={whatsappAlerts}
              onChange={() => setWhatsappAlerts(!whatsappAlerts)}
              className="w-4 h-4 accent-accent cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
            <div>
              <p className="text-xs font-bold text-gray-900">German Blocked Account Verification Lock</p>
              <p className="text-[11px] text-gray-500">Require official Coracle/Fintiba PDF certificate before visa appointment booking.</p>
            </div>
            <input
              type="checkbox"
              checked={blockedAccountLock}
              onChange={() => setBlockedAccountLock(!blockedAccountLock)}
              className="w-4 h-4 accent-accent cursor-pointer"
            />
          </div>
        </div>

        <div className="pt-3">
          <button
            onClick={handleSave}
            className="bg-accent hover:bg-green-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-700/20 cursor-pointer"
          >
            Save Admin Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
