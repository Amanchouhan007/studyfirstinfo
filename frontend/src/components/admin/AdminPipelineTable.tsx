import { useState } from 'react';
import { Search, CheckCircle2, UserCheck, Award } from 'lucide-react';

interface StudentPipelineItem {
  id: string;
  name: string;
  email: string;
  country: 'Germany' | 'China' | 'Malaysia';
  academics: string;
  counselor: string;
  status: string;
  meritWaiver: 'Approved' | 'Pending Review' | 'Not Eligible';
}

export default function AdminPipelineTable() {
  const [filterCountry, setFilterCountry] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState<StudentPipelineItem[]>([
    {
      id: 'SF-001247',
      name: 'Rahul Ahmed',
      email: 'rahul@gmail.com',
      country: 'Germany',
      academics: 'Dual A+ (GPA 5.0) | IELTS 6.5',
      counselor: 'M. Imran Hossain Rony',
      status: 'Under Counselor Review',
      meritWaiver: 'Approved',
    },
    {
      id: 'SF-001248',
      name: 'Farhana Yeasmin',
      email: 'farhana.y@yahoo.com',
      country: 'Germany',
      academics: 'Dual A+ (GPA 5.0) | IELTS 7.0',
      counselor: 'Nadia Sultana',
      status: 'Profile Review',
      meritWaiver: 'Pending Review',
    },
    {
      id: 'SF-001249',
      name: 'Sajid Hossain',
      email: 'sajid.h@outlook.com',
      country: 'China',
      academics: 'GPA 4.85 | CSC Applicant',
      counselor: 'Dr. Sarah Rahman',
      status: 'Offer Letter Received',
      meritWaiver: 'Pending Review',
    },
    {
      id: 'SF-001250',
      name: 'Taskin Tasnim',
      email: 'taskin.t@gmail.com',
      country: 'Malaysia',
      academics: 'GPA 4.50 | MOI Basis',
      counselor: 'Tanvir Hasan',
      status: 'Documents Verified',
      meritWaiver: 'Not Eligible',
    },
    {
      id: 'SF-001251',
      name: 'Tanvir Ahmed',
      email: 'tanvir.a@gmail.com',
      country: 'Germany',
      academics: 'GPA 4.90 | IELTS 6.5',
      counselor: 'M. Imran Hossain Rony',
      status: 'Uni Applications Queued',
      meritWaiver: 'Approved',
    },
  ]);

  const [reassignModal, setReassignModal] = useState<StudentPipelineItem | null>(null);
  const [newCounselor, setNewCounselor] = useState('');

  const counselorsList = [
    'M. Imran Hossain Rony',
    'Dr. Sarah Rahman',
    'Nadia Sultana',
    'Tanvir Hasan',
  ];

  const toggleWaiverApproval = (id: string) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, meritWaiver: s.meritWaiver === 'Approved' ? 'Pending Review' : 'Approved' }
          : s
      )
    );
  };

  const handleReassignSubmit = () => {
    if (reassignModal && newCounselor) {
      setStudents((prev) =>
        prev.map((s) => (s.id === reassignModal.id ? { ...s, counselor: newCounselor } : s))
      );
      setReassignModal(null);
    }
  };

  const filtered = students.filter((s) => {
    const matchesCountry = filterCountry === 'All' || s.country === filterCountry;
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.counselor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 mb-8">
      {/* Table Header Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-primary">Global Pipeline &amp; Lead Desks</h2>
          <p className="text-xs text-gray-500">Monitor active student files, counselor assignments, and scholarship waivers</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full sm:w-auto">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search student or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent w-full sm:w-60"
            />
          </div>

          {/* Country Filters */}
          <div className="flex flex-wrap items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-bold">
            {(['All', 'Germany', 'China', 'Malaysia'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilterCountry(c)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filterCountry === c ? 'bg-white text-primary shadow-xs' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {c === 'Germany' ? '🇩🇪 Germany' : c === 'China' ? '🇨🇳 China' : c === 'Malaysia' ? '🇲🇾 Malaysia' : 'All'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table with smooth horizontal scrolling */}
      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <table className="min-w-[740px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-400">
              <th className="pb-3 px-3">Student &amp; ID</th>
              <th className="pb-3 px-3">Target Country</th>
              <th className="pb-3 px-3">Academic Score</th>
              <th className="pb-3 px-3">Assigned Counselor</th>
              <th className="pb-3 px-3">Pipeline Status</th>
              <th className="pb-3 px-3">100% Waiver</th>
              <th className="pb-3 px-3 text-right">Admin Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            {filtered.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-4 px-3">
                  <div className="font-bold text-primary">{s.name}</div>
                  <div className="text-[11px] font-mono text-gray-400">{s.id}</div>
                </td>

                <td className="py-4 px-3 text-xs">
                  <span className="font-bold text-gray-700">
                    {s.country === 'Germany' ? '🇩🇪 Germany' : s.country === 'China' ? '🇨🇳 China' : '🇲🇾 Malaysia'}
                  </span>
                </td>

                <td className="py-4 px-3 text-xs text-gray-600">
                  {s.academics}
                </td>

                <td className="py-4 px-3 text-xs font-semibold text-primary">
                  {s.counselor}
                </td>

                <td className="py-4 px-3">
                  <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {s.status}
                  </span>
                </td>

                <td className="py-4 px-3">
                  {s.meritWaiver === 'Approved' ? (
                    <button
                      onClick={() => toggleWaiverApproval(s.id)}
                      className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1 hover:opacity-80 transition-opacity"
                      title="Click to toggle"
                    >
                      <CheckCircle2 size={12} /> Approved
                    </button>
                  ) : s.meritWaiver === 'Pending Review' ? (
                    <button
                      onClick={() => toggleWaiverApproval(s.id)}
                      className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full flex items-center gap-1 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                      title="Click to approve waiver"
                    >
                      <Award size={12} /> Approve Waiver
                    </button>
                  ) : (
                    <span className="text-[11px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      Not Eligible
                    </span>
                  )}
                </td>

                <td className="py-4 px-3 text-right">
                  <button
                    onClick={() => {
                      setReassignModal(s);
                      setNewCounselor(s.counselor);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <UserCheck size={13} /> Reassign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reassign Counselor Modal */}
      {reassignModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-primary">
              Reassign Counselor for {reassignModal.name}
            </h3>
            <p className="text-xs text-gray-500">
              Select destination-specialist to take over case #{reassignModal.id}.
            </p>
            <select
              value={newCounselor}
              onChange={(e) => setNewCounselor(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {counselorsList.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setReassignModal(null)}
                className="text-xs font-semibold text-gray-500 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleReassignSubmit}
                className="text-xs font-bold bg-accent hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
