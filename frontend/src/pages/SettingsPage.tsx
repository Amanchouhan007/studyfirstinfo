import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Shield, Bell, Lock, Globe, Save, Check } from 'lucide-react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import AccountTab from '../components/dashboard/settings/AccountTab';
import SecurityTab from '../components/dashboard/settings/SecurityTab';
import PrivacyTab from '../components/dashboard/settings/PrivacyTab';
import LanguageTab from '../components/dashboard/settings/LanguageTab';
import NotificationPreferencesCard from '../components/dashboard/notifications/NotificationPreferencesCard';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'Account' | 'Security' | 'Notifications' | 'Privacy' | 'Language'>('Account');
  const [globalSaved, setGlobalSaved] = useState(false);

  const handleGlobalSave = () => {
    setGlobalSaved(true);
    setTimeout(() => setGlobalSaved(false), 2500);
  };

  const tabs = [
    { name: 'Account', icon: User },
    { name: 'Security', icon: Shield },
    { name: 'Notifications', icon: Bell },
    { name: 'Privacy', icon: Lock },
    { name: 'Language', icon: Globe },
  ] as const;

  return (
    <DashboardLayout>
      {/* Header & Breadcrumbs & Global Save Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">Account Settings</h1>
          <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
            <span>&gt;</span>
            <span className="text-primary font-semibold">Settings</span>
          </div>
        </div>

        <button
          onClick={handleGlobalSave}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-sm active:scale-95 self-start sm:self-auto"
        >
          {globalSaved ? <Check size={16} /> : <Save size={16} />}
          {globalSaved ? 'Saved All Changes' : 'Save Changes'}
        </button>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200 mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-gray-500 hover:text-primary hover:bg-white'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-accent' : 'text-gray-400'} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div>
        {activeTab === 'Account' && <AccountTab />}
        {activeTab === 'Security' && <SecurityTab />}
        {activeTab === 'Notifications' && <NotificationPreferencesCard />}
        {activeTab === 'Privacy' && <PrivacyTab />}
        {activeTab === 'Language' && <LanguageTab />}
      </div>
    </DashboardLayout>
  );
}
