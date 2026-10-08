import { Home, User, FileText, LogOut, Menu, X } from 'lucide-react';
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
  badge?: number;
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
    { name: 'My Documents', icon: FileText, path: '/documents' },
    { name: 'Profile & Settings', icon: User, path: '/profile' },
  ];

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
      <aside className={`fixed md:sticky top-0 left-0 z-50 h-screen w-[260px] bg-primary text-white flex flex-col transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        
        {/* Logo */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-white/10 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 px-2.5 py-1.5 rounded-xl transition-all border border-white/10">
            <img 
              src={logoImg} 
              alt="Study First Info Ltd." 
              className="h-8 w-auto object-contain bg-white rounded-md p-0.5 shadow-xs" 
            />
            <div className="leading-tight">
              <span className="font-bold text-sm tracking-tight text-white block">Study First Info</span>
              <span className="text-[10px] text-emerald-300 font-medium">Student Portal</span>
            </div>
          </Link>
          <button className="text-white/80 hover:text-white md:hidden p-1 rounded-lg hover:bg-white/10 ml-auto" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Profile Summary */}
        <div className="p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl border-2 border-white/20">
              {user ? user.name.substring(0, 2).toUpperCase() : 'RA'}
            </div>
            <div>
              <div className="font-bold">{user ? user.name : 'Rahul Ahmed'}</div>
              <div className="text-xs text-gray-400">{user ? user.email : 'rahul@email.com'}</div>
              <div className="mt-1 inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Active Student
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/dashboard');
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors font-medium text-sm ${
                  isActive ? 'bg-accent text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10 shrink-0">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-white/5 transition-colors text-sm font-bold">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4 shrink-0 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-600">
            <Menu size={24} />
          </button>
          <div className="ml-4 font-bold text-primary">Dashboard</div>
        </div>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}
