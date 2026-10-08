import React, { useState } from 'react';
import { Lock, Sparkles, CheckCircle2, Download, Check, AlertCircle, Info } from 'lucide-react';

export default function EligibilityMatcher() {
  const [gradeScale, setGradeScale] = useState<'hsc' | 'bachelor'>('hsc');
  const [gpaHSC, setGpaHSC] = useState(4.50);
  const [gpaBachelor, setGpaBachelor] = useState(3.40);
  const [english, setEnglish] = useState('IELTS 6.0 - 6.5');
  const [budget, setBudget] = useState('Tuition Free');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const currentGpa = gradeScale === 'hsc' ? gpaHSC : gpaBachelor;
  const maxGpa = gradeScale === 'hsc' ? 5.0 : 4.0;

  // Realistic scholarship calculation engine based on actual university & embassy cutoffs
  const calculateOdds = () => {
    let baseScore = 0;
    let maxCap = 98;

    if (gradeScale === 'bachelor') {
      // 4.0 Scale
      if (gpaBachelor < 2.30) {
        // CGPA 2.00 to 2.29: Scholarship chance is almost null (5% to 12%)
        baseScore = 5 + Math.round(((gpaBachelor - 2.0) / 0.3) * 6);
        maxCap = 12; // Hard cap: even with IELTS 8.5, low CGPA cannot qualify for scholarships
      } else if (gpaBachelor < 2.70) {
        // CGPA 2.30 to 2.69: Very low to limited partial odds (13% to 28%)
        baseScore = 13 + Math.round(((gpaBachelor - 2.3) / 0.4) * 15);
        maxCap = 32;
      } else if (gpaBachelor < 3.20) {
        // CGPA 2.70 to 3.19: Moderate / Partial fee waiver eligibility (33% to 58%)
        baseScore = 33 + Math.round(((gpaBachelor - 2.7) / 0.5) * 25);
        maxCap = 65;
      } else if (gpaBachelor < 3.65) {
        // CGPA 3.20 to 3.64: Strong scholarship contender (62% to 82%)
        baseScore = 62 + Math.round(((gpaBachelor - 3.2) / 0.45) * 20);
        maxCap = 88;
      } else {
        // CGPA 3.65 to 4.00: Top tier full-ride / Stipendium / CSC candidate (84% to 98%)
        baseScore = 84 + Math.round(((gpaBachelor - 3.65) / 0.35) * 14);
        maxCap = 98;
      }
    } else {
      // SSC / HSC 5.0 Scale
      if (gpaHSC < 3.00) {
        // Passing / Low: 8% to 15%
        baseScore = 8 + Math.round(((gpaHSC - 2.5) / 0.5) * 7);
        maxCap = 18;
      } else if (gpaHSC < 3.75) {
        // Moderate: 22% to 45%
        baseScore = 22 + Math.round(((gpaHSC - 3.0) / 0.75) * 23);
        maxCap = 50;
      } else if (gpaHSC < 4.50) {
        // First Class: 52% to 78%
        baseScore = 52 + Math.round(((gpaHSC - 3.75) / 0.75) * 26);
        maxCap = 82;
      } else {
        // Golden A+ / Near Perfect: 82% to 98%
        baseScore = 82 + Math.round(((gpaHSC - 4.5) / 0.5) * 16);
        maxCap = 98;
      }
    }

    // English language modifier (adds modest weight, but cannot overcome severe GPA deficit)
    let englishBonus = 0;
    if (english.includes('7.0+')) englishBonus = 6;
    else if (english.includes('6.5')) englishBonus = 4;
    else if (english.includes('6.0')) englishBonus = 2;
    else if (english.includes('5.5')) englishBonus = -2;
    else if (english.includes('Less than')) englishBonus = -6;
    else if (english.includes('No English')) englishBonus = -8;

    return Math.max(5, Math.min(baseScore + englishBonus, maxCap));
  };

  const matchPercentage = calculateOdds();

  // Dynamic visual indicators based on percentage
  const isMinimal = matchPercentage < 20;
  const isModerate = matchPercentage >= 20 && matchPercentage < 58;

  // Ring & Gauge color styles
  const gaugeColor = isMinimal ? '#ef4444' : isModerate ? '#f59e0b' : '#10b981';
  const gaugeLabel = isMinimal ? 'ALMOST NULL' : isModerate ? 'PARTIAL ODDS' : 'HIGH CHANCE';
  const gaugeLabelColor = isMinimal ? 'text-rose-400' : isModerate ? 'text-amber-400' : 'text-emerald-400';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUnlocked(true);
  };

  return (
    <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 bg-white relative overflow-hidden" id="eligibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 font-bold tracking-widest text-xs px-3.5 py-1.5 rounded-full border border-emerald-200">
            <Sparkles size={13} />
            INTERACTIVE SCHOLARSHIP CALCULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Evaluate Your Scholarship Odds Instantly
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Move the slider to calculate matching percentages against historical European &amp; CSC admission criteria.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-950 via-[#0D3B2E] to-[#08221A] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-emerald-500/30 shadow-2xl relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column (58%): Interactive Sliders & Selectors */}
            <div className="lg:w-[58%] w-full space-y-6">
              
              {/* Toggle: SSC/HSC (5.00) vs Bachelor (4.00) */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                    Select Your Academic Level
                  </span>
                  <div className="flex p-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 w-fit">
                    <button
                      type="button"
                      onClick={() => setGradeScale('hsc')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        gradeScale === 'hsc'
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      SSC / HSC (5.00 Scale)
                    </button>
                    <button
                      type="button"
                      onClick={() => setGradeScale('bachelor')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        gradeScale === 'bachelor'
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      Bachelor CGPA (4.00 Scale)
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs sm:text-sm font-bold text-gray-200">
                    {gradeScale === 'hsc' ? 'SSC / HSC GPA Result' : 'Bachelor Degree CGPA'}
                  </label>
                  <span className={`font-mono font-black text-lg sm:text-xl px-3 py-1 rounded-xl border ${
                    isMinimal 
                      ? 'text-rose-400 bg-rose-950/40 border-rose-500/30' 
                      : isModerate 
                      ? 'text-amber-400 bg-amber-950/40 border-amber-500/30' 
                      : 'text-emerald-400 bg-white/10 border-white/15'
                  }`}>
                    {currentGpa.toFixed(2)} / {maxGpa.toFixed(2)}
                  </span>
                </div>

                {gradeScale === 'hsc' ? (
                  <>
                    <input 
                      type="range" 
                      min="2.5" 
                      max="5.0" 
                      step="0.05"
                      value={gpaHSC}
                      onChange={(e) => setGpaHSC(parseFloat(e.target.value))}
                      className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-medium">
                      <span>GPA 2.50 (Pass)</span>
                      <span>GPA 3.75 (First Class)</span>
                      <span>GPA 5.00 (Golden A+)</span>
                    </div>
                  </>
                ) : (
                  <>
                    <input 
                      type="range" 
                      min="2.0" 
                      max="4.0" 
                      step="0.05"
                      value={gpaBachelor}
                      onChange={(e) => setGpaBachelor(parseFloat(e.target.value))}
                      className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-medium">
                      <span>CGPA 2.00 (Pass / Min)</span>
                      <span>CGPA 3.00 (Competitive)</span>
                      <span>CGPA 4.00 (Top Honours)</span>
                    </div>
                  </>
                )}
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-200 block mb-2 uppercase tracking-wider">
                    English Proficiency Status
                  </label>
                  <select 
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="IELTS Less than 5.5" className="text-gray-900">IELTS Score &lt; 5.5 (Foundation)</option>
                    <option value="IELTS 5.0 - 5.5" className="text-gray-900">IELTS 5.0 - 5.5</option>
                    <option value="IELTS 5.5 - 6.0" className="text-gray-900">IELTS 5.5 - 6.0</option>
                    <option value="IELTS 6.0 - 6.5" className="text-gray-900">IELTS 6.0 - 6.5</option>
                    <option value="IELTS 6.5 - 7.0" className="text-gray-900">IELTS 6.5 - 7.0</option>
                    <option value="IELTS 7.0+" className="text-gray-900">IELTS 7.0+ (Top Direct Entry)</option>
                    <option value="Medium of Instruction (MOI)" className="text-gray-900">Medium of Instruction (MOI)</option>
                    <option value="No English Test Yet" className="text-gray-900">No English Test Yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-200 block mb-2 uppercase tracking-wider">
                    Target Study Destination &amp; Budget
                  </label>
                  <select 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Tuition Free" className="text-gray-900">European Countries (Tuition-Free / Low Cost)</option>
                    <option value="CSC Full Scholarship" className="text-gray-900">China CSC 100% Full Scholarship</option>
                    <option value="Malaysia Campuses" className="text-gray-900">Malaysia UK/Aus Branch Campuses</option>
                    <option value="Partial Scholarship" className="text-gray-900">Partial Fee Waiver / Low Cost</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Assessment Bar (Replaces the static misleading "Verified" bar) */}
              <div className={`p-4 rounded-2xl border text-xs flex items-center justify-between gap-3 transition-all duration-300 ${
                isMinimal 
                  ? 'bg-rose-950/40 border-rose-500/40 text-rose-200' 
                  : isModerate 
                  ? 'bg-amber-950/40 border-amber-500/40 text-amber-200' 
                  : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              }`}>
                <div className="flex items-start sm:items-center gap-2.5">
                  {isMinimal ? (
                    <AlertCircle size={18} className="text-rose-400 shrink-0 mt-0.5 sm:mt-0" />
                  ) : isModerate ? (
                    <Info size={18} className="text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                  ) : (
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                  )}
                  <span>
                    {isMinimal ? (
                      <>
                        <strong className="text-white">Scholarship odds almost null for {currentGpa.toFixed(2)}.</strong> Self-funded pathway or low-tuition EU degrees (from €2,000/yr) recommended.
                      </>
                    ) : isModerate ? (
                      <>
                        <strong className="text-white">Moderate odds.</strong> Qualified for partial waivers (20%–50%) in Malaysia &amp; Central European university schemes.
                      </>
                    ) : (
                      <>
                        <strong className="text-white">Strong candidacy.</strong> Profile meets verified benchmarks for 100% tuition waivers (Stipendium Hungaricum / CSC).
                      </>
                    )}
                  </span>
                </div>
                <span className={`font-bold px-2.5 py-0.5 rounded-full uppercase text-[10px] shrink-0 ${
                  isMinimal 
                    ? 'bg-rose-500/30 text-rose-300 border border-rose-400/40' 
                    : isModerate 
                    ? 'bg-amber-500/30 text-amber-300 border border-amber-400/40' 
                    : 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/40'
                }`}>
                  {isMinimal ? 'Pathway Advised' : isModerate ? 'Partial Waiver' : 'High Prob'}
                </span>
              </div>

            </div>

            {/* Right Column (42%): Animated SVG Gauge & Unlock Form */}
            <div className="lg:w-[42%] w-full bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 flex flex-col items-center text-center">
              
              {/* Circular Gauge with Dynamic Color & Cutoff Logic */}
              <div className="relative w-36 h-36 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-white/10"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={gaugeColor}
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - matchPercentage / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-black text-white">{matchPercentage}%</span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${gaugeLabelColor}`}>
                    {gaugeLabel}
                  </span>
                </div>
              </div>

              {isUnlocked ? (
                <div className="space-y-3 py-2 text-center w-full animate-in fade-in zoom-in-95 duration-200">
                  <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center mx-auto ${
                    isMinimal ? 'bg-rose-600' : isModerate ? 'bg-amber-600' : 'bg-emerald-600'
                  }`}>
                    {isMinimal ? <AlertCircle size={20} /> : <Check size={20} />}
                  </div>
                  <h4 className="font-black text-white text-base">
                    {isMinimal ? 'Alternative Routes Explored' : 'Initial Assessment Complete'}
                  </h4>
                  <p className="text-xs text-gray-300">
                    {isMinimal 
                      ? `Based on CGPA ${currentGpa.toFixed(2)}, there are alternative pathway programs available for ${name || 'you'}.`
                      : `A preliminary overview of eligible universities has been prepared based on ${email || name || 'your profile'}.`}
                  </p>
                  <a
                    href={`https://wa.me/8801713000000?text=${encodeURIComponent(
                      `Hi, I completed my profile evaluation with CGPA ${currentGpa.toFixed(2)}. Please provide the detailed PDF Dossier.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <Download size={14} /> Request PDF Dossier on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleUnlock} className="w-full space-y-2.5">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {isMinimal ? 'Get Alternative Admission Options' : 'Get Matched Universities'}
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp Number"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer mt-1"
                  >
                    <Lock size={14} />
                    <span>
                      {isMinimal ? 'View Feasible Admission Pathways' : 'Get My Free Matching Universities'}
                    </span>
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
