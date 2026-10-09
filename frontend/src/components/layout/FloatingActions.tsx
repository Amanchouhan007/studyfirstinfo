import { MessageCircle, ArrowUp, X, Building2, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { WHATSAPP_BRANCHES } from '../../data/whatsappData';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3 sm:gap-4 z-50">
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all opacity-85 hover:opacity-100 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* WhatsApp Multi-Branch Menu Popover */}
      {isOpen && (
        <div className="w-[320px] sm:w-[360px] bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#006837] text-white p-4 flex items-start justify-between relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" fill="currentColor" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm tracking-wide">Study First Info Ltd.</h4>
                </div>
                <p className="text-[11px] text-emerald-100">Official WhatsApp Admissions Desk</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span className="text-[10px] text-emerald-200 font-medium">Online • Select a branch below</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Branch Options List */}
          <div className="p-3 bg-slate-50/70 space-y-2 max-h-[380px] overflow-y-auto">
            {WHATSAPP_BRANCHES.map((branch) => {
              const url = `https://wa.me/${branch.waNumber}?text=${encodeURIComponent(branch.defaultMessage)}`;
              return (
                <a
                  key={branch.id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-2xl transition-all duration-200 border group ${
                    branch.isOfficial
                      ? 'bg-emerald-50/60 border-emerald-200 hover:bg-emerald-100/70 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                        branch.isOfficial ? 'bg-[#006837] text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-xs text-slate-900 group-hover:text-[#006837] transition-colors">
                            {branch.name}
                          </span>
                          {branch.badge && (
                            <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full ${
                              branch.isOfficial 
                                ? 'bg-[#006837] text-white' 
                                : 'bg-slate-200 text-slate-700'
                            }`}>
                              {branch.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {branch.subtitle}
                        </p>
                        <p className="text-[11px] font-semibold text-[#006837] font-mono mt-1">
                          {branch.phoneDisplay}
                        </p>
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#25D366]/10 text-[#006837] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-slate-100/90 border-t border-slate-200/80 text-center">
            <span className="text-[10px] text-slate-500 font-medium">
              🔒 Official Study First Info Counselor Network
            </span>
          </div>
        </div>
      )}
      
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
        aria-label="Open WhatsApp Chat Channels"
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
        )}
        {isOpen ? (
          <X className="relative z-10 w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <MessageCircle className="relative z-10 w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" />
        )}
      </button>
    </div>
  );
}
