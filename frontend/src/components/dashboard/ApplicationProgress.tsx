import { Check, Loader2 } from 'lucide-react';

export default function ApplicationProgress() {
  const steps = [
    { num: 1, title: 'Profile Complete', status: 'completed' },
    { num: 2, title: 'Documents Uploaded', status: 'completed' },
    { num: 3, title: 'Counselor Review', status: 'current' },
    { num: 4, title: 'University Application', status: 'pending' },
    { num: 5, title: 'Visa Filing', status: 'pending' },
    { num: 6, title: 'Admission Confirmed', status: 'pending' },
  ];

  return (
    <section className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm mb-8">
      <h2 className="text-xl font-bold text-primary mb-8">Your Application Journey</h2>

      {/* Progress Stepper */}
      <div className="relative mb-12">
        {/* Background Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-100 rounded-full"></div>
        {/* Fill Line (40%) */}
        <div className="absolute top-5 left-0 w-[40%] h-1 bg-accent rounded-full transition-all duration-1000"></div>

        <div className="flex justify-between relative z-10">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center w-24">
              {/* Icon Container */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white border-2 transition-colors mb-3 ${
                step.status === 'completed' ? 'border-accent bg-accent text-white shadow-sm' :
                step.status === 'current' ? 'border-accent text-accent shadow-[0_0_0_4px_rgba(22,163,74,0.1)]' :
                'border-gray-200 text-gray-400'
              }`}>
                {step.status === 'completed' && <Check size={18} strokeWidth={3} />}
                {step.status === 'current' && <Loader2 size={18} className="animate-spin" strokeWidth={3} />}
                {step.status === 'pending' && <span className="text-sm font-bold">{step.num}</span>}
              </div>
              
              {/* Label */}
              <div className={`text-center text-xs font-semibold leading-tight ${
                step.status === 'current' ? 'text-primary' :
                step.status === 'completed' ? 'text-gray-800' :
                'text-gray-400'
              }`}>
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Alert box */}
      <div className="bg-[#F0FDF4] border border-green-200 rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-bold text-primary">Current Step:</span>{' '}
          <span className="text-gray-700">Your counselor is reviewing your profile. Expected response: 24-48 hours.</span>
        </div>
        
        {/* Small progress text indicator */}
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <div className="w-full md:w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[40%] h-full bg-accent rounded-full"></div>
          </div>
          <span className="text-sm font-bold text-accent">40%</span>
        </div>
      </div>
    </section>
  );
}
