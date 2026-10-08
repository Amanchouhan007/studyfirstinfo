import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  RefreshCw, 
  Clock, 
  Video, 
  MessageSquare, 
  Award, 
  FileText, 
  Send, 
  ArrowRight, 
  GraduationCap, 
  ExternalLink
} from 'lucide-react';

export default function CompactDashboardView() {
  const [replyText, setReplyText] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'M. Imran Hossain Rony',
      text: "Rahul's profile is strong. Dual A+ grades qualify for merit waiver. IELTS 6.5 is sufficient for target universities. Proceeding with applications after blocked account confirmation.",
      time: 'Sep 8 — 3:45 PM',
      isStudent: false,
    },
  ]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    setMessages([
      ...messages,
      {
        sender: 'Rahul Ahmed',
        text: replyText.trim(),
        time: 'Just now',
        isStudent: true,
      },
    ]);
    setReplyText('');
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Top Banner: Greeting + Application ID */}
      <div className="bg-white rounded-2xl border-l-[6px] border-l-accent border border-gray-100 shadow-sm p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-1">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">Welcome back, Rahul! 👋</h1>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              🇩🇪 Germany Track
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Application <strong className="text-primary font-mono font-bold">#SF-2026-001247</strong> &bull; Agency-Assisted Track
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold">
            <RefreshCw size={13} className="animate-spin text-accent" />
            Under Counselor Review
          </span>
        </div>
      </div>

      {/* 4-Step Compact Timeline */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Application Journey</h2>
          <span className="text-xs font-semibold text-accent">Step 3 of 4 in progress</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Step 1 */}
          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 relative">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-gray-900">1. Profile Submitted</span>
            </div>
            <div className="text-[11px] text-gray-500 pl-6">Sep 1, 2026 &bull; Done</div>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 relative">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-gray-900">2. Docs Verified</span>
            </div>
            <div className="text-[11px] text-gray-500 pl-6">Sep 5, 2026 &bull; Approved</div>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 rounded-xl bg-[#F0FDF4] border-2 border-accent shadow-xs relative">
            <div className="flex items-center gap-2 mb-1">
              <RefreshCw size={14} className="text-accent animate-spin shrink-0" />
              <span className="text-xs font-bold text-accent">3. Counselor Review</span>
            </div>
            <div className="text-[11px] text-emerald-800 font-medium pl-6">60% Complete &bull; Ongoing</div>
          </div>

          {/* Step 4 */}
          <div className="p-3.5 rounded-xl bg-white border border-gray-200 opacity-60">
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} className="text-gray-400 shrink-0" />
              <span className="text-xs font-bold text-gray-600">4. Uni &amp; Visa Filing</span>
            </div>
            <div className="text-[11px] text-gray-400 pl-6">Target: Sep 15, 2026</div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 cols): Counselor + Feedback + Target Unis */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Assigned Counselor & Upcoming Session */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  IR
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-semibold uppercase">Assigned Counselor</div>
                  <h3 className="font-bold text-primary text-base">M. Imran Hossain Rony</h3>
                  <div className="text-xs text-accent font-medium">Head of Germany Applications</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/8801712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Upcoming Meeting Box */}
            <div className="mt-4 p-4 rounded-xl bg-[#F0FDF4] border border-accent/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  Next Video Consultation
                </div>
                <div className="text-sm font-bold text-primary mt-0.5">
                  Monday, Sep 15, 2026 &bull; 3:00 PM BST
                </div>
                <div className="text-xs text-gray-600">Topic: Germany University Application Review</div>
              </div>

              <a
                href="https://meet.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-accent hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-xs shrink-0"
              >
                <Video size={14} /> Join Google Meet
              </a>
            </div>
          </div>

          {/* Counselor Feedback Thread */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <FileText size={16} className="text-accent" />
              <h3 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Counselor Feedback &amp; Notes</h3>
            </div>

            <div className="space-y-3 mb-4">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                    m.isStudent ? 'bg-emerald-50 border border-emerald-100 ml-2 sm:ml-4' : 'bg-gray-50 border border-gray-100 mr-2 sm:mr-4'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-primary text-xs">{m.sender}</span>
                    <span className="text-[10px] text-gray-400">{m.time}</span>
                  </div>
                  <p className="text-gray-700">{m.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendReply} className="flex gap-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Quick reply to Imran Rony..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="bg-accent hover:bg-emerald-700 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold disabled:opacity-40 transition-colors shrink-0 cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Target Universities (Compact) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-accent" />
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider">Target Universities (3)</h3>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                97% Eligibility
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                <div>
                  <span className="font-bold text-primary">1. TU Munich</span> &mdash; <span className="text-gray-600">Masters Computer Science</span>
                  <div className="text-[11px] text-accent font-semibold mt-0.5">⭐ Top Match &bull; Tuition Free (Public)</div>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Eligible</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                <div>
                  <span className="font-bold text-primary">2. University of Stuttgart</span> &mdash; <span className="text-gray-600">Masters AI &amp; Robotics</span>
                  <div className="text-[11px] text-gray-500 mt-0.5">IELTS 6.0+ &bull; Tuition Free (Public)</div>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Eligible</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                <div>
                  <span className="font-bold text-primary">3. Heidelberg University</span> &mdash; <span className="text-gray-600">Masters Computer Science</span>
                  <div className="text-[11px] text-gray-500 mt-0.5">IELTS 6.5+ &bull; Tuition Free (Public)</div>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Eligible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Quick Status Cards */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {/* Document Readiness Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">Document Readiness</h3>
              <span className="text-base sm:text-lg font-black text-accent">75%</span>
            </div>

            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mb-3">
              <div className="bg-accent h-full rounded-full" style={{ width: '75%' }}></div>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              <strong>6 of 8</strong> required documents uploaded &amp; verified.
            </p>

            <Link
              to="/documents"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-emerald-950 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
            >
              View &amp; Upload Documents <ArrowRight size={14} />
            </Link>
          </div>

          {/* 100% Merit Fee Waiver Card */}
          <div className="bg-gradient-to-br from-amber-500 to-yellow-400 text-gray-950 rounded-2xl p-4 sm:p-6 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-black/10 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-primary">
              <Award size={13} /> 100% Fee Waiver Approved
            </div>
            <h4 className="font-black text-sm sm:text-base leading-snug">
              Dual A+ Academic Achievement Exemption
            </h4>
            <p className="text-xs text-gray-900/80 leading-relaxed font-medium">
              You pay <strong>0 BDT agency processing fee</strong> throughout your Germany admission &amp; visa journey.
            </p>
            <div className="pt-1 flex items-center justify-between text-xs font-bold text-gray-950">
              <span>Savings: 65,000 BDT</span>
              <span className="text-emerald-900">Certificate #WA-1049</span>
            </div>
          </div>

          {/* Blocked Account Partner Integration */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
              German Blocked Account Desk
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Official partner fast-track for <strong>Fintiba</strong> &amp; <strong>Coracle</strong> (€11,208 required by German Embassy).
            </p>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs flex items-center justify-between">
              <span className="font-bold text-emerald-900">Zero Setup Surcharge</span>
              <span className="text-[11px] text-accent font-black">SAVE €120</span>
            </div>
            <a
              href="https://www.fintiba.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold py-2 px-4 rounded-xl text-xs transition-colors"
            >
              Open via Study First Portal <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
