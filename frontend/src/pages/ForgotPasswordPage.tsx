import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout';

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);

  return (
    <AuthLayout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Link to="/auth" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to login
        </Link>

        {!isSent ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Reset Your Password</h2>
              <p className="text-gray-500">Enter your email and we'll send you instructions to reset your password.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSent(true); }}>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-600/30 transition-all hover:-translate-y-0.5">
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">Check your inbox</h2>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              We've sent a password reset link to your email. Click the link to set a new password.
            </p>
            <button 
              onClick={() => setIsSent(false)} 
              className="text-accent hover:text-primary font-bold transition-colors"
            >
              Didn't receive the email? Click to resend.
            </button>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
