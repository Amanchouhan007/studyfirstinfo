import { Globe, PlaneTakeoff, GraduationCap, Users, FileSignature, Ticket, Sparkles, ArrowRight, CreditCard, Languages, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Online Guidance & Profiling',
      desc: 'Get comprehensive 1-on-1 guidance from destination-specialist mentors based in Germany, China, and Malaysia.',
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: 'from-emerald-600 to-emerald-800',
    },
    {
      title: 'Admission & University Filing',
      desc: 'Official submission of your academic dossier to direct faculty boards with zero application processing errors.',
      icon: <PlaneTakeoff className="w-6 h-6 text-white" />,
      gradient: 'from-accent to-emerald-700',
    },
    {
      title: 'Scholarships & Merit Waivers',
      desc: 'Awarded scholars guide you through CSC, DAAD, and 100% agency service fee waiver qualifications.',
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      gradient: 'from-amber-500 to-amber-700',
    },
    {
      title: 'Spouse & Dependent Visas',
      desc: 'Assist students in filing accompanied spouse and dependent children visas with complete embassy paperwork.',
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: 'from-blue-600 to-indigo-800',
    },
    {
      title: 'Document Legalization & Attestation',
      desc: 'Fast-track document legalization via Notary Public, Foreign Ministry, and German Embassy verification channels.',
      icon: <FileSignature className="w-6 h-6 text-white" />,
      gradient: 'from-purple-600 to-primary',
    },
    {
      title: 'Air Ticket & Pre-Departure',
      desc: 'Domestic and international flights at wholesale student rates, airport pickup, and German SIM card handover.',
      icon: <Ticket className="w-6 h-6 text-white" />,
      gradient: 'from-rose-600 to-red-800',
    },
    {
      title: 'Study Loan Support',
      desc: 'Professional guidance and documentation support for navigating study loan applications to help fund your international education.',
      icon: <CreditCard className="w-6 h-6 text-white" />,
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'German Language Course',
      desc: 'Comprehensive German language preparation designed to support your academic and professional integration in Germany.',
      icon: <Languages className="w-6 h-6 text-white" />,
      gradient: 'from-amber-400 to-amber-600',
    },
    {
      title: 'IELTS Coaching',
      desc: 'Structured IELTS preparation resources and coaching to help you build the English proficiency needed for university applications.',
      icon: <BookOpen className="w-6 h-6 text-white" />,
      gradient: 'from-emerald-500 to-emerald-700',
    },
  ];

  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 scroll-mt-20 bg-gradient-to-b from-[#F0FDF4]/50 via-white to-gray-50/50 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-accent font-bold tracking-widest text-xs px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles size={13} />
            END-TO-END SERVICE ECOSYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
            Complete Support from Application to Departure
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Every step of your international study roadmap is managed under one unified roof with zero hidden surcharges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 sm:mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-accent">
                <span>Free Consultation Included</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <Link
            to="/counselors"
            className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-950 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 text-center"
          >
            <span>Book a Free Session with Destination Specialist</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
