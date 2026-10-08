
export default function AdminCounselorGrid() {
  const counselors = [
    {
      name: 'M. Imran Hossain Rony',
      role: 'Germany & Schengen Lead',
      activeCases: 42,
      visaRate: '98.6%',
      status: 'Active Now',
      contact: '+880 1712-345678',
    },
    {
      name: 'Dr. Sarah Rahman',
      role: 'China & CSC Scholarship Lead',
      activeCases: 38,
      visaRate: '97.8%',
      status: 'Active Now',
      contact: '+880 1823-456789',
    },
    {
      name: 'Nadia Sultana',
      role: 'Schengen Europe Specialist',
      activeCases: 29,
      visaRate: '99.0%',
      status: 'In Session',
      contact: '+880 1934-567890',
    },
    {
      name: 'Tanvir Hasan',
      role: 'Malaysia Branch Campus Lead',
      activeCases: 33,
      visaRate: '98.2%',
      status: 'Active Now',
      contact: '+880 1645-678901',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-primary">Counselor Allocation &amp; Desk Performance</h2>
          <p className="text-xs text-gray-500">Live caseload, student conversion benchmarks, and direct desk contact</p>
        </div>
        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
          4 Desks Operational
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {counselors.map((c) => (
          <div
            key={c.name}
            className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-accent/40 hover:shadow-xs transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xs">
                {c.name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {c.status}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-primary text-sm">{c.name}</h3>
              <p className="text-[11px] text-gray-500">{c.role}</p>
            </div>

            <div className="pt-2 border-t border-gray-200/60 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-400 text-[10px] block uppercase font-bold">Caseload</span>
                <span className="font-black text-primary">{c.activeCases} Students</span>
              </div>
              <div>
                <span className="text-gray-400 text-[10px] block uppercase font-bold">Visa Rate</span>
                <span className="font-black text-accent">{c.visaRate}</span>
              </div>
            </div>

            <div className="text-[11px] text-gray-500 font-mono pt-1">
              {c.contact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
