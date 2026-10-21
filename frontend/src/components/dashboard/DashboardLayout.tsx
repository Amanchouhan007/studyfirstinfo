  import { 
  Home,
  User,
  GraduationCap, 
  Search, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Bell, 
  LogOut, 
  Menu, 
  X,
  Award
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../../services/api/auth';
import type { User as AuthUser } from '../../services/api/auth';
import type { ReactNode } from 'react';
import logoImg from '../../assets/image.png';

interface NavItem {
  name: string;
  icon: typeof Home;
  path: string;
  badge?: number | string;
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    authService.me().then(res => setUser(res.user)).catch(() => {
      // In dev environment when backend is down, we just don't crash.
      // We still allow access to the mock dashboard as per phase requirements.
    });
  }, []);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await authService.logout();
    } catch {
      // Ignore
    }
    navigate('/auth');
  };

  const navItems: NavItem[] = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Explore Universities', icon: GraduationCap, path: '/dashboard/universities' },
    { name: 'Search Programs', icon: Search, path: '/dashboard/programs' },
    { name: 'Scholarships', icon: Award, path: '/dashboard/scholarships' },
    { name: 'Mentors', icon: Users, path: '/dashboard/mentors' },
    { name: 'Appointments', icon: Calendar, path: '/appointments' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Application Update', icon: FileText, path: '/application' },
    { name: 'Notification', icon: Bell, path: '/notifications' },
    { name: 'My Documents', icon: FileText, path: '/documents' },
    { name: 'Profile & Settings', icon: User, path: '/profile' },
  ];

  const isItemActive = (itemPath: string) => {
    if (itemPath === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    if (itemPath === '/dashboard/scholarships') {
      return location.pathname === '/dashboard/scholarships';
    }
    if (itemPath === '/documents') {
      return location.pathname === '/documents';
    }
    if (itemPath === '/profile') {
      return location.pathname === '/profile' || location.pathname === '/settings';
    }
    if (itemPath === '/notifications') {
      return location.pathname === '/notifications';
    }
    if (itemPath === '/appointments') {
      return location.pathname === '/appointments';
    }
    if (itemPath === '/application') {
      return location.pathname === '/application';
    }
    if (itemPath === '/dashboard/mentors') {
      return location.pathname === '/dashboard/mentors';
    }
    if (itemPath === '/dashboard/universities') {
      return location.pathname === '/dashboard/universities';
    }
    if (itemPath === '/dashboard/programs') {
      return location.pathname === '/dashboard/programs';
    }
    if (itemPath === '/messages') {
      return location.pathname === '/messages';
    }
    return location.pathname === itemPath;
  };

  return (
    <div className="min-h-screen bg-[#F0FDF4] md:bg-gray-50 flex">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Left Sidebar */}
      <aside className={`fixed md:sticky top-0 left-0 z-50 h-screen w-[260px] shrink-0 bg-white border-r border-slate-200/80 flex flex-col transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} shadow-sm md:shadow-none`}>
        
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-slate-100 shrink-0">
          <Link to="/dashboard" className="flex items-center gap-2.5 bg-slate-50 hover:bg-slate-100/80 px-2.5 py-1.5 rounded-xl transition-all border border-slate-200/60">
            <img 
              src={logoImg} 
              alt="Study First Info Ltd." 
              className="h-8 w-auto object-contain bg-white rounded-md p-0.5 shadow-xs" 
            />
            <div className="leading-tight">
              <span className="font-bold text-sm tracking-tight text-slate-900 block">Study First Info</span>
              <span className="text-[10px] text-accent font-semibold">Student Portal</span>
            </div>
          </Link>
          <button 
            className="text-slate-400 hover:text-slate-700 md:hidden p-1 rounded-lg hover:bg-slate-100 ml-auto transition-colors" 
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Summary */}
        <div className="p-4 sm:p-5 border-b border-slate-100 shrink-0">
          <Link to="/profile" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm border-2 border-emerald-100 shadow-xs shrink-0 group-hover:ring-2 group-hover:ring-emerald-400 transition-all">
              {user ? user.name.substring(0, 2).toUpperCase() : 'ST'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-sm text-slate-900 truncate group-hover:text-primary transition-colors">
                {user ? user.name : 'Student'}
              </div>
              <div className="text-xs text-slate-400 truncate">
                {user ? user.email : ''}
              </div>
              <div className="mt-1 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Active Student
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = isItemActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-sm ${
                  isActive
                    ? 'bg-rose-50 text-rose-600 font-semibold shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium'
                }`}
              >
                <item.icon
                  size={18}
                  className={`shrink-0 transition-colors ${
                    isActive ? 'text-rose-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
                <span className="truncate">{item.name}</span>
                {item.badge && (
                  <span
                    className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-rose-600 text-white'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-100 shrink-0">
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors text-sm font-medium"
          >
            <LogOut size={18} className="text-slate-400 group-hover:text-rose-600" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4 shrink-0 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-600">
            <Menu size={24} />
          </button>
          <div className="ml-4 font-bold text-primary">Dashboard</div>
        </div>
        
        <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl w-full mx-auto space-y-6 min-w-0">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}
