export default function StudyPreferencesCard() {
  const preferences = [
    { label: 'Target Country', value: '🇩🇪 Germany' },
    { label: 'Target Degree', value: 'Masters' },
    { label: 'Target Field', value: 'Computer Science / AI' },
    { label: 'Intake', value: 'Winter 2027' },
    { label: 'Budget', value: 'Tuition Free / Full Scholarship' },
    { label: 'Track', value: 'Agency-Assisted' },
  ];

  return (
    <div className="bg-[#F0FDF4] border border-green-100 rounded-2xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-bold text-primary mb-6">Study Preferences</h2>

      <div className="space-y-4">
        {preferences.map((pref, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{pref.label}</span>
            <span className="text-base font-bold text-primary">{pref.value}</span>
            {idx !== preferences.length - 1 && <hr className="border-green-200 mt-3" />}
          </div>
        ))}
      </div>
    </div>
  );
}
