import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Ticket, 
  Gift, 
  Building2, 
  Zap, 
  Flame, 
  Calendar, 
  MapPin, 
  Check, 
  ArrowRight,
  X
} from 'lucide-react';
import { fetchCountries } from '../services/api/catalog';
import { eventService } from '../services/api/events';
import type { CountryRecord } from '../data/countriesData';

interface EventItem {
  id: string;
  category: string; // space-separated categories e.g. "expo scholarship"
  tag: string;
  tagClass: string;
  location: string;
  title: string;
  description: string;
  speaker: {
    initials: string;
    bgClass: string;
    name: string;
    role: string;
    roleClass?: string;
  };
  details: { label: string; value: string }[];
  badgeText: string;
  badgeClass: string;
}

const eventsList: EventItem[] = [
  {
    id: 'ev-1',
    category: 'expo scholarship',
    tag: 'Schengen & Asia Expo',
    tagClass: 'text-emerald-800 bg-emerald-100/90',
    location: 'Banani Head Office',
    title: '100% Scholarship Mega Expo 2026',
    description: 'Comprehensive briefing and direct application desk for zero-tuition government schemes in the Czech Republic, Malaysia, Russia, and Hungary.',
    speaker: {
      initials: 'SFI',
      bgClass: 'bg-emerald-700 text-white',
      name: 'Senior European Evaluators',
      role: 'Direct File Submission Desk'
    },
    details: [
      { label: 'Date', value: '26 September 2026 (Saturday)' },
      { label: 'Timing', value: '10:00 AM – 6:30 PM' },
      { label: 'Perks', value: 'Grand Raffle Draw (Laptop 💻, Tab 📲)' },
      { label: 'File Opening', value: 'Up to 70% Spot Discount' }
    ],
    badgeText: 'Entry: 100% FREE',
    badgeClass: 'text-emerald-800'
  },
  {
    id: 'ev-2',
    category: 'expo admission scholarship',
    tag: '🇲🇾 Malaysia Direct',
    tagClass: 'text-sky-800 bg-sky-100/90',
    location: 'Banani & Sylhet',
    title: 'Study in Malaysia Expo: MILA University Special',
    description: 'Meet university delegates in-person to claim a 50% Flat Scholarship across your entire course duration. Complete your bachelor degree in 3 to 3.5 years at ultra-low tuition.',
    speaker: {
      initials: 'NA',
      bgClass: 'bg-sky-700 text-white',
      name: 'Noor Athirah',
      role: 'Asst. Manager, MILA University Enrolment',
      roleClass: 'text-sky-700'
    },
    details: [
      { label: 'Date', value: '23 August 2026 (Sunday)' },
      { label: 'Offer', value: '50% Flat Tuition Scholarship' },
      { label: 'Language', value: 'IELTS 5.0/5.5, MOI & PTE Accepted' },
      { label: 'Perks', value: '100% EMGS Fee Support (Pay After Visa)' }
    ],
    badgeText: 'Only 10 Special Seats',
    badgeClass: 'text-sky-800'
  },
  {
    id: 'ev-3',
    category: 'admission scholarship',
    tag: '🇭🇺 Hungary Spotlight',
    tagClass: 'text-rose-800 bg-rose-100/90',
    location: 'Banani Campus',
    title: 'University of Pécs Spot Admissions & Stipendium Briefing',
    description: 'Direct guidance on University of Pécs degree admissions, conditional offer letters, and Hungary student visa submission directly in Dhaka without India travel.',
    speaker: {
      initials: 'AS',
      bgClass: 'bg-rose-700 text-white',
      name: 'Arif Sayed',
      role: 'Regional Rep., University of Pécs',
      roleClass: 'text-rose-700'
    },
    details: [
      { label: 'Venue', value: 'Rosa Bella, Road 17, Banani C/A' },
      { label: 'Spot Offer', value: 'Transcripts & Passport Evaluation' },
      { label: 'Visa Route', value: '1-to-1 Dhaka Embassy Mock Drills' },
      { label: 'Record', value: 'Over 500+ Hungary Visas Handled' }
    ],
    badgeText: 'Entry: 100% FREE',
    badgeClass: 'text-rose-800'
  },
  {
    id: 'ev-4',
    category: 'admission',
    tag: '🇬🇧 UK Admissions',
    tagClass: 'text-purple-800 bg-purple-100/90',
    location: 'Banani & Farmgate',
    title: 'UK January Intake & Russell Group Admissions',
    description: "1-Year fast-track Master's options, up to £8,000–£10,000 merit scholarships, and Medium of Instruction (MOI) waivers from 28+ leading Bangladeshi universities.",
    speaker: {
      initials: 'FR',
      bgClass: 'bg-purple-700 text-white',
      name: 'Ferdous Reza',
      role: 'UK Student Visa & Compliance Specialist',
      roleClass: 'text-purple-700'
    },
    details: [
      { label: 'Target', value: 'Upcoming UK Intakes' },
      { label: 'Campuses', value: 'Cardiff, Hertfordshire, BCU' },
      { label: 'Work Rights', value: '2-Year Graduate Route PSW' },
      { label: 'Guidance', value: '28-day Bank statement planning' }
    ],
    badgeText: 'Entry: 100% FREE',
    badgeClass: 'text-purple-800'
  },
  {
    id: 'ev-5',
    category: 'expo scholarship',
    tag: '🇨🇾 Cyprus & 🇬🇷 Greece',
    tagClass: 'text-amber-800 bg-amber-100/90',
    location: 'Banani & Sylhet',
    title: 'Low-Budget Europe & Pay-After-Visa Workshop',
    description: 'Learn how to secure European higher education with initial deposits as low as €3,400 (with 43% flat discounts) and zero tuition risk—pay after visa approval!',
    speaker: {
      initials: 'HI',
      bgClass: 'bg-amber-600 text-white',
      name: 'Mohammad Hasan Imam',
      role: 'BDM, Quantum Education Group',
      roleClass: 'text-amber-800'
    },
    details: [
      { label: 'Benefit', value: '43% Flat Tuition Waiver in Cyprus' },
      { label: 'Greece', value: 'Pay Tuition Fee After Visa' },
      { label: 'Success Rate', value: '~90% Verified Approval' },
      { label: 'Language', value: 'IELTS 5.0 or MOI Accepted' }
    ],
    badgeText: 'Entry: 100% FREE',
    badgeClass: 'text-amber-800'
  },
  {
    id: 'ev-6',
    category: 'scholarship',
    tag: '🏥 100% Medical Quota',
    tagClass: 'text-teal-800 bg-teal-100/90',
    location: 'All 3 Branches',
    title: 'KPJ Healthcare University 100% Scholarship Briefing',
    description: 'Exclusive 100% tuition-free admission guidance for Bachelor, Master & PhD programs in Nursing, Pharmacy, Physiotherapy, and Healthcare Management in Malaysia.',
    speaker: {
      initials: 'KP',
      bgClass: 'bg-teal-700 text-white',
      name: 'KPJ Medical Faculty Panel',
      role: '100% Full Tuition Waiver Evaluation',
      roleClass: 'text-teal-700'
    },
    details: [
      { label: 'Waiver', value: '100% Full Tuition Fee Covered' },
      { label: 'Eligibility', value: 'HSC Science GPA 4.00+ / CGPA 3.30+' },
      { label: 'Visa Speed', value: 'EMGS & eVAL within ~2 Months' },
      { label: 'Accreditation', value: 'Fully MQA & International Standard' }
    ],
    badgeText: 'Entry: 100% FREE',
    badgeClass: 'text-teal-800'
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'expo' | 'admission' | 'scholarship'>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventName, setSelectedEventName] = useState('100% Scholarship Mega Expo 2026');
  const [gpaScale, setGpaScale] = useState<5 | 4>(5);
  
  // Registration Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [entryToken, setEntryToken] = useState<string>('');
  const [serverMessage, setServerMessage] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Hungary',
    level: 'Bachelor',
    gpa: '',
    english: 'MOI Eligible',
    venue: 'Banani Head Office',
    notes: ''
  });

  // Countdown timer state
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 14,
    mins: 42,
    secs: 18
  });

  // Toast State
  const [toast, setToast] = useState<{ title: string; message: string } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (title: string, message: string) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const openRegistrationModal = (eventName: string) => {
    setSelectedEventName(eventName);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setModalOpen(false);
  };

  const [catalog, setCatalog] = useState<Record<string, CountryRecord>>({});

  useEffect(() => {
    fetchCountries().then(setCatalog);
  }, []);

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await eventService.registerForEvent({
        eventName: selectedEventName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        level: formData.level,
        degree: formData.level,
        gpa: formData.gpa,
        academicScore: formData.gpa,
        english: formData.english,
        englishProficiency: formData.english,
        venue: formData.venue,
        notes: formData.notes
      });

      const token = response.entryToken || `SFI-EXP-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      setEntryToken(token);
      setServerMessage(response.message || 'Event pre-registration confirmed successfully!');
      setFormSubmitted(true);
      showToast('Registration Confirmed', response.message || 'Your event entry token has been generated!');
    } catch (err: any) {
      console.error('Registration submission failed:', err);
      const errorMsg = err.message || 'Failed to submit registration. Please check your network and try again.';
      setSubmitError(errorMsg);
      showToast('Registration Error', errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredEvents = filter === 'all'
    ? eventsList
    : eventsList.filter((ev) => ev.category.includes(filter));

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">

        {/* ======================================================== */}
        {/* HEADER SECTION                                           */}
        {/* ======================================================== */}
        <header className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-5 border border-emerald-300 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006837] animate-ping" />
            <Sparkles size={13} className="text-emerald-800" />
            Official University Seminars &amp; Expos
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#042f1a] tracking-tight font-heading leading-tight mb-5">
            Meet Delegates, Secure{' '}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy decoration-2">
              100% Scholarships
            </span>{' '}
            &amp; On-Spot Offers
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Join our exclusive higher education expos in Banani, Farmgate, and Sylhet. Connect 1-on-1 with official university representatives from Hungary, Malaysia, UK, Czech Republic, and Russia. Receive immediate profile assessment and enter our mega raffle draw!
          </p>

          {/* Trust Metrics Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Ticket className="text-emerald-600" size={17} />
              <span>100% Free Registration</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Gift className="text-emerald-600" size={17} />
              <span>Raffle: Laptop 💻 &amp; Tab 📲</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Building2 className="text-emerald-600" size={17} />
              <span>Official University Delegates</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="text-emerald-600" size={17} />
              <span>Up to 70% Service Charge Off</span>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* HIGHLIGHTED FEATURED EVENT ("NEXT BIG EVENT")            */}
        {/* ======================================================== */}
        <section className="bg-gradient-to-br from-[#06321e] via-[#042517] to-[#02170e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-emerald-800/60">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Event Details Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider">
                <Flame size={14} className="text-slate-950 fill-slate-950" />
                <span>NEXT BIG EVENT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-snug">
                100% Scholarship Mega Expo 2026: Europe &amp; Beyond
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Explore zero-tuition pathways across <strong>Czech Republic, Malaysia, Russia, and Hungary</strong>. Meet senior admission evaluators for spot assessments, discover 100% CSC &amp; State Quotas, and receive personalized visa roadmaps.
              </p>

              {/* Venue & Time Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-emerald-200">
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/10">
                  <Calendar size={16} className="text-emerald-300 shrink-0" />
                  <span>26 September 2026 (Saturday) • 10:00 AM – 6:30 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2.5 rounded-xl border border-white/10">
                  <MapPin size={16} className="text-emerald-300 shrink-0" />
                  <span>Banani (Head Office), Farmgate &amp; Sylhet</span>
                </div>
              </div>

              {/* Highlight Perks */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-bold">
                <span className="bg-emerald-900/60 text-emerald-300 px-3 py-1 rounded-md border border-emerald-700/50 flex items-center gap-1">
                  <Check size={12} className="stroke-[3]" /> 1-on-1 Profile Screening
                </span>
                <span className="bg-emerald-900/60 text-emerald-300 px-3 py-1 rounded-md border border-emerald-700/50 flex items-center gap-1">
                  <Check size={12} className="stroke-[3]" /> 100% Tuition Waivers
                </span>
                <span className="bg-emerald-900/60 text-emerald-300 px-3 py-1 rounded-md border border-emerald-700/50 flex items-center gap-1">
                  <Check size={12} className="stroke-[3]" /> Grand Raffle Draw
                </span>
              </div>
            </div>

            {/* Event Action Right Column (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-7 text-center space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold block mb-1">
                  Seats Filling Quickly
                </span>
                <div className="text-2xl font-extrabold text-white font-heading">
                  Pre-Registration Status: <span className="text-amber-400">OPEN</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">Limited to 80 private counseling slots per desk</p>
              </div>

              {/* Countdown Clock */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-black/40 border border-white/10 rounded-xl p-2">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {String(countdown.days).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase">Days</div>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-2">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {String(countdown.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase">Hours</div>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-2">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {String(countdown.mins).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase">Mins</div>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-2">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                    {String(countdown.secs).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-slate-300 uppercase">Secs</div>
                </div>
              </div>

              {/* Modal Trigger Button */}
              <button
                type="button"
                onClick={() => openRegistrationModal('100% Scholarship Mega Expo 2026')}
                className="w-full py-3.5 px-6 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Register &amp; Share My Profile</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-[11px] text-slate-400">
                ⚡ Instant Ticket Confirmation generated with branch allocation.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* UPCOMING EXPOS & EXCLUSIVE SEMINARS GRID                 */}
        {/* ======================================================== */}
        <section id="events-grid-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Browse All Scheduled Sessions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#042f1a] font-heading mt-2">
                Upcoming Expos &amp; Exclusive Seminars
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                All Events (6)
              </button>
              <button
                type="button"
                onClick={() => setFilter('expo')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  filter === 'expo'
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                Mega Expos
              </button>
              <button
                type="button"
                onClick={() => setFilter('admission')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  filter === 'admission'
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                Spot Admissions
              </button>
              <button
                type="button"
                onClick={() => setFilter('scholarship')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  filter === 'scholarship'
                    ? 'bg-[#006837] text-white border-[#006837] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-500 hover:text-emerald-700'
                }`}
              >
                Scholarship Masterclasses
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${event.tagClass}`}>
                      {event.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin size={13} /> {event.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading mb-2 leading-snug hover:text-[#006837] transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Key Speaker / Guest Badge */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${event.speaker.bgClass}`}>
                      {event.speaker.initials}
                    </div>
                    <div className="text-left text-xs">
                      <p className="font-bold text-slate-800">{event.speaker.name}</p>
                      <p className={`text-[11px] ${event.speaker.roleClass || 'text-slate-500'}`}>
                        {event.speaker.role}
                      </p>
                    </div>
                  </div>

                  {/* Event Details Checklist */}
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {event.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-600 stroke-[3] shrink-0" />
                        <span><strong>{detail.label}:</strong> {detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Button Action */}
                <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className={`text-xs font-bold ${event.badgeClass}`}>
                    {event.badgeText}
                  </span>
                  <button
                    type="button"
                    onClick={() => openRegistrationModal(event.title)}
                    className="px-5 py-2.5 rounded-xl bg-[#006837] hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* PHYSICAL WALK-IN ACCESS SECTION                          */}
        {/* ======================================================== */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            Physical Walk-in Access
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#042f1a] font-heading mt-3 mb-2">
            Visit Any Study First Info Desk for Walk-In Registration
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-8">
            If you missed an online event slot, you can directly walk into any of our 3 official branches with your academic certificates for an instant spot profile assessment!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Banani Head Office */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <MapPin size={18} className="text-emerald-700 shrink-0" />
                <span>Banani (Head Office)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Rosa Bella Apartment, House 3, Level 2, Block D, Road 17, Banani C/A, Dhaka-1213
              </p>
              <div className="text-xs text-emerald-700 font-bold space-y-1">
                <p>📞 01898 833034</p>
                <p>📞 +8809613752752</p>
              </div>
            </div>

            {/* Farmgate Branch */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <MapPin size={18} className="text-emerald-700 shrink-0" />
                <span>Farmgate Branch</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                7th Floor (Lift-6), BTI Central Plaza (opposite Ananda Cinema Hall), Green Road, Dhaka 1215
              </p>
              <div className="text-xs text-emerald-700 font-bold space-y-1">
                <p>📞 01898 833035</p>
                <p>📞 +8809613752752</p>
              </div>
            </div>

            {/* Sylhet Branch */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-base">
                <MapPin size={18} className="text-emerald-700 shrink-0" />
                <span>Sylhet Branch</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Sylhet Millennium Shopping Centre, Lift 10, Room 907, Jallarpar Road, Zindabazar, Sylhet 3100
              </p>
              <div className="text-xs text-emerald-700 font-bold space-y-1">
                <p>📞 01898 833036</p>
                <p>📞 01898 833034</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* REGISTRATION MODAL & DIGITAL ENTRY PASS                  */}
      {/* ======================================================== */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={closeRegistrationModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeRegistrationModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-5">
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                Free Event Pass &amp; Profile Assessment
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading mt-2">
                Event Registration Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                You are reserving your seat for: <strong className="text-emerald-700">{selectedEventName}</strong>
              </p>
            </div>

            {/* Form View */}
            {!formSubmitted && (
              <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="reg-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tanvir Ahmed Chowdhury"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                {/* Phone / WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-phone" className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      id="reg-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="017xxxxxxxx"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="reg-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Target Country & Desired Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="reg-country" className="block text-xs font-bold text-slate-700 mb-1">Target Study Destination *</label>
                    <select
                      id="reg-country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      {Object.values(catalog).map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name} {country.flag}
                        </option>
                      ))}
                      <option value="Other">Others / Need Counselor Advice</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reg-level" className="block text-xs font-bold text-slate-700 mb-1">Program Level *</label>
                    <select
                      id="reg-level"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Bachelor">Bachelor Degree (Undergraduate)</option>
                      <option value="Master">Master's Degree (Postgraduate)</option>
                      <option value="Diploma">Diploma / Foundation</option>
                      <option value="PhD">Doctor of Philosophy (PhD)</option>
                    </select>
                  </div>
                </div>

                {/* Academic GPA with Dual-Scale Switcher */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="reg-gpa" className="text-xs font-bold text-slate-700">Academic Score (GPA / CGPA) *</label>
                    <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-bold">
                      <button
                        type="button"
                        onClick={() => setGpaScale(5)}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                          gpaScale === 5 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Scale 5.0 (HSC/Alim)
                      </button>
                      <button
                        type="button"
                        onClick={() => setGpaScale(4)}
                        className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                          gpaScale === 4 ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Scale 4.0 (Bachelor)
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    id="reg-gpa"
                    required
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    placeholder={gpaScale === 5 ? 'e.g. 4.75 (out of 5.00)' : 'e.g. 3.40 (out of 4.00)'}
                    min="1.0"
                    max={gpaScale === 5 ? '5.00' : '4.00'}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                {/* English Proficiency Status */}
                <div>
                  <label htmlFor="reg-english" className="block text-xs font-bold text-slate-700 mb-1">English Proficiency Test Status *</label>
                  <select
                    id="reg-english"
                    value={formData.english}
                    onChange={(e) => setFormData({ ...formData, english: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="MOI Eligible">Medium of Instruction (MOI Waiver Eligible)</option>
                    <option value="IELTS 6.5+">IELTS 6.5 or above (or PTE 60+)</option>
                    <option value="IELTS 6.0">IELTS 6.0 (or PTE 52+)</option>
                    <option value="IELTS 5.5">IELTS 5.5 (or Duolingo 100)</option>
                    <option value="IELTS 5.0 or below">Below 5.5 (Need Low-IELTS Options)</option>
                    <option value="Planning Test Soon">Planning to sit for exam soon</option>
                  </select>
                </div>

                {/* Attendance Venue */}
                <div>
                  <label htmlFor="reg-venue" className="block text-xs font-bold text-slate-700 mb-1">Select Attendance Venue *</label>
                  <select
                    id="reg-venue"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Banani Head Office">Banani Head Office (Rosa Bella, Road 17, Block D)</option>
                    <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza, Green Road)</option>
                    <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                    <option value="Online Video Livestream">Online Virtual Attendee (Live Broadcast)</option>
                  </select>
                </div>

                {/* Profile Notes / Study Gap */}
                <div>
                  <label htmlFor="reg-notes" className="block text-xs font-bold text-slate-700 mb-1">Any Study Gap or Previous Visa Refusal? (Optional)</label>
                  <input
                    type="text"
                    id="reg-notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. 3-year study gap after HSC, or previous refusal resolved"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-semibold flex items-center gap-2 animate-in fade-in duration-200">
                    <span className="shrink-0">⚠️</span>
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] disabled:bg-red-900 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Confirming Registration...' : 'Confirm Pre-Registration & Get Entry Pass'}</span>
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Study First Info Ltd. protects your data. A confirmed digital entry token will be generated immediately.
                </p>
              </form>
            )}

            {/* Confirmed Entry Pass View */}
            {formSubmitted && (
              <div className="mt-4 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-300 text-center animate-in fade-in duration-300 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <Check size={26} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">Pre-Registration Confirmed!</h4>
                  <p className="text-xs text-slate-600 font-medium">{serverMessage}</p>
                </div>

                {entryToken && (
                  <div className="bg-white border-2 border-dashed border-emerald-400 p-3 rounded-xl">
                    <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Official Entry Pass Token</div>
                    <div className="text-lg font-black text-emerald-800 font-mono tracking-wider mt-0.5">{entryToken}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{selectedEventName} • {formData.venue}</div>
                  </div>
                )}

                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://wa.me/8801713000000?text=${encodeURIComponent(
                      `Hi Study First Info, I pre-registered for ${selectedEventName} at ${formData.venue}. My Entry Token is ${entryToken}. Name: ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Receive Pass on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setSubmitError(null);
                      closeRegistrationModal();
                    }}
                    className="py-2.5 px-4 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* FLOATING NOTIFICATION TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 max-w-sm bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-50 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="text-xl">✨</div>
          <div>
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{toast.title}</h5>
            <p className="text-xs text-slate-200 mt-0.5 leading-snug">{toast.message}</p>
          </div>
        </div>
      )}

    </div>
  );
}
