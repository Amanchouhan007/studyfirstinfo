import { MessageCircle, CalendarDays, Star } from 'lucide-react';

export default function DashboardActivity() {
  const activities = [
    { text: "Document verified by counselor", time: "2 hrs ago", status: "green" },
    { text: "Appointment confirmed for Sep 15", time: "5 hrs ago", status: "green" },
    { text: "Profile under review", time: "1 day ago", status: "yellow" },
    { text: "Documents uploaded successfully", time: "2 days ago", status: "green" },
    { text: "Account created", time: "3 days ago", status: "green" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-8">
      
      {/* LEFT (60%) — RECENT ACTIVITY */}
      <section className="lg:w-[60%] bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-6">Recent Activity</h2>
        
        <div className="relative pl-3 space-y-6 before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-gray-100">
          {activities.map((activity, idx) => (
            <div key={idx} className="relative flex gap-4">
              <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 relative z-10 border-2 border-white shadow-sm ${
                activity.status === 'green' ? 'bg-accent' : 'bg-emphasis'
              }`}></div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{activity.text}</p>
                <p className="text-xs text-gray-500 font-medium">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RIGHT (40%) — COUNSELOR CARD */}
      <section className="lg:w-[40%] bg-[#F0FDF4] border border-green-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>

        <h2 className="text-xl font-bold text-primary mb-6 relative z-10">Your Counselor</h2>
        
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="relative">
            <img src="https://i.pravatar.cc/150?img=11" alt="M. Imran Hossain Rony" className="w-16 h-16 rounded-full border-2 border-white shadow-sm bg-white object-cover" />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-accent border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary">M. Imran Hossain Rony</h3>
            <div className="text-xs font-bold text-accent flex items-center gap-1 mb-1">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span> Online Now
            </div>
          </div>
        </div>

        <div className="mb-4 relative z-10">
          <p className="text-sm text-gray-700 font-medium">Germany | Poland | PR Visa</p>
          <div className="flex text-emphasis mt-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
        </div>

        <div className="mt-auto space-y-3 relative z-10">
          <button className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-colors">
            <MessageCircle size={18} /> Send Message
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-lg transition-colors">
            <CalendarDays size={18} /> Book Appointment
          </button>
        </div>
      </section>

    </div>
  );
}
