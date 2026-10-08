import { useState, useEffect } from 'react';
import { X, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PromoPopupProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function PromoPopup({
  title = "100% Scholarship Mega Expo 2026",
  subtitle = "Europe & Beyond",
  description = "Meet university delegates directly and secure your spot with immediate profile assessments.",
  ctaText = "Register Now for Free",
  ctaLink = "/events"
}: PromoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been closed in this session
    const hasClosed = sessionStorage.getItem('promoPopupClosed');
    if (!hasClosed) {
      // Delay showing the popup to not overwhelm the user immediately
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('promoPopupClosed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:w-[340px] z-[100] pointer-events-none">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden pointer-events-auto transform transition-all duration-500 ease-out"
        role="dialog"
        aria-labelledby="promo-title"
      >
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-1.5 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Close promotion"
        >
          <X size={16} />
        </button>

        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-5 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 id="promo-title" className="text-lg font-bold mb-1 leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-emerald-100 text-xs font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="p-5">
          <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
            {description}
          </p>
          <Link 
            to={ctaLink}
            onClick={handleClose}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            <span>{ctaText}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
