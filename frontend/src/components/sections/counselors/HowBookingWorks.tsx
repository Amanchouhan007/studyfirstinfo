import { Search, CalendarDays, CheckCircle } from 'lucide-react';

export default function HowBookingWorks() {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6 sm:mb-8">How to Book a Consultation</h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-green-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-light-mint rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
                <Search className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Step 1: Browse Counselors</h4>
              <p className="text-gray-600 text-sm">Filter by country and specialty to find your ideal match.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-light-mint rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
                <CalendarDays className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Step 2: Pick a Time Slot</h4>
              <p className="text-gray-600 text-sm">Choose a convenient date & time directly on their calendar.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-light-mint rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">Step 3: Get Confirmation</h4>
              <p className="text-gray-600 text-sm">Receive instant SMS and email with meeting details.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
