import { useState } from 'react';
import { CheckCircle2, Pencil, Check, X, UploadCloud, AlertCircle } from 'lucide-react';

export interface EnglishScoresData {
  testType: string;
  overallScore: string;
  reading: string;
  writing: string;
  listening: string;
  speaking: string;
  testDate: string;
  certificateName: string;
}

const DEFAULT_ENGLISH_DATA: EnglishScoresData = {
  testType: 'IELTS',
  overallScore: '6.5',
  reading: '7.0',
  writing: '6.0',
  listening: '7.0',
  speaking: '6.0',
  testDate: 'June 2026',
  certificateName: 'ielts_official_score_report.pdf',
};

const TEST_OPTIONS = ['IELTS', 'PTE Academic', 'TOEFL iBT', 'Duolingo English Test', 'MOI (English Medium)'];

export default function EnglishScoresCard({
  profile,
  onScoresChange
}: {
  profile?: any;
  onScoresChange?: (scores: EnglishScoresData) => void;
}) {
  const [data, setData] = useState<EnglishScoresData>(() => ({
    ...DEFAULT_ENGLISH_DATA,
    testType: profile?.englishTestType || DEFAULT_ENGLISH_DATA.testType,
    overallScore: profile?.englishScore ? String(profile.englishScore) : DEFAULT_ENGLISH_DATA.overallScore,
  }));

  const [formData, setFormData] = useState<EnglishScoresData>(data);
  const [isEditing, setIsEditing] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleStartEdit = () => {
    setFormData(data);
    setValidationError(null);
    setIsEditing(true);
    setSavedNotice(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setValidationError(null);
    setIsEditing(false);
  };

  const validateScores = (form: EnglishScoresData): boolean => {
    if (form.testType === 'MOI (English Medium)') {
      return true; // No numeric score required
    }

    const overall = parseFloat(form.overallScore);
    if (isNaN(overall)) {
      setValidationError('Please enter a valid overall test score.');
      return false;
    }

    if (form.testType.startsWith('IELTS')) {
      if (overall < 0 || overall > 9.0) {
        setValidationError('IELTS score must be between 0.0 and 9.0.');
        return false;
      }
    } else if (form.testType.startsWith('PTE')) {
      if (overall < 10 || overall > 90) {
        setValidationError('PTE Academic score must be between 10 and 90.');
        return false;
      }
    } else if (form.testType.startsWith('TOEFL')) {
      if (overall < 0 || overall > 120) {
        setValidationError('TOEFL iBT score must be between 0 and 120.');
        return false;
      }
    } else if (form.testType.startsWith('Duolingo')) {
      if (overall < 10 || overall > 160) {
        setValidationError('Duolingo score must be between 10 and 160.');
        return false;
      }
    }

    setValidationError(null);
    return true;
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateScores(formData)) return;

    setData(formData);
    setIsEditing(false);
    setSavedNotice(true);
    if (onScoresChange) onScoresChange(formData);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleChange = (field: keyof EnglishScoresData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationError) setValidationError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, certificateName: file.name }));
    }
  };

  const isMoi = (isEditing ? formData.testType : data.testType).includes('MOI');

  return (
    <div id="english-scores" className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-bold text-primary">English Test Scores</h2>
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
              className="px-3 py-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer flex items-center gap-1"
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
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
          >
            <Pencil size={13} /> Edit
          </button>
        )}
      </div>

      {validationError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold flex items-center gap-2">
          <AlertCircle size={14} className="shrink-0" />
          <span>{validationError}</span>
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Test Type
                </label>
                <select
                  value={formData.testType}
                  onChange={(e) => handleChange('testType', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  {TEST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Overall Score {isMoi ? '(Optional)' : '*'}
                </label>
                <input
                  type="text"
                  value={formData.overallScore}
                  onChange={(e) => handleChange('overallScore', e.target.value)}
                  placeholder={formData.testType.startsWith('IELTS') ? 'e.g. 6.5' : 'e.g. 65'}
                  disabled={isMoi}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-100 disabled:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                  Test / Issue Date
                </label>
                <input
                  type="text"
                  value={formData.testDate}
                  onChange={(e) => handleChange('testDate', e.target.value)}
                  placeholder="e.g. June 2026"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            {!isMoi && (
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Sub-Band Scores
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">Reading</label>
                    <input
                      type="text"
                      value={formData.reading}
                      onChange={(e) => handleChange('reading', e.target.value)}
                      placeholder="e.g. 7.0"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white text-center font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">Writing</label>
                    <input
                      type="text"
                      value={formData.writing}
                      onChange={(e) => handleChange('writing', e.target.value)}
                      placeholder="e.g. 6.0"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white text-center font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">Listening</label>
                    <input
                      type="text"
                      value={formData.listening}
                      onChange={(e) => handleChange('listening', e.target.value)}
                      placeholder="e.g. 7.0"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white text-center font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">Speaking</label>
                    <input
                      type="text"
                      value={formData.speaking}
                      onChange={(e) => handleChange('speaking', e.target.value)}
                      placeholder="e.g. 6.0"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 bg-white text-center font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Demo Certificate Selection */}
            <div className="pt-2 border-t border-gray-200">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                Test Certificate / TRF (Demo Selection)
              </label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-primary text-gray-700 px-3 py-2 rounded-xl text-xs font-semibold shadow-sm transition-colors">
                  <UploadCloud size={16} className="text-primary" />
                  <span>Choose File (Local Preview)</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <div className="text-xs text-gray-500 truncate font-mono">
                  {formData.certificateName ? (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={13} /> {formData.certificateName}
                    </span>
                  ) : (
                    'No document chosen'
                  )}
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-1.5 italic">
                Local session preview only; files are not uploaded to any server or permanent storage.
              </p>
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 border-b border-gray-200 pb-4">
            <div>
              <div className="text-2xl font-black text-primary">
                {data.testType}: {isMoi ? 'Waiver / Letter' : data.overallScore}{' '}
                {!isMoi && <span className="text-sm font-semibold text-gray-500 uppercase">Overall</span>}
              </div>
              <div className="text-xs text-gray-400 font-medium mt-1">
                Test / Validity Date: {data.testDate}
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-1">
              <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-green-200 w-fit">
                Certificate: Verified (Demo) <CheckCircle2 size={14} />
              </div>
              <span className="text-[11px] text-gray-400 font-mono">
                {data.certificateName}
              </span>
            </div>
          </div>

          {!isMoi ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Reading</div>
                <div className="font-bold text-primary text-lg">{data.reading || '—'}</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Writing</div>
                <div className="font-bold text-primary text-lg">{data.writing || '—'}</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Listening</div>
                <div className="font-bold text-primary text-lg">{data.listening || '—'}</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1">Speaking</div>
                <div className="font-bold text-primary text-lg">{data.speaking || '—'}</div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-lg border border-gray-100 text-xs text-gray-600">
              English Medium of Instruction (MOI) institutional letter attached. Eligible for English test exemptions where permitted by destination universities.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
