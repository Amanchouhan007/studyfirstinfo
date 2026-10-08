import { useState } from 'react';
import { Check, Send, FileText, Download, Sparkles, ShieldCheck } from 'lucide-react';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const checklist = [
    'Official Blocked Account (€11,208) Setup Guide',
    'German Embassy approved health insurance list',
    'Tested Motivation Letter & CV samples',
    'IELTS waiver & MOI certification formats',
    'Schengen Visa Interview questions & model answers',
    'Step-by-step Fintiba & Coracle partner walk-through',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);
  };

  return (
    <section className="bg-gradient-to-br from-[#0D3B2E] via-[#092B21] to-[#051C15] py-8 lg:py-10 relative overflow-hidden text-white border-y border-emerald-500/20">
      {/* Radiant Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-accent/20 text-emerald-300 border border-accent/30 font-bold tracking-widest text-xs px-3.5 py-1.5 rounded-full">
              <Sparkles size={13} />
              FREE 25-PAGE SCHENGEN VISA PACK
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Unlock German Blocked Account &amp; Schengen Document Checklist PDF
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Avoid costly visa rejections. Download our comprehensive breakdown detailing exact financial paperwork, cover letter guidelines, and Embassy interview rules.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-accent/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-emerald-300 font-semibold">
              <ShieldCheck size={18} className="text-accent" />
              <span>Complies with official 2026 German Federal Foreign Office Regulations</span>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/20 shadow-2xl relative">
              <div className="text-center mb-5 sm:mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white mb-1">
                  Request Free PDF Guide
                </h3>
                <p className="text-xs text-gray-300">
                  Instant PDF download link sent directly to your email &amp; WhatsApp
                </p>
              </div>

              {isDownloaded ? (
                <div className="text-center py-5 sm:py-6 space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent text-white rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <Check size={26} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Your Guide is Ready!</h4>
                  <p className="text-xs text-gray-300">
                    We've dispatched the 25-page German Blocked Account dossier to <strong>{email}</strong>.
                  </p>
                  <a
                    href={`https://wa.me/8801713000000?text=${encodeURIComponent(
                      `Hi, I requested the German Blocked Account & Schengen Guide 2026 for ${email}. Please send me the PDF.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <Download size={14} /> Request Guide on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter full name" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-200 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-emerald-600 text-white font-black py-3 sm:py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-98 cursor-pointer"
                  >
                    <span>Send Download Link Instantly</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
