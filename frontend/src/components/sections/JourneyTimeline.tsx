export default function JourneyTimeline() {
  const steps = [
    {
      num: 1,
      title: 'Profile Audit',
      desc: 'Thorough profile assessment & risk evaluation',
      position: 'bottom'
    },
    {
      num: 2,
      title: 'University Shortlisting',
      desc: 'Strategic course, country & university selection',
      position: 'top'
    },
    {
      num: 3,
      title: 'SOP',
      desc: 'Document preparation & SOP mentorship',
      position: 'bottom'
    },
    {
      num: 4,
      title: 'Offer Letter',
      desc: 'University application submission & offer issuance',
      position: 'top'
    },
    {
      num: 5,
      title: 'Bank Solvency / Block Account Guidance',
      desc: 'Financial preparation & source-of-funds guidance',
      position: 'bottom'
    },
    {
      num: 6,
      title: 'Embassy Mock Interview',
      desc: 'Visa file submission & 1-to-1 interview drills',
      position: 'top'
    }
  ];

  return (
    <section className="py-8 sm:py-10 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Your Path to Studying Abroad</h2>
          <p className="text-base sm:text-lg text-green-100">Clear steps — no confusion, no surprises</p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Main Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2"></div>
          
          <div className="flex justify-between relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative w-48 flex flex-col items-center">
                
                {/* Top Content */}
                <div className={`text-center mb-8 h-24 ${step.position === 'top' ? 'opacity-100' : 'opacity-0 invisible'}`}>
                  <h4 className="font-bold text-lg mb-2 text-emphasis">{step.num}. {step.title}</h4>
                  <p className="text-sm text-gray-300">{step.desc}</p>
                </div>

                {/* Node */}
                <div className="w-12 h-12 rounded-full bg-accent border-4 border-primary flex items-center justify-center font-bold text-xl relative z-10 shadow-[0_0_15px_rgba(22,163,74,0.5)]">
                  {step.num}
                </div>

                {/* Bottom Content */}
                <div className={`text-center mt-8 h-24 ${step.position === 'bottom' ? 'opacity-100' : 'opacity-0 invisible'}`}>
                  <h4 className="font-bold text-lg mb-2 text-emphasis">{step.num}. {step.title}</h4>
                  <p className="text-sm text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-6 sm:space-y-8 relative pl-6 border-l-2 border-white/25 ml-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-accent border-4 border-primary flex items-center justify-center font-bold text-xs shadow-md">
                {step.num}
              </div>
              <h4 className="font-bold text-lg sm:text-xl mb-1 text-emphasis">{step.title}</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
