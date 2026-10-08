import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../../assets/image.png';

interface NavItem {
  name: string;
  href: string;
  isAnchor: boolean;
  targetId?: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { name: 'Home', href: '/', isAnchor: false },
    { name: 'Countries', href: '/countries', isAnchor: false },
    { name: 'Services', href: '/services', isAnchor: false },
    { name: 'Scholarships', href: '/scholarships', isAnchor: false },
    { name: 'Counselors', href: '/counselors', isAnchor: false },
    { name: 'Events', href: '/events', isAnchor: false },
    { name: 'Blog', href: '/blog', isAnchor: false },
    { name: 'Careers', href: '/careers', isAnchor: false },
    { name: 'About', href: '/about', isAnchor: false },
  ];

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    setMobileMenuOpen(false);

    if (item.name === 'Home') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
      }
      return;
    }

    if (item.isAnchor && item.targetId) {
      e.preventDefault();
      if (location.pathname === '/') {
        const el = document.getElementById(item.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.targetId}`);
        setTimeout(() => {
          const el = document.getElementById(item.targetId!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
      return;
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.name === 'Home') return location.pathname === '/';
    if (item.isAnchor) return false;
    return location.pathname.startsWith(item.href);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Official Brand Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-3 py-1 group cursor-pointer shrink-0"
          >
            <img 
              src={logoImg} 
              alt="Study First Info Ltd." 
              className="h-10 sm:h-13 w-auto object-contain max-w-[150px] sm:max-w-[210px] group-hover:scale-102 transition-transform duration-200" 
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-150 relative py-1 cursor-pointer select-none ${
                    active 
                      ? 'text-accent font-bold' 
                      : 'text-gray-700 hover:text-accent'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-in fade-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link 
              to="/auth" 
              className="hidden sm:inline-flex items-center text-xs sm:text-sm text-gray-700 hover:text-primary font-semibold px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Login
            </Link>

            <Link 
              to="/auth" 
              className="bg-accent hover:bg-green-700 text-white text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold transition-all shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/30 active:scale-95 flex items-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Register<span className="hidden xs:inline"> Free</span></span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 py-2.5 rounded-xl text-base font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    active
                      ? 'bg-emerald-50 text-accent font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-accent'
                  }`}
                >
                  <span>{item.name}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              to="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            >
              Sign In to Portal
            </Link>
            <Link
              to="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 font-bold text-white bg-accent hover:bg-green-700 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Create Free Account</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
