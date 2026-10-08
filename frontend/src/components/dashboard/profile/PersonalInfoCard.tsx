import { Pencil } from 'lucide-react';

export default function PersonalInfoCard() {
  const fields = [
    { label: 'Full Name', value: 'Rahul Ahmed' },
    { label: 'Date of Birth', value: 'January 15, 2002' },
    { label: 'Gender', value: 'Male' },
    { label: 'Nationality', value: 'Bangladeshi' },
    { label: 'National ID', value: 'XXXX-XXXX-XXXX' },
    { label: 'Passport Number', value: 'BX0000000' },
    { label: 'Passport Expiry', value: 'Dec 2028' },
    { label: 'Phone/WhatsApp', value: '+880 1XXXXXXXXX' },
    { label: 'Email', value: 'rahul@gmail.com' },
    { label: 'Current Address', value: 'Dhaka, Bangladesh', fullWidth: true },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-primary">Personal Information</h2>
        <button className="p-2 text-gray-400 hover:text-accent transition-colors rounded-full hover:bg-green-50">
          <Pencil size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((field, idx) => (
          <div key={idx} className={field.fullWidth ? "md:col-span-2" : ""}>
            <label className="block text-xs font-semibold text-gray-500 mb-1">{field.label}</label>
            <div className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-medium cursor-not-allowed">
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
