import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/image.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <Link to="/" className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-md hover:opacity-95 transition-opacity">
            <img src={logoImg} alt="Study First Info Ltd." className="h-12 w-auto object-contain" />
          </Link>
          <Link to="/about" className="border border-gray-600 hover:border-white text-white px-6 py-2.5 rounded-xl transition-colors font-medium text-sm">
            Dhaka &amp; Chittagong Offices
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">About Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">Why Study First Info</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Mission &amp; Values</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">CEO Leadership Message</Link></li>
              <li><Link to="/counselors" className="hover:text-accent transition-colors">Our Senior Counselors</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Our Comprehensive Services</Link></li>
              <li><Link to="/careers" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">Careers (We&apos;re Hiring!)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Study Abroad</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/countries?country=hungary" className="hover:text-accent transition-colors">Hungary Schengen Route</Link></li>
              <li><Link to="/countries?country=united-kingdom" className="hover:text-accent transition-colors">UK 1-Year Masters</Link></li>
              <li><Link to="/countries?country=malaysia" className="hover:text-accent transition-colors">Malaysia Branches (UniSZA)</Link></li>
              <li><Link to="/countries?country=germany" className="hover:text-accent transition-colors">Germany Tuition-Free</Link></li>
              <li><Link to="/countries?country=new-zealand" className="hover:text-accent transition-colors">New Zealand Pay After Visa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Scholarships</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link to="/scholarships" className="hover:text-accent transition-colors">Stipendium Hungaricum</Link></li>
              <li><Link to="/scholarships" className="hover:text-accent transition-colors">China CSC 100% Ride</Link></li>
              <li><Link to="/scholarships" className="hover:text-accent transition-colors">DAAD &amp; State Schemes</Link></li>
              <li><Link to="/scholarships" className="hover:text-accent transition-colors">Check Scholarship Eligibility</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Connect</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-accent transition-colors">YouTube</a></li>
              <li><a href="https://wa.me/8801898833034" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><MessageCircle size={16} /> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-center sm:text-left">
          <p>Copyright © 2026 Study First Info Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
