import { useState } from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <AuthLayout>
      {/* Switcher Tabs */}
      <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-7 relative">
        <button 
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'login'
              ? 'bg-white text-primary shadow-xs'
              : 'text-gray-500 hover:text-primary'
          }`}
          onClick={() => setActiveTab('login')}
        >
          Sign In
        </button>
        <button 
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'register'
              ? 'bg-white text-primary shadow-xs'
              : 'text-gray-500 hover:text-primary'
          }`}
          onClick={() => setActiveTab('register')}
        >
          Register Free
        </button>
      </div>

      {/* Forms */}
      <div>
        {activeTab === 'login' ? (
          <LoginForm onSwitchToRegister={() => setActiveTab('register')} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setActiveTab('login')} />
        )}
      </div>
    </AuthLayout>
  );
}
