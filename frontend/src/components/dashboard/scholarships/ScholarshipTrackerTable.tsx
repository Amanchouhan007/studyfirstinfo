import { useState } from 'react';
import { Eye, ArrowRight } from 'lucide-react';

export default function ScholarshipTrackerTable() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const trackerData = [
    {
      scholarship: 'DAAD Germany 2027',
      applied: 'Sep 8, 2026',
      status: 'Under Review',
      statusStyle: 'bg-amber-100 text-amber-800',
      actionType: 'view',
      details: 'Dossier submitted by Counselor Imran Rony. Under initial academic review by DAAD regional desk.',
    },
    {
      scholarship: 'CSC China 2027',
      applied: 'Pending',
      status: 'Not Started',
      statusStyle: 'bg-gray-100 text-gray-600',
      actionType: 'apply',
      details: 'Requires passport copy & verified university transcript prior to submission portal unlock.',
    },
    {
      scholarship: 'Stipendium Hungaricum',
      applied: 'Pending',
      status: 'Not Started',
      statusStyle: 'bg-gray-100 text-gray-600',
      actionType: 'apply',
      details: 'Application window opens in November 2026 for the 2027/2028 academic session.',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary">Your Scholarship Applications</h2>
        <p className="text-xs text-gray-500 mt-0.5">Real-time status tracking for applied and queued funding requests</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-gray-400">
              <th className="pb-3 px-2">Scholarship</th>
              <th className="pb-3 px-2">Applied</th>
              <th className="pb-3 px-2">Status</th>
              <th className="pb-3 px-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            {trackerData.map((row) => (
              <tr key={row.scholarship} className="hover:bg-gray-50/70 transition-colors">
                <td className="py-4 px-2 font-bold text-primary">
                  {row.scholarship}
                </td>
                <td className="py-4 px-2 text-xs text-gray-500">
                  {row.applied}
                </td>
                <td className="py-4 px-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${row.statusStyle}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-2 text-right">
                  {row.actionType === 'view' ? (
                    <button
                      onClick={() => setActiveItem(activeItem === row.scholarship ? null : row.scholarship)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-accent bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Eye size={13} /> View
                    </button>
                  ) : (
                    <button
                      onClick={() => alert(`Starting application process for ${row.scholarship}`)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-accent hover:bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                    >
                      Apply <ArrowRight size={13} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activeItem && (
        <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950">
          <div className="font-bold mb-1">Status Details: {activeItem}</div>
          <p>{trackerData.find((t) => t.scholarship === activeItem)?.details}</p>
        </div>
      )}
    </div>
  );
}
