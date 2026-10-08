import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import logoImg from '../../assets/image.png';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Panel (45%) */}
      <div className="lg:w-[45%] bg-gradient-to-br from-[#0D3B2E] via-[#0b3328] to-[#062018] p-5 sm:p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white shrink-0">
        {/* Background Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Header: Logo & Back Link */}
        <div className="relative z-10 flex items-center justify-between gap-4 mb-6 sm:mb-10">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="bg-white p-1 sm:p-1.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="Study First Info Ltd." className="h-8 sm:h-10 w-auto object-contain" />
            </div>
            <div>
              <span className="font-black text-base sm:text-lg text-white tracking-tight block">Study First Info</span>
              <span className="text-[10px] text-emerald-300 font-medium">Official Portal</span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-semibold text-emerald-200 hover:text-white bg-white/10 hover:bg-white/15 px-2.5 sm:px-3 py-1.5 rounded-xl transition-colors border border-white/10"
          >
            <ArrowLeft size={13} /> Back to Website
          </Link>
        </div>

        {/* Center Content: Headline & Trust Points */}
        <div className="relative z-10 max-w-md my-auto py-3 sm:py-6">
          <span className="inline-block bg-accent/20 text-emerald-300 border border-accent/30 text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 sm:mb-4">
            Authorized Global Admissions
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4 sm:mb-6">
            Your journey to a world-class education starts here.
          </h1>
          
          <div className="space-y-2.5 sm:space-y-3.5 mb-5 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/90 text-xs sm:text-sm font-medium">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <CheckCircle2 size={15} />
              </div>
              <span>Zero Upfront Fees Guarantee</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/90 text-xs sm:text-sm font-medium">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <CheckCircle2 size={15} />
              </div>
              <span>Verified Destination-Specialist Counselors</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/90 text-xs sm:text-sm font-medium">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <CheckCircle2 size={15} />
              </div>
              <span>98% Visa Success Rate Across Europe &amp; Asia</span>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial Card */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 mt-4 sm:mt-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
              alt="Arafat Rahman"
              className="w-10 h-10 rounded-full object-cover border-2 border-accent shrink-0"
            />
            <div>
              <div className="text-white font-bold text-xs sm:text-sm">Arafat Rahman &bull; TU Munich, Germany</div>
              <div className="text-emerald-300 text-[11px] font-semibold flex items-center gap-1">
                <span>✅</span> CSC &amp; DAAD Scholar
              </div>
            </div>
          </div>
          <p className="text-white/80 italic text-xs leading-relaxed">
            &ldquo;Best decision of my life. Got fully funded admission to Germany in 3 months without paying any upfront advance fees.&rdquo;
          </p>
        </div>
      </div>

      {/* Right Panel (55%) */}
      <div className="lg:w-[55%] flex items-center justify-center p-4 sm:p-8 lg:p-12 relative bg-gray-50/40 min-h-screen">
        <div className="w-full max-w-[440px] bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
          {children}
        </div>
      </div>
    </div>
  );
}
