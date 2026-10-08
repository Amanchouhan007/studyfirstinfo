import { GraduationCap, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function UniversityMatches() {
  const [appliedUnis, setAppliedUnis] = useState<string[]>([]);

  const toggleApply = (uniName: string) => {
    if (!appliedUnis.includes(uniName)) {
      setAppliedUnis([...appliedUnis, uniName]);
    }
  };

  const matches = [
    {
      name: 'TU Munich',
      degree: 'Masters in Computer Science',
      badge: 'Top Match',
      ielts: '6.5+',
      gpa: '3.5+',
      tuition: 'Free (public university)',
      featured: true,
    },
    {
      name: 'University of Stuttgart',
      degree: 'Masters in AI & Robotics',
      ielts: '6.0+',
      gpa: '3.2+',
      tuition: 'Free (public university)',
      featured: false,
    },
    {
      name: 'Heidelberg University',
      degree: 'Masters in Computer Science',
      ielts: '6.5+',
      gpa: '3.4+',
      tuition: 'Free (public university)',
      featured: false,
    },
  ];

  return (
    <div className="bg-[#F0FDF4] border border-accent/20 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-bold">
            <GraduationCap size={20} />
          </div>
          <div>
            <h3 className="font-bold text-primary text-lg">Your Matched Universities</h3>
            <p className="text-xs text-emerald-800 font-medium">Based on your profile (97% eligibility)</p>
          </div>
        </div>
        <span className="text-xs font-bold text-accent bg-white px-2.5 py-1 rounded-full border border-accent/20 shadow-xs">
          3 Matches
        </span>
      </div>

      <div className="space-y-4 mt-5">
        {matches.map((uni) => {
          const isApplied = appliedUnis.includes(uni.name);
          return (
            <div
              key={uni.name}
              className="bg-white rounded-xl p-4 sm:p-5 border border-emerald-100 hover:border-accent/40 shadow-xs transition-all hover:shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-primary text-base">{uni.name}</h4>
                    {uni.featured && (
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold px-2 py-0.5 rounded-full">
                        <Star size={11} className="fill-amber-500 text-amber-500" />
                        {uni.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-600 mt-0.5">{uni.degree}</p>
                </div>

                <button
                  onClick={() => toggleApply(uni.name)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    isApplied
                      ? 'bg-emerald-100 text-emerald-800 cursor-default'
                      : 'bg-accent hover:bg-emerald-700 text-white shadow-xs'
                  }`}
                >
                  {isApplied ? (
                    <>
                      <CheckCircle2 size={13} /> Application Queued
                    </>
                  ) : (
                    <>
                      Apply Now <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-100 text-xs text-gray-600">
                <span className="flex items-center gap-1 font-medium">
                  IELTS: <strong className="text-primary">{uni.ielts}</strong> <CheckCircle2 size={12} className="text-emerald-600" />
                </span>
                {uni.gpa && (
                  <span className="flex items-center gap-1 font-medium">
                    GPA: <strong className="text-primary">{uni.gpa}</strong> <CheckCircle2 size={12} className="text-emerald-600" />
                  </span>
                )}
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px] ml-auto">
                  Tuition: {uni.tuition}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
