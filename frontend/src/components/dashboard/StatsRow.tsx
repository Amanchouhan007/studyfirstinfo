import { ClipboardList, User, Globe2, Calendar } from 'lucide-react';

export default function StatsRow() {
  const stats = [
    {
      title: 'Application Status',
      value: 'In Review',
      icon: <ClipboardList size={24} className="text-primary" />,
      badge: true
    },
    {
      title: 'Assigned Counselor',
      value: 'M. Imran Hossain Rony',
      sub: '🇩🇪 Germany Specialist',
      icon: <User size={24} className="text-primary" />
    },
    {
      title: 'Target Country',
      value: '🇩🇪 Germany',
      sub: 'Schengen Europe',
      icon: <Globe2 size={24} className="text-primary" />
    },
    {
      title: 'Next Appointment',
      value: 'Sep 15, 2026',
      sub: '3:00 PM — Video Call',
      icon: <Calendar size={24} className="text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-light-mint rounded-xl flex items-center justify-center">
              {stat.icon}
            </div>
            {stat.badge && (
              <span className="bg-emphasis text-gray-900 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                Action Req
              </span>
            )}
          </div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">{stat.title}</h4>
          
          {stat.badge ? (
            <div className="inline-flex bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded text-sm mb-1 border border-yellow-200">
              {stat.value}
            </div>
          ) : (
            <div className="text-base font-bold text-primary truncate" title={stat.value}>{stat.value}</div>
          )}
          
          {stat.sub && <div className="text-xs text-gray-400 font-medium mt-1">{stat.sub}</div>}
        </div>
      ))}
    </div>
  );
}
