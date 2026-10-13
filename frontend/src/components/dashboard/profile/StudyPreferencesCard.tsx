import { useState, useEffect } from 'react';
import { Pencil, Check, X } from 'lucide-react';

export interface StudyPreferencesData {
  targetCountry: string;
  targetDegree: string;
  targetField: string;
  intake: string;
  budget: string;
  track: string;
}

const DEFAULT_PREFERENCES: StudyPreferencesData = {
  targetCountry: 'Germany',
  targetDegree: 'Masters',
  targetField: 'Computer Science / AI',
  intake: 'Winter 2027',
  budget: 'Tuition Free / Full Scholarship',
  track: 'Agency-Assisted',
};

const COUNTRY_OPTIONS = [
  'Germany',
  'New Zealand',
  'Hungary',
  'United Kingdom',
  'Malaysia',
  'Lithuania',
  'South Korea',
  'China',
  'Cyprus',
  'Greece',
  'Finland',
  'Denmark',
  'Czech Republic',
  'Bulgaria',
  'Russia',
  'Ireland',
];

const DEGREE_OPTIONS = [
  'Bachelor',
  'Masters',
  'Doctorate (PhD)',
  'Diploma / Foundation',
];

const INTAKE_OPTIONS = [
  'Winter 2026',
  'Summer 2026',
  'Fall / September 2026',
  'Spring 2027',
  'February 2027',
  'Winter 2027',
];

const BUDGET_OPTIONS = [
  'Tuition Free / Full Scholarship',
  'Low Cost (€1,500 – €4,000 / yr)',
  'Moderate (€4,000 – €8,000 / yr)',
  'High ($10,000 – $25,000 / yr)',
  'Self-Funded (Standard International Fees)',
];

const TRACK_OPTIONS = [
  'Agency-Assisted',
  'Self-Applied with Guidance',
  'Fast-Track Direct Assessment',
];

export default function StudyPreferencesCard({
  profile,
  onPreferencesChange,
}: {
  profile?: any;
  onPreferencesChange?: (prefs: StudyPreferencesData) => void;
}) {
  const [data, setData] = useState<StudyPreferencesData>(() => ({
    targetCountry: profile?.preferredCountry?.replace(/^[^\w\s]+/, '').trim() || DEFAULT_PREFERENCES.targetCountry,
    targetDegree: profile?.studyLevel || DEFAULT_PREFERENCES.targetDegree,
    targetField: DEFAULT_PREFERENCES.targetField,
    intake: DEFAULT_PREFERENCES.intake,
    budget: profile?.budget || DEFAULT_PREFERENCES.budget,
    track: DEFAULT_PREFERENCES.track,
  }));

  const [formData, setFormData] = useState<StudyPreferencesData>(data);
  const [isEditing, setIsEditing] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    if (profile && !isEditing) {
      setData((prev) => ({
        ...prev,
        targetCountry: (profile.preferredCountry || profile.targetCountry)?.replace(/^[^\w\s]+/, '').trim() || prev.targetCountry || DEFAULT_PREFERENCES.targetCountry,
        targetDegree: profile.studyLevel || profile.targetDegree || prev.targetDegree || DEFAULT_PREFERENCES.targetDegree,
        targetField: profile.targetField || prev.targetField || DEFAULT_PREFERENCES.targetField,
        intake: profile.intake || prev.intake || DEFAULT_PREFERENCES.intake,
        budget: profile.budget || prev.budget || DEFAULT_PREFERENCES.budget,
        track: profile.track || prev.track || DEFAULT_PREFERENCES.track,
      }));
    }
  }, [profile, isEditing]);

  const handleStartEdit = () => {
    setFormData(data);
    setIsEditing(true);
    setSavedNotice(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setData(formData);
    setIsEditing(false);
    setSavedNotice(true);
    if (onPreferencesChange) onPreferencesChange(formData);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleChange = (field: keyof StudyPreferencesData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const displayList = [
    { label: 'Target Country', value: data.targetCountry },
    { label: 'Target Degree', value: data.targetDegree },
    { label: 'Target Field', value: data.targetField },
    { label: 'Intake', value: data.intake },
    { label: 'Budget', value: data.budget },
    { label: 'Track', value: data.track },
  ];

  return (
    <div id="study-preferences" className="bg-[#F0FDF4] border border-green-100 rounded-2xl p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-bold text-primary">Study Preferences</h2>
          {savedNotice && (
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Check size={12} /> Saved (Demo)
            </span>
          )}
          {isEditing && (
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
              Editing
            </span>
          )}
        </div>

        {isEditing ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-green-100/60 rounded-xl transition-colors cursor-pointer flex items-center gap-1"
            >
              <X size={13} /> Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
            >
              <Check size={13} /> Save
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleStartEdit}
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent bg-white/80 hover:bg-white border border-green-200 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <Pencil size={13} /> Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
              Target Country
            </label>
            <select
              value={formData.targetCountry}
              onChange={(e) => handleChange('targetCountry', e.target.value)}
              className="w-full border border-green-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
              Target Degree
            </label>
            <select
              value={formData.targetDegree}
              onChange={(e) => handleChange('targetDegree', e.target.value)}
              className="w-full border border-green-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {DEGREE_OPTIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
              Target Field of Study
            </label>
            <input
              type="text"
              value={formData.targetField}
              onChange={(e) => handleChange('targetField', e.target.value)}
              placeholder="e.g. Computer Science / AI"
              className="w-full border border-green-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
              Intake
            </label>
            <select
              value={formData.intake}
              onChange={(e) => handleChange('intake', e.target.value)}
              className="w-full border border-green-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {INTAKE_OPTIONS.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
              Budget / Funding Preference
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full border border-green-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
              Application Track
            </label>
            <select
              value={formData.track}
              onChange={(e) => handleChange('track', e.target.value)}
              className="w-full border border-green-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            >
              {TRACK_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          {displayList.map((pref, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                {pref.label}
              </span>
              <span className="text-base font-bold text-primary">{pref.value}</span>
              {idx !== displayList.length - 1 && <hr className="border-green-200 mt-3" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
