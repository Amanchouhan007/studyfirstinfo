import { useState } from 'react';
import { CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function AvailableScholarshipsGrid({ onApply }: { onApply?: (name: string) => void }) {
  const [appliedList, setAppliedList] = useState<string[]>([]);

  const handleApplyClick = (name: string) => {
    if (!appliedList.includes(name)) {
      setAppliedList([...appliedList, name]);
      if (onApply) onApply(name);
    }
  };

  const scholarships = [
    {
      id: 'csc',
      country: 'China',
      flag: '🇨🇳',
      title: 'CSC China Scholarship',
      subtitle: 'Chinese Government Scholarship',
      status: '✅ You\'re Eligible',
      statusType: 'eligible',
      coverage: [
        '100% Tuition Waived',
        'Free Campus Accommodation',
        '3,500 RMB/month stipend',
        'One-time travel allowance',
      ],
      deadline: 'March 2027',
      deadlineBadgeColor: 'bg-red-100 text-red-700 border-red-200',
      btnText: 'Apply via Counselor →',
      btnStyle: 'bg-accent hover:bg-emerald-700 text-white',
    },
    {
      id: 'daad',
      country: 'Germany',
      flag: '🇩🇪',
      title: 'DAAD Germany',
      subtitle: 'German Academic Exchange Scholarship',
      status: '✅ Eligible',
      statusType: 'eligible',
      coverage: [
        '€934/month living stipend',
        'Health insurance coverage',
        'Travel allowance',
        'Study/research grants',
      ],
      deadline: 'October 2026 (soon!)',
      deadlineBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      btnText: 'Apply Now →',
      btnStyle: 'bg-accent hover:bg-emerald-700 text-white',
    },
    {
      id: 'stipendium',
      country: 'Hungary',
      flag: '🇭🇺',
      title: 'Stipendium Hungaricum',
      subtitle: 'Hungarian Government Scholarship',
      status: '✅ Eligible',
      statusType: 'eligible',
      coverage: [
        'Full tuition waiver',
        'Dormitory accommodation',
        'Monthly stipend HUF 40,500',
        'Medical insurance coverage',
      ],
      deadline: 'January 2027',
      deadlineBadgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
      btnText: 'Apply →',
      btnStyle: 'bg-accent hover:bg-emerald-700 text-white',
    },
    {
      id: 'si',
      country: 'Sweden',
      flag: '🇸🇪',
      title: 'Swedish Institute',
      subtitle: 'SI Scholarship for Global Professionals',
      status: '⚠️ Check Requirements',
      statusType: 'warning',
      coverage: [
        'Full tuition coverage',
        'SEK 11,000/month stipend',
        'Travel grant',
        'Insurance against illness/accident',
      ],
      requirement: '2 years work experience needed',
      deadline: 'February 2027',
      deadlineBadgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
      btnText: 'Check Eligibility →',
      btnStyle: 'bg-white border-2 border-primary text-primary hover:bg-primary/5',
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h2 className="text-xl font-bold text-primary">Available Scholarships</h2>
          <p className="text-xs sm:text-sm text-gray-500">Government &amp; institutional grants matched to your profile</p>
        </div>
        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 self-start sm:self-auto flex items-center gap-1">
          <Sparkles size={13} className="text-accent" /> High Success Probability
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scholarships.map((s) => {
          const isApplied = appliedList.includes(s.title);

          return (
            <div
              key={s.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{s.flag}</span>
                      <h3 className="font-bold text-primary text-lg">{s.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{s.subtitle}</p>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                      s.statusType === 'eligible'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    {s.status}
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Coverage &amp; Perks:</div>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {s.coverage.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {s.requirement && (
                    <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-medium flex items-center gap-1.5">
                      <AlertCircle size={14} className="text-amber-600 shrink-0" />
                      Requirement: <strong>{s.requirement}</strong>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Deadline</div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md border inline-block mt-0.5 ${s.deadlineBadgeColor}`}>
                    {s.deadline}
                  </span>
                </div>

                {isApplied ? (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                    ✅ Application Initiated
                  </span>
                ) : (
                  <button
                    onClick={() => handleApplyClick(s.title)}
                    className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs ${s.btnStyle}`}
                  >
                    {s.btnText}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
