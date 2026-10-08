import { useState } from 'react';
import { Lock, Smartphone, Laptop, CheckCircle2 } from 'lucide-react';

export default function SecurityTab() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [googleConnected, setGoogleConnected] = useState(true);
  const [passUpdated, setPassUpdated] = useState(false);

  // Simple password strength calculation
  const getPasswordStrength = () => {
    if (!newPassword) return { text: 'Empty', color: 'bg-gray-200', width: '0%' };
    if (newPassword.length < 6) return { text: 'Weak', color: 'bg-red-500', width: '25%' };
    if (newPassword.length < 10) return { text: 'Medium', color: 'bg-amber-500', width: '60%' };
    return { text: 'Strong', color: 'bg-emerald-500', width: '100%' };
  };

  const strength = getPasswordStrength();

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword) {
      setPassUpdated(true);
      setTimeout(() => {
        setPassUpdated(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }, 2500);
    } else {
      alert('Passwords do not match or fields are empty!');
    }
  };

  return (
    <div className="space-y-8">
      {/* Change Password */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <Lock size={18} className="text-accent" />
            <h3 className="text-base font-bold text-primary">Change Password</h3>
          </div>
          {passUpdated && (
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1 border border-emerald-200">
              <CheckCircle2 size={13} className="text-accent" /> Password Updated!
            </span>
          )}
        </div>

        <form onSubmit={handlePasswordUpdate} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>
          </div>

          {newPassword && (
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Password strength:</span>
                <span className="font-bold text-primary">{strength.text}</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className={`h-full ${strength.color} transition-all duration-300`} style={{ width: strength.width }}></div>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="bg-accent hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-xs active:scale-95"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-gray-100">
          <Smartphone size={18} className="text-accent" />
          <h3 className="text-base font-bold text-primary">Two-Factor Authentication</h3>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 mt-4">
          <div>
            <div className="text-sm font-bold text-primary">
              Enable 2FA via WhatsApp OTP
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              Receive a 6-digit one-time passcode on your verified WhatsApp number (+880 1712345678) whenever logging in.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                twoFactorEnabled ? 'bg-accent justify-end' : 'bg-gray-200 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-md"></div>
            </button>
            <button
              type="button"
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                twoFactorEnabled ? 'bg-gray-200 text-gray-700' : 'bg-accent text-white hover:bg-emerald-700'
              }`}
            >
              {twoFactorEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h3 className="text-base font-bold text-primary">Connected Accounts</h3>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs border border-gray-200 font-bold text-sm text-red-500">
              G
            </div>
            <div>
              <div className="text-sm font-bold text-primary">Google Account</div>
              <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 size={13} /> {googleConnected ? 'rahul@gmail.com connected' : 'Disconnected'}
              </div>
            </div>
          </div>

          {googleConnected ? (
            <button
              type="button"
              onClick={() => setGoogleConnected(false)}
              className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline"
            >
              Disconnect Google
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setGoogleConnected(true)}
              className="text-xs font-bold text-accent hover:underline"
            >
              Connect Google
            </button>
          )}
        </div>
      </div>

      {/* Active Sessions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <Laptop size={18} className="text-accent" />
            <h3 className="text-base font-bold text-primary">Active Sessions</h3>
          </div>
          <button
            onClick={() => alert('Signed out of all other devices successfully.')}
            className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline"
          >
            Sign out all other devices
          </button>
        </div>

        <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-primary flex items-center gap-2">
              <span>Chrome &mdash; Dhaka, Bangladesh</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                Active now
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Windows PC &bull; IP: 103.145.xxx.xxx</div>
          </div>
          <span className="text-xs text-gray-400">Current Device</span>
        </div>
      </div>
    </div>
  );
}
