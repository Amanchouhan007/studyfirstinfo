import { useState } from 'react';
import { CheckCircle2, Search, Sparkles, Building2 } from 'lucide-react';

interface WaiverApplicant {
  id: string;
  name: string;
  country: string;
  scheme: string;
  gpa: string;
  ielts: string;
  estimatedValue: string;
  status: 'Pending Review' | 'Approved' | 'Rejected';
  university: string;
}

export default function AdminWaiversDesk() {
  const [filter, setFilter] = useState<'All' | 'Pending Review' | 'Approved' | 'Rejected'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [applicants, setApplicants] = useState<WaiverApplicant[]>([
    {
      id: 'WV-2026-001',
      name: 'Rahul Ahmed',
      country: 'Germany 🇩🇪',
      scheme: 'DAAD Merit Waiver & Zero Surcharge',
      gpa: 'SSC 5.00 / HSC 5.00',
      ielts: 'IELTS 6.5',
      estimatedValue: '€14,500 / yr',
      status: 'Approved',
      university: 'Technical University of Munich (TUM)',
    },
    {
      id: 'WV-2026-002',
      name: 'Sajid Hossain',
      country: 'China 🇨🇳',
      scheme: 'CSC Chinese Government Full Scholarship',
      gpa: 'GPA 4.85 / 5.00',
      ielts: 'MOI Certificate',
      estimatedValue: '35,000 RMB + Free Dorm',
      status: 'Pending Review',
      university: 'Zhejiang University',
    },
    {
      id: 'WV-2026-003',
      name: 'Farhana Yeasmin',
      country: 'Germany 🇩🇪',
      scheme: '100% Tuition Waiver Public Program',
      gpa: 'SSC 5.00 / HSC 5.00',
      ielts: 'IELTS 7.0',
      estimatedValue: '€12,800 / yr',
      status: 'Pending Review',
      university: 'RWTH Aachen University',
    },
    {
      id: 'WV-2026-004',
      name: 'Tanvir Ahmed',
      country: 'Hungary 🇭🇺',
      scheme: 'Stipendium Hungaricum Full Ride',
      gpa: 'GPA 4.90 / 5.00',
      ielts: 'IELTS 6.5',
      estimatedValue: '€9,500 / yr',
      status: 'Pending Review',
      university: 'University of Debrecen',
    },
    {
      id: 'WV-2026-005',
      name: 'Taskin Tasnim',
      country: 'Malaysia 🇲🇾',
      scheme: 'British Branch Campus Merit Grant',
      gpa: 'GPA 4.50 / 5.00',
      ielts: 'MOI Letter',
      estimatedValue: 'RM 25,000 Total',
      status: 'Rejected',
      university: 'University of Nottingham Malaysia',
    },
  ]);

  const handleAction = (id: string, newStatus: 'Approved' | 'Rejected') => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const filtered = applicants.filter((app) => {
    const matchesFilter = filter === 'All' || app.status === filter;
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0D3B2E] via-[#092B21] to-[#062018] text-white p-6 sm:p-8 rounded-3xl border border-emerald-500/20 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-accent/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-accent/30">
            <Sparkles size={13} />
            SCHOLARSHIPS DESK
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            100% Merit Waivers &amp; Full Ride Clearances
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Authoritative approval hub for Chinese Government CSC, German Public Tuition Exemptions, and Hungarian Scholarships.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search student, university, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {(['All', 'Pending Review', 'Approved', 'Rejected'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === f
                  ? 'bg-accent text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Applicants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-all space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-gray-400 font-mono">{app.id}</span>
                <h3 className="text-base font-bold text-gray-900">{app.name}</h3>
                <div className="text-xs text-accent font-semibold flex items-center gap-1 mt-0.5">
                  <Building2 size={13} />
                  <span>{app.university}</span>
                </div>
              </div>

              <span
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                  app.status === 'Approved'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : app.status === 'Pending Review'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}
              >
                {app.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-gray-50/70 p-3 rounded-xl text-xs">
              <div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Scheme</span>
                <span className="font-bold text-gray-800 line-clamp-1">{app.scheme}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Estimated Value</span>
                <span className="font-bold text-emerald-600">{app.estimatedValue}</span>
              </div>
              <div className="mt-1">
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">Academic Score</span>
                <span className="font-medium text-gray-700">{app.gpa}</span>
              </div>
              <div className="mt-1">
                <span className="text-[10px] text-gray-400 font-semibold block uppercase">English Standard</span>
                <span className="font-medium text-gray-700">{app.ielts}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
              <button
                onClick={() => handleAction(app.id, 'Approved')}
                disabled={app.status === 'Approved'}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  app.status === 'Approved'
                    ? 'bg-emerald-100 text-emerald-800 cursor-not-allowed opacity-70'
                    : 'bg-accent hover:bg-green-700 text-white shadow-xs'
                }`}
              >
                <CheckCircle2 size={14} />
                <span>{app.status === 'Approved' ? 'Waiver Active' : 'Approve 100% Waiver'}</span>
              </button>

              <button
                onClick={() => handleAction(app.id, 'Rejected')}
                disabled={app.status === 'Rejected'}
                className="px-3 py-2 rounded-xl text-xs font-bold text-gray-600 hover:text-rose-600 hover:bg-rose-50 border border-gray-200 transition-all cursor-pointer"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
