export default function UrgentCTA() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-accent text-white overflow-hidden">
      
      {/* Scrolling Ticker */}
      <div className="bg-black/20 border-b border-white/10 py-2 overflow-hidden flex whitespace-nowrap">
        <div className="animate-[marquee_25s_linear_infinite] flex items-center text-sm font-semibold">
          <span className="mx-4 text-emphasis">⚡</span> European Winter Intake deadlines approaching fast. Lock in free application slots now →
          <span className="mx-4 text-emphasis">⚡</span> European Winter Intake deadlines approaching fast. Lock in free application slots now →
          <span className="mx-4 text-emphasis">⚡</span> European Winter Intake deadlines approaching fast. Lock in free application slots now →
          <span className="mx-4 text-emphasis">⚡</span> European Winter Intake deadlines approaching fast. Lock in free application slots now →
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 drop-shadow-md">
          Ready to Start Your Journey?
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <button 
            onClick={() => {
              const el = document.getElementById('eligibility');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white text-primary hover:bg-emerald-50 font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Check My Eligibility Now
          </button>
          <a 
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all active:scale-95 text-center cursor-pointer"
          >
            WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Tailwind definition for marquee animation must be in tailwind.config or arbitrary inline, 
          but with v4 we can define in index.css. For simplicity, adding inline style or standard classes where possible.
          Let's assume the tailwind custom animation needs to be added to CSS, or we can use a simpler approach. */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
