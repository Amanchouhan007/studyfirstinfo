export default function AcademicInfoCard() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-bold text-primary mb-6">Academic Background</h2>

      <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-gray-200 pl-10">
        
        <div className="relative">
          <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-sm">
            3
          </div>
          <h3 className="font-bold text-primary text-lg">Undergraduate: BSc Computer Science</h3>
          <p className="text-gray-500 font-medium text-sm">University: BUET | CGPA: <span className="font-bold text-accent">3.85/4.00</span></p>
          <p className="text-gray-400 text-xs font-semibold mt-1">Graduation: 2025</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-sm">
            2
          </div>
          <h3 className="font-bold text-primary text-lg">HSC Result: A+ (GPA 5.00)</h3>
          <p className="text-gray-500 font-medium text-sm">HSC Board: Dhaka Board</p>
          <p className="text-gray-400 text-xs font-semibold mt-1">Year: 2021</p>
        </div>

        <div className="relative">
          <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs border-4 border-white shadow-sm">
            1
          </div>
          <h3 className="font-bold text-primary text-lg">SSC Result: A+ (GPA 5.00)</h3>
          <p className="text-gray-500 font-medium text-sm">SSC Board: Dhaka Board</p>
          <p className="text-gray-400 text-xs font-semibold mt-1">Year: 2019</p>
        </div>

      </div>
    </div>
  );
}
