import { MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

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

  const whatsappMessage = encodeURIComponent("Hi Study First Info, I need help checking my eligibility for [Country]");

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-3 sm:gap-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all opacity-85 hover:opacity-100 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
      
      <a
        href={`https://wa.me/1234567890?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60"></div>
        <MessageCircle className="relative z-10 w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" />
      </a>
    </div>
  );
}
