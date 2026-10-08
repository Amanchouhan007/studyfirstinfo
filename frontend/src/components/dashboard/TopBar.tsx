import { Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
      <div>
        <h1 className="text-2xl font-bold text-primary">Welcome back, Rahul! 👋</h1>
        <p className="text-sm text-gray-500 font-medium mt-1">Thursday, September 10, 2026</p>
      </div>
      
      <div className="flex items-center gap-4 self-end sm:self-auto">
        <button className="relative p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100">
          <Bell size={24} />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold border-2 border-green-100 cursor-pointer shadow-sm">
          RA
        </div>
      </div>
    </div>
  );
}
