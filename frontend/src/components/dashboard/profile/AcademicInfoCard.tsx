import { useState, useEffect } from 'react';
import { Pencil, Check, X } from 'lucide-react';

export interface AcademicBackground {
  undergraduate: {
    degree: string;
    cgpa: string;
    scale: string;
    graduationYear: string;
  };
  hsc: {
    result: string;
    board: string;
    year: string;
  };
  ssc: {
    result: string;
    board: string;
    year: string;
  };
}

const DEFAULT_ACADEMIC_DATA: AcademicBackground = {
  undergraduate: {
    degree: 'Undergraduate: BSc',
    cgpa: '3.85',
    scale: '4.00',
    graduationYear: '2025'
  },
  hsc: {
    result: 'A+ (GPA 5.00)',
    board: 'Dhaka Board',
    year: '2021'
  },
  ssc: {
    result: 'A+ (GPA 5.00)',
    board: 'Dhaka Board',
    year: '2019'
  }
};

export default function AcademicInfoCard({
  profile,
  onAcademicChange
}: {
  profile?: any;
  onAcademicChange?: (data: AcademicBackground) => void;
}) {
  const [data, setData] = useState<AcademicBackground>(() => ({
    ...DEFAULT_ACADEMIC_DATA,
    undergraduate: {
      ...DEFAULT_ACADEMIC_DATA.undergraduate,
      cgpa: profile?.academicScore ? String(profile.academicScore) : DEFAULT_ACADEMIC_DATA.undergraduate.cgpa
    }
  }));
  const [formData, setFormData] = useState<AcademicBackground>(data);
  const [isEditing, setIsEditing] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    if (profile?.academicScore) {
      setData((prev) => ({
        ...prev,
        undergraduate: {
          ...prev.undergraduate,
          cgpa: String(profile.academicScore)
        }
      }));
    }
  }, [profile?.academicScore]);

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
    if (onAcademicChange) onAcademicChange(formData);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div id="academic-info" className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-bold text-primary">Academic Background</h2>
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
              className="px-4 py-1.5 text-xs font-bold text-white bg-accent hover:bg-emerald-700 rounded-xl transition-colors shadow-xs cursor-pointer flex items-center gap-1"
            >
              <Check size={13} /> Save
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleStartEdit}
            className="p-2 text-gray-400 hover:text-accent transition-colors rounded-full hover:bg-green-50 cursor-pointer"
            title="Edit Academic Background"
            aria-label="Edit Academic Background"
          >
            <Pencil size={18} />
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-6">
          {/* Milestone 3: Undergraduate */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[10px]">
                3
              </span>
              Undergraduate Degree
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Degree Title</label>
                <input
                  type="text"
                  value={formData.undergraduate.degree}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      undergraduate: { ...prev.undergraduate, degree: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">CGPA (out of 4.00)</label>
                <input
                  type="text"
                  value={formData.undergraduate.cgpa}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      undergraduate: { ...prev.undergraduate, cgpa: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Graduation Year</label>
                <input
                  type="text"
                  value={formData.undergraduate.graduationYear}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      undergraduate: { ...prev.undergraduate, graduationYear: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>
          </div>

          {/* Milestone 2: HSC */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[10px]">
                2
              </span>
              Higher Secondary Certificate (HSC)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Result</label>
                <input
                  type="text"
                  value={formData.hsc.result}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hsc: { ...prev.hsc, result: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Board</label>
                <input
                  type="text"
                  value={formData.hsc.board}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hsc: { ...prev.hsc, board: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Passing Year</label>
                <input
                  type="text"
                  value={formData.hsc.year}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hsc: { ...prev.hsc, year: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>
          </div>

          {/* Milestone 1: SSC */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-primary">
              <span className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center text-[10px]">
                1
              </span>
              Secondary School Certificate (SSC)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Result</label>
                <input
                  type="text"
                  value={formData.ssc.result}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      ssc: { ...prev.ssc, result: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Board</label>
                <input
                  type="text"
                  value={formData.ssc.board}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      ssc: { ...prev.ssc, board: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Passing Year</label>
                <input
                  type="text"
                  value={formData.ssc.year}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      ssc: { ...prev.ssc, year: e.target.value }
                    }))
                  }
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-accent hover:bg-emerald-700 rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Check size={14} /> Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-gray-200 pl-10">
          <div className="relative">
            <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-sm">
              3
            </div>
            <h3 className="font-bold text-primary text-lg">{data.undergraduate.degree}</h3>
            <p className="text-gray-500 font-medium text-sm">
              CGPA: <span className="font-bold text-accent">{data.undergraduate.cgpa}/{data.undergraduate.scale}</span>
            </p>
            <p className="text-gray-400 text-xs font-semibold mt-1">
              Graduation: {data.undergraduate.graduationYear}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-sm">
              2
            </div>
            <h3 className="font-bold text-primary text-lg">HSC Result: {data.hsc.result}</h3>
            <p className="text-gray-500 font-medium text-sm">HSC Board: {data.hsc.board}</p>
            <p className="text-gray-400 text-xs font-semibold mt-1">Year: {data.hsc.year}</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-sm">
              1
            </div>
            <h3 className="font-bold text-primary text-lg">SSC Result: {data.ssc.result}</h3>
            <p className="text-gray-500 font-medium text-sm">SSC Board: {data.ssc.board}</p>
            <p className="text-gray-400 text-xs font-semibold mt-1">Year: {data.ssc.year}</p>
          </div>
        </div>
      )}
    </div>
  );
}
