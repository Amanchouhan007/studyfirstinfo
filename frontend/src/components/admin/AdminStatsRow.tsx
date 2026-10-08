import { Users, FileCheck, Award, TrendingUp } from 'lucide-react';

export default function AdminStatsRow() {
  const stats = [
    {
      label: 'Total Student Leads',
      value: '1,248',
      change: '+14% this month',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Active Pipeline Cases',
      value: '142',
      change: '42 in counselor review',
      icon: FileCheck,
      color: 'bg-emerald-50 text-accent',
    },
    {
      label: '100% Merit Waivers',
      value: '18',
      change: 'Dual A+ qualified',
      icon: Award,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      label: 'Visa Success Ratio',
      value: '98.4%',
      change: 'Verified German/China',
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-sm p-5 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <Icon size={20} />
              </div>
            </div>
            <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
            <div className="text-xs text-gray-400 font-medium">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
}
