import { ArrowLeft, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/image.png';

export default function AdminHeader() {
  return (
    <header className="bg-primary text-white border-b border-white/10 px-6 py-4 rounded-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Link to="/" className="shrink-0 bg-white p-1.5 rounded-xl shadow-xs hover:opacity-95 transition-opacity">
          <img src={logoImg} alt="Study First Info Ltd." className="h-10 w-auto object-contain" />
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight">Study First Info</h1>
            <span className="bg-white/15 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-white/20">
              Admin HQ
            </span>
          </div>
          <p className="text-xs text-gray-300">Executive Pipeline Oversight &amp; Counselor Allocation</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-xl transition-colors border border-white/15"
        >
          <ArrowLeft size={14} /> Student View
        </Link>

        <div className="flex items-center gap-3 pl-2 border-l border-white/15">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-bold">Admin Director</div>
            <div className="text-[10px] text-emerald-400">Dhaka HQ &bull; Full Access</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs shadow-xs border border-white/20">
            AD
          </div>
          <Link
            to="/auth"
            className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-white/5 transition-colors"
            title="Sign Out"
          >
            <LogOut size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
