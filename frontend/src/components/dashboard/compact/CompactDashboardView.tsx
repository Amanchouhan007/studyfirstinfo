import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Calendar, 
  FileText, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Search, 
  Clock, 
  Compass
} from 'lucide-react';
import { authService, type User } from '../../../services/api/auth';

export default function CompactDashboardView() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    authService.me()
      .then((res) => setUser(res.user))
      .catch(() => {
        // Fallback for unauthenticated / offline local development
        setUser(null);
      });
  }, []);

  const studentName = user?.name || 'Student';

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Top Banner: Real User Greeting & Portal Status */}
      <div className="bg-white rounded-2xl border-l-[6px] border-l-accent border border-gray-100 shadow-sm p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-1">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">
              Welcome back, {studentName}! 👋
            </h1>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              Student Portal
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Self-service study abroad application, scholarship discovery &amp; mentor guidance desk.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold">
            <Clock size={13} className="text-slate-400" />
            No Active Application File
          </span>
        </div>
      </div>

      {/* Clean Empty State for Students with No Application */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center space-y-5">
        <div className="w-16 h-16 bg-emerald-50 text-accent rounded-2xl flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
          <Compass size={32} />
        </div>

        <div className="max-w-md mx-auto space-y-1.5">
          <h2 className="text-lg sm:text-xl font-bold text-primary">
            You haven&apos;t started an application yet
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Ready to begin your higher studies abroad? Choose whether to apply directly for free on your own or book a personalized counseling session.
          </p>
        </div>

        {/* Clear Action Buttons: Self-Application & Free Counseling */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-lg mx-auto">
          <Link
            to="/application"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow active:scale-[0.99]"
          >
            <FileText size={16} />
            <span>Start Free Self-Application</span>
          </Link>

          <Link
            to="/appointments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-primary border border-gray-200 hover:border-accent font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-xs active:scale-[0.99]"
          >
            <Calendar size={16} className="text-accent" />
            <span>Book Free Counseling</span>
          </Link>
        </div>
      </div>

      {/* Compact Card: Browse scholarships and study guides */}
      <div className="bg-gradient-to-br from-[#06321e] via-[#042517] to-[#02170e] text-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 border border-emerald-800/80">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0 border border-white/10">
            <Award size={24} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider mb-1 border border-emerald-500/30">
              <Sparkles size={11} /> 100% Tuition Waivers &amp; Government Schemes
            </div>
            <h3 className="font-bold text-base sm:text-lg text-white">
              Browse scholarships and study guides
            </h3>
            <p className="text-xs text-emerald-100/80 mt-0.5 leading-relaxed">
              Explore fully funded Hungarian Stipendium, Chinese CSC, UK Russell Group awards &amp; European waivers.
            </p>
          </div>
        </div>

        <Link
          to="/dashboard/scholarships"
          className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors shrink-0 shadow-sm"
        >
          <span>Browse Scholarships</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Quick Discovery Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Programs */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between hover:border-emerald-200 transition-colors">
          <div>
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <Search size={18} />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Search Programs</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Filter programs by your budget, academic GPA, and preferred destination country.
            </p>
          </div>
          <div className="pt-4 mt-auto">
            <Link
              to="/dashboard/programs"
              className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
            >
              <span>Match Programs</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Explore Universities */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between hover:border-emerald-200 transition-colors">
          <div>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <GraduationCap size={18} />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Explore Universities</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Browse accredited partner universities in Hungary, Germany, China, Malaysia, and the UK.
            </p>
          </div>
          <div className="pt-4 mt-auto">
            <Link
              to="/dashboard/universities"
              className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
            >
              <span>View Directory</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* My Documents */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between hover:border-emerald-200 transition-colors">
          <div>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <FileText size={18} />
            </div>
            <h4 className="font-bold text-primary text-sm mb-1">Document Readiness</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Upload and manage your SSC, HSC, Bachelor certificates, and IELTS/MOI documents.
            </p>
          </div>
          <div className="pt-4 mt-auto">
            <Link
              to="/documents"
              className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
            >
              <span>View Documents</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

