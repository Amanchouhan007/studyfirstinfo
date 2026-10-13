import { useState, useEffect } from 'react';
import { Pencil, Check, X } from 'lucide-react';

interface PersonalData {
  fullName: string;
  dob: string;
  gender: string;
  nationality: string;
  nationalId: string;
  passportNumber: string;
  passportExpiry: string;
  phone: string;
  email: string;
  address: string;
}

const INITIAL_PERSONAL_DATA: PersonalData = {
  fullName: 'Rahul Ahmed',
  dob: 'January 15, 2002',
  gender: 'Male',
  nationality: 'Bangladeshi',
  nationalId: 'XXXX-XXXX-XXXX',
  passportNumber: 'BX0000000',
  passportExpiry: 'Dec 2028',
  phone: '+880 1XXXXXXXXX',
  email: 'rahul@gmail.com',
  address: 'Dhaka, Bangladesh',
};

export default function PersonalInfoCard({
  profile,
  onPersonalChange
}: {
  profile?: any;
  onPersonalChange?: (data: PersonalData) => void;
}) {
  const [data, setData] = useState<PersonalData>(() => ({
    ...INITIAL_PERSONAL_DATA,
    fullName: profile?.fullName || profile?.name || INITIAL_PERSONAL_DATA.fullName,
    email: profile?.email || INITIAL_PERSONAL_DATA.email,
    phone: profile?.phone || INITIAL_PERSONAL_DATA.phone,
    nationality: profile?.nationality || INITIAL_PERSONAL_DATA.nationality,
    passportNumber: profile?.passportNumber || INITIAL_PERSONAL_DATA.passportNumber,
  }));
  const [formData, setFormData] = useState<PersonalData>(data);
  const [isEditing, setIsEditing] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    if (profile) {
      setData((prev) => ({
        ...prev,
        fullName: profile.fullName || profile.name || prev.fullName,
        email: profile.email || prev.email,
        phone: profile.phone || prev.phone,
        nationality: profile.nationality || prev.nationality,
        passportNumber: profile.passportNumber || prev.passportNumber,
      }));
    }
  }, [profile]);

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
    if (onPersonalChange) onPersonalChange(formData);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleChange = (field: keyof PersonalData, value: string) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      if (onPersonalChange) onPersonalChange(next);
      return next;
    });
  };

  const fieldsConfig: { label: string; key: keyof PersonalData; fullWidth?: boolean; type?: string; options?: string[] }[] = [
    { label: 'Full Name', key: 'fullName' },
    { label: 'Date of Birth', key: 'dob' },
    { label: 'Gender', key: 'gender', options: ['Male', 'Female', 'Other'] },
    { label: 'Nationality', key: 'nationality' },
    { label: 'National ID', key: 'nationalId' },
    { label: 'Passport Number', key: 'passportNumber' },
    { label: 'Passport Expiry', key: 'passportExpiry' },
    { label: 'Phone/WhatsApp', key: 'phone' },
    { label: 'Email', key: 'email', type: 'email' },
    { label: 'Current Address', key: 'address', fullWidth: true },
  ];

  return (
    <div id="personal-info" className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <h2 className="text-xl font-bold text-primary">Personal Information</h2>
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
            title="Edit Personal Information"
            aria-label="Edit Personal Information"
          >
            <Pencil size={18} />
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fieldsConfig.map((field) => (
              <div key={field.key} className={field.fullWidth ? 'md:col-span-2' : ''}>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {field.label}
                </label>
                {field.options ? (
                  <select
                    value={formData[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  >
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || 'text'}
                    value={formData[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fieldsConfig.map((field) => (
            <div key={field.key} className={field.fullWidth ? 'md:col-span-2' : ''}>
              <label className="block text-xs font-semibold text-gray-500 mb-1">{field.label}</label>
              <div className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-medium">
                {data[field.key]}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
