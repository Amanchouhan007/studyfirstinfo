import { useState } from 'react';
import { MessageCircle, CheckCircle2, Star, Sparkles, X, Send, Users, ExternalLink } from 'lucide-react';

export default function SocialProof() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');

  const students = [
    {
      name: 'Arafat Rahman',
      university: 'Technical University Munich (TUM)',
      country: 'Germany 🇩🇪',
      badge: 'Visa Approved &bull; Free Tuition',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      quote: 'Study First Info arranged my complete German Blocked account with zero surcharge, and prepared me for the German Embassy mock interview. Best mentors ever.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      intake: 'Winter 2025 Intake',
    },
    {
      name: 'Sajjad Hossain',
      university: 'Tsinghua University (Shanghai)',
      country: 'China 🇨🇳',
      badge: 'CSC Fully-Funded Scholar',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      quote: 'Got 100% scholarship on tuition, free campus apartment, plus a 3,500 RMB monthly stipend. Study First Info team handled direct school correspondence flawlessly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      intake: 'Spring 2025 Intake',
    },
    {
      name: 'Taskin Tasnim',
      university: "Taylor's University (Branch Campus)",
      country: 'Malaysia 🇲🇾',
      badge: '3-Week EMGS Visa Approved',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      quote: 'My EMGS visa was processed in just 3 weeks with Medium of Instruction certificate without needing any separate IELTS exam. Extremely fast and hassle-free.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      intake: 'Fall 2025 Intake',
    },
  ];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to official WhatsApp channel / support with student context
    const text = encodeURIComponent(`Hi Study First Info, I want to connect with senior ${selectedStudent}. My name is ${leadName}, Phone: ${leadPhone}`);
    window.open(`https://wa.me/8801712345678?text=${text}`, '_blank');
    setSelectedStudent(null);
    setLeadName('');
    setLeadPhone('');
  };

  return (
    <section className="pt-8 pb-6 sm:pt-10 sm:pb-8 bg-gradient-to-b from-white via-[#F0FDF4]/30 to-white relative overflow-hidden" id="social-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-accent font-bold tracking-widest text-xs px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles size={13} />
            ALUMNI SOCIAL PROOF HUB
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
            Real Students. Verified Visas.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Connect directly with verified Bangladeshi seniors studying across European, Chinese, and Malaysian universities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {students.map((student, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img 
                      src={student.avatar} 
                      alt={student.name} 
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-accent shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px]">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-primary">{student.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{student.university}</p>
                    <span className="text-[11px] font-bold text-accent">{student.country}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${student.badgeColor}`}>
                    <CheckCircle2 size={13} />
                    <span dangerouslySetInnerHTML={{ __html: student.badge }}></span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed mb-6">
                  &ldquo;{student.quote}&rdquo;
                </p>
              </div>

              <button 
                onClick={() => setSelectedStudent(student.name)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all font-bold text-xs shadow-xs active:scale-95 cursor-pointer"
              >
                <MessageCircle size={16} />
                Ask {student.name.split(' ')[0]} on WhatsApp &rarr;
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            type="button"
            onClick={() => setShowCommunityModal(true)}
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors text-sm sm:text-base underline underline-offset-4 decoration-accent cursor-pointer"
          >
            Or join our 2,500+ student Telegram &amp; WhatsApp community &rarr;
          </button>
        </div>
      </div>

      {/* WhatsApp Lead Gate Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center mx-auto mb-2">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-primary text-lg">Connect with {selectedStudent}</h3>
              <p className="text-xs text-gray-500 mt-0.5">Submit to connect via our official WhatsApp channel</p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="+880 17XXXXXXXX"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <span>Continue to WhatsApp Channel</span>
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp & Telegram Community Channel List Modal */}
      {showCommunityModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowCommunityModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="text-center space-y-1.5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center mx-auto mb-2 border border-emerald-200">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-black text-primary tracking-tight">
                Join Student Communities
              </h3>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Get daily scholarship alerts, visa guides, and connect with 2,500+ Bangladeshi scholars.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* WhatsApp Channel */}
              <a
                href="https://whatsapp.com/channel/0029Va9StudyFirstInfo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/70 hover:border-emerald-500 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-800">
                      Official WhatsApp Channel
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Instant scholarship circulars &amp; admission updates
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Telegram Community */}
              <a
                href="https://t.me/studyfirstinfo_bd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border-2 border-blue-200 bg-blue-50/50 hover:bg-blue-100/70 hover:border-blue-500 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shadow-xs">
                    <Send size={20} className="ml-0.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-800">
                      Telegram Student Community
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Discussion forum, document checklists &amp; senior Q&amp;A
                    </p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-blue-600 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-[11px] text-center text-gray-400 font-medium">
              Free to join &bull; Spam-free official communication channels
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
