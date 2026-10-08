import { TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

export default function AdminAnalyticsDesk() {
  const countryMetrics = [
    { country: 'Germany & Schengen 🇩🇪', percentage: 85, leads: 580, visaRate: '98.6%', color: 'bg-emerald-500' },
    { country: 'China Government CSC 🇨🇳', percentage: 92, leads: 395, visaRate: '99.1%', color: 'bg-amber-500' },
    { country: 'Malaysia British Campuses 🇲🇾', percentage: 68, leads: 180, visaRate: '97.5%', color: 'bg-blue-500' },
    { country: 'Sweden & Hungary 🇸🇪', percentage: 54, leads: 93, visaRate: '94.2%', color: 'bg-purple-500' },
  ];

  const recentMilestones = [
    { title: '€11,208 German Blocked Account Remittance Cleared', student: 'Tanvir Ahmed', time: '18 mins ago' },
    { title: '100% CSC Tuition Waiver Letter Issued', student: 'Sajid Hossain', time: '1 hour ago' },
    { title: 'German Embassy Mock Interview Passed', student: 'Farhana Yeasmin', time: '3 hours ago' },
    { title: 'Malaysian EMGS Student Pass Approved', student: 'Taskin Tasnim', time: '5 hours ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Blocked Account Volume</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-accent flex items-center justify-center">
              <DollarSign size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-primary">€1,591,536</div>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">100% zero surcharge verification</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Avg. Visa Processing</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <TrendingUp size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-primary">18.4 Days</div>
          <p className="text-[11px] text-blue-600 font-semibold mt-1">4.2 days faster than industry average</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Embassy Mock Pass Rate</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <ShieldCheck size={18} />
            </div>
          </div>
          <div className="text-2xl font-black text-primary">99.2%</div>
          <p className="text-[11px] text-purple-600 font-semibold mt-1">Based on 142 simulated sessions</p>
        </div>
      </div>

      {/* Destination Intake Progress */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-primary">Intake Quota &amp; Pipeline Capacity</h3>
            <p className="text-xs text-gray-500">Live allocation for Fall 2026 / Winter 2027 sessions</p>
          </div>
          <span className="text-xs font-bold text-primary bg-gray-100 px-3 py-1 rounded-xl">
            Total Leads: 1,248
          </span>
        </div>

        <div className="space-y-4">
          {countryMetrics.map((item) => (
            <div key={item.country} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-gray-800">{item.country}</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500">{item.leads} leads</span>
                  <span className="font-bold text-primary">{item.percentage}% filled</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Admissions Velocity Milestones */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
        <h3 className="text-base font-bold text-primary mb-3">Live System Activity Feed</h3>
        <div className="divide-y divide-gray-100">
          {recentMilestones.map((m, i) => (
            <div key={i} className="py-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-gray-800">{m.title}</p>
                <p className="text-[11px] text-gray-500">Student: <span className="font-semibold text-primary">{m.student}</span></p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{m.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
