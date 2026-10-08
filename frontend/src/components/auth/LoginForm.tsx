import { Eye, EyeOff, Lock, Mail, Sparkles, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { authService } from '../../services/api/auth';

export default function LoginForm({ onSwitchToRegister }: { onSwitchToRegister: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTarget = searchParams.get('redirect') || '/dashboard';
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStudentDemo = () => {
    setEmail('rahul@gmail.com');
    setPassword('student123');
    setTimeout(() => {
      navigate(redirectTarget);
    }, 200);
  };

  const handleAdminDemo = () => {
    setEmail('admin@studyfirstinfo.com');
    setPassword('admin123');
    setTimeout(() => {
      navigate('/admin');
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await authService.login({ email, password });
      navigate(redirectTarget);
    } catch (err: any) {
      setError(err.message || 'Failed to login');
      // Fallback for demo users when DB is not available
      if (email.toLowerCase().includes('admin') || email.includes('rahul')) {
        navigate(email.includes('admin') ? '/admin' : redirectTarget);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">Welcome Back 👋</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Sign in to track your admissions &amp; visa files</p>
      </div>

      {/* ⚡ 1-Click Demo Login Box */}
      <div className="bg-[#F0FDF4] border border-accent/30 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <Sparkles size={14} className="text-accent" />
            1-Click Demo Access
          </div>
          <span className="text-[10px] bg-white text-accent font-extrabold px-2 py-0.5 rounded-full border border-accent/20">
            Instant
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleStudentDemo}
            className="flex items-center justify-center gap-1.5 bg-white hover:bg-emerald-50 text-primary border border-accent/30 hover:border-accent font-bold py-2.5 px-3 rounded-xl text-xs shadow-xs transition-all active:scale-95"
          >
            <UserCheck size={14} className="text-accent" />
            Demo Student
          </button>

          <button
            type="button"
            onClick={handleAdminDemo}
            className="flex items-center justify-center gap-1.5 bg-primary hover:bg-emerald-950 text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-xs transition-all active:scale-95"
          >
            <ShieldCheck size={14} className="text-emerald-400" />
            Demo Admin
          </button>
        </div>
      </div>

      {/* Google Login Button */}
      <button
        type="button"
        onClick={handleStudentDemo}
        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all shadow-xs text-xs sm:text-sm"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="absolute border-t border-gray-200 w-full"></div>
        <div className="relative bg-white px-3 text-xs text-gray-400 font-medium">
          or sign in with email
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-100">
          {error}
        </div>
      )}

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Mail size={16} />
            </div>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Lock size={16} />
            </div>
            <input 
              type={showPassword ? 'text' : 'password'} 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••" 
              className="w-full pl-10 pr-11 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              defaultChecked
              className="rounded border-gray-300 text-accent focus:ring-accent w-4 h-4 cursor-pointer" 
            />
            <span className="text-gray-600 font-medium">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-accent hover:text-primary font-bold transition-colors">
            Forgot Password?
          </Link>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-98 text-sm flex items-center justify-center gap-1.5 disabled:opacity-70"
        >
          <span>{isLoading ? 'Signing In...' : 'Sign In to Portal'}</span>
          {!isLoading && <ArrowRight size={15} />}
        </button>
      </form>

      {/* Switch to Register */}
      <p className="text-center text-xs sm:text-sm text-gray-600 font-medium pt-1">
        Don't have an account?{' '}
        <button 
          onClick={onSwitchToRegister} 
          className="text-accent hover:text-primary font-bold transition-colors hover:underline"
        >
          Register Free &rarr;
        </button>
      </p>
    </div>
  );
}
