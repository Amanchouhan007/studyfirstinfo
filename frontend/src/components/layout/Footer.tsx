import { MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/image.png';

export default function Footer() {
  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-12 gap-6">
          <Link 
            to="/" 
            className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-md hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Study First Info - Return to homepage"
          >
            <img src={logoImg} alt="Study First Info Ltd." className="h-10 sm:h-12 w-auto object-contain" />
          </Link>
          <Link 
            to="/about" 
            className="border border-gray-600 hover:border-white text-white px-5 sm:px-6 py-2.5 rounded-xl transition-colors font-medium text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Dhaka &amp; Chittagong Offices
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">About Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Why Study First Info</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Our Mission &amp; Values</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">CEO Leadership Message</Link></li>
              <li><Link to="/counselors" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Our Senior Counselors</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Our Comprehensive Services</Link></li>
              <li><Link to="/careers" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Careers (We&apos;re Hiring!)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Study Abroad</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/countries?country=hungary" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Hungary Schengen Route</Link></li>
              <li><Link to="/countries?country=united-kingdom" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">UK 1-Year Masters</Link></li>
              <li><Link to="/countries?country=malaysia" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Malaysia Branches (UniSZA)</Link></li>
              <li><Link to="/countries?country=germany" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Germany Tuition-Free</Link></li>
              <li><Link to="/countries?country=new-zealand" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">New Zealand Pay After Visa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Scholarships</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/scholarships" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Stipendium Hungaricum</Link></li>
              <li><Link to="/scholarships" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">China CSC 100% Ride</Link></li>
              <li><Link to="/scholarships" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">DAAD &amp; State Schemes</Link></li>
              <li><Link to="/scholarships" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Check Scholarship Eligibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Connect</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="mailto:inquiry@studyfirstinfo.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"><Mail size={16} /> inquiry@studyfirstinfo.com</a></li>
              <li><a href="#facebook" onClick={handlePlaceholderClick} className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Facebook</a></li>
              <li><a href="#instagram" onClick={handlePlaceholderClick} className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Instagram</a></li>
              <li><a href="#linkedin" onClick={handlePlaceholderClick} className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">LinkedIn</a></li>
              <li><a href="#youtube" onClick={handlePlaceholderClick} className="flex items-center gap-2 hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">YouTube</a></li>
              <li><a href="https://wa.me/8801898833034" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"><MessageCircle size={16} /> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Compact Branch Contact Directory */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Official Branch Helplines
            </h4>
            <span className="text-[11px] text-gray-400">
              Saturday – Thursday: 10:00 AM – 6:30 PM
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-3 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">Head Office</span>
              <p className="font-semibold text-white text-xs mt-0.5">Banani Campus</p>
              <div className="mt-1.5 space-y-0.5 font-mono text-[11px] text-emerald-400">
                <a href="tel:+8801898833034" className="block hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="block text-gray-400 hover:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +8809613752752
                </a>
              </div>
            </div>

            <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-3 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">Central Hub</span>
              <p className="font-semibold text-white text-xs mt-0.5">Farmgate Branch</p>
              <div className="mt-1.5 space-y-0.5 font-mono text-[11px] text-emerald-400">
                <a href="tel:+8801806971441" className="block hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1806-971441
                </a>
                <a href="tel:+8801898833034" className="block text-emerald-300 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="block text-gray-400 hover:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +8809613752752
                </a>
              </div>
            </div>

            <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-3 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">Regional Desk</span>
              <p className="font-semibold text-white text-xs mt-0.5">Sylhet Branch</p>
              <div className="mt-1.5 space-y-0.5 font-mono text-[11px] text-emerald-400">
                <a href="tel:+8801898383120" className="block hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1898-383120
                </a>
                <a href="tel:+8801898833034" className="block text-emerald-300 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="block text-gray-400 hover:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +8809613752752
                </a>
              </div>
            </div>

            <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-3 hover:border-emerald-500/50 transition-colors">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide block">Port City Hub</span>
              <p className="font-semibold text-white text-xs mt-0.5">Chittagong Branch</p>
              <div className="mt-1.5 space-y-0.5 font-mono text-[11px] text-emerald-400">
                <a href="tel:+8801806971443" className="block hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1806-971443
                </a>
                <a href="tel:+8801898833034" className="block text-emerald-300 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +880 1898-833034
                </a>
                <a href="tel:+8809613752752" className="block text-gray-400 hover:text-emerald-400 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                  +8809613752752
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-center sm:text-left">
          <p>Copyright © 2026 Study First Info Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a href="#privacy" onClick={handlePlaceholderClick} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Privacy Policy</a>
            <a href="#terms" onClick={handlePlaceholderClick} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Terms of Service</a>
            <a href="#disclaimer" onClick={handlePlaceholderClick} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
