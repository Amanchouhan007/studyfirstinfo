import { 
  LayoutDashboard, 
  Users, 
  Award, 
  BarChart3, 
  Settings, 
  LogOut, 
  X,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/image.png';

export type AdminTab = 'overview' | 'counselors' | 'waivers' | 'analytics' | 'seo' | 'settings';

interface AdminSidebarProps {
  currentTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({
  currentTab,
  onTabChange,
  isOpen,
  onClose,
}: AdminSidebarProps) {
  const menuItems = [
    {
      id: 'overview' as AdminTab,
      label: 'Pipeline & Leads',
      icon: LayoutDashboard,
      badge: '142',
      badgeColor: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      id: 'counselors' as AdminTab,
      label: 'Counselor Desks',
      icon: Users,
      badge: '4 Active',
      badgeColor: 'bg-blue-500/20 text-blue-300',
    },
    {
      id: 'waivers' as AdminTab,
      label: '100% Merit Waivers',
      icon: Award,
      badge: '18 Pending',
      badgeColor: 'bg-amber-500/20 text-amber-300',
    },
    {
      id: 'analytics' as AdminTab,
      label: 'Intake Analytics',
      icon: BarChart3,
    },
    {
      id: 'seo' as AdminTab,
      label: 'SEO, Schema & GTM',
      icon: Globe,
      badge: 'Live',
      badgeColor: 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40',
    },
    {
      id: 'settings' as AdminTab,
      label: 'Branch & Settings',
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-primary text-white flex flex-col transition-transform duration-300 ease-in-out border-r border-white/10 lg:sticky lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header: Official Logo */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-white/10 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 px-2.5 py-1.5 rounded-xl transition-all border border-white/10 group">
            <img 
              src={logoImg} 
              alt="Study First Info Ltd." 
              className="h-8 w-auto object-contain bg-white rounded-md p-0.5 shadow-xs group-hover:scale-105 transition-transform" 
            />
            <div className="leading-tight">
              <span className="font-bold text-sm tracking-tight text-white block">Study First Info</span>
              <span className="text-[10px] text-emerald-300 font-medium">Admin Portal</span>
            </div>
          </Link>
          <button 
            className="text-white/70 hover:text-white lg:hidden p-1 rounded-lg hover:bg-white/10" 
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Admin Director Profile Card */}
        <div className="p-4 mx-3 my-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-sm shadow-xs border border-white/20">
              AD
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-xs text-white truncate">Admin Director</div>
              <div className="text-[10px] text-emerald-300 flex items-center gap-1 font-medium">
                <ShieldCheck size={11} className="shrink-0" />
                Dhaka HQ &bull; Full Access
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto py-2">
          <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Main Management
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = currentTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-accent text-white shadow-md shadow-emerald-900/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={17} className={active ? 'text-white' : 'text-emerald-300'} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      active ? 'bg-white/20 text-white' : item.badgeColor
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Switch Links */}
        <div className="p-3 border-t border-white/10 space-y-2 shrink-0">
          <Link
            to="/auth"
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-200 bg-rose-500/15 hover:bg-rose-500/25 transition-all border border-rose-500/30 cursor-pointer"
          >
            <LogOut size={15} />
            <span>Logout Portal</span>
          </Link>

          <div className="flex items-center justify-between px-2 pt-1 text-[11px] text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">
              Main Website
            </Link>
            <span>&bull;</span>
            <Link to="/dashboard" className="hover:text-emerald-300 transition-colors">
              Student View
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
