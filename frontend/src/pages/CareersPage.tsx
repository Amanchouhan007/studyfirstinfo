import { useState, useRef } from 'react';
import { 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Briefcase, 
  Rocket, 
  Globe, 
  FileText, 
  HeartHandshake, 
  Building2, 
  X, 
  Mail, 
  Send
} from 'lucide-react';

interface JobDetail {
  id: string;
  category: 'counseling' | 'academic' | 'support';
  title: string;
  badge: string;
  meta: string;
  isUrgent?: boolean;
  type: string;
  location: string;
  shortSummary: string;
  experience: string;
  education: string;
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const JOBS_DB: Record<string, JobDetail> = {
  counselor: {
    id: 'counselor',
    category: 'counseling',
    title: 'Counselor / Senior Student Counselor',
    badge: 'Urgent Hiring • Immediate Joining',
    meta: 'Full-Time (On-Site) • Banani (Head Office) / Farmgate Branch',
    isUrgent: true,
    type: 'Full-Time (On-Site)',
    location: 'Banani Head Office / Farmgate',
    shortSummary: 'Deliver personalized 1-on-1 counseling to prospective study-abroad candidates, guide applicants through end-to-end university admissions, coordinate with international partner portals (Hungary, UK, New Zealand, Malaysia), and ensure smooth visa submissions.',
    experience: '1–2 Years',
    education: 'Minimum Graduate',
    salary: 'Negotiable + Smart Incentives',
    overview: 'We are seeking an energetic, proactive, and target-driven Counselor / Senior Student Counselor for immediate onboarding to guide prospective students seeking international study opportunities.',
    responsibilities: [
      'Deliver personalized 1-on-1 counseling to prospective students for European (Hungary, Lithuania, Cyprus, Greece), UK, New Zealand, and Malaysian study pathways.',
      'Manage end-to-end university admissions, credential audits, and visa documentation pipelines.',
      'Maintain prompt communication and regular candidate follow-ups to ensure high student satisfaction and conversion.',
      'Coordinate directly with international partner universities and institutional agent portals.',
      'Deliver accurate application status updates and guide candidates through financial solvency preparation.'
    ],
    requirements: [
      "Minimum Bachelor's degree / Graduate in any discipline.",
      '1 to 2 years of proven experience in student counseling or study-abroad consultancy operations.',
      'Deep familiarity with student visa processes, country admission criteria, and scholarship schemes.',
      'Outstanding verbal and written communication skills in both Bangla and English.',
      'Strong client-handling proficiency, empathy, and professional telephone etiquette.'
    ],
    benefits: [
      'Competitive base salary (negotiable, commensurate with relevant experience).',
      'Attractive performance-driven financial increments and per-file conversion incentives.',
      'Clear career advancement path with permanent employment security.',
      'Collaborative, high-energy, and positive work culture with open-door management.'
    ]
  },

  ielts: {
    id: 'ielts',
    category: 'academic',
    title: 'IELTS Instructor (Academic & General Training)',
    badge: 'Academic Team • Score 7.5+ Mandate',
    meta: 'Full-Time / Part-Time • Banani Campus, Dhaka',
    type: 'Full-Time / Part-Time',
    location: 'Banani Campus',
    shortSummary: 'Conduct interactive IELTS preparation sessions across Listening, Reading, Writing, and Speaking modules. Design structured mock tests, evaluate individual assignments, and mentor students to achieve their target band scores.',
    experience: 'Prior IELTS teaching experience',
    education: "Bachelor's in English / Linguistics",
    salary: 'Attractive package + performance bonus',
    overview: 'Study First Info Ltd. is looking for a passionate and experienced IELTS Instructor to join our language training wing at the Banani campus.',
    responsibilities: [
      'Conduct interactive preparation classes covering all four IELTS modules (Listening, Reading, Writing, and Speaking).',
      'Design and evaluate regular diagnostic mock tests with detailed performance assessments.',
      'Train students on effective time management, task strategies, and lexical resource enhancement.',
      'Develop custom study materials, worksheets, and lecture notes tailored for Bangladeshi learners.',
      'Provide constructive, 1-on-1 feedback to assist students in achieving target band scores of 6.5–7.5+.'
    ],
    requirements: [
      "Minimum Bachelor's degree in English, Applied Linguistics, or a related discipline.",
      'IELTS Band Score 7.5+ (Academic or General Training) is strictly required.',
      'Prior teaching or training experience in IELTS at reputed coaching centers is preferred.',
      'Excellent classroom management, motivational skills, and clear diction.',
      'Ability to maintain disciplined, engaging classroom sessions.'
    ],
    benefits: [
      'Highly competitive salary package and class honorarium.',
      'Performance-based incentives based on student score outcomes.',
      'Professional growth through specialized pedagogy workshops.',
      'Friendly, academically stimulating, and modern air-conditioned classroom environment.'
    ]
  },

  customercare: {
    id: 'customercare',
    category: 'support',
    title: 'Customer Care Executive (Client Experience & Front-Desk)',
    badge: 'Client Experience • 02 Vacancies',
    meta: 'Full-Time (On-Site) • Banani Branch (Head Office), Dhaka',
    type: 'Full-Time (On-Site)',
    location: 'Banani Head Office (Rosa Bella)',
    shortSummary: 'Warmly receive visiting students and guardians, handle inbound inquiries via phone and WhatsApp, maintain visitor logs, and assist during education expos and promotional video reels shoots. We seek enthusiastic candidates ready to go beyond standard scopes!',
    experience: '6 Months – 2 Years (Freshers welcome)',
    education: 'Minimum Graduate',
    salary: 'Festival bonuses & rapid promotion path',
    overview: 'Study First Info Ltd. is seeking 2 enthusiastic, articulate, and client-centric Customer Care Executives for our Banani Head Office to serve as the welcoming face of the agency.',
    responsibilities: [
      'Serve as the first point of contact, warmly welcoming students and guardians visiting the Banani office.',
      'Handle inbound and outbound phone calls, WhatsApp inquiries, and social media leads with promptness and professionalism.',
      'Understand student queries and accurately route prospective candidates to relevant study-abroad counselors.',
      'Manage front-desk communication, visitor logs, and daily inquiry databases.',
      'Participate actively in event management, seating arrangements, office decoration during expos and seminars.',
      'Assist in student visa success video shoots and promotional social media reels with positive presence.'
    ],
    requirements: [
      "Minimum Graduate / Bachelor's degree in any discipline (fresh graduates with strong communication are encouraged).",
      '6 months to 2 years in customer support, front-desk, or client relations roles.',
      'Fluent in Bangla and proficient in English with polite telephone etiquette.',
      'Proactive, solution-oriented mindset willing to go beyond routine desks to give guests the best experience.',
      'Multitasking ability and positive teamwork attitude.'
    ],
    benefits: [
      'Attractive salary structure commensurate with skills and passion.',
      'Festival bonuses and performance-driven increments.',
      'Vibrant, energetic, and respectful work culture.',
      'Fast-track career growth into student counseling, event planning, and operations management.'
    ]
  },

  intern: {
    id: 'intern',
    category: 'support',
    title: 'Paid Intern / Trainee Student Counselor',
    badge: 'Paid Internship • 3–6 Months Duration',
    meta: 'Full-Time (On-Site) • Banani / Farmgate Branches, Dhaka',
    type: 'Paid Internship • 3–6 Months',
    location: 'Banani & Farmgate',
    shortSummary: 'Kickstart your career in global educational consultancy. Learn university research, assist senior counselors with document intake, manage CRM tracking, and earn smart commissions with direct absorption into permanent roles upon successful performance.',
    experience: 'Fresh Graduate / Final Year Bachelor',
    education: 'Undergraduate / Graduate',
    salary: 'BDT 8,000/- Fixed + File Commissions',
    overview: 'Kickstart your career in international education consulting with Study First Info Ltd. This internship is designed to mentor motivated graduates into successful study-abroad consultants.',
    responsibilities: [
      'Conduct detailed research on international partner universities, entry criteria, and academic programs.',
      'Assist senior counselors in guiding prospective students through study-abroad application pipelines.',
      'Support document intake, basic portal submissions, and student communication tracking in the CRM.',
      'Collaborate with the processing and visa filing teams to understand European and Commonwealth protocols.'
    ],
    requirements: [
      "Currently enrolled in final year or recently graduated with a Bachelor's degree in any discipline.",
      'Fluency in English (both spoken and written).',
      'Strong research, analytical, and organizational skills with sharp attention to detail.',
      'Proactive learning attitude, discipline, and eagerness to build a long-term counseling career.'
    ],
    benefits: [
      'Monthly fixed allowance of BDT 8,000/-.',
      'Smart performance-based commission for file conversions.',
      'Direct conversion to a Permanent Employee upon satisfactory performance.',
      'Direct professional mentorship and hands-on training from seasoned industry specialists.'
    ]
  },

  processing: {
    id: 'processing',
    category: 'counseling',
    title: 'Visa Documentation & Processing Executive',
    badge: 'Compliance & Processing Desk',
    meta: 'Full-Time (On-Site) • Banani Head Office / Sylhet Branch',
    type: 'Full-Time (On-Site)',
    location: 'Banani Head Office / Sylhet Branch',
    shortSummary: 'Audit applicant financial files, verify sponsor tax records, manage bank statement maturity compliance (UK 28-day rule, NZ FDRs, Schengen proof), book embassy/VFS appointments, and review student motivation statements.',
    experience: '1+ Years in visa documentation',
    education: 'Minimum Graduate',
    salary: 'Negotiable based on file record',
    overview: 'Join our core processing desk to oversee applicant documentation accuracy, bank solvency vetting, and foreign embassy filing compliance.',
    responsibilities: [
      'Audit academic transcripts, English proficiency test reports, and sponsor tax documents for completeness.',
      'Structure bank solvency evidence in compliance with country regulations (UK 28-day rule, NZ FDRs, Schengen proofs).',
      'Manage institutional application portals and secure official Letters of Acceptance.',
      'Schedule embassy and VFS appointment slots and conduct pre-submission file checks.',
      'Maintain zero technical document errors to preserve our 96% visa approval record.'
    ],
    requirements: [
      "Minimum Bachelor's degree in any discipline.",
      '1+ years of experience in overseas student visa documentation and portal handling.',
      'Meticulous attention to detail and zero tolerance for document discrepancies.',
      'Sound knowledge of VFS Global, embassy checklists, and foreign attestation procedures.'
    ],
    benefits: [
      'Competitive salary package based on proven filing track record.',
      'Yearly increments, festival bonuses, and team incentives.',
      'Direct liaison exposure with European and British partner universities.',
      'Professional, growth-oriented desk environment.'
    ]
  }
};

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobDetail | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'counseling' | 'academic' | 'support'>('all');
  
  // Application Form state
  const [formValues, setFormValues] = useState({
    position: 'Counselor / Senior Student Counselor',
    name: '',
    phone: '',
    email: '',
    education: "Bachelor's Degree",
    experience: '1 to 2 Years',
    branch: 'Banani Head Office',
    english: '',
    cvLink: '',
    note: ''
  });

  const [toast, setToast] = useState<{ title: string; desc: string } | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const showToast = (title: string, desc: string) => {
    setToast({ title, desc });
    setTimeout(() => {
      setToast(null);
    }, 5500);
  };

  const handleApplyFromModal = (job: JobDetail) => {
    setSelectedJob(null);
    setFormValues(prev => ({
      ...prev,
      position: job.title
    }));

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const nameInput = document.getElementById('career-name');
      if (nameInput) nameInput.focus();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      'Application Received Successfully!',
      `Thank you ${formValues.name}! Your application for "${formValues.position}" (${formValues.branch}) has been forwarded to our HR panel. We will reach out via WhatsApp (${formValues.phone}) within 3 business days.`
    );
    setFormValues({
      position: 'Counselor / Senior Student Counselor',
      name: '',
      phone: '',
      email: '',
      education: "Bachelor's Degree",
      experience: '1 to 2 Years',
      branch: 'Banani Head Office',
      english: '',
      cvLink: '',
      note: ''
    });
  };

  const jobsList = Object.values(JOBS_DB);
  const filteredJobs = categoryFilter === 'all'
    ? jobsList
    : jobsList.filter(j => j.category === categoryFilter);

  return (
    <div className="bg-[#f8faf9] text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-950 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-20">

        {/* ============================================================ */}
        {/* SECTION 1: HERO HEADER (CULTURE & PURPOSE SHOWCASE)          */}
        {/* ============================================================ */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062916] via-[#041c10] to-[#02110a] text-white p-6 sm:p-12 lg:p-16 border border-emerald-900/50 shadow-2xl">
          {/* Ambient Orbs & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-extrabold uppercase tracking-wider border border-white/15 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles size={13} className="text-emerald-300" />
              Careers at Study First Info Ltd. • We Are Hiring!
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
              Build Your Career While Empowering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 underline decoration-emerald-400 decoration-wavy decoration-2">
                Global Scholars
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-3xl mx-auto">
              Join one of Bangladesh&apos;s premier international education consultancies. We connect ambitious students with top-ranked universities across Europe, the UK, Oceania, and Asia through transparency, integrity, and verified excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#open-positions-section"
                className="px-6 py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-red-900/30 transition-all flex items-center gap-2"
              >
                <span>Explore Open Roles</span>
                <ArrowDown size={14} />
              </a>
              <a
                href="#hiring-values-section"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md transition-all"
              >
                <span>Why Join Our Team</span>
              </a>
            </div>

            {/* 4 Team Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/15 text-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading block">3 Locations</span>
                <span className="text-xs text-slate-300 font-medium block mt-1">Banani, Farmgate &amp; Sylhet</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-heading block">Performance</span>
                <span className="text-xs text-slate-300 font-medium block mt-1">Uncapped Incentives &amp; Bonuses</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading block">Direct Access</span>
                <span className="text-xs text-emerald-300 font-medium block mt-1">500+ Partner Universities</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading block">14+ Years</span>
                <span className="text-xs text-slate-300 font-medium block mt-1">Institutional Stability</span>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: WHY JOIN STUDY FIRST INFO (CULTURE & PERKS)       */}
        {/* ============================================================ */}
        <section id="hiring-values-section" className="space-y-10 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Our Workplace Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Why You Will Thrive With Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We combine a fast-paced, high-reward working environment with deep professional mentorship and family-first team care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* Perk 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                <Briefcase size={22} className="text-emerald-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Competitive Salary &amp; Commission</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Market-leading fixed compensation paired with transparent, uncapped performance incentives for every successfully enrolled student and processed file.
              </p>
            </div>

            {/* Perk 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-bold">
                <Rocket size={22} className="text-amber-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Fast-Track Leadership Promotion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We reward drive and talent. Interns and junior counselors frequently advance to Senior Counselors, Branch Team Leads, and Operations Managers within 12–18 months.
              </p>
            </div>

            {/* Perk 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center text-2xl font-bold">
                <Globe size={22} className="text-blue-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Global Delegations &amp; Expos</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly meet and liaise with visiting university delegates from Hungary, the UK, Malaysia, and New Zealand. Represent the agency at premier educational expos.
              </p>
            </div>

            {/* Perk 4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center text-2xl font-bold">
                <FileText size={22} className="text-purple-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">A-to-Z Visa Compliance Mastery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn sovereign embassy regulations inside out: tax compliance, bank solvency maturity, 1-on-1 consular mock coaching, and refusal appeal preparation.
              </p>
            </div>

            {/* Perk 5 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center text-2xl font-bold">
                <HeartHandshake size={22} className="text-rose-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Supportive &amp; Positive Culture</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero toxic bureaucracy. We cultivate a cooperative family environment with celebratory staff outings, Eid &amp; Puja bonuses, and open-door CEO communication.
              </p>
            </div>

            {/* Perk 6 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all space-y-3 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center text-2xl font-bold">
                <Building2 size={22} className="text-teal-800" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">Modern Prime Campuses</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work in prime central business locations: Rosa Bella Apartment (Banani Road 17), BTI Central Plaza (Farmgate), and Millennium Shopping Centre (Sylhet).
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: OPEN VACANCIES & JOB CIRCULARS                    */}
        {/* ============================================================ */}
        <section id="open-positions-section" className="space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Current Openings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Explore Available Roles at Study First Info
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Apply online using the fast form below or send your updated CV directly to <strong className="text-emerald-800">StudyFirstInfo@gmail.com</strong>
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setCategoryFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-[#006837] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'
                }`}
              >
                All Positions ({jobsList.length})
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter('counseling')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === 'counseling'
                    ? 'bg-[#006837] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'
                }`}
              >
                Student Counseling
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter('academic')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === 'academic'
                    ? 'bg-[#006837] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'
                }`}
              >
                IELTS &amp; Academics
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter('support')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === 'support'
                    ? 'bg-[#006837] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'
                }`}
              >
                Front-Desk &amp; Interns
              </button>
            </div>
          </div>

          {/* Jobs List Container */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    {job.isUrgent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-extrabold uppercase tracking-wider border border-rose-200">
                        🚨 Urgent Hiring • Immediate Joining
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <MapPin size={12} className="text-emerald-700" /> {job.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.shortSummary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
                    <span><strong>Experience:</strong> {job.experience}</span>
                    <span>•</span>
                    <span><strong>Education:</strong> {job.education}</span>
                    <span>•</span>
                    <span><strong>Salary:</strong> {job.salary}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="px-5 py-2.5 rounded-xl bg-[#006837] hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center cursor-pointer"
                  >
                    View Details &amp; Apply
                  </button>
                  <span className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                    <Clock size={11} /> Deadline: Rolling Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: 4-STEP RECRUITMENT JOURNEY & DIRECT APPLICATION   */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 6 cols: How We Hire Process */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Hiring Workflow
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Our 4-Step Transparent Hiring Journey
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We value your time. Our HR team reviews applications promptly with clear milestones:
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-slate-900 block font-bold text-sm">Application &amp; Resume Screening</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Submit your CV via the form or email. Our HR team reviews your qualifications, communication profile, and relevant experience within 48 business hours.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-slate-900 block font-bold text-sm">Initial Telephonic Interview</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    A brief 10–15 minute conversation to discuss your career motivations, language fluency, preferred branch location, and salary expectations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-slate-900 block font-bold text-sm">In-Person Panel &amp; Practical Task</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Meet our senior team at Banani Head Office for a comprehensive interview. Counselors and instructors perform a mock counseling or micro-teaching task.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  4
                </span>
                <div>
                  <strong className="text-slate-900 block font-bold text-sm">Official Offer &amp; Onboarding</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Formal appointment letter issued with full salary, commission matrix, and comprehensive 2-week hands-on training with seasoned team members.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center gap-3">
              <Mail size={24} className="text-amber-800 flex-shrink-0" />
              <p>
                Prefer direct email? You can always send your updated CV directly to <strong className="text-emerald-900">StudyFirstInfo@gmail.com</strong> with the subject line <em>&quot;Application for [Job Title] - [Preferred Branch]&quot;</em>.
              </p>
            </div>
          </div>

          {/* Right 6 cols: Quick Job Application Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl text-slate-900">
            <div className="mb-5 text-left">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider">
                Fast Application Gateway
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-2">
                Submit Your Application
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Apply directly to our HR desk. Shortlisted candidates are invited for interviews within 3 days.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-3.5 text-xs text-left">
              <div>
                <label htmlFor="career-pos" className="block font-bold text-slate-700 mb-1">Applying For Position *</label>
                <select
                  id="career-pos"
                  value={formValues.position}
                  onChange={(e) => setFormValues({ ...formValues, position: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white font-semibold text-slate-800"
                >
                  <option value="Counselor / Senior Student Counselor">Counselor / Senior Student Counselor</option>
                  <option value="IELTS Instructor (Academic & General Training)">IELTS Instructor</option>
                  <option value="Customer Care Executive (Client Experience & Front-Desk)">Customer Care Executive (Front-Desk)</option>
                  <option value="Paid Intern / Trainee Student Counselor">Paid Intern / Trainee Counselor</option>
                  <option value="Visa Documentation & Processing Executive">Visa Documentation &amp; Processing Executive</option>
                  <option value="General Open Application">Other / General Open Application</option>
                </select>
              </div>

              <div>
                <label htmlFor="career-name" className="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="career-name"
                  required
                  value={formValues.name}
                  onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                  placeholder="e.g. Mahfuzur Rahman"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="career-phone" className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    id="career-phone"
                    required
                    value={formValues.phone}
                    onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                    placeholder="017xxxxxxxx"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label htmlFor="career-email" className="block font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="career-email"
                    required
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="career-edu" className="block font-bold text-slate-700 mb-1">Highest Education Level *</label>
                  <select
                    id="career-edu"
                    value={formValues.education}
                    onChange={(e) => setFormValues({ ...formValues, education: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Bachelor's Degree">Bachelor&apos;s Degree (Completed)</option>
                    <option value="Master's Degree">Master&apos;s Degree</option>
                    <option value="Undergraduate Final Year">Undergraduate (Final Year / Enrolled)</option>
                    <option value="Other">Other Higher Qualification</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="career-exp" className="block font-bold text-slate-700 mb-1">Years of Relevant Experience *</label>
                  <select
                    id="career-exp"
                    value={formValues.experience}
                    onChange={(e) => setFormValues({ ...formValues, experience: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Fresh Graduate / No Experience">Fresh Graduate (Looking for Internship/Entry)</option>
                    <option value="Less than 1 Year">Less than 1 Year</option>
                    <option value="1 to 2 Years">1 to 2 Years</option>
                    <option value="2 to 4 Years">2 to 4 Years</option>
                    <option value="4+ Years">4+ Years (Senior Lead)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="career-branch" className="block font-bold text-slate-700 mb-1">Preferred Branch Location *</label>
                  <select
                    id="career-branch"
                    value={formValues.branch}
                    onChange={(e) => setFormValues({ ...formValues, branch: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Banani Head Office">Banani Head Office (Road 17, Block D)</option>
                    <option value="Farmgate Branch">Farmgate Branch (BTI Central Plaza)</option>
                    <option value="Sylhet Branch">Sylhet Branch (Millennium Centre, Zindabazar)</option>
                    <option value="Open to Any Location">Open to Any Branch</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="career-english" className="block font-bold text-slate-700 mb-1">IELTS Score / English Status</label>
                  <input
                    type="text"
                    id="career-english"
                    value={formValues.english}
                    onChange={(e) => setFormValues({ ...formValues, english: e.target.value })}
                    placeholder="e.g. IELTS 7.5 or Fluent Spoken"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="career-link" className="block font-bold text-slate-700 mb-1">CV / LinkedIn Link or Portfolio *</label>
                <input
                  type="url"
                  id="career-link"
                  required
                  value={formValues.cvLink}
                  onChange={(e) => setFormValues({ ...formValues, cvLink: e.target.value })}
                  placeholder="https://linkedin.com/in/yourname or Google Drive CV Link"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
                <span className="text-[10px] text-slate-400">Provide a public Google Drive / Dropbox link or your LinkedIn profile URL.</span>
              </div>

              <div>
                <label htmlFor="career-note" className="block font-bold text-slate-700 mb-1">Cover Note / Why You Want to Join (Optional)</label>
                <textarea
                  id="career-note"
                  rows={2}
                  value={formValues.note}
                  onChange={(e) => setFormValues({ ...formValues, note: e.target.value })}
                  placeholder="Briefly share why you are excited to build your career with Study First Info Ltd..."
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Job Application</span>
                <Send size={14} />
              </button>

              <p className="text-[10px] text-center text-slate-400">
                🔒 Your submission is confidential and routed directly to our Management Desk.
              </p>
            </form>
          </div>

        </section>

      </main>

      {/* ============================================================== */}
      {/* MODAL: DETAILED JOB DESCRIPTION & SPECIFICATIONS               */}
      {/* ============================================================== */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div className="mb-5 border-b border-slate-100 pb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
                {selectedJob.badge}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading mt-2">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {selectedJob.meta}
              </p>
            </div>

            {/* Modal Body Content */}
            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Role Overview</h4>
                <p className="text-slate-600">{selectedJob.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Key Responsibilities</h4>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                  {selectedJob.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Requirements &amp; Qualifications</h4>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                  {selectedJob.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">Compensation &amp; Benefits</h4>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                  {selectedJob.benefits.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                <span>Apply directly or email: </span>
                <strong className="text-emerald-800">StudyFirstInfo@gmail.com</strong>
              </div>
              <button
                type="button"
                onClick={() => handleApplyFromModal(selectedJob)}
                className="px-6 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Apply For This Position</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FLOATING NOTIFICATION TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 max-w-sm bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 z-50 flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="text-xl">✨</div>
          <div>
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{toast.title}</h5>
            <p className="text-xs text-slate-200 mt-0.5 leading-snug">{toast.desc}</p>
          </div>
        </div>
      )}

    </div>
  );
}
