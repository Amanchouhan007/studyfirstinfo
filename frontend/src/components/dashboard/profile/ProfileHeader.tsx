import { Pencil, Camera } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <section className="bg-gradient-to-r from-primary to-[#114d3c] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative overflow-hidden mb-8">
      {/* Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="relative group shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 overflow-hidden bg-accent flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          RA
        </div>
        <button className="absolute bottom-0 right-0 md:bottom-2 md:right-2 w-8 h-8 md:w-10 md:h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
          <Camera size={16} className="md:w-5 md:h-5" />
        </button>
      </div>

      <div className="flex-1 text-center md:text-left relative z-10 flex flex-col justify-center h-full pt-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Rahul Ahmed</h1>
        <p className="text-green-100 font-medium text-sm md:text-base mb-1">
          Bangladeshi Student | 🇩🇪 Germany Track
        </p>
        <p className="text-green-200/80 text-xs md:text-sm font-medium">
          Member since: Sep 1, 2026
        </p>
      </div>

      <div className="relative z-10 md:self-center">
        <button className="flex items-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold py-2.5 px-5 rounded-xl transition-colors">
          <Pencil size={18} /> Edit Profile
        </button>
      </div>
    </section>
  );
}
