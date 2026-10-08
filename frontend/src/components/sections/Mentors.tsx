import { MessageCircle, Calendar, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Mentors() {
  const mentors = [
    {
      name: 'M. Imran Hossain Rony',
      role: 'Head of Germany Admissions',
      specialty: 'Student Visa • German Blocked Accounts • Permanent Residence (PR)',
      rating: 5,
      reviews: 142,
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      name: 'Md Abul Bashar',
      role: 'Senior European Counselor',
      specialty: 'Schengen Work Rights • Post-Study PR • Spouse & Dependent Visas',
      rating: 5,
      reviews: 98,
      image: 'https://i.pravatar.cc/150?img=14'
    },
    {
      name: 'Md Belal Hossain',
      role: 'Malaysia & Asian Branches Lead',
      specialty: 'Malaysian EMGS Processing • Fast-Track Admission • Spouse Visas',
      rating: 5,
      reviews: 164,
      image: 'https://i.pravatar.cc/150?img=13'
    }
  ];

  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 scroll-mt-20 bg-gradient-to-b from-white via-gray-50/70 to-white" id="counselors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 sm:mb-6 gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-accent font-black tracking-widest text-xs uppercase inline-flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              <ShieldCheck size={14} className="text-accent" />
              LICENSED GLOBAL COUNSELORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
              Connect with Expert Mentors
            </h2>
            <p className="text-base text-gray-600">
              Direct guidance from country specialists. Schedule 1-on-1 counseling or message directly through your student portal.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/counselors"
              className="text-sm font-bold text-accent hover:text-green-800 underline underline-offset-4 mr-2"
            >
              View All Mentors →
            </Link>
            <div className="hidden sm:flex gap-2">
              <button 
                className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-xs"
                aria-label="Previous Mentors"
              >
                <ChevronLeft size={18} className="text-gray-700" />
              </button>
              <button 
                className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-xs"
                aria-label="Next Mentors"
              >
                <ChevronRight size={18} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mentor Cards Grid - Zero overlapping guaranteed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/90 flex flex-col group hover:-translate-y-1"
            >
              {/* Top Banner with Active Badge */}
              <div className="h-28 bg-gradient-to-r from-primary via-[#0d4f3b] to-[#1a4a3e] relative flex items-start justify-end p-4">
                <div className="bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Active Now
                </div>
              </div>
              
              {/* Card Body - Avatar centered in normal block flow */}
              <div className="px-6 pb-6 pt-0 flex flex-col items-center flex-grow">
                
                {/* Centered Avatar: Pulled up into the banner smoothly with -mt-14 */}
                <div className="relative -mt-14 mb-3 z-10">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover bg-gray-100 ring-2 ring-emerald-500/20 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow-xs">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </div>
                </div>
                
                {/* Text Details - Cleanly spaced, zero overlap */}
                <div className="text-center w-full mb-5">
                  <h3 className="text-lg font-black text-gray-900 tracking-tight group-hover:text-accent transition-colors">
                    {mentor.name}
                  </h3>
                  <div className="text-xs font-bold text-accent mt-0.5 mb-2">
                    {mentor.role}
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill="currentColor"
                          className="text-amber-400" 
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 ml-1">
                      5.0 ({mentor.reviews} reviews)
                    </span>
                  </div>

                  {/* Specialty Badges/Text */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 text-xs text-gray-600 font-medium leading-snug line-clamp-2 min-h-[50px] flex items-center justify-center">
                    {mentor.specialty}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="w-full space-y-2.5 mt-auto">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/auth?redirect=/dashboard"
                      className="flex items-center justify-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <MessageCircle size={15} /> Message
                    </Link>
                    <Link
                      to="/counselors"
                      className="flex items-center justify-center gap-1.5 bg-accent hover:bg-green-700 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <Calendar size={15} /> Book Slot
                    </Link>
                  </div>

                  <div className="text-center pt-2 border-t border-gray-100">
                    <span className="text-[11px] font-semibold text-gray-400">
                      Response time: <strong className="text-gray-600 font-bold">&lt; 15 mins</strong>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
