import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ProfileCompletionCard() {
  const items = [
    { name: 'Personal Info', status: 'completed' },
    { name: 'Academic Records', status: 'completed' },
    { name: 'English Score', status: 'completed' },
    { name: 'Passport Copy', status: 'completed' },
    { name: 'Medical Certificate', status: 'pending' },
    { name: 'Police Clearance', status: 'pending' },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10"></div>

      <div className="flex items-center gap-4 mb-6">
        {/* Progress Circle (Mock) */}
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-16 h-16 transform -rotate-90">
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-100" />
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="175" strokeDashoffset="26" className="text-accent" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-primary">
            85%
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-primary leading-tight">Profile Completion</h2>
          <p className="text-sm text-gray-500 font-medium">Almost there!</p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span className={`text-sm font-semibold ${item.status === 'completed' ? 'text-gray-800' : 'text-gray-500'}`}>
              {item.name} {item.status === 'pending' && <span className="text-xs text-yellow-600 font-bold ml-1">(pending)</span>}
            </span>
            {item.status === 'completed' ? (
              <CheckCircle2 size={18} className="text-accent" />
            ) : (
              <AlertTriangle size={18} className="text-yellow-500" />
            )}
          </li>
        ))}
      </ul>

      <button className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-green-700 text-white font-bold py-2.5 rounded-xl transition-colors">
        Complete Profile <ArrowRight size={16} />
      </button>
    </div>
  );
}
