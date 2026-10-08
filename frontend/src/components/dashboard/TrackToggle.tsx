import { CheckCircle2, Circle } from 'lucide-react';

export default function TrackToggle() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-primary mb-4">Your Current Track</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Selected Track */}
        <div className="relative bg-green-50 border-2 border-accent rounded-2xl p-6 shadow-sm transition-all">
          <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-sm">
            Current Track
          </div>
          
          <h3 className="text-lg font-bold text-primary mb-1 flex items-center gap-2">
            <span className="text-xl">🤝</span> Agency-Assisted Track
          </h3>
          <p className="text-sm text-gray-600 mb-4 font-medium">Full counselor support — end to end</p>
          
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <CheckCircle2 size={16} className="text-accent shrink-0" /> Counselor Assigned
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <CheckCircle2 size={16} className="text-accent shrink-0" /> Documents Handled
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <CheckCircle2 size={16} className="text-accent shrink-0" /> Visa Filing Included
            </li>
          </ul>
        </div>

        {/* Unselected Track */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-gray-300 transition-all flex flex-col">
          <h3 className="text-lg font-bold text-gray-700 mb-1 flex items-center gap-2">
            <span className="text-xl">🛠️</span> Self-Applicant Track (DIY Hub)
          </h3>
          <p className="text-sm text-gray-500 mb-4 font-medium">Apply independently with our tools</p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Circle size={14} className="text-gray-300 shrink-0" /> SoP Builder
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Circle size={14} className="text-gray-300 shrink-0" /> Document Checklist
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-500">
              <Circle size={14} className="text-gray-300 shrink-0" /> Application Timeline
            </li>
          </ul>

          <div className="mt-auto">
            <button className="text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
              Switch Track &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
